import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeOpenMindAppSharedModule } from 'app/shared/shared.module';
import { AccueilComponent } from './accueil.component';
import { ACCUEIL_ROUTE } from './accueil.route';


@NgModule({
  imports: [BeOpenMindAppSharedModule, RouterModule.forChild([ACCUEIL_ROUTE])],
  declarations: [AccueilComponent]
})
export class AccueilModule {}
