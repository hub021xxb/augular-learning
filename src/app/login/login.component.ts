import { Component, OnInit } from '@angular/core';
//导入class类
import {LoginUser} from "../login-user";
import {User, UserService} from "../user.service";
import {Result} from "../common/result";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:LoginUser;

  constructor(private userService: UserService) {
    this.model=new LoginUser();
  }

  ngOnInit(): void {
  }
  login(){
    //5413
    console.log(this.model);
    //发送请求
    this.userService.login(this.model).subscribe((result:Result<User>)=>{
      if(result.success){
        alert("登录成功");
      }else{
        alert("登录失败");
      }
    },(error)=>{
      console.log(error);
      alert("登录失败");
    })
  }

}
