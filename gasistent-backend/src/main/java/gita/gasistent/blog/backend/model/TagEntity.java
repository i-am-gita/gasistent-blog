package gita.gasistent.blog.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tags")
public class TagEntity {

    @Id
    private String id;

    @Indexed(name = "tagName")
    private String name;

    public TagEntity(){}

    public TagEntity(final Builder builder){
        name = builder.name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static class Builder{
        public String id;
        public String name;

        public static Builder builder(){ return new Builder();}

        public Builder withId(final String id){
            this.id = id;
            return this;
        }

        public Builder withName(final String name){
            this.name = name;
            return this;
        }

        public TagEntity build(){ return new TagEntity(this);}
    }
}
