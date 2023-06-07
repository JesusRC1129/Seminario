import React from 'react'

function TodoItem({todo, eliminar}) {

    const getStyle = () => {
        return {
            margin: '20px',
            border: '1px solid #ffff',
            backgroundColor: '#ccf7e3'
        }
    }

  return (
    <div style={getStyle()}>
        {todo.tarea}
        <button onClick={() => eliminar(todo.id)}>X</button>
    </div>
  )
}

export default TodoItem;