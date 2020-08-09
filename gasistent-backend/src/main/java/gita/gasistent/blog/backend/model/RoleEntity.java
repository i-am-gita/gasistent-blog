package gita.gasistent.blog.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public class RoleEntity {

    @Id
    private String id;

    @Indexed(name = "title")
    private ERole title;

    public RoleEntity(){}

    public RoleEntity(final Builder builder){
       title = builder.title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ERole getTitle() {
        return title;
    }

    public void setTitle(ERole title) {
        this.title = title;
    }


    public static class Builder{
        public String id;
        public ERole title;

        public static Builder builder(){ return new  Builder();}

        public Builder withId(final String id){
            this.id = id;
            return this;
        }

        public Builder withTitle(final ERole title){
            this.title = title;
            return this;
        }

        public RoleEntity build(){ return new RoleEntity(this);}
    }
}
