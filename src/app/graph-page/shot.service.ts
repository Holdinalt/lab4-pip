import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Shot{
  x: number;
  y: number;
  r: number;
  success: boolean;
}

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
