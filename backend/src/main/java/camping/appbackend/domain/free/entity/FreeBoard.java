package camping.appbackend.domain.free.entity;

import camping.appbackend.common.base.BaseTimeEntity;
import camping.appbackend.domain.user.entity.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
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
public class FreeBoard extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "free_board_id")
    private Long id;

    @Comment("제목")
    @Column(length = 100, nullable = false)
    private String title;

    @Comment("내용")
    @Lob
    @Column(nullable = false)
    private String content;

    @Comment("썸네일")
    private String thumbnailUrl;

    @Comment("작성자")
    @Column(length = 100, nullable = false)
    private String writer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public void update(String title, String content, String thumbnail) {
        this.title = title;
        this.content = content;
        this.thumbnailUrl = thumbnail;
    }


    @Builder
    public FreeBoard(String title, String content, String thumbnailUrl, String writer, User user) {
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.thumbnailUrl = thumbnailUrl;
        this.user = user;
    }
}