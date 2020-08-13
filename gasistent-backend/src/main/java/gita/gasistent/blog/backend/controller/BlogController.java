package gita.gasistent.blog.backend.controller;

import gita.gasistent.blog.backend.dto.BlogDto;
import gita.gasistent.blog.backend.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "")
public class BlogController {

    @Autowired
    BlogService blogService;

    @GetMapping(path = "/blogs", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<BlogDto>> getAll(){
        try{
            List<BlogDto> blogResults = blogService.findAllBlogs();
            if(blogResults.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            else{
                return new ResponseEntity<>(blogResults, HttpStatus.OK);
            }
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/blogs/search/{input}")
    public ResponseEntity<List<BlogDto>> getSearchResults(@PathVariable("input") String input){
        try{
            List<BlogDto> blogResults = blogService.searchByTitle(input);
            if(blogResults.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            else{
                return new ResponseEntity<>(blogResults, HttpStatus.OK);
            }
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/blogs/{username}")
    public ResponseEntity<Set<BlogDto>> getUserBlogs(@PathVariable("username") String username){
        try{
            Set<BlogDto> blogResults = blogService.findUserBlogs(username);
            if(blogResults.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            else{
                return new ResponseEntity<>(blogResults, HttpStatus.OK);
            }
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/blog/{id}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<BlogDto> getSingleBlog(@PathVariable("id") String id){
        try{
            BlogDto blogResult = blogService.getBlogById(id);
            if(blogResult == null) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            else{
                return new ResponseEntity<>(blogResult, HttpStatus.OK);
            }
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(path = "/blog", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<BlogDto> saveBlog(@RequestBody BlogDto blog){
        try {
            BlogDto blogForSaving = blogService.saveBlog(blog);
            return new ResponseEntity<>(blogForSaving, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/blog/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<BlogDto> updateBlog(@PathVariable("id") String id, @RequestBody BlogDto blog){

        BlogDto updatedBlog = blogService.updateBlogWithPut(id,blog);
        if(updatedBlog != null){
            return new ResponseEntity<>(updatedBlog, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/blog/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<HttpStatus> deleteBlog(@PathVariable("id") String id){
        try{
            blogService.deleteBlogById(id);
            return new ResponseEntity<>(HttpStatus.GONE);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
