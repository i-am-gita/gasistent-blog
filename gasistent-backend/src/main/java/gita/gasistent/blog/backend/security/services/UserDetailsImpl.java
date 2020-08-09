package gita.gasistent.blog.backend.security.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import gita.gasistent.blog.backend.model.UserEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;

    private final String id;

    private final String username;

    @JsonIgnore
    private final String password;

    private final String skillTitle;

    private final String profileImage;

    private final Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(String id, String username, String password, String skillTitle, String profImg, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.skillTitle = skillTitle;
        this.profileImage = profImg;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserDetailsImpl build(UserEntity user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getTitle().name()))
                .collect(Collectors.toList());

        return new UserDetailsImpl(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getSkillTitle(),
                user.getProfileImage(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public String getSkillTitle() {
        return skillTitle;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public String getId() {
        return id;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }
}
