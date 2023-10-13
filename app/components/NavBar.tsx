"use client"

import React from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import Image from "next/image";

import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import NavMenuItem from "@/app/components/NavMenuItem";
import Navigation from "@/app/components/Navigation";

// import { useAuthContext } from "src/context/AuthContext";

interface NavBarProps {
  backgroundColor?: string;
  shadow?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ backgroundColor, shadow }) => {
  // const { currentUser } = useAuthContext();
  const currentUser = true;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu = (
    <Styled.MenuContainer>
      <IconButton
        component="button"
        id="icon-menu-button"
        aria-controls={open ? "nav-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ "& .MuiIconButton-root": { color: "#020b1c" } }}
      >
        <MenuIcon sx={{ color: "#020b1c", fill: "#020b1c" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <NavMenuItem onClose={handleClose} name={"Home"} href={"/"} />
        <NavMenuItem onClose={handleClose} name={"Garments"} href={"/garments"} />
        {currentUser ? (
          <NavMenuItem onClose={handleClose} name={"Admin"} href={"/admin"} />
        ) : (
          <NavMenuItem onClose={handleClose} name={"Login"} href={"/login"} />
        )}
      </Menu>
    </Styled.MenuContainer>
  );

  return (
    <Styled.NavBarContainer
      style={{ background: backgroundColor }}
      shadow={shadow}
    >
      <Styled.Container>
        <Styled.LogoContainer>
          <Styled.LargeLogo>
            <Image src="/darkHeaderLogo.png" alt="bonnet logo" width={185} height={74} />
          </Styled.LargeLogo>
          <Styled.SmallLogo>
            <Image src="/darkBonnet.png" alt="bonnet logo" width={42} height={42} />
          </Styled.SmallLogo>
        </Styled.LogoContainer>
      </Styled.Container>
      <Styled.Container>
        <>
          <Navigation hasCurrentUser={true} activeColor="#831616" color="#C42121"/>
        </>
        {menu}
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
  theme: Theme
}

Styled.NavBarContainer = styled.div(({ theme, shadow}: { theme: Theme, shadow: boolean}) => {
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
});

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
