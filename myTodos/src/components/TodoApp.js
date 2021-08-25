import React, { useState , useEffect} from 'react'
import Filter from './Filter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [filterTodos,setFilterTodos]=useState([]);

    const [select, setSelect] = useState('All');


    useEffect(() => {
        selectHandler(select);
        
    }, [todos,select])

    const addTodo = (input) => {
        const newTodo = { id: Math.floor(Math.random() * 1000), text: input, isComplete: false };
        setTodos([...todos, newTodo]);

    }
    const completeHandler = (todo) => {
        const index = todos.findIndex(t => t.id === todo.id);
        const newTodo = { ...todos[index] };
        newTodo.isComplete =!newTodo.isComplete;
        const updateTodos = [...todos];
        updateTodos[index] = newTodo;
        setTodos(updateTodos);

    }
    const removeHandler = (todo) => {
        const updatedTodos=todos.filter(t=>t.id!==todo.id);
        setTodos(updatedTodos);

    }
    const updateTodo=(newValue,id)=>{
        const index = todos.findIndex(t => t.id === id);
        const newTodo = { ...todos[index] };
        newTodo.text =newValue;
        const updateTodos = [...todos];
        updateTodos[index] = newTodo;
        setTodos(updateTodos);



    }
    const selectHandler=(select)=>{
        switch(select){
            case 'All' :setFilterTodos(todos);
            break;
           
            case 'completed' : setFilterTodos(todos.filter(t=>t.isComplete));
            break;
           
            case 'unCompleted' : setFilterTodos(todos.filter(t=>!t.isComplete));
            break;
            
            default : setFilterTodos(todos);
        }

    }



    return (
        <div className="app">
            <header>Todo App</header>
            <TodoForm inputHandler={addTodo} />
            <Filter selectHandler={selectHandler} select={select} setSelect={setSelect} />
            <TodoList todos={filterTodos}
                completeHandler={completeHandler}
                removeHandler={removeHandler}
                updateTodo={updateTodo}
            />
            <p className='help'>click on text to complete</p>
        </div>
    )
}

export default TodoApp;
