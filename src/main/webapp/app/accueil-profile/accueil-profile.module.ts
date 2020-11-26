import { NgModule } from '@angular/core';
import { BeOpenMindAppSharedModule } from 'app/shared/shared.module';
import { AccueilProfileComponent } from './accueil-profile.component';

@NgModule({
  imports: [BeOpenMindAppSharedModule],
  declarations: [AccueilProfileComponent],
  exports: [AccueilProfileComponent]
})
export class AccueilProfileModule {}
