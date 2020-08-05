package gita.gasistent.blog.backend.mapper;

import gita.gasistent.blog.backend.dto.AuthorDto;
import gita.gasistent.blog.backend.model.UserEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AuthorMapper {

    AuthorDto toAuthorDto(UserEntity user);

    UserEntity toUserEntity(AuthorDto authorDto);
}
