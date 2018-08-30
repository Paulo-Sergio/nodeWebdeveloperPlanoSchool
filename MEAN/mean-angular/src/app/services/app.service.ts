import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppService {

  private url = 'http://localhost:3000'

  constructor(private http: Http) { }

  fetchServer() {
    return this.http.get(this.url)
  }

}
