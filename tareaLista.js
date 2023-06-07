import React from "react";
import TodoItem from "./todoItem";

function TareaLista({tareas, eliminar}) {
  return <div>{
        tareas.map((todo, index) => (
            <TodoItem key={`todo-${index}`} todo={todo} eliminar= {eliminar}/>
        ))
    }</div>;
}

export default TareaLista;
