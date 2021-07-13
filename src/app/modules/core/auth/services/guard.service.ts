import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthToken, AuthService } from './auth.service';
import decode from 'jwt-decode';
import { UserRole } from 'src/app/modules/core/users/models/users.model';
import { getConfig } from 'src/app/config/default.config';

/**
 * AuthGuardService
 * @author Victorguz <victorguzber@gmail.com> June-2021
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config on the data property
    const roles: UserRole[] = route.data.roles;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload: AuthToken = decode(token);
    const tokenAllowed = !this.auth.isAuthenticated();

    if (roles && roles.length > 0) {
      if (!tokenAllowed) {
        return false;
      }
      if (!roles.includes(tokenPayload.role)) {
        this.router.navigate([getConfig("route_on_forbidden")]);
        return false;
      }
    }
    return true;
  }
}
