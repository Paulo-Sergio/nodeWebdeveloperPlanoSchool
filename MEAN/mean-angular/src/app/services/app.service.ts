import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Post } from './post';

@Injectable()
export class AppService {

  private url = 'http://localhost:3000'

  constructor(private http: Http) { }

  fetchServer() {
    return this.http.get(this.url)
  }

  save(title: string, body: string): Observable<Post> {
    const data = JSON.stringify({ title, body })
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const options = new RequestOptions({ headers })

    return this.http.post(`${this.url}/posts`, data, options)
      .map((res) => {
        return res.json()
      })
  }

}
