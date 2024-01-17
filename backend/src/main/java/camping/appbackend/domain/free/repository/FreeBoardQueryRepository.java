package camping.appbackend.domain.free.repository;

import static camping.appbackend.domain.free.entity.QFreeBoard.freeBoard;

import camping.appbackend.domain.free.dto.FreeBoardDTO;
import camping.appbackend.domain.free.dto.FreeBoardDTO.Response;
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
public class FreeBoardQueryRepository {

    private final JPAQueryFactory queryFactory;

    public Page<FreeBoardDTO.Response> findByPage(Pageable pageable) {
        List<Response> result = queryFactory.
                select(Projections.fields(FreeBoardDTO.Response.class,
                        freeBoard.id, freeBoard.title,
                        freeBoard.content, freeBoard.writer))
                .from(freeBoard)
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