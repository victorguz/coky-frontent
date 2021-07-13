import { Injectable, OnInit } from '@angular/core';
import { User } from "../models/users.model";
import { Service } from '../../../../core/service';
import { Checks } from '../../../../core/checks';

/**
 * UsersService
 * @author Victorguz <victorguzber@gmail.com> June-2021
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private service: Service<User>) {
    this.service.ENTITY_NAME = "users";
  }


  /**
   * Obtiene todos los campos en un rango
   * @param limit
   * @param offset
   * @param column
   * @param order
   * @returns
   */
  async all(limit: number = 100, offset: number = 0, column = "id", order = "desc"): Promise<User> {
    return await this.service.all(limit, offset, column, order);
  }

  /**
    * El método "getOne" utiliza el metodo by para obtener un solo registro
   * @param value
   * @param column
   * @returns
   */
  async getOne(value: any, column: string = "id"): Promise<User> {
    return await this.service.oneby(value, column);
  }

  /**
   * El método "By" devuelve los registros que coinciden con
   * la columna y el valor dado. También se puede definir un limit y offset
   * @param value
   * @param column
   * @param limit
   * @param offset
   * @returns
   */
  async by(value: any, column: string = "id", limit: number = 100, offset: number = 0): Promise<User> {
    return await this.service.by(value, column, limit, offset);
  }

  /**
   * El método "create" añade una instancia de la entidad a la base de datos
   * @param entity
   * @returns
   */
  async create(entity: User): Promise<User> {
    return await this.service.create(entity);
  }

  /**
    * El método "update" modifica una instancia de la entidad en la base de datos
    * @param id
    * @param entity
    * @returns
    */
  async update(id: number, entity: User): Promise<User> {
    return await this.service.update(id, entity);
  }

  /**
    * El método "delete" elimina una instancia de la entidad de base de datos
  * @param id
  * @returns
  */
  async delete(id: number) {
    return await this.service.delete(id);
  }
  /**
   * El método "describe" describirá los campos de la entidad de la base de datos
   */
  async describe() {
  }

}
