import axios from "axios";
import { useState } from "react";

const editPerfil = (e) => {
  e.preventDefault();

  const usernameValue = document.getElementById("username").value;
  const birthdateValue = document.getElementById("birthdate").value;
  const firstNameValue = document.getElementById("Nome").vavlue;
  // const stateValue = document.getElementById("state").value;
  // const statusValue = document.getElementById("status").value;

  const userData = {
    firstName: firstNameValue,
    status: "Disponível",
    birthDate: birthdateValue,
    lastName: "Vitor",
    username: usernameValue,
    description: "Lorem ipsun, lorem lorem",
    email: "joaovitor@gmail.com",
    password: "senhaQ!1dojoao",
    isAdmin: true,
    state: "SC",
    profilePicture: "U3dhZ2dlciByb2Nrcw=="
  };

  axios.patch(`http://localhost:3001/user/follow/1/3` )
    .then(res => {
      console.log(res);
      alert(`Alterações salvas com sucesso`, res);

    })
    .catch(error => {
      console.error(error);

    })

};
export default function EditProfile() {
  const [username, setUsername] = useState("");
  // const [state, setState] = useState("");
  const [birthdate, setBirthDate] = useState("");
  return (
    <div>
      <div>
        <form>
          <div>
            <input
              id="username"
              className="input"
              placeholder="Username"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="date"
              id="birthdate"
              className="input"
              placeholder="Data de aniversário"
              autoComplete="off"
              value={birthdate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            {/* <input
              id="state"
              className="input"
              placeholder="Estado"
              required
              autoComplete="off"
              value={stateValue}
              onChange={(e) => setState(e.target.value)}
            /> */}
            <input
            id="firsttName"
            value={firstName}
            className="input"
            placeholder="Nome"
            autoComplete="off"
            />
          </div>
          <button onClick={editPerfil}>Editar</button>
        </form>
      </div>
    </div>

  );
}
