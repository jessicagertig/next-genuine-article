import React from "react";
import Link, { LinkProps } from "next/link";
import ListItem, { ListItemProps } from "@mui/material/ListItem";

type CombinedProps = ListItemProps &
  LinkProps & { name: string; href: string; onClose: () => void };

const styles = {
  transition: "font-size 0.2s ease",
  fontFamily: "__Bellota_Text_1bfe07",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(211, 217, 229, 0.25)",
  },
  "&:visited": {
    color: "#020b1c",
  },
  "&:link": {
    color: "#020b1c",
    fontFamily: "__Bellota_Text_1bfe07",
  },
};

const NavMenuItem = ({ name, href, onClose }: CombinedProps) => {
  return (
    <ListItem onClick={onClose} component={Link} href={href} sx={styles}>
      {name}
    </ListItem>
  );
};

export default NavMenuItem;
