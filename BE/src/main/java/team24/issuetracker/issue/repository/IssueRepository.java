package team24.issuetracker.issue.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import team24.issuetracker.issue.domain.Issue;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {

	@Query("select i "
		+ "from Issue i "
		+ "where  i.writer.id = :id "
		+ "and i.isDeleted = false")
	List<Issue> findByWriter(@Param("id") Long id);

	@Query("select i "
		+ "from Issue i "
		+ "join fetch i.assignees as a "
		+ "where a.user.id = :id "
		+ "and i.isDeleted = false")
	List<Issue> findByAssignee(@Param("id") Long id);

	@Query("select i "
		+ "from Issue i "
		+ "join fetch i.comments as c "
		+ "where c.writer.id = :id "
		+ "and i.isDeleted = false")
	List<Issue> findByCommenter(@Param("id") Long id);

	@Query("select i "
		+ "from Issue i "
		+ "where i.isClosed = :isClosed "
		+ "and i.isDeleted = false")
	List<Issue> findByState(@Param("isClosed") Boolean isClosed);
}
