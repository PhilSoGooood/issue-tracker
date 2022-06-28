package team24.issuetracker.milestone.application;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import team24.issuetracker.issue.domain.Issue;
import team24.issuetracker.milestone.domain.Milestone;
import team24.issuetracker.milestone.domain.dto.MilestoneListResponse;
import team24.issuetracker.milestone.repository.MilestoneRepository;

@Service
@RequiredArgsConstructor
public class MilestoneService {

	private final MilestoneRepository milestoneRepository;

	public List<MilestoneListResponse> findLabels() {
		List<Milestone> milestoneList = milestoneRepository.findAll();
		List<MilestoneListResponse> milestoneListResponses = new ArrayList<>();
		for (Milestone milestone : milestoneList) {
			long totalIssueCount = milestone.getIssues().size();
			long openedIssueCount = countOpenedIssue(milestone);
			milestoneListResponses.add(new MilestoneListResponse(milestone, totalIssueCount, openedIssueCount));
		}
		return milestoneListResponses;
	}

	private Long countOpenedIssue(Milestone milestone) {
		return milestone.getIssues().stream()
			.filter(Predicate.not(Issue::isClosed))
			.count();
	}
}
