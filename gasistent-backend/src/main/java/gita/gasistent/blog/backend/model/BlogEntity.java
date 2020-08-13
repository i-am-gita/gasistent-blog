package gita.gasistent.blog.backend.model;

import gita.gasistent.blog.backend.dto.AuthorDto;
import gita.gasistent.blog.backend.dto.TagDto;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "blogs")
public class BlogEntity {

    @Id
    private String id;

    @Indexed(name = "blogTitle")
    private String title;

    private String content;

    private String imageUrl;

    private Set<TagDto> tags = new HashSet<>();

    private String createdAt;

    private AuthorDto author;

    public BlogEntity(){}

    public BlogEntity(final Builder builder){
        title = builder.title;
        content = builder.content;
        imageUrl = builder.imageUrl;
        tags.addAll(builder.tags);
        createdAt = builder.createdAt;
        author = builder.author;
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

    public Set<TagDto> getTags() {
        return tags;
    }

    public void setTags(Set<TagDto> tags) {
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

    public static class Builder{

        public String id;
        public String title;
        public String content;
        public String imageUrl;
        public Set<TagDto> tags = new HashSet<>();
        public String createdAt;
        public AuthorDto author;

        public static Builder builder(){ return new Builder(); }

        public Builder withId(final String id){
            this.id = id;
            return this;
        }

        public Builder withTitle(final String title){
            this.title = title;
            return this;
        }

        public Builder withContent(final String content){
            this.content = content;
            return this;
        }

        public Builder withImageUrl(final String imgUrl){
            this.imageUrl = imgUrl;
            return this;
        }

        public Builder withTags(final Set<TagDto> tags){
            this.tags = tags;
            return this;
        }

        public Builder withCreationDate(final Date date){
            LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            int month = localDate.getMonthValue();
            int day = localDate.getDayOfMonth();
            int year = localDate.getYear();

            this.createdAt = day+"."+month+"."+year+".";
            return this;
        }

        public Builder withAuthor(final AuthorDto author){
            this.author = author;
            return this;
        }

        public BlogEntity build(){ return new BlogEntity(this); }

    }
}
