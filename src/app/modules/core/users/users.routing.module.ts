import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/services/guard.service';
import { LoginHelpComponent } from '../auth/components/login-help/login-help.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login', component: LoginComponent, data: { title: "Login" },
      },
      {
        path: 'register', component: RegisterComponent, data: { title: "Register" },
      },
      {
        path: 'login/help', component: LoginHelpComponent, data: { title: "Login help", },
      },
      {
        path: 'login/help/:type', component: LoginHelpComponent, data: { title: "{type} help", },
      },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];
/**
 * Asignar control de roles a las rutas -> data.roles debes ser de tipo UserRole[]
 */
routes.forEach((route, index) => {
  if (route.data && route.data.roles && Array.isArray(route.data.roles) && route.data.roles.length > 0) {
    routes[index].canActivate = [AuthGuardService]
  }
});

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
