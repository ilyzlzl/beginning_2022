import React,{Component} from "react"//这里的React不能省略
import {Route,BrowserRouter,Switch} from "react-router-dom" 
// import { Button } from 'antd';
import Admin from "./pages/admin/admin";
import Login from "./pages/login/login";
export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/admin" component={Admin}></Route>
            </Switch>
            </BrowserRouter>
        )
    }
}