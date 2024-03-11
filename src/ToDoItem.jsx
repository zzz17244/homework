// ToDoItem.js
// ToDoItem.js
import React from 'react';
import './ToDoItem.css'; // Import CSS file for styling

export default function ToDoItem(props) {
  return (
    <div className={`todo-item ${props.number === 1 || props.number === 3 ? 'highlightred' : ''}`}>
      Item number {props.number}
    </div>
  );
}
