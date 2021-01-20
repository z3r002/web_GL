import React from "react";
import {inject, observer} from "mobx-react";


export const IsAuthPage = inject('auth')(observer((props) => {


    return (
        <>
            <h1>Вы авторизованы!</h1>

                <button onClick={props.auth.logOut} className="button">Выйти</button>

</>
    )
}));
