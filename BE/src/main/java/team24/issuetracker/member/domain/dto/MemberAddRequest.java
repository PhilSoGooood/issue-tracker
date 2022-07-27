package team24.issuetracker.member.domain.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class MemberAddRequest {

	private final String name;
	private final String email;
	private final String profileImage;
}
