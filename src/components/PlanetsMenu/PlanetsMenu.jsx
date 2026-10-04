import styled from "styled-components";

const StyledPLanetsMenu = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding:8px;
`;
const StyledListItem = styled.li`
  font-family: var(--font-2);
  font-weight: 300;
  cursor: pointer;
  position: relative;
  font-size: clamp(15px, 1.5vw, 30px);
  letter-spacing: 3px;
  color:white;

  &:before {
    content: "";
    height: 3px;
    width: 0%;
    background-color: white;
    position: absolute;
    bottom: -10px;
    left: 0;
    transition: 0.7s width ease;
  }

  &:hover:before {
    width: 100%;
  }
`;

export const PlanetsMenu = ({ onPlanetClick }) => {

  const ul = ['MOON', 'MARS', 'EUROPA', 'TITAN']

  return (
    <StyledPLanetsMenu>
      {ul.map((planetName, index) => (
        <StyledListItem key={planetName} 
          onClick={() => onPlanetClick(index)}
        >
          {planetName}
        </StyledListItem>
      ))}
    </StyledPLanetsMenu>
  );
};