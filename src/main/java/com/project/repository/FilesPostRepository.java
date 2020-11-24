package com.project.repository;
import com.project.domain.FilesPost;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FilesPost entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FilesPostRepository extends JpaRepository<FilesPost, Long>, JpaSpecificationExecutor<FilesPost> {

}
