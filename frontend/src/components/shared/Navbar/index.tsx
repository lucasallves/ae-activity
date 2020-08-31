import React from 'react';
import Logo from '../Logo';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Container, SocialList, SocialListItem } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo />

      <SocialList>
        <SocialListItem href="https://www.linkedin.com/in/lucaslimaalves" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </SocialListItem>

        <SocialListItem href="https://github.com/lucasallves/ae-activity" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialListItem>
      </SocialList>
    </Container>
  )
}

export default Navbar;
