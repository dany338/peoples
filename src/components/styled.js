import React from 'react';
import { Text, Box, Button, Flex } from 'rebass';
import styled from 'styled-components';

export const Root = styled(Box)`
  background: #FFFFFF;
  bottom: 0;
  font-family: Ebrima;
  font-style: italic;
  left: 0;
  max-width: 100%;
  position: fixed;
  right: 0;
`;

export const Inner = styled(Flex)`
  justify-content: space-between;

  & p {
    margin: 10px;
  }
`;

export const Accept = styled(Button)`
  align-self: center;
  background: #003953;
  border-radius: 0;
  cursor: pointer;
  line-height:24px;
  text-transform: uppercase;
  transition: all .2s ease-out;
  &:disabled {
    background: #333333;
    cursor: not-allowed;
  }
  &:disabled:hover {
    background: #333333;
    color: #FFFFFF;
  }
  &:hover {
    background: #FFFFFF;
    color: #333333;
  }
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 24px;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 24px;
`;

export const Label = styled(Text)`
  display: inline-block;
  line-height: 20px;
  position: relative;
  vertical-align: middle;
`;
