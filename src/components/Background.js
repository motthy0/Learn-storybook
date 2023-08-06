import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 5px;
`;

const TwoColorBox = ({ color1, color2}) => {
  const Box = styled(BoxContainer)`
    background-color: ${color1} ${color2} ;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 5px;
      opacity: 0.6;
    }
  `;

  return <Box />;
};

export default TwoColorBox;
