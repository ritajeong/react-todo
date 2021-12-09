import React, {useState} from 'react';
import useTodoListAtom from '../state';

function TodoItem({ id, content, completed}){
  const { deleteTodo, completeTodo } = useTodoListAtom();
  
  function handleDelete(e){
    deleteTodo(id);
  }

  function handleComplete(e){
    completeTodo(id);
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
        {todoList.map(todo => <TodoItem {...todo} />)}
      </ul>
    </section>
  )
}