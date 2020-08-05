package gita.gasistent.blog.backend.service;

import com.mongodb.lang.Nullable;
import gita.gasistent.blog.backend.dto.BlogDto;
import gita.gasistent.blog.backend.mapper.BlogMapper;
import gita.gasistent.blog.backend.model.BlogEntity;
import gita.gasistent.blog.backend.model.UserEntity;
import gita.gasistent.blog.backend.repository.AuthorRepository;
import gita.gasistent.blog.backend.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Transactional
public class BlogServiceImpl implements BlogService{

    @Autowired
    private BlogRepository blogRepo;

    @Autowired
    private AuthorRepository authorRepo;

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
        final BlogEntity blogEntityForUpdate = blogRepo.findById(id).get();
        final BlogEntity updatedBlog = blogRepo.save(blogEntityForUpdate);
        return blogMapper.toBlogDto(updatedBlog);
    }

    @Override
    public void deleteBlogById(String id) {
        blogRepo.deleteById(id);
    }

    @Override
    public Set<BlogDto> findUserBlogs(String username) {
        UserEntity author = authorRepo.findByUsername(username).get();
        Set<BlogEntity> userBlogs = blogRepo.findByAuthor(author);
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
