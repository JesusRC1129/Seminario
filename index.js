import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import data from "./data.json";
import TareaLista from "./tareaLista";
import AgregarTarea from "./AgregarTarea";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Contador() {
  const [contador, setContador] = useState(0);

  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador = {contador}</h1>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

function ListaTareas() {
  const [tareas, setTareas] = useState(data);

  const eliminar = (id) => {
    setTareas([...tareas].filter((todo) => todo.id !== id));
  };

  const addTodo = (nuevaTarea) => {
    console.log('Nueva Tarea', nuevaTarea);
    let newItem = {id: +new Date(), tarea: nuevaTarea };
    setTareas([...tareas, newItem]);
  }

  return (
    <div>
      <AgregarTarea addTodo= {addTodo}/>
      <TareaLista tareas={tareas} eliminar={eliminar} />
    </div>
  );
}

root.render(
  <div>
    <Contador />
    <ListaTareas />
  </div>
);
