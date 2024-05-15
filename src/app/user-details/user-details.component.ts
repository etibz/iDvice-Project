import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit  {
  name !: string | undefined
  image !: string | undefined
  email !: any | undefined
  gender !: string | undefined
  dateOfBirth !: string | undefined

  constructor(private actRoute : ActivatedRoute, private userService:UsersService){
    this.email = sessionStorage.getItem('user')
    let user = userService.getUser(this.email)
    if(user != null){
       this.name = user?.name
       this.image = user?.img 
       this.dateOfBirth = user?.dateOfBirth
       this.gender = user?.gender 
   }
  }

  ngOnInit(): void{}

  showGender(){
    this.email = sessionStorage.getItem('user')
    return this.userService.getUser(this.email)?.gender 
  }
  showDateOfBirth(){
    this.email = sessionStorage.getItem('user')
    return this.userService.getUser(this.email)?.dateOfBirth 
  }
  showName(){
    this.email = sessionStorage.getItem('user')
    return this.userService.getUser(this.email)?.name 
  }
  showImg(){
    this.email = sessionStorage.getItem('user')
    return this.userService.getUser(this.email)?.img 
  }

}

