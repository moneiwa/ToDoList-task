// src/ToDoList.jsx
import React, { useState } from 'react';
import './index.css';

function ToDoList() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, checked: false }]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const checkTodo = (index) => {
    const newTodos = todos.map((todo, i) => (
      i === index ? { ...todo, checked: !todo.checked } : todo
    ));
    setTodos(newTodos);
  };

  return (





  
    <div className="todo-container">
      <h1>ToDo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button">Add</button>
      </div>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Check</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index} className={todo.checked ? 'completed' : ''}>
              <td>
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => checkTodo(index)}
                />
              </td>
              <td>{todo.text}</td>
              <td>
                <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;
