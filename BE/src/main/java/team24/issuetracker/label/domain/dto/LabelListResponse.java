package team24.issuetracker.label.domain.dto;

import lombok.Getter;
import team24.issuetracker.label.domain.Label;

@Getter
public class LabelListResponse {

	private final Long id;
	private final String title;
	private final String description;

	public LabelListResponse(Label label) {
		this.id = label.getId();
		this.title = label.getTitle();
		this.description = label.getDescription();
	}
}
