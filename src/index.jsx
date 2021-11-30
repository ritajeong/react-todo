import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function App(){
  return (
    <section className="todoapp">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));