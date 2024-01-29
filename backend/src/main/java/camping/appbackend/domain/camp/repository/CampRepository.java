package camping.appbackend.domain.camp.repository;

import camping.appbackend.domain.camp.entity.Camp;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampRepository extends JpaRepository<Camp, Long> {

    Optional<Camp> findByContentId(Long contentId);

    void deleteByContentId(Long contentId);

}