import React, { useState, useEffect, useRef } from 'react'
import '../style.css'
import '../icondone.png'
import '../icondel.png'
import '../iconedit.png'

function TaskForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');

    };


    return (
        <form className="task-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input type="text" placeholder="Atualizar esta tarefa" value={input} name="text" className="task-input" onChange={handleChange} ref={inputRef}/>
                <button className="task-button edit" onChange={handleChange} alt="Clique para atualizar esta tarefa">O</button>
                </>
            ) : (
                <>
                <input type="text" placeholder="Adicione uma tarefa" value={input} name="text" className="task-input" onChange={handleChange} ref={inputRef}/>
                <button className="task-button" onChange={handleChange} alt="Clique para adicionar uma tarefa">+</button>
                </>
            )}
            
        </form>
    )
}

export default TaskForm