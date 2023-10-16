import { useEffect, useState } from "react"
import axios from "axios";
import { styled } from "styled-components";
import { RiPresentationFill } from 'react-icons/ri'
import SelectToRoleComponent from "./selectToRoleComponent";

/**
 * 
 * @param {{nameUser: string, idUser: number, closeModal: () => void}} param0 
 * @returns 
 */
export default function ModalInviteToProject({ nameUser, closeModal, idUser }) {

    const [ownerData, setOwnerData] = useState([]);
    const [selectToRoleComponentIsOpen, setSelectToRoleComponentIsOpen] = useState(false);
    const [projectSelected, setProjectSelected] = useState({})

    useEffect(() => {
        getDataAPI();
    }, [])

    const getDataAPI = async () => {
        const AUTH = {
            "Authorization": `Bearer ${sessionStorage.getItem("bearer")}`,
        }
        await axios.get('http://localhost:3000/auth/profile', { headers: AUTH })
            .then(async (res) => {
                setOwnerData(res.data)
            })
    }

    const handleProjectSelected = (projectFromInput) => {
        const projectRole = ownerData.project.filter((e) => Number(e.id_project) === Number(projectFromInput.id_project))[0].project_Role;
        const projectSelected = {
            ...projectFromInput,
            projectRole
        } 
        setProjectSelected(projectSelected)
    }

    const handleCloseModal = () => {
        closeModal();
    }

    const handleNextModal = () => {
        setSelectToRoleComponentIsOpen(!selectToRoleComponentIsOpen)
    }


    return (
        <>
            <ApplicationContainerStyled>
                <div className="title">
                    <p>Você curtiu {nameUser}. Para enviar sua solicitação, selecione o projeto para o qual gostaria de convidá-lo.</p>
                </div>
                <div className="projects">
                    <ul>
                        {ownerData.project && ownerData.project.map((e) => (
                            <li key={e.id_project}>
                                <label htmlFor={e.id_project}><RiPresentationFill />{e.project_name}</label><input name="project-selected" id={e.id_project} type='radio' onInput={ (inputEvent) => handleProjectSelected({id_project: e.id_project, project_name: e.project_name})  }/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="btn-options">
                    <button onClick={handleCloseModal}>cancelar</button>
                    <button onClick={handleNextModal}>próximo</button>
                </div>
            </ApplicationContainerStyled>
            { selectToRoleComponentIsOpen && <SelectToRoleComponent idUser={idUser} closeModal={handleNextModal} projectName={projectSelected.project_name} projectRole={projectSelected.projectRole}/> }
        </>
    )
}

const ApplicationContainerStyled = styled.div`
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

    .title {
        font-weight: 700;
    }
`