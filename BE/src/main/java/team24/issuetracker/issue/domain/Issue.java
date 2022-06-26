package team24.issuetracker.issue.domain;

import java.time.LocalDateTime;
import java.util.List;

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
import team24.issuetracker.issue.domain.reference.IssueLabel;
import team24.issuetracker.issue.domain.reference.IssueMember;
import team24.issuetracker.member.domain.Member;
import team24.issuetracker.milestone.domain.Milestone;

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

    @OneToMany(mappedBy = "issue")
    private List<IssueMember> assignees;

    @OneToMany(mappedBy = "issue")
    private List<IssueLabel> issueLabels;

    @ManyToOne(fetch = FetchType.LAZY)
    private Milestone milestone;
    private boolean isClosed;

    @OneToMany(mappedBy = "issue")
    private List<Image> images;
    private LocalDateTime writtenTime;

    @OneToMany(mappedBy = "issue")
    private List<Comment> comments;

    private boolean isDeleted;
}
