import {Redirect, Switch, Route} from "react-router-dom";
import {AuthPage} from "./pages/Auth/AuthPage";
import {HomePage} from "./pages/HomePage";
import React from "react";
import {TaskPage} from "./pages/Tasks/TaskPage";
import {RegPage} from "./pages/Auth/RegPage";
import {IsAuthPage} from "./pages/Auth/IsAuthPage";


export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/tasks' component={TaskPage} exact/>
                <Route path='/home' component={HomePage} exact/>
                <Route path='/login' component={IsAuthPage} exact/>
                <Redirect to='/tasks'/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/home' component={HomePage} exact/>
            <Route path='/reg' component={RegPage} exact/>
            <Route path='/login' component={AuthPage} exact/>
            <Route path='/tasks' component={AuthPage} exact/>
            <Redirect to='/home'/>
        </Switch>
    )
}
