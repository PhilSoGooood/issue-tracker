package team24.issuetracker.issue.domain.dto;

import java.util.List;

import lombok.Getter;

@Getter
public class IssueEditRequest extends IssueRequest {

	public IssueEditRequest(String title, String content, List<Long> assignees, List<Long> labels, Long milestone) {
		super(title, content, assignees, labels, milestone);
	}
}
