import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { ReplaySubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'http://localhost:8080/CoreFinalProject/users/';
 
  private currentUser: User = new User();
  public currentUser$: ReplaySubject<User> = new ReplaySubject(1);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.currentUser$.next(new User());
  }

  public isAuthenticated(): boolean {
    if (this.currentUser.id) {
      return true;
    } else {
      return false;
    }
  }

  public isAdmin(){
    if (this.currentUser.role == "admin") {
      return true;
    }
    return false;
  }

  public login(user: User) {
    user.id = 1;
    user.name = "Zé";
    user.role = "admin";
    if (user.email !== "")  {
      this.currentUser = user;
      this.currentUser$.next(this.currentUser);
    }
  }

  public authenticateUser(user: User) {
    return this.http.post(this.url, user);
  }

  public getCurrentName():string {
    return this.currentUser.name;
  }

  public getCurrentUser() {
    return this.currentUser;
  }
  public setCurrentUser(user: User) {
   this.currentUser = user;
   this.currentUser$.next(this.currentUser);
  }

  getUsers(nameField: string, emailField: string, roleField: string) {
    const params = new HttpParams();
    params.set("nameField", nameField);
    params.set("emailField", emailField);
    params.set("roleField", roleField);
    return this.http.get(this.url, {params});
  }

}
