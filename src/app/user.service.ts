import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "./login-user";
import {Result} from "./common/result"

export  interface  User{
  id:number;
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="/api/users";
  //依赖注入
  constructor(private http: HttpClient) { }
  login(user:LoginUser){
    //返回的结果是Observable对象
    return this.http.post<Result<User>>(this.url+"login",user);
  }
}
