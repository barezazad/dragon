import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../@core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    loadChildren: () => {
      return import('./home/home.module').then((m) => m.HomeModule);
    },
  },
  // {
  //   path: 'logout',
  //   redirectTo: '/login',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragonRoutingModule { }
