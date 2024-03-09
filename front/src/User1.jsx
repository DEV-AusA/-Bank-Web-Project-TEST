const User1 = ({ state, handleChangeStatus }) => {
    let User1 = "Cesar";
    return (
        <div>
            <p>{User1}: {state}</p>
            <button onClick={handleChangeStatus}>Cambiar estado</button>
        </div>
    );
};

export default User1