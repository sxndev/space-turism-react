import styled from "styled-components";

const StyledMenuButton = styled.div`
  background-color: white;
  height: 3px;
  width: 40px;
  z-index: 10;
  position: relative;
  transition: all 0.7s ease;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    z-index: 100;
    position: absolute;
    margin-top: -10px;
    background-color: white;
    transition: all 0.7s ease;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    z-index: 100;
    margin-top: 10px;
    position: absolute;
    transition: all 0.7s ease;
    background-color: white;
  }
`;

const StyledButtonContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  z-index: 30;
  position: relative;
  cursor: pointer;

  ${({ $isOpen }) =>
    $isOpen &&
    `
      ${StyledMenuButton} {
        rotate: 45deg;
      }

      ${StyledMenuButton}::before {
        margin: 0;
        rotate: 90deg;
      }

      ${StyledMenuButton}::after {
        margin: 0;
      }
    `}
`;

export const MenuButton = ({ isOpen, onClick }) => {
  return (
    <StyledButtonContainer $isOpen={isOpen} onClick={onClick}>
      <StyledMenuButton />
    </StyledButtonContainer>
  );
};
