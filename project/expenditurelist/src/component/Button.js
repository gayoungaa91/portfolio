import React from 'react';
import styled, { css } from 'styled-components';
import {darken, lighten} from 'polished';

const StyledButton = styled.button`
  /* display: inline-flex; */
  outline:none;
  border:none;
  color:#fff;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${props => {
    const color = props.theme.palette[props.color]
    return css `
    background: ${color};
    &:hover {
      background: ${props => lighten(0.1, color)};
    &:active {
      background: ${darken(0.1, color)};
  `;
  }}
  background: #444;
  
    /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest}) {
  return (
    <StyledButton color={color} {...rest}>
    {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'blue'
}

export default Button;