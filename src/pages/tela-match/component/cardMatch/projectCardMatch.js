import axios from "axios";
import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { AiFillInfoCircle, AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'

export default function ProjectCardMatch() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData([]);
        getDataAPI()
    }, [])

    const getDataAPI = async () => {
        
        const url = 'http://localhost:3000/project/findOpenProjects'
        axios.get(url).then((res) => {
            handleResponse(res)
        })
    }

    const handleResponse = (res) => {
        if (res.status !== 200) { return console.log("Deu erro") }
        setData(res.data)
        data[0] && console.log(data[0])
        return
    }

    return (
        <StyledProjectCard>
            <div className="card-title">
                <div>
                    <h3>Lavagem de dinheiro</h3>
                    <p>Liderado por {data[0] && data[0].id_projectManager}</p>
                </div>
                <div>
                    <span><AiFillInfoCircle /> Ver mais!</span>
                </div>
            </div>
            <div className="card-desc">
                <p><strong>Área de atuação:</strong> {data[0] && data[0].studyArea[0]} </p>
                <p> {data[0] && data[0].description} </p>
            </div>
            <div className="card-roles">
                <div>
                    <p><strong>Cargos:</strong></p>
                </div>
                <div className="card-roles-display">
                    { data[0] && data[0].project_Role.map((e) => {
                        return (
                            <span >
                                <BsFillPersonFill /> { e.user_role }
                            </span>
                        )
                    }) }
                </div>
            </div>
            <div className="card-applications">
                <div>
                    <button>
                        <AiFillHeart />
                    </button>
                </div>
                <div>
                    <button>
                        <AiOutlineClose />
                    </button>
                </div>
            </div>
        </StyledProjectCard>
    )

}

const StyledProjectCard = styled.div`

    .card-title {
        align-itens: center;
        display: flex;
        justify-content: space-between;
    }

    .card-roles .card-roles-display span {
        margin: 0 10px;
    }

    .card-applications div button {
        background-color: #FFA647;
        border-radius: 100%;
        color: #003DA5;
        font-size: 2rem;
        height: 70px;
        width: 70px;
    }

`