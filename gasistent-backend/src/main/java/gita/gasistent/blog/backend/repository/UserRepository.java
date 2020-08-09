package gita.gasistent.blog.backend.repository;

import gita.gasistent.blog.backend.model.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<UserEntity, String> {

    Optional<UserEntity> findByUsername(String username);
}
