import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LOCAL_STORAGE_TOKEN, LOCAL_STORAGE_USER } from 'src/app/config/default.config';
import { Helpers } from 'src/app/core/helpers/helpers';
import { environment } from 'src/environments/environment';
import { User } from '../../users/models/users.model';


/**
 * AuthService
 * @author Victorguz <victorguzber@gmail.com> June-2021
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private jwtHelper: JwtHelperService,
    private http: HttpClient) { }

  /**
   * Check if the user is authenticated
   * @returns true or false - if the user is authenticated
   */
  public isAuthenticated(): boolean {

    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  /**
   * Verify user by username and password
   * @param data json with username and password
   * @returns user
   */
  async verifyWithUsernameAndPassword(data: AuthByUsernameDto) {
    const result = await this.http.post(`${environment.authApiUrl}login`, data).toPromise() as AuthJwtDto
    localStorage.setItem(LOCAL_STORAGE_TOKEN, result.access_token)
    localStorage.setItem(LOCAL_STORAGE_USER, await Helpers.encode(JSON.stringify(result.user)))
    return result.user;
  }

  /**
   * Verify user by email and password
   * @param data json with email and password
   * @returns user
   */
  async verifyWithEmailAndPassword(data: AuthByEmailDto) {
    const result = await this.http.post(`${environment.authApiUrl}login`, data).toPromise() as AuthJwtDto
    localStorage.setItem(LOCAL_STORAGE_TOKEN, result.access_token)
    localStorage.setItem(LOCAL_STORAGE_USER, await Helpers.encode(JSON.stringify(result.user)))
    return result.user;
  }


}

export class AuthToken {
  readonly role: number;
  readonly sub: number;
}

export class AuthByEmailDto {
  readonly email: string;
  readonly password: string;
}

export class AuthByUsernameDto {
  readonly username: string;
  readonly password: string;
}


export class TokenDto {
  readonly role: number;
  readonly sub: number;
}

export class AuthJwtDto {
  readonly access_token: string;
  readonly user: User;

}
