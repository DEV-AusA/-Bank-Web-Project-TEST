const User2 = ({ state, handleChangeStatus }) => {
    let User2 = "Nicolas";
    return (
        <div>
            <p>{User2}: {state}</p>
            <button onClick={handleChangeStatus}>Cambiar estado</button>
        </div>
    );
};

export default User2