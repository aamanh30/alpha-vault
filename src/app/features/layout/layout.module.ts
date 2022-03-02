import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmptyLayoutComponent } from './pages/empty-layout/empty-layout.component';
import { FullPageLayoutComponent } from './pages/full-page-layout/full-page-layout.component';
import { SidebarLayoutComponent } from './pages/sidebar-layout/sidebar-layout.component';
import { BoxedLayoutComponent } from './pages/boxed-layout/boxed-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [
    EmptyLayoutComponent,
    FullPageLayoutComponent,
    SidebarLayoutComponent,
    BoxedLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CopyrightComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialDesignModule
  ],
  exports: [
    EmptyLayoutComponent,
    FullPageLayoutComponent,
    SidebarLayoutComponent,
    BoxedLayoutComponent
  ]
})
export class LayoutModule { }
