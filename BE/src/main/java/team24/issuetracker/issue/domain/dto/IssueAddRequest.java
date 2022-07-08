package team24.issuetracker.issue.domain.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Getter;
import team24.issuetracker.issue.domain.Issue;
import team24.issuetracker.member.domain.Member;
import team24.issuetracker.milestone.domain.Milestone;

@Getter
public class IssueAddRequest extends IssueRequest {

	private final Long writerId;

	public IssueAddRequest(String title, String content, List<Long> assignees, List<Long> labels, Long milestone, Long writerId) {
		super(title, content, assignees, labels, milestone);
		this.writerId = writerId;
	}

	public Issue toEntity(IssueAddRequest issueAddRequest, Member writer) {
		return Issue.builder()
			.title(issueAddRequest.getTitle())
			.content(issueAddRequest.getContent())
			.writtenTime(LocalDateTime.now())
			.writer(writer)
			.build();
	}

	public Issue toEntity(IssueAddRequest issueAddRequest, Member writer, Milestone milestone) {
		return Issue.builder()
			.title(issueAddRequest.getTitle())
			.content(issueAddRequest.getContent())
			.writtenTime(LocalDateTime.now())
			.writer(writer)
			.milestone(milestone)
			.build();
	}
}
