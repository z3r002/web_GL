import React from "react";
import './AuthPage.css'
import {inject, observer} from "mobx-react";
import {NavLink} from "react-router-dom";


export const AuthPage = inject('auth')(observer((props) => {
    const Input = (name, type = 'text') => <input value={props.auth.valuesAuth[name]} name={name}
                                                  onChange={props.auth.setValues}
                                                  type={type} className='input' placeholder={name}/>

    return (
        <>
            <form className='main'>

                <h1 className="form_title">Авторизируйтесь</h1>

                {Input('email')}
                {Input('password', 'password')}

                <button onClick={props.auth.sendAuth} className="button">Войти</button>
                <NavLink className='new_account' to='/reg'>Новая учетная запись</NavLink>
            </form>

        </>
    )
}));
