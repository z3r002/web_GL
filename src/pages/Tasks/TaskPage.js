import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";
import './TasksPage.css'

export const TaskPage = inject('tasks')(observer((props) => {

    useEffect(() => {
        props.tasks.loadTasks()
    }, []);

    if (props.tasks.loader) {
        return (
            <h1>Загрузка данных...</h1>
        )
    } else {
        return (
            <div className='tasks'>
                <div className='test'>
                    <input value={props.tasks.addInput} name='addInput'
                           onChange={(value) => props.tasks.setAddInput(value)}
                           type='text' className='addInput' placeholder='Напишите свою задачу...'/>
                    <div onClick={props.tasks.sendTodo} className='addButton'>+</div>

                </div>

                {
                    props.tasks.tasks.map((todo) => (
                        <div key={todo.id} onDoubleClick={(event) => props.tasks.editTodo(todo, event)}
                             className='item'><input type="checkbox" checked={todo.done}
                                                     onChange={(event) => props.tasks.checkTodo(todo, event)}/>
                            {todo.body}
                            <div onClick={() => props.tasks.deleteTodo(todo)} className='trash'>X</div>
                        </div>
                    ))
                }
            </div>
        )
    }

}));
