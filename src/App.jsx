import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [inputValue, setInputValue] = useState('');

      const addTodo = () => {
        if (inputValue.trim()) {
          setTodos([...todos, inputValue.trim()]);
          setInputValue('');
        }
      };

      return (
        <div className="app">
          <h1>To-Do List</h1>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
