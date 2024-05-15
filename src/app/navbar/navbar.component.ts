import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = "/assets/img/Logo.jpg";
  image !: string
  email !: any
  loggedIn : boolean = false 

  constructor(private router : Router,private userService:UsersService){}

  ngOnInit(): void {
    this.email = sessionStorage.getItem('user')
    let user = this.userService.getUser(this.email)
    if(user != null) {
      if(user.gender=="male") this.image = "/assets/img/ManAvatar.png"
      else this.image = "/assets/img/WomanAvatar.png"
    }

    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(sessionStorage.getItem('user')){
          this.loggedIn = true
        }
      }
    })
  }

  logout(){
    this.loggedIn = false
    sessionStorage.removeItem('user')
  }
  userDetails(){
    this.router.navigateByUrl('/profile/user')
  }
  showImg(){
    this.email = sessionStorage.getItem('user')
    let user = this.userService.getUser(this.email)
    if(user != null) {
      this.image = user.img
      return this.image;
    }
    return null;
  }
}
