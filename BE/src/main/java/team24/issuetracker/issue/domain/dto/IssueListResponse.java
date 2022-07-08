package team24.issuetracker.issue.domain.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import lombok.Getter;
import team24.issuetracker.issue.domain.Issue;
import team24.issuetracker.issue.domain.reference.IssueLabel;
import team24.issuetracker.issue.domain.reference.IssueMember;

@Getter
public class IssueListResponse {

	private final Long id;
	private final String title;
	private final IssueListMemberResponse writer;
	private final LocalDateTime writtenTime;
	private final IssueListMilestoneResponse milestone;
	private final List<IssueListLabelResponse> labels;
	private final boolean closed;
	private final List<IssueListMemberResponse> assignees;

	public IssueListResponse(Issue issue) {
		this.id = issue.getId();
		this.title = issue.getTitle();
		this.writer = new IssueListMemberResponse(issue.getWriter());
		this.writtenTime = issue.getWrittenTime();
		this.milestone = getMilestoneResponse(issue);
		this.labels = issue.getIssueLabels()
			.stream()
			.map(IssueLabel::getLabel)
			.map(IssueListLabelResponse::new)
			.collect(Collectors.toList());
		this.closed = issue.isClosed();
		this.assignees = issue.getAssignees()
			.stream()
			.map(IssueMember::getMember)
			.map(IssueListMemberResponse::new)
			.collect(Collectors.toList());
	}

	private IssueListMilestoneResponse getMilestoneResponse(Issue issue) {
		if (issue.getMilestone() == null) {
			return null;
		}
		return new IssueListMilestoneResponse(issue.getMilestone());
	}
}
