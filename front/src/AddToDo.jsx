
const AddToDo = (props) => {
    const { toDos, setToDos } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const tarea = event.target.elements.todo.value;
        setToDos([...toDos, tarea])
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Tarea: </label>
            <input type="text" id="todo"/>
            <button type="submit">Sumar tarea</button>            
        </form>
    );
};

export default AddToDo