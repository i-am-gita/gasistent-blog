package gita.gasistent.blog.backend.service;

import gita.gasistent.blog.backend.dto.BlogDto;
import gita.gasistent.blog.backend.mapper.BlogMapper;
import gita.gasistent.blog.backend.model.BlogEntity;
import gita.gasistent.blog.backend.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
@Service
@Transactional
public class BlogServiceImpl implements BlogService{

    @Autowired
    private BlogRepository blogRepo;

    @Autowired
    private BlogMapper blogMapper;

    @Override
    public BlogDto getBlogById(String id) {
        return blogMapper.toBlogDto(blogRepo.findById(id).get());
    }

    @Override
    public BlogDto saveBlog(BlogDto blog) {
        blogRepo.save(blogMapper.toBlogEntity(blog));
        return blog;
    }

    @Override
    public BlogDto updateBlogWithPut(String id, BlogDto blog) {
        final BlogEntity updatedBlog = blogRepo.save(blogMapper.toBlogEntity(blog));
        return blogMapper.toBlogDto(updatedBlog);
    }

    @Override
    public void deleteBlogById(String id) {
        blogRepo.deleteById(id);
    }

    @Override
    public Set<BlogDto> findUserBlogs(String username) {
        Set<BlogEntity> userBlogs = blogRepo.findByAuthorUsername(username);
        return blogMapper.toBlogDtos(userBlogs);
    }

    @Override
    public List<BlogDto> findAllBlogs() {
        return blogMapper.toBlogListDtos(blogRepo.findAll());
    }

    @Override
    public List<BlogDto> searchByTitle(String input) {
        return blogMapper.toBlogListDtos(blogRepo.findByTitleContaining(input));
    }
}
