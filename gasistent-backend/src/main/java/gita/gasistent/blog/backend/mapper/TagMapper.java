package gita.gasistent.blog.backend.mapper;

import gita.gasistent.blog.backend.dto.BlogDto;
import gita.gasistent.blog.backend.dto.TagDto;
import gita.gasistent.blog.backend.model.BlogEntity;
import gita.gasistent.blog.backend.model.TagEntity;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring")
public interface TagMapper {

    TagDto toTagDto(TagEntity tag);

    TagEntity toTagEntity(TagDto tagDto);

    Set<TagDto> toTagDtos(Set<TagEntity> tags);

    List<TagDto> toTagListDtos(List<TagEntity> blogs);
}
