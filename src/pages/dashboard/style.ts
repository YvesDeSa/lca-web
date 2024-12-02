import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: url('img/background-dashboard1.png') no-repeat center center;
  background-size: cover;
`;

export const NavBar = styled.div`
  width: 80%;
  height: 10%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
  padding-top: 3vw;
  display: flex;
  flex-direction: row;
  align-items: center;

    div{
      background-color: #1E1E1E;
      border-radius: 15px;
      width: 60px;
      height: 60px;

      display: flex;
      justify-content: center;
      align-items: center;
      
      img {
        width: 30px;
        height: auto;
      }
    }

  p{
    margin-left: 1vw;
    font-size: 28px;
    font-weight: 600;
    color: #3C9A36;
  }
`;

export const NavIcons = styled.div`
  padding-top: 3vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    font-size: 22px;
    color: #3C9A36;
  }

  & > svg {
    margin-left: 1.5vw;
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const TittleContainer = styled.div`
  height: 40vh;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tittle = styled.h1`
  font-size: 48px;
  color: #8d8d8d;
`;

export const Wrapper = styled.div`
  color: #3C9A36;
  font-size: 48px;
  font-weight: bold;
  white-space: nowrap;
`;

export const Cursor = styled.span`
  font-weight: bold;
  color: #2d7429;
  animation: ${blink} 0.8s steps(2, start) infinite;
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 10%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 5vw;
`;

export const Button = styled.a`
  text-decoration: none;
  background-color: #3C9A36;
  width: 20vw;
  height: 18vh;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 22px;
  font-weight: 600;

  cursor: pointer;
  & + & {
    border-left: none;
  }

  &:first-child {
    border-radius: 20px 0 0 20px;
    border-right: 1px solid #1e1e1e;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 1px solid #1e1e1e;
  }

  &:hover {
    opacity: 0.95;
  }
`;