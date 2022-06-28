package team24.issuetracker.issue.application;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.RequiredArgsConstructor;
import team24.issuetracker.issue.domain.dto.IssueListResponse;
import team24.issuetracker.issue.repository.IssueRepository;

@Service
@RequiredArgsConstructor
public class IssueService {

	private final IssueRepository issueRepository;

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
}
