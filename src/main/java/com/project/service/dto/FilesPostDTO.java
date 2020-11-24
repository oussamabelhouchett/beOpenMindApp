package com.project.service.dto;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.project.domain.FilesPost} entity.
 */
public class FilesPostDTO implements Serializable {

    private Long id;

    private String path;

    private String type;


    private Long filesPostId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getFilesPostId() {
        return filesPostId;
    }

    public void setFilesPostId(Long postId) {
        this.filesPostId = postId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        FilesPostDTO filesPostDTO = (FilesPostDTO) o;
        if (filesPostDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), filesPostDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "FilesPostDTO{" +
            "id=" + getId() +
            ", path='" + getPath() + "'" +
            ", type='" + getType() + "'" +
            ", filesPost=" + getFilesPostId() +
            "}";
    }
}
