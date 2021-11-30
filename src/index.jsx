import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './index.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { produce } from "immer";

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function App(){
  const initialValue = [
    { id: crypto.randomUUID(), content: "투두 리스트", completed: false},
  ]
  const [todoList, setTodoList] = useState(initialValue);

  function addTodo(content){
    const newTodo = { id: crypto.randomUUID(), content, completed: false };

    setTodoList(old => [...old, newTodo]);
  }

  function deleteTodo(targetId){
    setTodoList(old => old.filter(todo => todo.id !== targetId));
  }

  function completeTodo(targetId){
    setTodoList(produce(old => {
        const target = old.find(todo => todo.id === targetId);
        target.completed = !target.completed;
    }));
  }

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main todoList={todoList} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));