package team24.issuetracker.issue.domain.dto;

import java.util.List;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class IssueRequest {

	private final Long writerId;
	private final String title;
	private final String content;
	private final List<Long> assignees;
	private final List<Long> labels;
	private final Long milestone;
}
