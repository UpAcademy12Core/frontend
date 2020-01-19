import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { ReplaySubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'http://localhost:8080/coreFinalProject/users/';
 
  private currentUser: User = new User();
  public currentUser$: ReplaySubject<User> = new ReplaySubject(1);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.currentUser$.next(new User());
  }

  public isAuthenticated(): boolean {
    if (this.currentUser && this.currentUser.id) {
      return true;
    } else {
      return false;
    }
  }

  public isAdmin(){
    if (this.currentUser && this.currentUser.role == "ADMIN") {
      return true;
    }
    return false;
  }

  public authenticateUser(user: User) {
    return this.http.post(this.url + "login", user);
  }

  public getCurrentName():string {
    return this.currentUser.username;
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public setCurrentUser(user: User) {
   this.currentUser = user;
   this.currentUser$.next(this.currentUser);
  }

  public logout() {
    this.currentUser = null;
    this.currentUser$.next(this.currentUser);
  }

  public getUsers(nameField: string, emailField: string, roleField: string) {
    const params = new HttpParams();
    params.set("username", nameField);
    params.set("email", emailField);
    params.set("role", roleField);
    return this.http.get(this.url, {params});
  }

  public createUser(user: User) {
    return this.http.post(this.url, user, {responseType: 'text'});
  }

  public updateUser(user: User) {
    return this.http.put(this.url, user, {responseType: 'text'});
  }

  public deleteUser(id: number) {
    return this.http.delete(this.url + id, {responseType: 'text'});
  }

}
