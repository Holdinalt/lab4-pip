import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import * as request from 'superagent';
import {User} from '../../models/User';


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

  tryToLogin(user: User): Observable<User>{
    const myHeaders = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
    return this.http.post<User>('http://localhost:6511/api/authorization/signin', user);
  }

  superAgentLogin(user: User): any{
    request
      .get('http://localhost:6501/api/authorization/signin')
      .auth(user.login, user.password)
      .set('X-Requested-With', 'XMLHttpRequest')
      .end((err, res) => {
        return res;
      });
  }

}
