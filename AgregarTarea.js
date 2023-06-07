import React, { useState } from 'react'

function AgregarTarea({addTodo}) {

    const [userInput, setUserInput] = useState('Tarea');
    
    const HendleOnChange =(e) => {
        setUserInput(e.curremTarget);
    }

    const handleSumit = (e) => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            addTodo(userInput);
            setUserInput('');
        }
    }

  return (
    <div style={{ margin: 20 }}>
        <form onSubmit={handleSumit}>
            <input type= "text" value={userInput} onChange={HendleOnChange}/>
            <button>Agregar Tarea</button>
        </form>
    </div>
  )
}

export default AgregarTarea;