import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillHeart, AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import ModalInviteToProject from "./modalInviteToProjectComponent";

export default function UserCardMatch() {

  const [data, setData] = useState([]);
  const [currentUserToDisplay, setCurrentUserToDisplay] = useState(0);
  const [openSelectProjectModal, setOpenSelectProjectModal] = useState(false)


  useEffect(() => {
    setData([]);
    getDataAPI();
  }, [])

  const getDataAPI = async () => {
    const url = "http://localhost:3000/user/findInterested";
    axios.get(url).then((res) => {
      handleResponse(res);
    });
  }

  const handleResponse = (res) => {
    if (res.status !== 200) {
      return console.log("Deu erro");
    }
    setData(res.data);
    return;
  }

  const handleOpenSelectProjectModal = () => {
    setOpenSelectProjectModal(!openSelectProjectModal);
  }

  return (
    <div>
      <StyledUserCard>
        <div className="left-side">
          <div className="img-container">
            <img src='' alt="user-profile-image" />
          </div>
        </div>
        <div className="rigth-side">
          <div className="user-status">
            <div className="user_name">
              <h3>{data[0] && data[0].name}</h3>
              <p>{data[0] && data[0].username}</p>
            </div>
            <div className="follow-status">
              <div>
                <p style={{ color:  '#FF8200', fontWeight: 700 }}>{data[0] && data[0].followers.length}</p>
                <p>seguidores</p>
              </div>
              <div>
                <p style={{ color: '#003DA5', fontWeight: 700 }}>{data[0] && data[0].following.length}</p>
                <p>seguindo</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>{data[0] && data[0].description}</p>
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
            <AiOutlineClose />
          </button>
        </div>
        {openSelectProjectModal && (
          <ModalInviteToProject nameUser={data[0] && data[0].name} closeModal={handleOpenSelectProjectModal} idUser={data[0] && data[0].id_user}/>
        )}
      </div>
    </div>
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
