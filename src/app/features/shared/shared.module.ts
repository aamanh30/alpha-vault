import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { BoxedLayoutComponent } from './components/boxed-layout/boxed-layout.component';
import { VaultInfoComponent } from './components/vault-info/vault-info.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullLayoutComponent,
    BoxedLayoutComponent,
    VaultInfoComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullLayoutComponent,
    BoxedLayoutComponent,
    VaultInfoComponent
  ]
})
export class SharedModule {}
