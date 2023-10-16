import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";

/** * 
 * @param {{projectName: string, projectRole: {id_role: number, user_role: string}[], closeModal: () => void}} param0 
 * @returns 
 */
export default function ProjectLikedAplication({projectName, projectRole, closeModal}) {

  const [idRole, setIdRole] = useState(null);
  
  const handleIdSelect = (e) => {
    console.log(e.target.id)
    setIdRole(e.target.id);
  }

  const handleCloseModal = () => {    
    closeModal();
  }

  const handleLiked = () => {
    const payLoad = preparePayload();
    const header = prepareHeaders();
    sendLiked(payLoad, header);
  }

  const preparePayload = () => {
    return {
      id_candidate: Number(sessionStorage.getItem("id")),
      id_role: Number(idRole),
    }
  }

  const prepareHeaders = async () => {
    return {
      "Authorization": `Bearer ${sessionStorage.getItem("bearer")}`,
    }
  }

  const sendLiked = async (payload, headers) => {
    const url = `http://localhost:3000/screen-stick/create?idRequisitionMaker=${sessionStorage.getItem("id")}`;
    await axios.post(url, payload, { headers }).then((res) => {
      handleResponse(res);
    });
  }

  const handleResponse = (res) => {
    if (res.status !== 201) {
      return console.log(res);
    }
    setIdRole(null);
    handleCloseModal();
    alert("Solicitação enviada com sucesso!")
    return;
  }

  return (
    <ProjectLikedAplicationComponent>
      <div><h2>Você curtiu o projeto {projectName}. Para enviar sua solicitação, selecione o cargo que gostaria de preencher!</h2></div>
      <form>
        <ul>
          {projectRole.map((e) => {
            return (
              <li key={e.id_role}>
                <label htmlFor={e.id_role}>{e.user_role}</label><input name="projectLikedApp" id={e.id_role} type="radio" onInput={handleIdSelect}></input>
              </li>
            );
          })}
        </ul>
      </form>
      <div className="form-buttons">
        <button onClick={handleCloseModal}>Cancelar</button>
        <button disabled={!idRole ? true : false} onClick={handleLiked}>Concluir solicitação</button>
      </div>
    </ProjectLikedAplicationComponent>
  );
}

const ProjectLikedAplicationComponent = styled.div`
  background-color: #fff;
  border: 1px solid #003da5;
  border-radius: 30px;
  box-shadow: 0 5px 9px -5px black;
  bottom: 200px;
  left: calc (50% - 300px);
  padding: 20px 30px;
  position: absolute;
  width: 600px;
  z-index: 999;

  form ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 5px 0;
    }
  }

  .form-buttons {
    display: flex;
    justify-content: flex-end;

    button {
      background-color: #FF8200;
      border: none;
      border-radius: 10px;
      color: black;
      cursor: pointer;
      height: 25px;
      padding: 5px 10px;
      transition: 0.3s;

      &:first-child {
        background-color: #003da5;
        color: #fff;
        margin-right: 10px;
      }

      &:disabled {
        filter: brightness(0.8);
        cursor: not-allowed;
      }
    }

  }
  
`