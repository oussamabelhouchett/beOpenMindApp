import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IComments, Comments } from 'app/shared/model/comments.model';
import { CommentsService } from './comments.service';
import { IPost } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post/post.service';

@Component({
  selector: 'jhi-comments-update',
  templateUrl: './comments-update.component.html'
})
export class CommentsUpdateComponent implements OnInit {
  isSaving: boolean;

  commentsCollection: IComments[];

  posts: IPost[];
  datePubDp: any;

  editForm = this.fb.group({
    id: [],
    contentText: [],
    datePub: [],
    time: [],
    parentId: [],
    commentsId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected commentsService: CommentsService,
    protected postService: PostService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ comments }) => {
      this.updateForm(comments);
    });
    this.commentsService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IComments[]>) => mayBeOk.ok),
        map((response: HttpResponse<IComments[]>) => response.body)
      )
      .subscribe((res: IComments[]) => (this.commentsCollection = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.postService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IPost[]>) => mayBeOk.ok),
        map((response: HttpResponse<IPost[]>) => response.body)
      )
      .subscribe((res: IPost[]) => (this.posts = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(comments: IComments) {
    this.editForm.patchValue({
      id: comments.id,
      contentText: comments.contentText,
      datePub: comments.datePub,
      time: comments.time != null ? comments.time.format(DATE_TIME_FORMAT) : null,
      parentId: comments.parentId,
      commentsId: comments.commentsId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const comments = this.createFromForm();
    if (comments.id !== undefined) {
      this.subscribeToSaveResponse(this.commentsService.update(comments));
    } else {
      this.subscribeToSaveResponse(this.commentsService.create(comments));
    }
  }

  private createFromForm(): IComments {
    return {
      ...new Comments(),
      id: this.editForm.get(['id']).value,
      contentText: this.editForm.get(['contentText']).value,
      datePub: this.editForm.get(['datePub']).value,
      time: this.editForm.get(['time']).value != null ? moment(this.editForm.get(['time']).value, DATE_TIME_FORMAT) : undefined,
      parentId: this.editForm.get(['parentId']).value,
      commentsId: this.editForm.get(['commentsId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IComments>>) {
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

  trackCommentsById(index: number, item: IComments) {
    return item.id;
  }

  trackPostById(index: number, item: IPost) {
    return item.id;
  }
}
