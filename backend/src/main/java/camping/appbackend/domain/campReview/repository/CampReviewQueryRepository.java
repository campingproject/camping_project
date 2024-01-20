package camping.appbackend.domain.campReview.repository;

import static camping.appbackend.domain.campReview.entity.QCampReview.campReview;
import static camping.appbackend.domain.free.entity.QFreeBoard.freeBoard;

import camping.appbackend.domain.campReview.dto.CampReviewDTO;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class CampReviewQueryRepository {

    private final JPAQueryFactory queryFactory;

    public Page<CampReviewDTO.Response> findByPage(Pageable pageable) {
        List<CampReviewDTO.Response> result = queryFactory.
                select(Projections.fields(CampReviewDTO.Response.class,
                        campReview.id, campReview.message,
                        campReview.imageUrl, campReview.writer,
                        campReview.campSiteName))
                .from(campReview)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        Long count = queryFactory
                .select(freeBoard.count())
                .from(freeBoard)
                .fetchOne();

        long totalCount = (count != null) ? count : 0;

        return new PageImpl<>(result, pageable, totalCount);

    }
}