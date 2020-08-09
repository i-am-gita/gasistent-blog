package gita.gasistent.blog.backend.payload;

import java.util.List;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String id;
    private String username;
    private String skillTitle;
    private String profileImage;
    private List<String> roles;

    public JwtResponse(String accessToken, String id, String username, String skillTitle, String profileImage, List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.skillTitle = skillTitle;
        this.profileImage = profileImage;
        this.roles = roles;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }
}