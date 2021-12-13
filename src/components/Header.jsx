import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoListSlice';

export default function Header() {
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState('');

  function handleChange(e){
    setTodoInput(e.target.value)
  }

  function handleKeyUp(e){
    if(e.key === "Enter"){
      dispatch(addTodo({content: todoInput, todoId: crypto.randomUUID()}))
      setTodoInput('');
    }
  }
  
  return (
    <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?"
            value={todoInput}
            onChange={handleChange} 
            onKeyUp={handleKeyUp} />
    </header>
  )
}
