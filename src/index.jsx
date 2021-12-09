import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './index.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useTodoListAtom from './state';

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function App() {
  const { todoList } = useTodoListAtom();
  return (
    <section className="todoapp">
      <Header />
      <Main todoList={todoList} />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));