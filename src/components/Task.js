import React, { useState } from 'react'
import TaskForm from './TaskForm'
import '../style.css'
import '../icondone.png'
import '../icondel.png'
import '../iconedit.png'


function Task({tasks, completedTask, removeTask, updateTask }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    
    if (edit.id) {
        return <TaskForm edit={edit} onSubmit={submitUpdate} />;

    }

    return tasks.map((task, index) => (
        <div className="task-row">
            <div className="buttons">
                <button onClick={() => completedTask(task.id)} className='completed-icon' alt="Marcar como concluído"></button>
                <button onClick={() => removeTask(task.id)} className='delete-icon' alt="Remover tarefa"></button>
                <button onClick={() => setEdit({id: task.id, value: task.text})} className='edit-icon' alt="Modificar tarefa"></button>
            </div>
            <div key={index} className={task.isComplete ? 'task completed' : 'task'}>
            {task.text}
            </div>  
        </div>  
    ))
};

export default Task