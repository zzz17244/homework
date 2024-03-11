import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ToDoItem from './ToDoItem';

function App() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <h2>To do items</h2>
      <div>
        {items.map((item) => (
          <ToDoItem number={item} key={item} />
        ))}
      </div>
    </>
  );
}

export default App;




