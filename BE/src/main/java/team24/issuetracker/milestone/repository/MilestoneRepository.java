package team24.issuetracker.milestone.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import team24.issuetracker.milestone.domain.Milestone;

@Repository
public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

	@Query("select distinct m "
		+ "from Milestone m "
		+ "join fetch m.issues i "
		+ "where m.isDeleted = false "
		+ "and i.isDeleted = false")
	List<Milestone> findAll();
}
