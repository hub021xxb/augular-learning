import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
//配置路由
const routes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];
@NgModule({
  //声明组件才能正常使用组件
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  //导入模块
  imports: [
    BrowserModule,
    //导入网络请求模块
    HttpClientModule,
    //使用模板驱动表单
    FormsModule,
    //导入路由模块
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
