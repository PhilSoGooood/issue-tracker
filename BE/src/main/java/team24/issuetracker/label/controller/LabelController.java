package team24.issuetracker.label.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team24.issuetracker.label.domain.dto.LabelListResponse;
import team24.issuetracker.label.application.LabelService;

@RestController
@RequestMapping("/labels")
@RequiredArgsConstructor
public class LabelController {

	private final LabelService labelService;

	@GetMapping
	public List<LabelListResponse> getLabels(){
		return labelService.findLabels();
	}
}
