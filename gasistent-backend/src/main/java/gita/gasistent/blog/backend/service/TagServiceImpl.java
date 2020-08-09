package gita.gasistent.blog.backend.service;

import gita.gasistent.blog.backend.dto.TagDto;
import gita.gasistent.blog.backend.mapper.TagMapper;
import gita.gasistent.blog.backend.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TagServiceImpl implements  TagService{

    @Autowired
    private TagMapper tagMapper;

    @Autowired
    private TagRepository tagRepo;

    @Override
    public TagDto createTag(TagDto tag) {
        tagRepo.save(tagMapper.toTagEntity(tag));
        return tag;
    }
}
