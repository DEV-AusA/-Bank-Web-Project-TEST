import { useState } from "react";
import User1 from "./User1";
import User2 from "./User2";

const Online = () => {
    // uso el hook useState
    const [state, setState] = useState("OFFLINE");

    // declaro lafunction a enviar a los componentes hijos
    const handleChangeStatus = () => {
        state === "OFFLINE" ? setState("ONLINE") : setState("OFFLINE")        
    }

    return (
        <div>
            {/* envio la handlefunction a los componentes hijos */}
            <User1 state = {state} handleChangeStatus={handleChangeStatus} />
            <User2 state = {state} handleChangeStatus={handleChangeStatus} />
        </div>
    );
};

export default Online