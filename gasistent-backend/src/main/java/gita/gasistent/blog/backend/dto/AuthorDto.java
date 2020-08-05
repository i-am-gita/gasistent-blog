package gita.gasistent.blog.backend.dto;

public class AuthorDto {

    public String username;
    public String skillTitle;
    public String profileImage;

    public AuthorDto(){

    }

    public AuthorDto(String username, String skillTitle, String profileImage) {
        this.username = username;
        this.skillTitle = skillTitle;
        this.profileImage = profileImage;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
}
