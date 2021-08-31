import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/guard/auth.guard';
import { Error404Component } from './@core/modules/error404/error404.component';

const routes: Routes = [

  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dragon/dragon.module').then((m) => m.DragonModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./dragon/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: Error404Component,
    canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
