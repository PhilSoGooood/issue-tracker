package team24.issuetracker.issue.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import team24.issuetracker.issue.domain.dto.IssueListResponse;
import team24.issuetracker.issue.application.IssueService;

@RestController
@RequestMapping("/issues")
@RequiredArgsConstructor
public class IssueController {

	private final IssueService issueService;

	@GetMapping("created-by/{id}")
	public List<IssueListResponse> getByWriter(@PathVariable("id") Long id) {
		return issueService.findByWriter(id);
	}

	@GetMapping("assigned-to/{id}")
	public List<IssueListResponse> getByAssignee(@PathVariable("id") Long id) {
		return issueService.findByAssignee(id);
	}

	@GetMapping("commented-by/{id}")
	public List<IssueListResponse> getByComment(@PathVariable("id") Long id) {
		return issueService.findByCommenter(id);
	}

	@GetMapping
	public List<IssueListResponse> getByState(@RequestParam("closed") Boolean isClosed) {
		return issueService.findByState(isClosed);
	}
}
