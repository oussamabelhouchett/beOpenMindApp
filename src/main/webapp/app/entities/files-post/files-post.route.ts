import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FilesPost } from 'app/shared/model/files-post.model';
import { FilesPostService } from './files-post.service';
import { FilesPostComponent } from './files-post.component';
import { FilesPostDetailComponent } from './files-post-detail.component';
import { FilesPostUpdateComponent } from './files-post-update.component';
import { FilesPostDeletePopupComponent } from './files-post-delete-dialog.component';
import { IFilesPost } from 'app/shared/model/files-post.model';

@Injectable({ providedIn: 'root' })
export class FilesPostResolve implements Resolve<IFilesPost> {
  constructor(private service: FilesPostService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFilesPost> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<FilesPost>) => response.ok),
        map((filesPost: HttpResponse<FilesPost>) => filesPost.body)
      );
    }
    return of(new FilesPost());
  }
}

export const filesPostRoute: Routes = [
  {
    path: '',
    component: FilesPostComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'FilesPosts'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: FilesPostDetailComponent,
    resolve: {
      filesPost: FilesPostResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'FilesPosts'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: FilesPostUpdateComponent,
    resolve: {
      filesPost: FilesPostResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'FilesPosts'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: FilesPostUpdateComponent,
    resolve: {
      filesPost: FilesPostResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'FilesPosts'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const filesPostPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: FilesPostDeletePopupComponent,
    resolve: {
      filesPost: FilesPostResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'FilesPosts'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
