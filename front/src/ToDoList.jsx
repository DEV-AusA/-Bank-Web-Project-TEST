import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoCounter from "./ToDoCounter";

const ToDoList = (props) => {
    const [toDos, setToDos] = useState(["Limpiar", "Barrer", "Cocinar", "Jugar"]);

    return (
        <div>
            <h1>Lista de tareas</h1>
            <ul>
                {
                    toDos.map((tarea) => {
                        return (
                            <li key={tarea}>{tarea}</li>
                        )
                    })
                }
            </ul>
            <AddToDo toDos = {toDos} setToDos = {setToDos} />
            <ToDoCounter toDos = {toDos} />
        </div>
    )
}

export default ToDoList