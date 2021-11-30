import React from 'react';

function TodoItem({ content, completed }){
    return (
      <li className={completed ? 'completed' : null}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} />
          <label>{content}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value={content} />
    </li>
    )
}

export default function Main() {
  return (
    <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
            <TodoItem content={"투두 리스트"} completed={false} />
            <TodoItem content={"투두"} completed={false} />
            <TodoItem content={"책 읽기"} completed={true} />
        </ul>
    </section>
  )
}
