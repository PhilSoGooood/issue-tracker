package team24.issuetracker.label.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import team24.issuetracker.label.domain.Label;

@Repository
public interface LabelRepository extends JpaRepository<Label, Long> {

	@Query("select l "
		+ "from Label l "
		+ "where l.isDeleted = false")
	List<Label> findAll();
}
