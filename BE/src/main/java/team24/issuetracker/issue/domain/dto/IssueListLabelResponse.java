package team24.issuetracker.issue.domain.dto;

import lombok.Getter;
import team24.issuetracker.label.domain.Label;

@Getter
public class IssueListLabelResponse {

	private final Long id;
	private final String title;

	public IssueListLabelResponse(Label label) {
		this.id = label.getId();
		this.title = label.getTitle();
	}
}
