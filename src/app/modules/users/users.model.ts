import { LOCAL_STORAGE_USER } from "src/app/config/default.config";

/**
 * User class
 * @author Victorguz <victorguzber@gmail.com> June-2021
 */
export class User {
  id?: number;
  first_name?: string;
  second_name?: string;
  first_lastname?: string;
  second_lastname?: string;
  username?: string;
  password?: string;
  email?: string;
  data?: any;
  role?: UserRoles;
  status?: UserStatus;
  created?: Date;
  modified?: Date;


  public getFullName() {
    return `${this.first_name} ${this.first_lastname} ${this.second_name} ${this.second_lastname}`.trim()
  }

  /**
   * Obtiene el usuario en sesión
   * @returns usuario en sesión
   */
  static current(): User {
    const localUser = localStorage.getItem(LOCAL_STORAGE_USER)
    const parsedUser = localUser && typeof localUser == "string" ? JSON.parse(localUser) as User : null;
    return parsedUser;
  }
}

/**
 * User status
 * @author Victorguz <victorguzber@gmail.com> June-2021
 */
export enum UserStatus {
  DESACTIVE = 0,
  ACTIVE = 1,
}

/**
 * User roles
 * @author Victorguz <victorguzber@gmail.com> June-2021
 */
export enum UserRoles {
  ROOT = 0,
  ADMIN = 1,
  GENERAL = 2,
}

/**
 * User role names
 * @author Victorguz <victorguzber@gmail.com> May-2021
 */
export enum UserRoleNames {
  ROOT = "Main user",
  ADMIN = "Admin user",
  GENERAL = "General user",
}
