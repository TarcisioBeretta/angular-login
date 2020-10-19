import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('http://localhost:3000/users');
  }

  signup(user) {
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  signupWithFacebook() {
    return this.httpClient.get('http://localhost:3000/auth/facebook');
  }

  signupWithGoogle() {
    return this.httpClient.get('http://localhost:3000/auth/google');
  }
}
