import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../todoListSlice';

function TodoItem({ id, content, completed }) {
  const dispatch = useDispatch();
  
  function handleDelete(e){
    dispatch(deleteTodo({ targetId: id }));
  }

  function handleComplete(e) {
    dispatch(completeTodo({ targetId: id }));
  }

  return (
    <li className={completed ? 'completed' : null}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onClick={handleComplete} />
        <label>{content}</label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      <input className="edit" value={content} />
    </li>
  )
}

export default function Main({ todoList }) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todoList.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </section>
  )
}