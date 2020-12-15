import { Component} from '@angular/core';
import { AuthFormService } from './auth-form.service';


export class User{
  login = '';
  pass = '';
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  templateUrl: 'auth-form.component.html',
  styleUrls: ['auth-form.component.css'],
  providers: [AuthFormService]
})

export class AuthFormComponent{

  loginned = false;

  user: User = new User();

  constructor(private authService: AuthFormService) { }

  tryToLog(user: User): void{
    this.authService.tryToLogin(user);
    console.log(this.authService.tryToLogin(user));
    this.loginned = JSON.parse(sessionStorage.getItem('loggedIn'));
  }
}
