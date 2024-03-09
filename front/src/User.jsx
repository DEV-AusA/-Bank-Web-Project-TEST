import { useState } from "react";

const User = ({ handleUserButtonClick }) => {
    const [updateData, setUpdateData] = useState("Editando....");
    const handleUpdateData = ()=> {
        setUpdateData("Actualizado!!!!");
        handleUserButtonClick("Se actualizo el perfil con exito");
    }
    return (
        <div>
            <button onClick={handleUpdateData}>Actualizar Perfil</button>
            <p>Estado del perfil: {updateData}</p>
        </div>        
    );
};

export default User