package team24.issuetracker.issue.domain.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import lombok.Getter;
import team24.issuetracker.issue.domain.Issue;
import team24.issuetracker.issue.domain.reference.IssueLabel;
import team24.issuetracker.issue.domain.reference.IssueUser;

@Getter
public class IssueListResponse {

	private final Long id;
	private final String title;
	private final IssueListUserResponse writer;
	private final LocalDateTime writtenTime;
	private final IssueListMilestoneResponse milestone;
	private final List<IssueListLabelResponse> labels;
	private final boolean isClosed;
	private final List<IssueListUserResponse> assignees;

	public IssueListResponse(Issue issue) {
		this.id = issue.getId();
		this.title = issue.getTitle();
		this.writer = new IssueListUserResponse(issue.getWriter());
		this.writtenTime = issue.getWrittenTime();
		this.milestone = new IssueListMilestoneResponse(issue.getMilestone());
		this.labels = issue.getIssueLabels()
			.stream()
			.map(IssueLabel::getLabel)
			.map(IssueListLabelResponse::new)
			.collect(Collectors.toList());
		this.isClosed = issue.isClosed();
		this.assignees = issue.getAssignees()
			.stream()
			.map(IssueUser::getUser)
			.map(IssueListUserResponse::new)
			.collect(Collectors.toList());
	}
}
