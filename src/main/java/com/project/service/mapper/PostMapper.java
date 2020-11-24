package com.project.service.mapper;

import com.project.domain.*;
import com.project.service.dto.PostDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Post} and its DTO {@link PostDTO}.
 */
@Mapper(componentModel = "spring", uses = {CommentsMapper.class})
public interface PostMapper extends EntityMapper<PostDTO, Post> {
    @Mapping(source = "comments", target = "comments")
    PostDTO toDto(Post post);

      @Mapping(source = "comments", target = "comments")
    @Mapping(target = "filesPosts", ignore = true)
    @Mapping(target = "removeFilesPost", ignore = true)
    Post toEntity(PostDTO postDTO);

    default Post fromId(Long id) {
        if (id == null) {
            return null;
        }
        Post post = new Post();
        post.setId(id);
        return post;
    }
}
