import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  MobileIcon,
  NavItem,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Container scrollNav={scrollNav}>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <SiNetflix
              size="3rem"
              style={{ border: "1px solid white", borderRadius: "50px" }}
            />
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: "600",
                paddingLeft: "5px",
              }}
            >
              Nhan
            </span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavItem href="#about">
            <NavLink>About</NavLink>
          </NavItem>
        </li>
        <li>
          <NavItem href="#portfolio">
            <NavLink>Portfolio</NavLink>
          </NavItem>
        </li>
        <li>
          <NavItem href="#tech">
            <NavLink>Technology</NavLink>
          </NavItem>
        </li>
        <li>
          <NavItem href="#contact">
            <NavLink>Contact</NavLink>
          </NavItem>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/fightlite/" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.facebook.com/kimkibin09/"
          target="_blank"
        >
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/tran-trong-nhan-b4a662132/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
    </Container>
  );
};

export default Header;
