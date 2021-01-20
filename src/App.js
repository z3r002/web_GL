import './App.css';
import React from "react";
import {useRoutes} from "./routes";
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from "./components/NavBar";


export default function  Homer(){
    const token = localStorage.getItem('token')
    const routes = useRoutes(token != null)

    return(
        <Router>
            <NavBar/>
            <div>{routes}</div>
        </Router>
    )
}


