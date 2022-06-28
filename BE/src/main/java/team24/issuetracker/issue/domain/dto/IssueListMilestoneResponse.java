package team24.issuetracker.issue.domain.dto;

import lombok.Getter;
import team24.issuetracker.milestone.domain.Milestone;

@Getter
public class IssueListMilestoneResponse {

	private final Long id;
	private final String title;

	public IssueListMilestoneResponse(Milestone milestone) {
		this.id = milestone.getId();
		this.title = milestone.getTitle();
	}
}
