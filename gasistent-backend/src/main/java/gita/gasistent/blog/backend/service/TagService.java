package gita.gasistent.blog.backend.service;

import gita.gasistent.blog.backend.dto.BlogDto;
import gita.gasistent.blog.backend.dto.TagDto;
import org.springframework.web.bind.annotation.RequestParam;

public interface TagService {

    TagDto createTag(@RequestParam("tag") TagDto tag);

}
