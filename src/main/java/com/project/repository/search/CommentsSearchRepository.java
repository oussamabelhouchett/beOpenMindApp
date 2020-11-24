package com.project.repository.search;
import com.project.domain.Comments;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Comments} entity.
 */
public interface CommentsSearchRepository extends ElasticsearchRepository<Comments, Long> {
}
