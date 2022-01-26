import React,{ Component } from "react";
import logo from"./image/logo.png"
import "./login.less"

export default class Login extends Component{
    render(){
        return(
            <div className="login">
              <header className="login_header">
                  <img src={logo} alt="logo" />
              <h1>React项目:后台管理系统</h1>
              </header>
              <section className="login_content">

              </section>
            </div>
        )
    }
}