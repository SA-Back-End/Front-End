import { styled } from "styled-components";

/** * 
 * @param {{projectName: string, projectRole: {id_role: number, user_role: string}[], closeModal: () => void}} param0 
 * @returns 
 */
export default function ProjectLikedAplication({projectName, projectRole, closeModal}) {
  
  const handleIdSelect = (e) => {
    console.log(e.target.id);
  }

  const handleCloseModal = () => {
    closeModal();
  }

  return (
    <ProjectLikedAplicationComponent>
      <div><h2>Você curtiu o projeto {projectName}. Para enviar sua solicitação, selecione o cargo que gostaria de preencher!</h2></div>
      <div>
        <ul>
          {projectRole.map((e) => {
            return (
              <li>
                <label htmlFor={e.id_role}>{e.user_role}</label><input id={e.id_role} type="radio" onInput={handleIdSelect}></input>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="form-buttons">
        <button onClick={handleCloseModal}>Cancelar</button>
        <button>Concluir solicitação</button>
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

  div ul {
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

      &:first-child {
        background-color: #003da5;
        color: #fff;
        margin-right: 10px;
      }
    }

  }
  
`