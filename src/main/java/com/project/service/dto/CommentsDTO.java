package com.project.service.dto;
import java.time.Instant;
import java.time.LocalDate;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.project.domain.Comments} entity.
 */
public class CommentsDTO implements Serializable {

    private Long id;

    private String contentText;

    private LocalDate datePub;

    private Instant time;


    private Long parentId;

    private Long commentsId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContentText() {
        return contentText;
    }

    public void setContentText(String contentText) {
        this.contentText = contentText;
    }

    public LocalDate getDatePub() {
        return datePub;
    }

    public void setDatePub(LocalDate datePub) {
        this.datePub = datePub;
    }

    public Instant getTime() {
        return time;
    }

    public void setTime(Instant time) {
        this.time = time;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long commentsId) {
        this.parentId = commentsId;
    }

    public Long getCommentsId() {
        return commentsId;
    }

    public void setCommentsId(Long postId) {
        this.commentsId = postId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        CommentsDTO commentsDTO = (CommentsDTO) o;
        if (commentsDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), commentsDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CommentsDTO{" +
            "id=" + getId() +
            ", contentText='" + getContentText() + "'" +
            ", datePub='" + getDatePub() + "'" +
            ", time='" + getTime() + "'" +
            ", parent=" + getParentId() +
            ", comments=" + getCommentsId() +
            "}";
    }
}
