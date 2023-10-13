"use client"

import React from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  activeColor: string;
  color: string;
  hasCurrentUser: boolean;
}

const Navigation: React.FC<NavProps> = ({ activeColor, hasCurrentUser, color }) => {
  const pathname = usePathname()
  const toggleActiveClass = (path: string) => pathname === path ? "active" : "";

  return (
    <nav style={{ width: "100%"}}>
      <Styled.LinksContainer activecolor={activeColor} color={color}>
        <li>
          <Link href="/" className={toggleActiveClass("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/garments" className={toggleActiveClass("/garments")}>
            Garments
          </Link>
        </li>
        <li>
          <Link href="/search" className={toggleActiveClass("/search")}>
            Search
          </Link>
        </li>
          {/* {hasCurrentUser ? (
          <Link href="/admin" className={toggleActiveClass("/admin")}>
            Admin
          </Link>
          ) : (
            <Link href="/login" className={toggleActiveClass("/login")}>
            Login
          </Link>
          )} */}
      </Styled.LinksContainer>
    </nav>
  )
}

export default Navigation

/* Styled Components
======================================================= */
let Styled: any;
Styled = {};

interface Props {
  theme: Theme,
  activecolor: string,
  color: string,
}

Styled.LinksContainer = styled.ul(({ theme, activecolor, color }: Props)=> {
  const t = theme;
  return css`
  label: NavBarLinks;
  display: none;
  width: 100%;

  a {
    ${[t.py(1), t.px(2), t.pb(12), t.rounded.sm]};
    color: ${color};
    font-size: 1.125rem;

    &:hover {
      cursor: pointer;
      transition: font-size 0.2s ease;
      color: ${activecolor};
      font-size: 1.128rem;
    }
  }

  a.active {
    color: ${activecolor};
  }

  ${t.mq.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
  `;
});