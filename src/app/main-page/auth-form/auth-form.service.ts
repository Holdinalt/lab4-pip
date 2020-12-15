import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class User{
  login = '';
  pass = '';
}


@Injectable()
export class AuthFormService{

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean): void{
    this.loggedInStatus = value;
    sessionStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn(): boolean{
    return this.loggedInStatus;
  }

  tryToLogin(user: User): Observable<User> {
    const login = user.login;
    const pass = user.pass;
    return this.http.post<User>('http://localhost:3000/postuser', {
      login,
      pass,
    });
  }
}
