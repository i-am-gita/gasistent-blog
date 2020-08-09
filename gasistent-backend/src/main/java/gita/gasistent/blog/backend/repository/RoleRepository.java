package gita.gasistent.blog.backend.repository;

import gita.gasistent.blog.backend.model.ERole;
import gita.gasistent.blog.backend.model.RoleEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<RoleEntity, String> {

    Optional<RoleEntity> findByTitle(ERole title);
}
