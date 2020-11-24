import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IComments } from 'app/shared/model/comments.model';
import { CommentsService } from './comments.service';

@Component({
  selector: 'jhi-comments-delete-dialog',
  templateUrl: './comments-delete-dialog.component.html'
})
export class CommentsDeleteDialogComponent {
  comments: IComments;

  constructor(protected commentsService: CommentsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.commentsService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'commentsListModification',
        content: 'Deleted an comments'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-comments-delete-popup',
  template: ''
})
export class CommentsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ comments }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(CommentsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.comments = comments;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/comments', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/comments', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
