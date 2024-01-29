package camping.appbackend.domain.camp.entity;

import camping.appbackend.common.base.BaseTimeEntity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicUpdate;

@ToString
@AllArgsConstructor
@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicUpdate
@Entity
@Table(name = "camp", uniqueConstraints = {
        @UniqueConstraint(name = "uc_camp_content_id", columnNames = {"content_id"})
})
public class Camp extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "camp_id")
    private Long id;

    @Comment("고캠핑 캠핑장 고유번호")
    @Column(name = "content_id", nullable = false)
    private Long contentId;

    @Comment("상세주소")
    private String addr1;

    @Comment("반려동물 출입")
    private String animalCmgCl;

    @Comment("자동차 야영장 개수")
    private String autoSiteCo;

    @Comment("카라반 내부 시설")
    private String caravInnerFclty;

    @Comment("카라반 개수")
    private int caravSiteCo;

    @Comment("도(행정구역)")
    private String doNm;

    @Comment("시군구(행정구역)")
    private String sigunguNm;

    @Comment("캠핑장비 대여 목록")
    private String eqpmnLendCl;

    @Comment("소화기 개수")
    private int extshrCo;

    @Comment("야영장 명")
    private String facltNm;

    @Comment("특징")
    @Lob
    private String featureNm;

    @Comment("화재감지기 개수")
    private String fireSensorCo;

    @Comment("대표 이미지")
    private String firstImageUrl;

    @Comment("글램핑 내부 시설 목록")
    private String glamPinnerFclty;

    @Comment("글램핑 개수")
    private int glamp_site_co;

    @Comment("캠핑장 홈페이지")
    private String homepage;

    @Comment("업종")
    private String induty;

    @Comment("소개")
    @Lob
    private String intro;

    @Comment("입지 구분")
    private String lctCl;

    @Comment("한줄 소개")
    private String lineIntro;

    @Comment("경도")
    private String mapX;

    @Comment("위도")
    private String mapY;

    @Comment("운영일")
    private String operDeCl;

    @Comment("운영기간")
    private String operPdCl;

    @Comment("주변 이용가능 시설")
    private String posblFcltyCl;

    @Comment("예약 구분")
    private String resveCl;

    @Comment("예약 페이지")
    @Lob
    private String resveUrl;

    @Comment("부대시설")
    private String sbrsCl;

    @Comment("부대시설 기타")
    private String sbrsEtc;

    @Comment("사이트간 거리")
    private String sitedStnc;

    @Comment("샤워실 개수")
    private int swrmCo;

    @Comment("화장실 개수")
    private int toiletCo;

    @Comment("개수대 개수")
    private int wtrplCo;

    @Comment("전화")
    private String tel;

    @Comment("테마 환경")
    private String themaEnvrnCl;

    @Comment("여행 시기")
    private String tourEraCl;

    @Comment("개인 트레일러 동반 여부")
    @Column(length = 1)
    private String trlerAcmpnyAt;

    @Comment("개인 카라반 동반 여부")
    @Column(length = 1)
    private String caravAcmpnyAt;

    public void update(Camp camp) {
        this.addr1 = camp.getAddr1();
        this.animalCmgCl = camp.getAnimalCmgCl();
        this.autoSiteCo = camp.getAutoSiteCo();
        this.caravInnerFclty = camp.getCaravInnerFclty();
        this.caravSiteCo = camp.getCaravSiteCo();
        this.doNm = camp.getDoNm();
        this.sigunguNm = camp.getSigunguNm();
        this.eqpmnLendCl = camp.getEqpmnLendCl();
        this.extshrCo = camp.getExtshrCo();
        this.facltNm = camp.getFacltNm();
        this.featureNm = camp.getFeatureNm();
        this.fireSensorCo = camp.getFireSensorCo();
        this.firstImageUrl = camp.getFirstImageUrl();
        this.glamPinnerFclty = camp.getGlamPinnerFclty();
        this.homepage = camp.getHomepage();
        this.induty = camp.getInduty();
        this.intro = camp.getIntro();
        this.lctCl = camp.getLctCl();
        this.lineIntro = camp.getLineIntro();
        this.mapX = camp.getMapX();
        this.mapY = camp.getMapY();
        this.operDeCl = camp.getOperDeCl();
        this.operPdCl = camp.getOperPdCl();
        this.posblFcltyCl = camp.getPosblFcltyCl();
        this.resveCl = camp.getResveCl();
        this.resveUrl = camp.getResveUrl();
        this.sbrsCl = camp.getSbrsCl();
        this.sbrsEtc = camp.getSbrsEtc();
        this.sitedStnc = camp.getSitedStnc();
        this.swrmCo = camp.getSwrmCo();
        this.toiletCo = camp.getToiletCo();
        this.wtrplCo = camp.getWtrplCo();
        this.tel = camp.getTel();
        this.themaEnvrnCl = camp.getThemaEnvrnCl();
        this.tourEraCl = camp.getTourEraCl();
        this.trlerAcmpnyAt = camp.getTrlerAcmpnyAt();
        this.caravAcmpnyAt = camp.getCaravAcmpnyAt();
    }

    @Getter
    public enum SyncStatus {
        NEW("A"), EDIT("U"), DELETE("D");

        private final String code;

        SyncStatus(String code) {
            this.code = code;
        }
    }

}