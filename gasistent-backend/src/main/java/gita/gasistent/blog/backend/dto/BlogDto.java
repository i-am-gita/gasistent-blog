package gita.gasistent.blog.backend.dto;

import gita.gasistent.blog.backend.model.TagEntity;
import gita.gasistent.blog.backend.model.UserEntity;

import java.util.HashSet;
import java.util.Set;

public class BlogDto {

    public String id;
    public String title;
    public String content;
    public String imageUrl;
    public Set<TagEntity> tags = new HashSet<>();
    public String createdAt;
    public AuthorDto author;

    public BlogDto(){}

    public BlogDto(String id, String title, String content, String imageUrl, Set<TagEntity> tags, String createdAt, AuthorDto author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.tags = tags;
        this.createdAt = createdAt;
        this.author = author;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Set<TagEntity> getTags() {
        return tags;
    }

    public void setTags(Set<TagEntity> tags) {
        this.tags = tags;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public AuthorDto getAuthor() {
        return author;
    }

    public void setAuthor(AuthorDto author) {
        this.author = author;
    }
}
