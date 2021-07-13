import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHelpComponent } from './components/login-help/login-help.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/guard.service';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent, data: { title: "Login" },
  },
  {
    path: 'register', component: RegisterComponent, data: { title: "Register" },
  },
  {
    path: 'help', component: LoginHelpComponent, data: { title: "Login help", },
  },
  {
    path: 'help/:type', component: LoginHelpComponent, data: { title: "{type} help", },
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
export class AuthRoutingModule { }
