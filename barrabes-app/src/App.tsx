import React, { useState } from 'react';
import { TodoList } from './features/todoList/TodoList';
import { Counter } from './features/counter/Counter'; 
import './App.css';


function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <header className="App-header"> 
      {toggle ?
        <TodoList />
        :
        <Counter />
      }  
      <button className="togglebutton"
      onClick={() => setToggle(!toggle)} >
      Toggle Components
      </button>
      </header>
    </div>
  );
}

export default App;
