import EditProfile from "./editProfileIndex";
import { useState } from "react";

export default function IconeEdit() {
    const [showRegister, setshowRegister] = useState(false);

    const handleNotRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <EditProfile />;
    }

    return (
        <div>
            <h1>Editar</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="Editar" onClick={handleNotRegister} />
        </div>
    )
};

