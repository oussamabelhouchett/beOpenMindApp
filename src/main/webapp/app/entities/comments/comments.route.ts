import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Comments } from 'app/shared/model/comments.model';
import { CommentsService } from './comments.service';
import { CommentsComponent } from './comments.component';
import { CommentsDetailComponent } from './comments-detail.component';
import { CommentsUpdateComponent } from './comments-update.component';
import { CommentsDeletePopupComponent } from './comments-delete-dialog.component';
import { IComments } from 'app/shared/model/comments.model';

@Injectable({ providedIn: 'root' })
export class CommentsResolve implements Resolve<IComments> {
  constructor(private service: CommentsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComments> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Comments>) => response.ok),
        map((comments: HttpResponse<Comments>) => comments.body)
      );
    }
    return of(new Comments());
  }
}

export const commentsRoute: Routes = [
  {
    path: '',
    component: CommentsComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Comments'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: CommentsDetailComponent,
    resolve: {
      comments: CommentsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Comments'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: CommentsUpdateComponent,
    resolve: {
      comments: CommentsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Comments'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: CommentsUpdateComponent,
    resolve: {
      comments: CommentsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Comments'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const commentsPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: CommentsDeletePopupComponent,
    resolve: {
      comments: CommentsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Comments'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
