import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AlphaVaultRoutingModule } from './alpha-vault-routing.module';
import { AlphaVaultComponent } from './alpha-vault.component';
import { LayoutModule } from './features/layout/layout.module';

@NgModule({
  declarations: [AlphaVaultComponent],
  imports: [
    BrowserModule,
    AlphaVaultRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    NgbModule
  ],
  bootstrap: [AlphaVaultComponent]
})
export class AlphaVaultModule {}
