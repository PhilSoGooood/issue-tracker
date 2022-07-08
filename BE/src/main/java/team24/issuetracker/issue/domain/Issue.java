package team24.issuetracker.issue.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team24.issuetracker.issue.domain.dto.IssueEditRequest;
import team24.issuetracker.issue.domain.reference.IssueLabel;
import team24.issuetracker.issue.domain.reference.IssueMember;
import team24.issuetracker.member.domain.Member;
import team24.issuetracker.milestone.domain.Milestone;
import team24.issuetracker.uploadedfile.domain.UploadedFile;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Issue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;
	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	private Member writer;

	@OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<IssueMember> assignees = new ArrayList<>();

	@OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<IssueLabel> issueLabels = new ArrayList<>();

	@ManyToOne(fetch = FetchType.LAZY)
	private Milestone milestone;
	private boolean closed;

	@OneToMany(mappedBy = "issue")
	private List<UploadedFile> uploadedFiles = new ArrayList<>();
	private LocalDateTime writtenTime;

	@OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Comment> comments = new ArrayList<>();

	private boolean deleted;

	public void mappingFields(List<IssueMember> assignees, List<IssueLabel> issueLabels) {
		this.assignees = assignees;
		this.issueLabels = issueLabels;
	}

	public void reverseState() {
        this.closed = !this.closed;
	}

	public void delete(){
		this.deleted = !this.deleted;
	}

	public void update(IssueEditRequest request, List<IssueMember> assignees, List<IssueLabel> issueLabels, Milestone milestone) {
		this.title = request.getTitle();
		this.content = request.getContent();
		this.milestone = milestone;
		updateReference(assignees, issueLabels);
	}

	private void updateReference(List<IssueMember> assignees, List<IssueLabel> issueLabels) {
		this.getAssignees().clear();
		this.getAssignees().addAll(assignees);
		this.getIssueLabels().clear();
		this.getIssueLabels().addAll(issueLabels);
	}
}
