import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import * as request from 'superagent';
import {User} from '../../models/User';


@Injectable()
export class RegisterFormService{

  private myHeaders = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

  constructor(private http: HttpClient) { }

  tryToRegister(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:6520/api/authorization/signup', user);
  }

  superAgentRegister(user: User): any{
    request
      .post('http://localhost:6520/api/authorization/signup')
      .withCredentials()
      .send(JSON.stringify({username: user.login, password: user.password}))
      .type('json')
      .end((err, res) => {
        console.log('rkek');
      });
    console.log('end');
  }

}
