package camping.appbackend.common.paging;

import io.swagger.annotations.ApiModelProperty;
import javax.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
public class PageRequestDTO {

    @ApiModelProperty("페이지 번호")
    private int page;

    @ApiModelProperty("페이지 행의 수 (max:20)")
    @Min(0)
    private int size;


    public Pageable toPageable() {
        return PageRequest.of(page != 0 ? page - 1 : page, Math.min(size, 20));
    }

}