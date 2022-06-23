import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/register`, user);
  }
}
