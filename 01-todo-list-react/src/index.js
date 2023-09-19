import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './todoList.jsx';


const todoItems = [
    { id: 1, title: 'wake up', priority: "high", created: '18.08.2023 09:00', status: 'done' },
    { id: 2, title: 'take a shower', priority: "high", created: '18.08.2023 09:01', status: 'done' },
    { id: 3, title: 'prepare breakfast', priority: "medium", created: '18.08.2023 09:01', status: 'done' },
    { id: 4, title: 'eat breakfast', priority: "medium", created: '18.08.2023 09:01', status: 'in progress' },
    { id: 5, title: 'go to work', priority: "low", created: '15.08.2023 09:01', status: 'todo' },
    { id: 7, title: 'learn react', priority: "critical", created: '15.08.2023 09:01', status: 'in progress' },
    { id: 8, title: 'complete homework', priority: "critical", created: '15.08.2023 09:02', status: 'done' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <TodoList items={todoItems}/>
  </React.StrictMode>
);

