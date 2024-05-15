import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  hidePassword = true;
  passwordsMatch = true; // משתנה חדש לבדיקת התאמה של הסיסמאות

  constructor(private formBuilder : FormBuilder , private userService : UsersService, private router:Router){
    this.registerForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*\\.com")]),
      password : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPassword: ['', Validators.required], // שדה חדש לאימות סיסמה
      gender : ['male', Validators.required],
      dateOfBirth : ['', Validators.required] 
    });
  }

  ngOnInit(): void {}

  register(){
    this.checkPasswords();
    if (this.passwordsMatch) {
      let name = this.registerForm.value.name;
      let mail = this.registerForm.value.email;
      let pass = this.registerForm.value.password;
      let gender = this.registerForm.value.gender;
      let date = this.registerForm.value.dateOfBirth;
      this.userService.register(name,mail,pass,gender,date);
      this.router.navigateByUrl('profile/login');
    }
  }

  // פונקציה חדשה לבדיקת התאמה של הסיסמאות
  checkPasswords() {
    let pass = this.registerForm.controls.password.value;
    let confirmPass = this.registerForm.controls.confirmPassword.value;

    this.passwordsMatch = pass === confirmPass;
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
