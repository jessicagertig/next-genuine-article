"use client"

import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { useSpring, animated } from "@react-spring/web";
import SvgIcon from '@mui/material/SvgIcon';

const CarrotIcon = (
  <SvgIcon sx={{ color: "white", height: "65px", width: "65px" }} >
    <path d="M 17 9 L 12 14 L 7 9 L 6 10 l 6 6 l 6 -6 Z" />
  </SvgIcon>
);


const BouncingComponent: React.FC = () => {
  const style = useSpring({
    from: { y: -5 },
    to: { y: 7 },
    config: { mass: 1, tension: 10, friction: 0, clamp: true },
    loop: { reverse: true },
  });

  return (
    <Styled.Circle>
      <animated.div style={{ ...style, width: "65px", height: "65px" }}>
        {CarrotIcon}
      </animated.div>
    </Styled.Circle>
  );
};

// Styled Components
// =======================================================
let Styled: any;
Styled = {};

Styled.Circle = styled.div(() => {
  return css`
    border: 2px solid white;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
});

export default BouncingComponent;