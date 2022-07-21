package team24.issuetracker.member.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team24.issuetracker.oauth.dto.GitHubUser;

@Builder
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String email;
	private String profileImage;
	private String accessToken;
	private String refreshToken;

	public Member(GitHubUser gitHubUser) {
		this.name = gitHubUser.getName();
		this.email = gitHubUser.getEmail();
		this.profileImage = gitHubUser.getProfileImage();
	}

	public void updateAccessToken(String newAccessToken) {
		this.accessToken = newAccessToken;
	}

	public void updateRefreshToken(String newRefreshToken) {
		this.refreshToken = newRefreshToken;
	}
}
