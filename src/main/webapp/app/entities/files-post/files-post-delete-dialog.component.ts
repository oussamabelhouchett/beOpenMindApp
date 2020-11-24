import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFilesPost } from 'app/shared/model/files-post.model';
import { FilesPostService } from './files-post.service';

@Component({
  selector: 'jhi-files-post-delete-dialog',
  templateUrl: './files-post-delete-dialog.component.html'
})
export class FilesPostDeleteDialogComponent {
  filesPost: IFilesPost;

  constructor(protected filesPostService: FilesPostService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.filesPostService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'filesPostListModification',
        content: 'Deleted an filesPost'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-files-post-delete-popup',
  template: ''
})
export class FilesPostDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ filesPost }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(FilesPostDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.filesPost = filesPost;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/files-post', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/files-post', { outlets: { popup: null } }]);
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
