import React from 'react';

import colors from 'style/colors';
import styled from 'styled-components';
import { fonts } from 'constants/index';

export default function Badge({ children, ...props }) {
  return <BadgeStyled {...props}>{children}</BadgeStyled>;
}
const BadgeStyled = styled.div`
  border: 1px solid ${colors.secondary};
  width: 63px;
  height: 26px;
  border-radius: 3px;
  text-align: center;
  transform: translateY(10px);
  font-size: 12px;
  font-family: ${fonts.roboto};
  display: flex;
  justify-content: center;
  align-items: center;
`;
