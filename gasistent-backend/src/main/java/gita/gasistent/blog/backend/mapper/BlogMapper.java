package gita.gasistent.blog.backend.mapper;

import gita.gasistent.blog.backend.dto.BlogDto;
import gita.gasistent.blog.backend.model.BlogEntity;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring")
public interface BlogMapper {

    BlogDto toBlogDto(BlogEntity blog);

    BlogEntity toBlogEntity(BlogDto blogDto);

    Set<BlogDto> toBlogDtos(Set<BlogEntity> blogs);

    List<BlogDto> toBlogListDtos(List<BlogEntity> blogs);

}
