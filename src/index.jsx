import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { store } from './store'
import { Provider, useSelector } from 'react-redux'

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function App() {
  const todoList = useSelector(state => state.todoList.value);
  return (
    <section className="todoapp">
      <Header />
      <Main todoList={todoList} />
      <Footer />
    </section>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);