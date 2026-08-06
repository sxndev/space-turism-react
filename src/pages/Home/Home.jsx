import { Header } from "../../components/Header/Header";
import styled from "styled-components";
import backgroundDesktop from "../../assets/home/background-home-desktop.jpg";
import backgroundTablet from "../../assets/home/background-home-tablet.jpg";
import backgroundMobile from "../../assets/home/background-home-mobile.jpg";

const StyledSection = styled.section`
  display: flex;
  align-items: end;
  color: white;
  height: 100%;
  height: 100vh;
  background: url(${backgroundDesktop}) center center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background: url(${backgroundTablet}) center center;
  }

  @media (max-width: 650px) {
    background: url(${backgroundMobile}) center center;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding:6vw;
  padding-top:30vh; 
  gap:50px;
  width: 100%;
  height:100%;

  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
    justify-content:end;
    align-items:center;
  }
`;

const StyledTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;

  h1 {
    font-size: clamp(40px, 15vw, 200px);
    font-family: var(--font-1);
    font-weight: 100;
    color: var(--text-color);
  }

  h2 {
    font-size: clamp(25px, 1vw, 40px);
    font-family: var(--font-2);
    color: var(--text-color-1);
    font-weight: 300;
  }

  h3 {
    font-size: clamp(20px, 2vw, 34px);
    font-family: var(--font-2);
    font-weight: 300;
    color: var(--text-color-2);
    text-align: start;
    max-width: 520px;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    align-items: center;
    gap: 10px;

    h1 {
      font-size:clamp(100px, 20vw, 200px);
      font-size: 120px;
    }

    h3 {
      font-size: clamp(20px, 1vw, 24px);
      text-align: center;
    }
  }
`;

const StyledCircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  color: var(--dark-color);

  h2 {
    font-size: clamp(16px, 3vw, 30px);
    font-family: var(--font-1);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    height: 120px;
    width: 120px;
  }
`;
export const Home = () => {
  return (
    <>
      <Header />
      <StyledSection>
        <StyledContainer>
          <StyledTextsContainer>
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h1>SPACE</h1>
            <h3>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </h3>
          </StyledTextsContainer>

          <StyledCircleContainer>
            <StyledCircle>
              <h2>EXPLORE</h2>
            </StyledCircle>
          </StyledCircleContainer>
        </StyledContainer>
      </StyledSection>
    </>
  );
};
