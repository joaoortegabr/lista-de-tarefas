import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import '../style.css'
import '../icondone.png'
import '../icondel.png'
import '../iconedit.png'


function TaskList() {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return
        }
        const newTasks = [task, ...tasks];

        setTasks(newTasks);

    };

    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        
        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
    };

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id);

        setTasks(removeArr)
    };

    const completedTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1>Lista de Tarefas</h1>
            <TaskForm onSubmit={addTask}/>
            <Task 
                completedTask={completedTask} 
                removeTask={removeTask}
                updateTask={updateTask}
                tasks={tasks} />
        </div>
    )
}

export default TaskList