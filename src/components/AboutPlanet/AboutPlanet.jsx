import styled from "styled-components";

const AboutPlanetContainer = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 100vw;
`;

const StyledPlanetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  width: 100%;
  max-height: 70vh;
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledImg = styled.img`
  min-width: 150px;
  max-width: 30vw;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const StyledInfoPlanet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  // max-width: 50%;
  width: 100%;
  color: var(--text-color-1);
  padding: 30px;

  h2 {
    font-family: var(--font-1);
    text-transform: uppercase;
    font-weight: 100;
    font-size: clamp(20px, 10vw, 100px);
  }

  p {
    color: var(--bg-color);
    line-height: 30px;
  }
`;

const AboutTravel = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  p {
    color: var(--bg-color);
    font-family: var(--font-2);
  }

  h3 {
    color: var(--text-color-1);
    font-family: var(--font-1);
    font-size: clamp(25px, 3vw, 50px);
    text-transform: uppercase;
    font-weight: 100;
  }
`;

export const AboutPlanet = ({ description, distance, image, name, travel }) => {
  return (
    <AboutPlanetContainer>
      <StyledPlanetContainer>
        <StyledImgContainer>
          <StyledImg src={image} alt={`Imagem de ${name}`} />
        </StyledImgContainer>

        <StyledInfoPlanet>
          <h2>{name}</h2>
          <p>{description}</p>

          <hr />

          <AboutTravel>
            <div>
              <p>AVG. DISTANCE</p>
              <h3>{distance}</h3>
            </div>

            <div>
              <p>EST. TRAVEL TIME</p>
              <h3>{travel}</h3>
            </div>
          </AboutTravel>
        </StyledInfoPlanet>
      </StyledPlanetContainer>
    </AboutPlanetContainer>
  );
};
