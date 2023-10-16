import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import styled from "styled-components";

export default function UserCardMatch() {

    const [data, setData] = useState([]);
    const [currentUserToDisplay, setCurrentUserToDisplay] = useState(0);
    const [userImage, setUserImage] = useState("");


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
        handleUserImage(res.data[0].profilePicture.data);
        return; 
    }

    const handleUserImage = (algo) => {
        const base64String = btoa(String.fromCharCode(...new Uint8Array(algo)));
        setUserImage(`data:image/png;base64,${base64String}`);
        console.log(userImage)
    }

  return (
    <StyledUserCard>
        <div className="left-side">
            <div className="img-container">
                <img src={userImage} alt="user-profile-image"/>
            </div>
        </div>
        <div className="rigth-side"></div>
    </StyledUserCard>
  );
}

const StyledUserCard = styled.div`
  border: 1px solid #003da5;
  border-radius: 30px;
  box-shadow: 0 5px 9px -5px black;
  display: flex;
  padding: 25px 50px;

  .left-side {
    background-color: red;
    min-width: 300px;
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
    background-color: blue;
    min-width: 300px;
    width: 75%;
    height: 300px;
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
`;
