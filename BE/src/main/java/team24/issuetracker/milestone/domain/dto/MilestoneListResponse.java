package team24.issuetracker.milestone.domain.dto;

import java.time.LocalDate;
import lombok.Getter;
import team24.issuetracker.milestone.domain.Milestone;

@Getter
public class MilestoneListResponse {

	private final Long id;
	private final String title;
	private final String description;
	private final LocalDate dueDate;
	private final double progress;
	private final Long openedIssue;
	private final Long closedIssue;

	public MilestoneListResponse(Milestone milestone, long total, long openedIssue) {
		this.id = milestone.getId();
		this.title = milestone.getTitle();
		this.description = milestone.getDescription();
		this.dueDate = milestone.getDueDate();
		this.openedIssue = openedIssue;
		this.closedIssue = calculateClosedIssue(total, openedIssue);
		this.progress = calculateProgress(total, openedIssue);
	}

	private double calculateProgress(long total, long openedIssue) {
		return (double)openedIssue / total;
	}

	private long calculateClosedIssue(long total, long openedIssue) {
		return total - openedIssue;
	}
}
