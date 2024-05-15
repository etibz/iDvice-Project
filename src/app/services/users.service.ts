import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl : string = "http://localhost:3000/users";
  headers = {'content-type': 'application/json' };
  email !: any
  sendRegistrationEmail(email: any) {
    throw new Error('Method not implemented.');
  }
  users : User[] = []
  constructor(private http:HttpClient) {
    this.refreshUsers()
  }
  refreshUsers(){
    this.getUsers().subscribe(
      (data) => {
        this.users = data
      }
    )
  }
  isExist(email : string){
    for(let user of this.users)
      if(user.email==email) return true;
    return false;
  }
  getUsers()  : Observable<any>{
    return this.http.get(this.baseUrl)
  }

  getUser(email : string){
    for(let user of this.users)
      if(user.email==email) return user;
    return null;
  }
  addUser(user : User) : Observable<any>{
    let body = JSON.stringify(user)
    return this.http.post(this.baseUrl,body,{headers:this.headers})
  }
  login(email : string, pass : string){
    for(let user of this.users){
      if(user.email == email && user.password == pass){
        sessionStorage.setItem('user',email)
        sessionStorage.setItem('userImg',user.img)
        return true;
      } 
    }
    return false;
  }
  logout(){
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('userImg')
  }
  register(name:string, mail:string,pass:string,gender:string,bdate:string){
    let user = new User(name,mail,pass,gender,bdate)
    this.addUser(user).subscribe(
      (data) => {
        this.refreshUsers()
      }
    )
  }
  getCurrentUser(){
    this.email = sessionStorage.getItem('user')
    return this.getUser(this.email)
  }
}