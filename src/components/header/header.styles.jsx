import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  padding: 0 90px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  // box-shadow: 5px 5px 1px rgb(231, 206, 206);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
`;

const OptionContainerStyles = css`

`;

export const LogoContainer = styled(Link)`

`;

export const OptionsContainer = styled.div`

`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;