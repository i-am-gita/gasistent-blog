package gita.gasistent.blog.backend.repository;

import gita.gasistent.blog.backend.model.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserEntity, String> {

    public UserEntity findByUsername(String username);
}
