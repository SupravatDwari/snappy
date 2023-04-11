import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    (async () => {
      setUserName(
        await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)).username
      );
    })();
  }, []);
  return (
    <>
      <Container>
        <img src={Robot} alt="Robot"></img>
        <h1>
          Welcome, <span>{userName}!</span>
        </h1>
        <h3>Please select a chat to start Messaging</h3>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  text-align: center;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
  @media screen and (max-width : 720px){
    h3{
      padding-top: 15px;
    }
    img{
      height: 15rem;
    }
  }
`;