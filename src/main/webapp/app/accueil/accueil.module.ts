import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccueilPostModule } from 'app/accueil-post/accueil-post.module';
import { AccueilProfileModule } from 'app/accueil-profile/accueil-profile.module';
import { AccueilghtSectionModule } from 'app/accueil-right-section/accueil-right-section.module';

import { BeOpenMindAppSharedModule } from 'app/shared/shared.module';
import { AccueilComponent } from './accueil.component';
import { ACCUEIL_ROUTE } from './accueil.route';

@NgModule({
  imports: [
    BeOpenMindAppSharedModule,
    RouterModule.forChild([ACCUEIL_ROUTE]),
    AccueilPostModule,
    AccueilProfileModule,
    AccueilghtSectionModule
  ],
  declarations: [AccueilComponent]
})
export class AccueilModule {}
