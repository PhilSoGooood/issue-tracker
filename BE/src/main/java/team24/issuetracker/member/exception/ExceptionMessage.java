package team24.issuetracker.member.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ExceptionMessage {
	NAME_NOT_FOUND_MESSAGE("해당하는 이름의 멤버를 찾을 수 없습니다.");

	private final String message;
}
