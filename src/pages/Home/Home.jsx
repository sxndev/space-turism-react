import { Header } from "../../components/Header/Header";
import styled from "styled-components";
import background from "../../assets/home/background-home-desktop.jpg";

const StyledSection = styled.section`
  display: flex;
  align-items: end;
  color: white;
  height: 100vh;
  background: url(${background}) center center;
  background-repeat: no-repeat;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content:space-between;
  padding:8vw;  
  width:100%;
`;

const StyledTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
 
  h1 {
    font-size: clamp(40px, 9vw, 200px); 
    font-family: var(--font-1);
    font-weight: 100;
    color: var(--text-color);
    width: 100px;
  }

  h2 {
    font-size: clamp(25px, 1vw, 40px);
    font-family: var(--font-2);
    color: var(--text-color-1);
    font-weight: 300;
    width: 200p;
  }

  h3 {
    font-size: clamp(16px, 1vw, 24px);
    font-family: var(--font-2);
    font-weight: 300;
    color: var(--text-color-);
    text-align: start;
    width: 320px;
  }
`;

const StyledCircleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:end;
    width:100%;
    height:100%;
`
const StyledCircle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:200px;
    width:200px;
    border-radius:50%;    
    background-color:white;
    color:var(--dark-color);
    
    h2 {
        font-size:clamp(16px, 5vw, 30px);
        font-family:var(--font-1);
        font-weight:500;
    }
`
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
              this world experience
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
