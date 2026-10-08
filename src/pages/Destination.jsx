import styled from "styled-components";
import { useState, useEffect } from "react";
import { getData } from "../scripts/script.js";
import { Header } from "../components/Header/Header.jsx";
import { AboutPlanet } from "../components/AboutPlanet/AboutPlanet.jsx";

import backgroundDesktop from "../assets/destination/background-destination-desktop.jpg";
import backgroundTablet from "../assets/destination/background-destination-tablet.jpg";
import backgroundMobile from "../assets/destination/background-destination-mobile.jpg";

const StyledSection = styled.section`
  display: flex;
  align-itens: center;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  background: url(${backgroundDesktop}) center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  padding-top: 20vh;
  overflow-x: hidden;
  transform: ${({ activePlanet }) => `translateX(${activePlanet * -100}vw)`};
  transition: transform 1s ease-in-out;

  @media (max-width: 768px) {
    background: url(${backgroundTablet}) center center;
    background-repeat: no-repeat;
  }

  @media (max-width: 650px) {
    background: url(${backgroundMobile}) center center;
    background-size:cover;
    background-repeat: no-repeat;
  }
`;

const StyledCarousel = styled.div`
  display: flex;
  transform: ${({ activePlanet }) => `translateX(${activePlanet * -100}vw)`};
  transition: transform 1s ease-in-out;
`;

const StyledText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100vw;
  padding-left: 5vw;
  font-size: clamp(20px, 1.5vw, 40px);
  position: absolute;

  p:first-child {
    font-weight: 900;
    font-family: var(--font-3);
    color: var(--bg-color);
  }

  p:last-child {
    font-family: var(--font-3);
    font-weight: 500;
    letter-spacing: 3px;
    color: var(--text-color-1);
  }
`;

export const Destination = () => {
  const [data, setData] = useState();
  const [activePlanet, setActivePlanet] = useState(0);

  useEffect(() => {
    getData().then((data) => setData(data?.destinations));
  }, []);

  return (
    <>
      <Header />
      <StyledSection>
        <StyledText>
          <p>01</p>
          <p>PICK YOUR DESTINATION</p>
        </StyledText>
        <StyledCarousel activePlanet={activePlanet}>
          {data?.map((d, index) => (
            <AboutPlanet
              description={d?.description}
              distance={d?.distance}
              travel={d?.travel}
              key={d?.name}
              name={d?.name}
              image={d?.images.webp}
              active={index === activePlanet}
              onPlanetClick={setActivePlanet}
            />
          ))}
        </StyledCarousel>
      </StyledSection>
    </>
  );
};
