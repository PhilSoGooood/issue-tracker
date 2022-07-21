package team24.issuetracker.member.application;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import team24.issuetracker.member.domain.Member;
import team24.issuetracker.member.domain.dto.MemberAddRequest;
import team24.issuetracker.member.exception.MemberNotFoundException;
import team24.issuetracker.member.repository.MemberRepository;
import team24.issuetracker.member.domain.dto.MemberResponse;
import team24.issuetracker.oauth.dto.GitHubUser;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberService {

	private static final String MEMBER_NOT_FOUND_MESSAGE = "해당 ID를 가진 회원이 존재하지 않습니다.";
	private final MemberRepository memberRepository;

	@Transactional
	public Long add(MemberAddRequest request) {
		Member newMember = Member.builder()
			.name(request.getName())
			.email(request.getEmail())
			.profileImage(request.getProfileImage())
			.build();
		memberRepository.save(newMember);
		return newMember.getId();
	}

	@Transactional
	public Member oauthLogin(GitHubUser gitHubUser) {
		Member member = memberRepository.findByName(gitHubUser.getName()).orElse(null);
		log.info("member = {}", member);

		if (member == null) {
			member = new Member(gitHubUser);
			memberRepository.save(member);
		}
		return member;
	}

	public String findRefreshTokenById(Long id) {
		return findByIdOrThrow(id).getRefreshToken();
	}

	@Transactional
	public void updateAccessToken(String newAccessToken, Long id) {
		Member member = findByIdOrThrow(id);
		member.updateAccessToken(newAccessToken);
	}

	@Transactional
	public void updateRefreshToken(String newRefreshToken, Long id) {
		Member member = findByIdOrThrow(id);
		member.updateRefreshToken(newRefreshToken);
	}

	public Member findByIdOrThrow(Long id) {
		return memberRepository.findById(id)
			.orElseThrow(() -> new MemberNotFoundException(MEMBER_NOT_FOUND_MESSAGE));
	}

	public List<MemberResponse> findMemberResponse() {
		return memberRepository.findAll()
			.stream()
			.map(member -> new MemberResponse(member.getId(), member.getName(), member.getProfileImage()))
			.collect(Collectors.toList());
	}
}
