import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillHeart, AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import ModalInviteToProject from "./modalInviteToProjectComponent";
import StyledAllDone from "../../component/cardMatch/styledAllDone";

/**
 *
 * @param {{disableItensParent: () => boolean}} param0
 * @returns
 */
export default function UserCardMatch({ disableItensParent }) {
  const [data, setData] = useState([]);
  const [currentUserToDisplay, setCurrentUserToDisplay] = useState(0);
  const [openSelectProjectModal, setOpenSelectProjectModal] = useState(false);

  useEffect(() => {
    setData([]);
    getDataAPI();
  }, []);

  const getDataAPI = async () => {
    const url = "http://localhost:3000/user/findInterested";
    axios.get(url).then((res) => {
      handleResponse(res);
    });
  };

  const handleResponse = (res) => {
    if (res.status !== 200) {
      return console.log("Deu erro");
    }
    setData(res.data);
    return;
  };

  const handleOpenSelectProjectModal = () => {
    setOpenSelectProjectModal(!openSelectProjectModal);
  };

  const handleNextUser = () => {
    setCurrentUserToDisplay(currentUserToDisplay + 1);
  }

  const disableItens = () => {
    disableItensParent(true);
  }

  return (
    <>
      {data[currentUserToDisplay] ? (
        <div>
          <StyledUserCard>
            <div className="left-side">
              <div className="img-container">
                <img src="" alt="user-profile-image" />
              </div>
            </div>
            <div className="rigth-side">
              <div className="card-title">
                <div className="user-status">
                <div className="user_name">
                  <h3>{data[currentUserToDisplay] && data[currentUserToDisplay].name}</h3>
                  <p>{data[currentUserToDisplay] && data[currentUserToDisplay].username}</p>
                </div>
                <div className="follow-status">
                  <div>
                    <p style={{ color: "#FF8200", fontWeight: 700 }}>
                      {data[currentUserToDisplay] && data[currentUserToDisplay].followers.length}
                    </p>
                    <p>seguidores</p>
                  </div>
                  <div>
                    <p style={{ color: "#003DA5", fontWeight: 700 }}>
                      {data[currentUserToDisplay] && data[currentUserToDisplay].following.length}
                    </p>
                    <p>seguindo</p>
                  </div>
                </div>
                </div>              
                <div className="hXj1oQp">
                  <p>
                    <AiFillInfoCircle />
                    <span>Ver mais!</span>
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p>{data[currentUserToDisplay] && data[currentUserToDisplay].description}</p>
                </div>
              </div>
            </div>
          </StyledUserCard>
          <div className="card-applications">
            <div className="btn-card-applications">
              <button onClick={handleOpenSelectProjectModal}>
                <AiFillHeart />
              </button>
            </div>
            <div className="btn-card-applications">
              <button onClick={console.log}>
                <AiOutlineClose onClick={handleNextUser}/>
              </button>
            </div>
            {openSelectProjectModal && (
              <ModalInviteToProject
                nameUser={data[currentUserToDisplay] && data[currentUserToDisplay].name}
                closeModal={handleOpenSelectProjectModal}
                idUser={data[currentUserToDisplay] && data[currentUserToDisplay].id_user}
              />
            )}
          </div>
        </div>
      ) : (
        <StyledAllDone onLoad={disableItens} />
      )}
    </>
  );
}

const StyledUserCard = styled.div`
  border: 1px solid #003da5;
  border-radius: 30px;
  box-shadow: 0 5px 9px -5px black;
  display: flex;
  padding: 25px 50px;

  .left-side {
    min-width: 150px;
    width: 25%;
    height: 300px;

    .img-container {
      height: 220px;
      width: 220px;

      img {
        border-radius: 50%;
        height: 100%;
        width: 100%;
      }
    }
  }

  .rigth-side {
    min-width: 300px;
    width: 75%;
    height: 300px;

    .card-title {
      align-itens: center;
      display: flex;
      justify-content: space-between;

      .user-status {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        width: 95%;

        .follow-status {
          display: flex;
          justify-content: space-between;
          text-align: center;
          width: 45%;
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
    }
  }

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
