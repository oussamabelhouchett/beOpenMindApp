import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IFilesPost, FilesPost } from 'app/shared/model/files-post.model';
import { FilesPostService } from './files-post.service';
import { IPost } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post/post.service';

@Component({
  selector: 'jhi-files-post-update',
  templateUrl: './files-post-update.component.html'
})
export class FilesPostUpdateComponent implements OnInit {
  isSaving: boolean;

  posts: IPost[];

  editForm = this.fb.group({
    id: [],
    path: [],
    type: [],
    filesPostId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected filesPostService: FilesPostService,
    protected postService: PostService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ filesPost }) => {
      this.updateForm(filesPost);
    });
    this.postService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IPost[]>) => mayBeOk.ok),
        map((response: HttpResponse<IPost[]>) => response.body)
      )
      .subscribe((res: IPost[]) => (this.posts = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(filesPost: IFilesPost) {
    this.editForm.patchValue({
      id: filesPost.id,
      path: filesPost.path,
      type: filesPost.type,
      filesPostId: filesPost.filesPostId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const filesPost = this.createFromForm();
    if (filesPost.id !== undefined) {
      this.subscribeToSaveResponse(this.filesPostService.update(filesPost));
    } else {
      this.subscribeToSaveResponse(this.filesPostService.create(filesPost));
    }
  }

  private createFromForm(): IFilesPost {
    return {
      ...new FilesPost(),
      id: this.editForm.get(['id']).value,
      path: this.editForm.get(['path']).value,
      type: this.editForm.get(['type']).value,
      filesPostId: this.editForm.get(['filesPostId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFilesPost>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackPostById(index: number, item: IPost) {
    return item.id;
  }
}
