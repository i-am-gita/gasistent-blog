package gita.gasistent.blog.backend.repository;

import gita.gasistent.blog.backend.model.BlogEntity;
import gita.gasistent.blog.backend.model.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface BlogRepository extends MongoRepository<BlogEntity, String> {

    Optional<BlogEntity> findById(String id);

    List<BlogEntity> findByTitleContaining(String title);

    Set<BlogEntity> findByAuthor(UserEntity author);

}
