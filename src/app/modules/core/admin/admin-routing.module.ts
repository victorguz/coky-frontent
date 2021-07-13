import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: 'users',
    loadChildren: () => import("../users/users.module").then(m => m.UsersModule)
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
