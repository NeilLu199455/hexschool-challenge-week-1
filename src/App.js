import React, { Component } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
