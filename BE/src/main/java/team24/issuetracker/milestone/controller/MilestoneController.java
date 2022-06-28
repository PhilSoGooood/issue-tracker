package team24.issuetracker.milestone.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import team24.issuetracker.milestone.domain.dto.MilestoneListResponse;
import team24.issuetracker.milestone.application.MilestoneService;

@RestController
@RequestMapping("/milestones")
@RequiredArgsConstructor
public class MilestoneController {

	private final MilestoneService milestoneService;

	@GetMapping
	public List<MilestoneListResponse> getMilestones() {
		return milestoneService.findLabels();
	}
}
