package team24.issuetracker.label.application;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team24.issuetracker.label.domain.dto.LabelListResponse;
import team24.issuetracker.label.repository.LabelRepository;

@Service
@RequiredArgsConstructor
public class LabelService {

	private final LabelRepository labelRepository;

	public List<LabelListResponse> findLabels() {
		return labelRepository.findAll().stream().map(LabelListResponse::new).collect(
			Collectors.toList());
	}
}
