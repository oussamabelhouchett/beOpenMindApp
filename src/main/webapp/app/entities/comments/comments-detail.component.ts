import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IComments } from 'app/shared/model/comments.model';

@Component({
  selector: 'jhi-comments-detail',
  templateUrl: './comments-detail.component.html'
})
export class CommentsDetailComponent implements OnInit {
  comments: IComments;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ comments }) => {
      this.comments = comments;
    });
  }

  previousState() {
    window.history.back();
  }
}
