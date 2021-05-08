import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../view/default/not-found/not-found.component';
import { LoginComponent } from '../view/users/login/login.component';

const routes: Routes = [
  // /**
  //  * Admin Routes
  //  */
  // //Home
  // {
  //   path: Config.adminRoute + "", component: AdminHomeComponent,
  //   data: {
  //     roles: ["all"],
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
  //     roles: ["all"],
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
    path: ''/**'users/login'*/, component: LoginComponent,
    data: {
      roles: ["all"],
      title: "Login",
    },
  },
  // {
  //   path: 'admin/users/register', component: AdminRegisterComponent,
  //   data: {
  //     roles: ["all"],
  //     title: "Registrarse",
  //   },
  // },




  // /**
  //    * Public Routes
  //    */
  // {
  //   path: '', component: PublicHomeComponent,
  //   data: {
  //     roles: ["all"],
  //     title: "home",
  //   }
  // },
  // {
  //   path: 'services', component: PublicServicesComponent,
  //   data: {
  //     roles: ["all"],
  //     title: "services",
  //   }
  // },
  // {
  //   path: 'plans', component: PublicPlansComponent,
  //   data: {
  //     roles: ["all"],
  //     title: "plans",
  //   }
  // },
  // {
  //   path: 'about', component: PublicAboutComponent,
  //   data: {
  //     roles: ["all"],
  //     title: "about",
  //   }
  // },
  // {
  //   path: 'contact', component: PublicContactComponent,
  //   data: {
  //     roles: ["all"],
  //     title: "contact",
  //   }
  // },
  // {
  //   path: 'quote/:type', component: PublicContactComponent,
  //   data: {
  //     roles: ["all"],
  //     title: "quote",
  //   }
  // },




  // //dev

  //Default
  {
    path: '**', component: NotFoundComponent,
    data: {
      roles: ["all"],
      title: "404"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
