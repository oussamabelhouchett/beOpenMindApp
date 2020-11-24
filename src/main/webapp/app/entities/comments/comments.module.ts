import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeOpenMindAppSharedModule } from 'app/shared/shared.module';
import { CommentsComponent } from './comments.component';
import { CommentsDetailComponent } from './comments-detail.component';
import { CommentsUpdateComponent } from './comments-update.component';
import { CommentsDeletePopupComponent, CommentsDeleteDialogComponent } from './comments-delete-dialog.component';
import { commentsRoute, commentsPopupRoute } from './comments.route';

const ENTITY_STATES = [...commentsRoute, ...commentsPopupRoute];

@NgModule({
  imports: [BeOpenMindAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CommentsComponent,
    CommentsDetailComponent,
    CommentsUpdateComponent,
    CommentsDeleteDialogComponent,
    CommentsDeletePopupComponent
  ],
  entryComponents: [CommentsDeleteDialogComponent]
})
export class BeOpenMindAppCommentsModule {}
