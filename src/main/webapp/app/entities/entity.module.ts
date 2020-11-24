import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.BeOpenMindAppPostModule)
      },
      {
        path: 'files-post',
        loadChildren: () => import('./files-post/files-post.module').then(m => m.BeOpenMindAppFilesPostModule)
      },
      {
        path: 'comments',
        loadChildren: () => import('./comments/comments.module').then(m => m.BeOpenMindAppCommentsModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class BeOpenMindAppEntityModule {}
