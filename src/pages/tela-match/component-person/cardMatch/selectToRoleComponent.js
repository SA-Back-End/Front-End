import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";

/** * 
 * @param {{projectName: string, projectRole: {id_role: number, user_role: string}[], closeModal: () => void}} param0 
 * @returns 
 */
export default function SelectToRoleComponent({ projectName, projectRole, closeModal, idUser }) {
    const [idRole, setIdRole] = useState(null);

    const handleIdSelect = (e) => {
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
        id_candidate: idUser,
        id_role: Number(idRole),
      }
    }
  
    const prepareHeaders = async () => {
      return {
        "Authorization": `Bearer ${sessionStorage.getItem("bearer")}`,
      }
    }
  
    const sendLiked = async (payload, headers) => {
      const url = `http://localhost:3000/screen-stick/create`;
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
        <SelectToRoleComponentContainerStyled>
            <div><h2>Agora selecione o cargo para o qual você o convidará!</h2></div>
            <form>
                <ul>
                    {projectRole && projectRole.map((e) => {
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
        </SelectToRoleComponentContainerStyled>
    )
}

const SelectToRoleComponentContainerStyled = styled.div`
    background-color: #fff;
    border: 1px solid #003da5;
    border-radius: 30px;
    box-shadow: 0 5px 9px -5px black;
    bottom: 200px;
    left: calc (50% - 300px);
    padding: 20px 30px;
    position: absolute;
    width: 600px;
    z-index: 1000;

    .title {
        font-weight: 700;
    }
`