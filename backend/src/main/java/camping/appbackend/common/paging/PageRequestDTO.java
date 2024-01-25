package camping.appbackend.common.paging;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@NotBlank
@AllArgsConstructor
@Getter
public class PageRequestDTO {

    private int page;
    private int size;


    public Pageable toPageable() {
        return PageRequest.of(page != 0 ? page - 1 : page, Math.min(size, 20));
    }

}