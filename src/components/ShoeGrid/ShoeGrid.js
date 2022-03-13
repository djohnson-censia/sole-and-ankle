import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
          <ShoeWrapper key={shoe.slug}>
            <ShoeCard {...shoe} />
          </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  flex: 1;
`;

const ShoeWrapper = styled.div`
  flex: 1 1 300px;
`

export default ShoeGrid;
