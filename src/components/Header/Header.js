import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        <DiCssdeck size="3rem" /> <span>Kalpana's Portfolio</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/kapy-bot">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="www.linkedin.com/in/kalpana-chaudhary-00a8762a8/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/kapy">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
