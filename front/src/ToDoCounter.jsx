const ToDoCounter = (props) => {
    const { toDos } = props;
    return (
        <div>
            <p>Cantidad de tareas: {toDos.length}</p>
        </div>
    )
}

export default ToDoCounter