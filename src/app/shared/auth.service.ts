import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { User } from './userAuth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedUser : User = {
    First_name: '',
    Last_name: '',
    email: '',
    password: '',
    mobileNumber: '' 
  }

  noAuthHeader = { headers : new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http:HttpClient) { }

  signUpUser(user: User){
    return this.http.post(environment.authUrl+'sign-up',user,this.noAuthHeader);
  }

}
