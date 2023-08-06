import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextInput = ({ placeholder }) => {
  return <StyledInput type="text" placeholder={placeholder} />;
};

export default TextInput;
