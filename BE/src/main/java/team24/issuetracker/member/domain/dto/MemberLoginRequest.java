package team24.issuetracker.member.domain.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class MemberLoginRequest {

	private final String loginId;
	private final String password;
}
