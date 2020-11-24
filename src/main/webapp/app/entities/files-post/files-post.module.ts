import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeOpenMindAppSharedModule } from 'app/shared/shared.module';
import { FilesPostComponent } from './files-post.component';
import { FilesPostDetailComponent } from './files-post-detail.component';
import { FilesPostUpdateComponent } from './files-post-update.component';
import { FilesPostDeletePopupComponent, FilesPostDeleteDialogComponent } from './files-post-delete-dialog.component';
import { filesPostRoute, filesPostPopupRoute } from './files-post.route';

const ENTITY_STATES = [...filesPostRoute, ...filesPostPopupRoute];

@NgModule({
  imports: [BeOpenMindAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    FilesPostComponent,
    FilesPostDetailComponent,
    FilesPostUpdateComponent,
    FilesPostDeleteDialogComponent,
    FilesPostDeletePopupComponent
  ],
  entryComponents: [FilesPostDeleteDialogComponent]
})
export class BeOpenMindAppFilesPostModule {}
