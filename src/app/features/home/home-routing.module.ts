import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in/logged-in.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedInGuard],
    component: HomePageComponent
  },
  {
    path: 'main',
    canActivate: [LoggedInGuard],
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
