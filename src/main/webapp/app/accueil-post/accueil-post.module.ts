import { NgModule } from '@angular/core';
import { BeOpenMindAppSharedModule } from 'app/shared/shared.module';
import { AccueilPostComponent } from './accueil-post.component';

@NgModule({
  imports: [BeOpenMindAppSharedModule],
  declarations: [AccueilPostComponent],
  exports: [AccueilPostComponent]
})
export class AccueilPostModule {}
