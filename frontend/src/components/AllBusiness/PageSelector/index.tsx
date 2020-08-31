import React from 'react';
import { Container, PageNumber, NavLink, PreviousIcon, NextIcon } from './styles';

interface Props {
  activePage: number;
  onChange: Function
}

const PageSelector: React.FC<Props> = ({ activePage, onChange }) => {
  function generatePageNumbers(): Array<number> {
    if (activePage <= 1) {
      return [1, 2, 3];
    }

    return [activePage - 1, activePage, activePage + 1];
  }

  return (
    <Container>
      <NavLink onClick={() => onChange(activePage - 1)} disabled={activePage <= 1}>
        <PreviousIcon />
        Previous
      </NavLink>

      {
        generatePageNumbers().map((n) => {
          return (
            <PageNumber
              active={n === activePage}
              onClick={() => onChange(n)}
              key={`page_${n}`}>
              {n}
            </PageNumber>
          )
        })
      }

      <NavLink onClick={() => onChange(activePage + 1)} disabled={false}>
        Next
        <NextIcon />
      </NavLink>
    </Container>
  );
}

export default PageSelector;
