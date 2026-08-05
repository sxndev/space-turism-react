import styled from "styled-components";
import icon from "../../assets/shared/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 14vh;
  position: absolute;
  padding: 70px 0px 0px 20px; 
  background-color: transparent;
  z-index: 1000;
`;
const StyledLogo = styled.img`
  max-width: 100px;
  width:100%;
  object-fit: contain;
  z-index:100; 
  padding:20px;
`;

const StyledNav = styled.nav`
  display: flex;
  height: 100px;
  width: 60%;
  position: relative;
  right:0;
  &:before {
    content: "";
    height: 1px;
    background-color: var(--bg-color);
    width:50%; 
    transform: translateX(-95%);
    z-index: 10;
    bottom: 50%;
    position: absolute;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding-left:30px;   
  gap: 10px;  
  height: 100%;
  width: 100%;
  background-color: transparent;
  background: rgba(151, 151, 151, 0.05);
  backdrop-filter: blur(40px);
  color: white;
`;

const StyledLi = styled.li`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    height:100%;
    font-family:var(--font-2);
    font-size:clamp(16px, 2vw, 20px);   
    letter-spacing:2px
    color:var(--text-color-1);
    position:relative;
    cursor:pointer;

    p{
        font-size:clamp(10px, 3vw, 25px);  
        font-weight:bold;
    }

    &:before {
      content:"";
      height:5px;
      width:0%;
      background-color:white; 
      position:absolute;
      bottom:0%;
      left:0;
      transition: 0.7s width ease;
    }
    &:hover:before {
      width:110%;
    }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={icon} alt="Logo do aplicativo" />
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <p>00</p>
            HOME
          </StyledLi>
          <StyledLi>
            <p>01</p> DESTINATION
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
