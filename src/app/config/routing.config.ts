import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../modules/auth/guard.service';
import { NotFoundComponent } from '../view/default/not-found/not-found.component';
import { LoginComponent } from '../view/login/login.component';


const routes: Routes = [
  // /**
  //  * Admin Routes
  //  */
  // //Home
  // {
  //   path: Config.adminRoute + "", component: AdminHomeComponent,
  //   data: {
  //     roles: [],
  //     title: "home",
  //     sidebar: {
  //       icon: "home",
  //       position: 1,
  //     }
  //   }
  // },
  // //Users
  // {
  //   path: Config.adminRoute + '/users', component: AdminUsersComponent,
  //   data: {
  //     roles: [],
  //     title: "Users",
  //     sidebar: {
  //       icon: "people",
  //       position: 2,
  //     }
  //   },
  // },
  // {
  //   path: Config.adminRoute + '/users/details/:id', component: AdminUsersComponent,
  //   data: {
  //     roles: ["admin"],
  //     title: "User details"
  //   }
  // },
  {
    path: 'users/login', component: LoginComponent,
    data: {
      title: "Login",
    },
  },
  // {
  //   path: 'admin/users/register', component: AdminRegisterComponent,
  //   data: {
  //     roles: [],
  //     title: "Registrarse",
  //   },
  // },




  // /**
  //    * Public Routes
  //    */
  // {
  //   path: '', component: PublicHomeComponent,
  //   data: {
  //     roles: [],
  //     title: "home",
  //   }
  // },
  // {
  //   path: 'services', component: PublicServicesComponent,
  //   data: {
  //     roles: [],
  //     title: "services",
  //   }
  // },
  // {
  //   path: 'plans', component: PublicPlansComponent,
  //   data: {
  //     roles: [],
  //     title: "plans",
  //   }
  // },
  // {
  //   path: 'about', component: PublicAboutComponent,
  //   data: {
  //     roles: [],
  //     title: "about",
  //   }
  // },
  // {
  //   path: 'contact', component: PublicContactComponent,
  //   data: {
  //     roles: [],
  //     title: "contact",
  //   }
  // },
  // {
  //   path: 'quote/:type', component: PublicContactComponent,
  //   data: {
  //     roles: [],
  //     title: "quote",
  //   }
  // },




  // //dev

  //Default
  { path: '', redirectTo: '/users/login', pathMatch: 'full' },
  {
    path: '**', component: NotFoundComponent,
    data: {
      roles: [],
      title: "404"
    }
  }
];

routes.forEach((route, index) => {
  if (route.data && route.data.roles && Array.isArray(route.data.roles) && route.data.roles.length > 0) {
    routes[index].canActivate = [AuthGuardService]
  }
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
