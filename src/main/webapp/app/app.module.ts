import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BeOpenMindAppSharedModule } from 'app/shared/shared.module';
import { BeOpenMindAppCoreModule } from 'app/core/core.module';
import { BeOpenMindAppAppRoutingModule } from './app-routing.module';
import { BeOpenMindAppHomeModule } from './home/home.module';
import { BeOpenMindAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BeOpenMindAppSharedModule,
    BeOpenMindAppCoreModule,
    BeOpenMindAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BeOpenMindAppEntityModule,
    BeOpenMindAppAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class BeOpenMindAppAppModule {}
