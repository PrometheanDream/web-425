import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {
  getUser(): User {
    return new User(0, "Simpson", "William", "5577 Billy Road, Bringam, NE 67101");
  }
}