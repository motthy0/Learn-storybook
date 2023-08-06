import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 5px;
`;

const GradientBox = () => {
    const Box = styled(BoxContainer)`
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.2) 20%);
    `;

  return <Box />;
};

export default GradientBox;
