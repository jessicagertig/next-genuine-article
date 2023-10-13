"use client";

import React from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import NavMenuItem from "@/app/components/NavMenuItem";

interface NavDropDownProps {
  hasCurrentUser: boolean;
}

const NavDropDown: React.FC<NavDropDownProps> = ({ hasCurrentUser }): React.JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
        <NavMenuItem
          onClose={handleClose}
          name={"Garments"}
          href={"/garments"}
        />
        <NavMenuItem
          onClose={handleClose}
          name={"Search"}
          href={"/search"}
        />
        {/* {hasCurrentUser ? (
          <NavMenuItem onClose={handleClose} name={"Admin"} href={"/admin"} />
        ) : (
          <NavMenuItem onClose={handleClose} name={"Login"} href={"/login"} />
        )} */}
      </Menu>
    </>
  );
}

export default NavDropDown;
