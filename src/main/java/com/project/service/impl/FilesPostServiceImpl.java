package com.project.service.impl;

import com.project.service.FilesPostService;
import com.project.domain.FilesPost;
import com.project.repository.FilesPostRepository;
import com.project.repository.search.FilesPostSearchRepository;
import com.project.service.dto.FilesPostDTO;
import com.project.service.mapper.FilesPostMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing {@link FilesPost}.
 */
@Service
@Transactional
public class FilesPostServiceImpl implements FilesPostService {

    private final Logger log = LoggerFactory.getLogger(FilesPostServiceImpl.class);

    private final FilesPostRepository filesPostRepository;

    private final FilesPostMapper filesPostMapper;

    private final FilesPostSearchRepository filesPostSearchRepository;

    public FilesPostServiceImpl(FilesPostRepository filesPostRepository, FilesPostMapper filesPostMapper, FilesPostSearchRepository filesPostSearchRepository) {
        this.filesPostRepository = filesPostRepository;
        this.filesPostMapper = filesPostMapper;
        this.filesPostSearchRepository = filesPostSearchRepository;
    }

    /**
     * Save a filesPost.
     *
     * @param filesPostDTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public FilesPostDTO save(FilesPostDTO filesPostDTO) {
        log.debug("Request to save FilesPost : {}", filesPostDTO);
        FilesPost filesPost = filesPostMapper.toEntity(filesPostDTO);
        filesPost = filesPostRepository.save(filesPost);
        FilesPostDTO result = filesPostMapper.toDto(filesPost);
        filesPostSearchRepository.save(filesPost);
        return result;
    }

    /**
     * Get all the filesPosts.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<FilesPostDTO> findAll(Pageable pageable) {
        log.debug("Request to get all FilesPosts");
        return filesPostRepository.findAll(pageable)
            .map(filesPostMapper::toDto);
    }


    /**
     * Get one filesPost by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<FilesPostDTO> findOne(Long id) {
        log.debug("Request to get FilesPost : {}", id);
        return filesPostRepository.findById(id)
            .map(filesPostMapper::toDto);
    }

    /**
     * Delete the filesPost by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete FilesPost : {}", id);
        filesPostRepository.deleteById(id);
        filesPostSearchRepository.deleteById(id);
    }

    /**
     * Search for the filesPost corresponding to the query.
     *
     * @param query the query of the search.
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public Page<FilesPostDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of FilesPosts for query {}", query);
        return filesPostSearchRepository.search(queryStringQuery(query), pageable)
            .map(filesPostMapper::toDto);
    }
}
