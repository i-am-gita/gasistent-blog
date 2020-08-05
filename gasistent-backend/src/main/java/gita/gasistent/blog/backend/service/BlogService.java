package gita.gasistent.blog.backend.service;

import gita.gasistent.blog.backend.dto.BlogDto;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Set;

public interface BlogService {

    BlogDto getBlogById(String id);

    BlogDto saveBlog(@RequestParam("blog") BlogDto blog);

    BlogDto updateBlogWithPut(@RequestParam("id") String id, @RequestParam("blog") BlogDto blog);

    void deleteBlogById(@RequestParam("id") String id);

    Set<BlogDto> findUserBlogs(@RequestParam("username") String username);

    List<BlogDto> findAllBlogs();

    List<BlogDto> searchByTitle(@RequestParam("input") String input);
}
