package team24.issuetracker.issue.domain.dto;

import java.util.List;

import lombok.Getter;

@Getter
public class IssueEditRequest extends IssueRequest {

	public IssueEditRequest(Long writerId, String title, String content, List<Long> assignees, List<Long> labels,
		Long milestone) {
		super(writerId, title, content, assignees, labels, milestone);
	}
}
