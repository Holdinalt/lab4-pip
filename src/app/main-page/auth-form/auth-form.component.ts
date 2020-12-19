import { Component} from '@angular/core';
import { AuthFormService } from './auth-form.service';
import {User} from '../../models/User';
import {RegisterFormService} from './register-form.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  templateUrl: 'auth-form.component.html',
  styleUrls: ['auth-form.component.css'],
  providers: [AuthFormService, RegisterFormService]
})

export class AuthFormComponent{

  loginned = false;

  user: User = new User();

  constructor(private authService: AuthFormService, private registerService: RegisterFormService) { }

  tryToLog(user: User): void{
    // this.authService.tryToLogin(user).subscribe((data) => console.log('data', data));
    // this.loginned = JSON.parse(sessionStorage.getItem('loggedIn'));
    // console.log(this.authService.superAgentLogin(user));
  }

  tryToRegister(user: User): void{
    this.registerService.tryToRegister(user).subscribe((data) => console.log(data));
    //this.registerService.superAgentRegister(user);
  }
}
