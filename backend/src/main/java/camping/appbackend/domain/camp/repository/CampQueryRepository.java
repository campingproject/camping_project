package camping.appbackend.domain.camp.repository;


import static camping.appbackend.domain.camp.entity.QCamp.camp;

import camping.appbackend.common.util.TimeUtils;
import camping.appbackend.domain.camp.dto.CampDTO;
import camping.appbackend.domain.camp.dto.CampDTO.Response;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class CampQueryRepository {

    private final JPAQueryFactory queryFactory;

    public Page<Response> findByPage(Pageable pageable, CampDTO.Search search) {
        List<Response> result = queryFactory.
                select(Projections.fields(Response.class,
                        camp.id,
                        camp.firstImageUrl,
                        camp.facltNm))
                .from(camp)
                .where(eqRegion(search.getRegion()),
                        eqFacltNm(search.getFacltNm()),
                        eqDate(search.getStartDate(), search.getEndDate())
                )
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        Long count = queryFactory
                .select(camp.count())
                .from(camp)
                .fetchOne();

        long totalCount = (count != null) ? count : 0;

        return new PageImpl<>(result, pageable, totalCount);

    }

    public BooleanExpression eqRegion(String region) {
        if (StringUtils.isBlank(region)) {
            return null;
        }

        return camp.addr1.contains(region);
    }

    public BooleanExpression eqFacltNm(String facltNm) {
        if (StringUtils.isBlank(facltNm)) {
            return null;
        }

        return camp.facltNm.contains(facltNm);
    }

    public BooleanExpression eqDate(LocalDate startDate, LocalDate endDate) {
        if (startDate == null || endDate == null) {
            return null;
        }
        return (
                camp.operPdCl.contains(TimeUtils.determineSeason(startDate))
                        .or(camp.operPdCl.contains(TimeUtils.determineSeason(endDate))))
                .and(camp.operDeCl.contains(TimeUtils.determineDayType(startDate))
                        .or(camp.operDeCl.contains(TimeUtils.determineDayType(endDate)))
                );
    }

}