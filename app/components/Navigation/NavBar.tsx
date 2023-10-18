"use client";

import React from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import Image from "next/image";

import NavDropDown from "@/app/components/Navigation/NavDropDown";
import Navigation from "@/app/components/Navigation/Navigation";

// import { useAuthContext } from "src/context/AuthContext";

interface NavBarProps {
  backgroundColor?: string;
  shadow?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ backgroundColor, shadow }) => {
  // const { currentUser } = useAuthContext();
  const currentUser = true;

  return (
    <Styled.NavBarContainer
      style={{ background: backgroundColor }}
      shadow={shadow}
      data-testid="navbar-container"
    >
      <Styled.Container>
        <Styled.LogoContainer>
          <Styled.LargeLogo data-testid="large-logo-container">
            <Image
              src="/darkHeaderLogo.png"
              alt="bonnet and text logo"
              width={185}
              height={74}
              priority
            />
          </Styled.LargeLogo>
          <Styled.SmallLogo data-testid="small-logo-container">
            <Image
              src="/darkBonnet.png"
              alt="bonnet logo"
              width={42}
              height={42}
              priority
            />
          </Styled.SmallLogo>
        </Styled.LogoContainer>
      </Styled.Container>
      <Styled.Container>
        <>
          <Navigation
            hasCurrentUser={true}
            activeColor="#831616"
            color="#C42121"
          />
        </>
        <Styled.MenuContainer>
          <NavDropDown hasCurrentUser={currentUser} />
        </Styled.MenuContainer>
      </Styled.Container>
    </Styled.NavBarContainer>
  );
};

export default NavBar;

/* Styled Components
======================================================= */
let Styled: any;
Styled = {};

interface Props {
  theme: Theme;
}

Styled.NavBarContainer = styled.div(
  ({ theme, shadow }: { theme: Theme; shadow: boolean }) => {
    const t = theme;
    return css`
      label: NavBar;
      ${t.py(6)}
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 8%;
      padding-left: 8%;
      box-shadow: ${shadow ? "0 0px 15px rgba(211, 217, 229, 0.7)" : ""};
      z-index: 2;

      ${t.mq.md} {
        height: 90px;
      }
    `;
  }
);

Styled.Container = styled.div((props: Props) => {
  const t = props.theme;
  return css`
    label: NavBarItems;
    width: 50%;

    ${t.mq.sm} {
      width: 40%;
    }
    ${t.mq.lg} {
      width: 33%;
    }
    ${t.mq.xl} {
      width: 25%;
    }
  `;
});

Styled.LogoContainer = styled.div((props: Props) => {
  const t = props.theme;
  return css`
    label: NavBarLogo;
    width: auto;
    height: 50px;

    ${t.mq.md} {
      height: 90px;
    }
  `;
});


Styled.LargeLogo = styled.div((props: Props) => {
  const t = props.theme;
  return css`
    label: NavBarLargeLogo;
    display: none;
    height: 74px;
    ${t.my(2)};

    ${t.mq.md} {
      display: block;
    }
  `;
});

Styled.SmallLogo = styled.div((props: Props) => {
  const t = props.theme;
  return css`
    label: NavBarSmallLogo;
    display: block;
    height: 42px;
    width: 42px;
    ${t.my(1)};

    ${t.mq.md} {
      display: none;
    }
  `;
});

Styled.MenuContainer = styled.div((props: Props) => {
  const t = props.theme;
  return css`
    label: NavMenuContainer;
    display: block;

    ${t.mq.md} {
      display: none;
    }
  `;
});
