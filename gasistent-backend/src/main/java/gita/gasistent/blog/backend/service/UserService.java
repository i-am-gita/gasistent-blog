package gita.gasistent.blog.backend.service;

import gita.gasistent.blog.backend.dto.AuthorDto;

public interface UserService {

    AuthorDto getAuthorByUserName(String username);
}
