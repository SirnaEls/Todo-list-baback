import "./Hero.css";
import "./Task.css"
import React, { useState, UseState } from "react";

function HeroBanner() {

  const card = document.getElementsByClassName("container-task");
  

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

  
    // Add todo to the list
    setList([...list, newTodo]);

    // clear input box

    setInput("");
  };
  return (
    <div className="Container">
      <div className="top">
        <h1>Bienvenue Nassir,</h1>
        <p>Prêt à effectuer de nouvelles tâches aujourd'hui ?</p>
      </div>
      <div className="input">
        <div className="task-value">
          <form className="task-value">
            <label>Ajouter une nouvelle tâche:</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              name="name"
            />
          </form>
        </div>
        <input
          onClick={() => addTodo(input)}
          id="submit-button"
          type="submit"
          value="Ajouter une tâche"
        />
      </div>
      
      
        {list.map((todo) => ( 
        <li key={todo.id} id='task-active'>
          {todo.todo}
          
        </li>
        ))}
    
    </div>

  );
}

export default HeroBanner;
