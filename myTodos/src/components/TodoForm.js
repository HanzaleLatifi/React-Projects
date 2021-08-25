import React, { useState, useRef, useEffect } from 'react'

function TodoForm({ inputHandler, edit }) {
    const [input, setInput] = useState(`${edit ? edit.text:''} `);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();

    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        if (input === '') {
            alert('enter your task')
        } else {
            inputHandler(input); //pas input for add or edit
            setInput('');

        }

    }
    const changeHandler = (e) => {
        setInput(e.target.value);

    }

    return (

        <form onSubmit={submitHandler}>
            <input ref={inputRef} value={input} onChange={changeHandler} placeholder='Enter your task' className={`${edit && 'updateInput'}`} ></input>
            <button type='submit' className={`${edit && 'updateButton'}`}>{edit ? 'update' : 'ADD'}</button>
        </form>



    )
}

export default TodoForm;
