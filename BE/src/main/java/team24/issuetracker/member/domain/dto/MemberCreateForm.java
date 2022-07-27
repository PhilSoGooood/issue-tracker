package team24.issuetracker.member.domain.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class MemberCreateForm {

	@NotEmpty(message = "사용자 ID는 필수항목입니다")
	private final String name;

	@NotEmpty(message = "비밀번호는 필수항목입니다")
	private final String password;

	@NotEmpty(message = "이메일은 필수항목입니다")
	@Email
	private final String email;

	private final String profileImage;
}
