package team24.issuetracker.issue.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team24.issuetracker.issue.application.IssueService;
import team24.issuetracker.issue.domain.dto.IssueEditRequest;
import team24.issuetracker.issue.domain.dto.IssueListResponse;
import team24.issuetracker.issue.domain.dto.IssueAddRequest;

@RestController
@RequiredArgsConstructor
public class IssueController {

	private final IssueService issueService;

	@PostMapping("issue/new")
	public void writeIssue(@RequestBody IssueAddRequest issueAddRequest) {
		issueService.add(issueAddRequest);
	}

	@GetMapping("issues/created-by/{userId}")
	public List<IssueListResponse> getByWriter(@PathVariable("userId") Long id) {
		return issueService.findByWriter(id);
	}

	@GetMapping("issues/assigned-to/{userId}")
	public List<IssueListResponse> getByAssignee(@PathVariable("userId") Long id) {
		return issueService.findByAssignee(id);
	}

	@GetMapping("issues/commented-by/{userId}")
	public List<IssueListResponse> getByComment(@PathVariable("userId") Long id) {
		return issueService.findByCommenter(id);
	}

	@GetMapping("issues")
	public List<IssueListResponse> getByState(@RequestParam("closed") Boolean isClosed) {
		return issueService.findByState(isClosed);
	}

	@PutMapping("issues/{id}/change-state")
	public void changeState(@PathVariable("id") Long id) {
		issueService.updateState(id);
	}

	@PutMapping("issues/{id}/remove")
	public void removeIssue(@PathVariable("id") Long id) {
		issueService.delete(id);
	}

	@PutMapping("issues/{id}/edit")
	public void editIssue(@PathVariable("id") Long id, @RequestBody IssueEditRequest issueEditRequest) {
		issueService.edit(id, issueEditRequest);
	}
}
