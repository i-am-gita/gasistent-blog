package gita.gasistent.blog.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Document(collection = "users")
public class UserEntity {

    @Id
    private String id;

    @Indexed(name = "username")
    private String username;

    private String password;

    private String skillTitle;

    private String profileImage;

    private Set<BlogEntity> blogs = new HashSet<>();

    private Set<RoleEntity> roles = new HashSet<>();

    public UserEntity(){}

    public UserEntity(final Builder builder){
        username = builder.username;
        password = builder.password;
        skillTitle = builder.skillTitle;
        profileImage = builder.profileImage;
        blogs = builder.blogs;
        roles = builder.roles;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSkillTitle() {
        return skillTitle;
    }

    public void setSkillTitle(String skillTitle) {
        this.skillTitle = skillTitle;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public Set<BlogEntity> getBlogs() {
        return blogs;
    }

    public void setBlogs(Set<BlogEntity> blogs) {
        this.blogs = blogs;
    }

    public Set<RoleEntity> getRoles() { return roles; }

    public void setRoles(Set<RoleEntity> roles) { this.roles = roles; }

    public static class Builder{
        public String id;
        public String username;
        public String password;
        public String skillTitle;
        public String profileImage;
        public Set<BlogEntity> blogs;
        public Set<RoleEntity> roles;

        public static Builder builder(){ return new Builder();}

        public Builder withId(final String id){
            this.id = id;
            return this;
        }

        public Builder withUsername(final String username){
            this.username = username;
            return this;
        }

        public Builder withPassword(final String password){
            this.password = password;
            return this;
        }

        public Builder withSkillTitle(final String skillTitle){
            this.skillTitle = skillTitle;
            return this;
        }

        public Builder withProfileImage(final String img){
            this.profileImage = img;
            return this;
        }

        public Builder withBlogs(final Set<BlogEntity> blogs){
            this.blogs = blogs;
            return this;
        }

        public Builder withRoles(final Set<RoleEntity> roles){
            this.roles = roles;
            return this;
        }

        public UserEntity build(){ return new UserEntity(this);}
    }
}
