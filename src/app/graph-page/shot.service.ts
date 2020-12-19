import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shot} from '../models/Shot';


@Injectable()
export class ShotService{

  constructor(private http: HttpClient) { }

  makeShot(x: number, y: number, r: number): Observable<Shot>{
    return this.http.post<Shot>('  ', {
      x,
      y,
      r
    });
  }
}
