package team24.issuetracker.issue.application;

import static team24.issuetracker.issue.exception.ExceptionMessage.*;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.RequiredArgsConstructor;
import team24.issuetracker.issue.domain.Issue;
import team24.issuetracker.issue.domain.dto.IssueAddRequest;
import team24.issuetracker.issue.domain.dto.IssueEditRequest;
import team24.issuetracker.issue.domain.dto.IssueListResponse;
import team24.issuetracker.issue.domain.dto.IssueRequest;
import team24.issuetracker.issue.domain.reference.IssueLabel;
import team24.issuetracker.issue.domain.reference.IssueMember;
import team24.issuetracker.issue.exception.DifferentWriterException;
import team24.issuetracker.issue.exception.IssueNotFoundException;
import team24.issuetracker.issue.repository.IssueRepository;
import team24.issuetracker.label.exception.LabelNotFoundException;
import team24.issuetracker.label.repository.LabelRepository;
import team24.issuetracker.member.domain.Member;
import team24.issuetracker.member.exception.MemberNotFoundException;
import team24.issuetracker.member.repository.MemberRepository;
import team24.issuetracker.milestone.domain.Milestone;
import team24.issuetracker.milestone.exception.MilestoneNotFoundException;
import team24.issuetracker.milestone.repository.MilestoneRepository;
import team24.issuetracker.uploadedfile.repository.UploadRepository;

@Service
@RequiredArgsConstructor
public class IssueService {

	private final IssueRepository issueRepository;
	private final LabelRepository labelRepository;
	private final MemberRepository memberRepository;
	private final MilestoneRepository milestoneRepository;
	private final UploadRepository uploadRepository;

	public List<IssueListResponse> findByWriter(@PathVariable Long id) {
		return issueRepository.findByWriter(id).stream()
			.map(IssueListResponse::new)
			.collect(Collectors.toList());
	}

	public List<IssueListResponse> findByAssignee(@PathVariable Long id) {
		return issueRepository.findByAssignee(id).stream()
			.map(IssueListResponse::new)
			.collect(Collectors.toList());
	}

	public List<IssueListResponse> findByCommenter(@PathVariable Long id) {
		return issueRepository.findByCommenter(id).stream()
			.map(IssueListResponse::new)
			.collect(Collectors.toList());
	}

	public List<IssueListResponse> findByState(Boolean isClosed) {
		return issueRepository.findByState(isClosed).stream()
			.map(IssueListResponse::new)
			.collect(Collectors.toList());
	}

	public void add(IssueAddRequest issueAddRequest) {
		Issue issue = create(issueAddRequest);
		List<IssueMember> assignees = getIssueMembers(issueAddRequest, issue);
		List<IssueLabel> labels = getIssueLabels(issueAddRequest, issue);
		issue.mappingFields(assignees, labels);
		issueRepository.save(issue);
	}

	public void edit(Long id, IssueEditRequest issueEditRequest) {
		Issue issue = issueRepository.findById(id)
			.orElseThrow(() -> new IssueNotFoundException(ISSUE_NOT_FOUND_MESSAGE.getMessage()));
		isSameWriter(issue, issueEditRequest.getWriterId());
		List<IssueMember> issueMembers = getIssueMembers(issueEditRequest, issue);
		List<IssueLabel> issueLabels = getIssueLabels(issueEditRequest, issue);
		Milestone milestone = null;
		if (issueEditRequest.getMilestone() != null) {
			milestone = milestoneRepository.findById(issueEditRequest.getMilestone())
				.orElseThrow(() -> new MilestoneNotFoundException(MILESTONE_NOT_FOUND_MESSAGE.getMessage()));
		}
		issue.update(issueEditRequest, issueMembers, issueLabels, milestone);
		issueRepository.save(issue);
	}

	public void updateState(Long id) {
		Issue issue = issueRepository.findById(id)
			.orElseThrow(() -> new IssueNotFoundException(ISSUE_NOT_FOUND_MESSAGE.getMessage()));
		issue.reverseState();
		issueRepository.save(issue);
	}

	public void delete(Long id) {
		Issue issue = issueRepository.findById(id)
			.orElseThrow(() -> new IssueNotFoundException(ISSUE_NOT_FOUND_MESSAGE.getMessage()));
		issue.delete();
		issueRepository.save(issue);
	}

	private Issue create(IssueAddRequest issueAddRequest) {
		Member writer = memberRepository.findById(issueAddRequest.getWriterId())
			.orElseThrow(() -> new MemberNotFoundException(MEMBER_NOT_FOUND_MESSAGE.getMessage()));
		if (issueAddRequest.getMilestone() == null) {
			Issue issue = issueAddRequest.toEntity(issueAddRequest, writer);
			issueRepository.save(issue);
			return issue;
		}
		Milestone milestone = milestoneRepository.findById(issueAddRequest.getMilestone())
			.orElseThrow(() -> new MilestoneNotFoundException(MILESTONE_NOT_FOUND_MESSAGE.getMessage()));
		Issue issue = issueAddRequest.toEntity(issueAddRequest, writer, milestone);
		issueRepository.save(issue);
		return issue;
	}

	private List<IssueMember> getIssueMembers(IssueRequest issueRequest, Issue issue) {
		return issueRequest.getAssignees().stream()
			.map(memberId -> memberRepository.findById(memberId)
				.orElseThrow(() -> new MemberNotFoundException(MEMBER_NOT_FOUND_MESSAGE.getMessage())))
			.map(member -> IssueMember.builder().issue(issue).member(member).build())
			.collect(Collectors.toList());
	}

	private List<IssueLabel> getIssueLabels(IssueRequest issueRequest, Issue issue) {
		return issueRequest.getLabels().stream()
			.map(labelId -> labelRepository.findById(labelId)
				.orElseThrow(() -> new LabelNotFoundException(LABEL_NOT_FOUND_MESSAGE.getMessage())))
			.map(label -> IssueLabel.builder().issue(issue).label(label).build())
			.collect(Collectors.toList());
	}

	private void isSameWriter(Issue issue, Long writerId) {
		if (issue.getWriter().getId() != writerId) {
			throw new DifferentWriterException(DIFFERENT_WRITER_MESSAGE.getMessage());
		}
	}
}
