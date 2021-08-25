import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList({ todos, removeHandler, completeHandler, updateTodo }) {
    const [edit, setEdit] = useState({ id: null, text: '', isComplete: false });

    const renderTodos = () => {
        {

            return (

                todos.map(todo => {

                    return <Todo key={todo.id} text={todo.text} isComplete={todo.isComplete}
                        removeHandler={() => removeHandler(todo)}
                        completeHandler={() => completeHandler(todo)}
                        editHandler={() => setEdit(todo)}
                    />
                })
            )
        }
    }
    const editTodo = (newValue) => {     // new value : input
        
        updateTodo(newValue, edit.id);
        setEdit({ id: null, text: '' })



    }
    return (
        <div className="todo-list">
            {todos.length === 0 && <p className="empty">empty ... !</p>}
            {edit.id ? <TodoForm inputHandler={editTodo} edit={edit} /> : renderTodos()}

        </div>
    )
}

export default TodoList
