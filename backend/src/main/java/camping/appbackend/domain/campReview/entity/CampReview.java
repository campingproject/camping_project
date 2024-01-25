package camping.appbackend.domain.campReview.entity;

import camping.appbackend.common.base.BaseTimeEntity;
import camping.appbackend.domain.user.entity.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicUpdate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicUpdate
@Entity
public class CampReview extends BaseTimeEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "camp_review_id")
    private Long id;

    @Comment("한줄평")
    @Column(length = 100, nullable = false)
    private String message;

    @Comment("캠핑 사진 URL")
    @Column(nullable = false)
    private String imageUrl;

    @Comment("작성자")
    @Column(length = 100, nullable = false)
    private String writer;

    @Comment("캠핑장명")
    @Column(length = 50, nullable = false)
    private String campSiteName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public void update(String content, String imageUrl, String campSiteName) {
        this.message = content;
        this.imageUrl = imageUrl;
        this.campSiteName = campSiteName;
    }


    @Builder
    public CampReview(String message, String imageUrl, String writer, String campSiteName, User user) {
        this.message = message;
        this.writer = writer;
        this.imageUrl = imageUrl;
        this.campSiteName = campSiteName;
        this.user = user;
    }
}