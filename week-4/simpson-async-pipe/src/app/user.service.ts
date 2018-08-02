import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  users: User[] = [
    {id: 1, name: "Johann", pricePerPound: "Bach", quantity: "505 Main Street"},
    {id: 2, name: "Wolfgang", pricePerPound: "Mozart", quantity: "1000 S Main Street"},
    {id: 3, name: "Ludwig", pricePerPound: "Beethoven", quantity: "300 Main Street"},
    {id: 4, name: "Giuseppe", pricePerPound: "Verdi", quantity: "2001 N Main Street"},
    {id: 5, name: "Frederic", pricePerPound: "Chopin", quantity: "601 E Main Street"}
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return Observable.of(this.users);
  }
}