package team24.issuetracker.oauth.controller;

import java.net.URI;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.exceptions.TokenExpiredException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import team24.issuetracker.member.domain.Member;
import team24.issuetracker.member.application.MemberService;
import team24.issuetracker.oauth.dto.GitHubAccessToken;
import team24.issuetracker.oauth.dto.GitHubUser;
import team24.issuetracker.oauth.dto.LoginMemberResponse;
import team24.issuetracker.oauth.properties.OAuthProperties;
import team24.issuetracker.oauth.provider.JwtProvider;
import team24.issuetracker.oauth.service.OAuthService;

@RestController
@Slf4j
@RequiredArgsConstructor
public class OAuthController {

	private final MemberService memberService;
	private final OAuthService oAuthService;
	private final OAuthProperties oAuthProperties;
	private final JwtProvider jwtProvider;

	@GetMapping("/login")
	public ResponseEntity loginForm() {
		return ResponseEntity.status(HttpStatus.SEE_OTHER)
			.location(URI.create(oAuthProperties.getCodeRequestUri()))
			.build();
	}

	@GetMapping("/login/callback")
	public ResponseEntity<LoginMemberResponse> login(String code, HttpServletResponse response) {

		GitHubAccessToken gitHubAccessToken = oAuthService.getAccessToken(code);
		GitHubUser gitHubUser = oAuthService.getUserInfo(gitHubAccessToken);
		Member member = memberService.oauthLogin(gitHubUser);
		log.info("member = {}", member);

		String jwtAccessToken = jwtProvider.createAccessToken(member.getId());
		String jwtRefreshToken = jwtProvider.createRefreshToken(member.getId());

		memberService.updateAccessToken(jwtAccessToken, member.getId());
		memberService.updateRefreshToken(jwtRefreshToken, member.getId());

		return ResponseEntity.ok()
			.body(LoginMemberResponse.of(member));
	}

	@GetMapping("/reissue/access-token")
	public void reissueAccessToken(HttpServletRequest request, HttpServletResponse response) {
		String accessToken = request.getHeader("Access-Token");
		String refreshToken = request.getHeader("Refresh-Token");

		try {
			jwtProvider.verifyAccessToken(accessToken);
			response.setStatus(HttpStatus.FORBIDDEN.value());
		} catch (TokenExpiredException e) {
			jwtProvider.verifyAccessToken(refreshToken);

			Long accessTokenMemberId = jwtProvider.decodeMemberId(accessToken);
			Long refreshTokenMemberId = jwtProvider.decodeMemberId(refreshToken);

			if (accessTokenMemberId != refreshTokenMemberId) {
				response.setStatus(HttpStatus.UNAUTHORIZED.value());
				return;
			}
			String findRefreshToken = memberService.findRefreshTokenById(refreshTokenMemberId);
			if (!findRefreshToken.equals(refreshToken)) {
				response.setStatus(HttpStatus.UNAUTHORIZED.value());
				return;
			}

			String reissuedAccessToken = jwtProvider.createAccessToken(refreshTokenMemberId);
			memberService.updateAccessToken(reissuedAccessToken, refreshTokenMemberId);
			response.setHeader("Access-Token", reissuedAccessToken);
		}
	}
}
