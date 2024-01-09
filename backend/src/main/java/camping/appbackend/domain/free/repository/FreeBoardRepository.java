package camping.appbackend.domain.free.repository;

import camping.appbackend.domain.free.entity.FreeBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FreeBoardRepository extends JpaRepository<FreeBoard, Long> {

}