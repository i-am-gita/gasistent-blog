package gita.gasistent.blog.backend.repository;

import gita.gasistent.blog.backend.model.TagEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TagRepository extends MongoRepository<TagEntity, String> {

}