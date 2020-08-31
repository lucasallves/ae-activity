import React from 'react';
import { Container } from './styles';
import { ReactSVG } from 'react-svg'

const Spinner: React.FC = () => {
  return (
    <Container>
      <ReactSVG src="/images/rings.svg" className="spinner-icon" />
    </Container>
  )
}

export default Spinner;
