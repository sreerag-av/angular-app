import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3010/api/v1';

  generateURL(email, url): Observable<any> {
    return this.http.post(this.url + '/users/generate_url',
      {user_email: email, url: url});
  }
}
