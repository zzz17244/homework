import './App.css';
import ToDoItems from './ToDoItem';

function App() {
  const items = [
    { todo: "one", priority: 0 },
    { todo: "two", priority: 2 },
    { todo: "three", priority: 0 },
    { todo: "four", priority: 4 },
    { todo: "five", priority: 6 },
    { todo: "six", priority: 8 },
    { todo: "seven", priority: 5 },
    { todo: "eight", priority: 8 },
    { todo: "nine", priority: 9 },
    { todo: "ten", priority: 1 },
  ];

  return (
    <>
      <h2>To do items</h2>
      <div>
        {items.map((item, index) => (
          <ToDoItems numbers={item} index={index} />
        ))}
      </div>
    </>
  );
}

export default App;



