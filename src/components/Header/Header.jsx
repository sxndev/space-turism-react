import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../../assets/shared/logo.svg";

import { MenuButton } from "../MenuButton/MenuButton";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  z-index: 10000;
`;

const StyledLogo = styled.img`
  max-width: 70px;
  width: 100%;
  object-fit: contain;
  z-index: 100;
  padding: 10px;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
  width: 60%;
  position: relative;
  right: 0;
  top: 0;
  background: rgba(151, 151, 151, 0.05);
  backdrop-filter: blur(40px);

  &:before {
    content: "";
    height: 1px;
    background-color: var(--bg-color);
    width: 50%;
    transform: translateX(-95%);
    z-index: 10;
    bottom: 50%;
    position: absolute;
  }

  @media (max-width: 768px) {
    align-items: start;
    padding-top: 25vh;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    position: absolute;
    height: 100vh;
    transition: 0.5s ease right;

    &:before {
      display: none;
    }
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  gap: 10px;
  height: 100%;
  width: 100%;
  color: white;
  height: fit-content;

  @media (max-width: 768px) {
    align-items: start;
    flex-direction: column; 
  }
`;

const StyledLi = styled.li`
    display:flex;
    align-items:center;
    justify-content:center;
    text-wrap:nowrap; 
    gap:10px;
    height:100%;
    font-family:var(--font-2);
    font-size:clamp(10px, 2vw, 40px);     
    letter-spacing:2px;
    color:var(--text-color-1);
    position:relative;
    cursor:pointer;

    p{
        font-size:clamp(10px, 2vw, 20px);   
        font-weight:bold; 
        display:inline;
    }


    &:before {
      content:"";
      height:5px;
      width:0%;
      background-color:white; 
      position:absolute;
      bottom:-10px;
      left:0;
      transition: 0.7s width ease;
    }

    &:hover:before { 
      width:110%;
    }

    @media (max-width: 768px){

      justify-content:start;
      font-size:clamp(10px, 4vw, 40px);
      width:100%;

      p {
         font-size:clamp(10px, 4vw, 25px);    
      }

      &:before {
        left:80%;
        top:0;
        max-width:5px;
        height:0%;
        transition: 0.7s height ease-out;
      }

      &:hover:before { 
        height:100%;
      }
        
    }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <StyledHeader>
      <StyledLogo src={icon} alt="Logo do aplicativo" />
      <MenuButton onClick={toggleMenu} isOpen={isOpen} />
      <StyledNav $isOpen={isOpen}>
        <StyledUl>
          <StyledLi>
            <Link to={"/"}>
              <p>00</p> HOME
            </Link>
          </StyledLi>
          <StyledLi>
            <Link to={"/destination"}>
              <p>01</p> DESTINATION
            </Link>
          </StyledLi>
          <StyledLi>
            <p>02</p> CREW
          </StyledLi>
          <StyledLi>
            <p>03</p> TECHNOLOGY
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};
