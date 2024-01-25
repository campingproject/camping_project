package camping.appbackend.domain.campReview.repository;

import camping.appbackend.domain.campReview.entity.CampReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampReviewRepository extends JpaRepository<CampReview, Long> {

}