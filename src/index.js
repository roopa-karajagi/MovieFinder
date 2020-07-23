import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import ToDoList from './Evolution/IndexAsKey'



ReactDOM.render(
    <BrowserRouter>
        <App />
</BrowserRouter>, 
document.getElementById('root'));
// ReactDOM.render(
//     <ToDoList />,
//     document.getElementById('root')
//   );

