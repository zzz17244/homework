import React from 'react';
import './ToDoItem.css'; // Import CSS file for styling

export default function ToDoItems(props) {
  return (
    <div className={`todo-item ${props.numbers.priority === 0 ? 'highlightred' : 'todo-itemss'}`}>
      Nmuber#: {props.index + 1} : "{props.numbers.todo}" :  Priority= {props.numbers.priority}
    </div>
  );
}
