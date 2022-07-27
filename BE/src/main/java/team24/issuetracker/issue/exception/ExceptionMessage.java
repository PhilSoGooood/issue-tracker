package team24.issuetracker.issue.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ExceptionMessage {
	MEMBER_NOT_FOUND_MESSAGE("해당하는 ID의 멤버가 존재하지 않습니다."),
	MILESTONE_NOT_FOUND_MESSAGE("해당하는 ID의 마일스톤이 존재하지 않습니다."),
	LABEL_NOT_FOUND_MESSAGE("해당하는 ID의 라벨이 존재하지 않습니다."),
	ISSUE_NOT_FOUND_MESSAGE("해당하는 ID의 이슈가 존재하지 않습니다."),
	DIFFERENT_WRITER_MESSAGE("작성자만 해당 이슈를 수정할 수 있습니다.");

	private final String message;
}
