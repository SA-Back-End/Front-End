import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { AiFillInfoCircle, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import ProjectLikedAplication from "../projectLikedAplication/projectLikedAplication";
import StyledAllDone from "./styledAllDone";

/**
 * 
 * @param {{disableItensParent: () => boolean}} param0 
 * @returns 
 */
export default function ProjectCardMatch({disableItensParent}) {
  const [data, setData] = useState([]);
  const [currentProjectToDisplay, setCurrentProjectToDisplay] = useState(0);
  const [showLikedAplicationComponent, setShowLikedAplicationComponent] =
    useState(false);

  useEffect(() => {
    setData([]);
    getDataAPI();
  }, []);

  const getDataAPI = async () => {
    const url = "http://localhost:3000/project/findOpenProjects";
    axios.get(url).then((res) => {
      handleResponse(res);
    });
  };

  const handleResponse = (res) => {
    if (res.status !== 200) {
      return console.log("Deu erro");
    }
    
    console.log(res.data);
    setData(res.data);
    return;
  };

  const toggleLikedAplicationComponent = () => {
    setShowLikedAplicationComponent(!showLikedAplicationComponent);
  };

  const handleNextAplication = () => {
    setCurrentProjectToDisplay(currentProjectToDisplay + 1)
  }

  const disableItens = () => {
    disableItensParent(true);
  }

  return (
    <div>
      {data[currentProjectToDisplay] ? (
        <>
          <StyledProjectCard>
        <div className="card-title">
          <div>
            <h2>{data[currentProjectToDisplay] && data[currentProjectToDisplay].project_name}</h2>
            <p>Liderado por {data[currentProjectToDisplay] && data[currentProjectToDisplay].status}</p>
          </div>
          <div className="hXj1oQp">
            <p>
              <AiFillInfoCircle />
              <span>Ver mais!</span>
            </p>
          </div>
        </div>
        <div className="card-desc">
          <p>
            <strong>Área de atuação:</strong> {data[currentProjectToDisplay] && data[currentProjectToDisplay].studyArea[0]}{" "}
          </p>
          <p> {data[currentProjectToDisplay] && data[currentProjectToDisplay].description} </p>
        </div>
        <div className="card-roles">
          <div>
            <p>
              <strong>Cargos:</strong>
            </p>
          </div>
          <div className="card-roles-display">
            {data[currentProjectToDisplay] &&
              data[currentProjectToDisplay].project_Role.map((e) => {
                return (
                  <span>
                    <BsFillPersonFill /> {e.user_role}
                  </span>
                );
              })}
          </div>
        </div>
      </StyledProjectCard>
      <div className="card-applications">
        <div className="btn-card-applications">
          <button onClick={toggleLikedAplicationComponent}>
            <AiFillHeart />
          </button>
        </div>
        <div className="btn-card-applications">
          <button onClick={handleNextAplication}>
            <AiOutlineClose />
          </button>
        </div>
          { showLikedAplicationComponent && <ProjectLikedAplication projectName={data[currentProjectToDisplay] && data[currentProjectToDisplay].project_name} projectRole={data[currentProjectToDisplay] && data[currentProjectToDisplay].project_Role} closeModal={toggleLikedAplicationComponent}/> }
      </div>
        </>
      ) : 
        <StyledAllDone onLoad={disableItens} />
      }
    </div>
  );
}

const StyledProjectCard = styled.div`
  border: 1px solid #003da5;
  border-radius: 30px;
  box-shadow: 0 5px 9px -5px black;
  padding: 25px 50px;

  .card-title {
    align-itens: center;
    display: flex;
    justify-content: space-between;

    h2 {
      margin-bottom: 0;
    }

    p {
      margin-top: 5px;
    }
  }

  .hXj1oQp {
    color: #ff8200;
    text-decoration: underline;

    p {
      align-items: center;
      display: flex;

      svg {
        font-size: 20px;
      }

      span {
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }

  .card-roles .card-roles-display span {
    margin: 0 10px;

    svg {
      color: #003da5;
    }

    &:nth-child(1),
    &:nth-child(2) {
      margin-left: 0;
    }
  }

  .card-roles .card-roles-display span:nth-child(4n),
  .card-roles .card-roles-display span:nth-child(4n - 1) {
    svg {
      color: #ffa647;
    }
  }

  & + .card-applications {
    div.btn-card-applications {
      margin: 0 10px;

      button {
        background-color: #ffa647;
        border: none;
        border-radius: 100%;
        color: #003da5;
        cursor: pointer;
        height: 70px;
        transition: 0.3s;
        width: 70px;

        &:hover {
          background-color: #ff8200;
        }

        svg {
          font-size: 30px;
        }
      }
    }
  }
`;