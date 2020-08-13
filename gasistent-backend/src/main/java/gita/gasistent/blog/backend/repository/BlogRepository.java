package gita.gasistent.blog.backend.repository;

import gita.gasistent.blog.backend.model.BlogEntity;
import gita.gasistent.blog.backend.model.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Set;

public interface BlogRepository extends MongoRepository<BlogEntity, String> {

    List<BlogEntity> findByTitleContaining(String title);

    @Query("{'author.username' : ?0}")
    Set<BlogEntity> findByAuthorUsername(String username);

}
