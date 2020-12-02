import React from 'react';
import styled from 'styled-components';

import { fonts, icons } from 'constants/index';
import colors from 'style/colors';

export default function CheckBox({ title, ...props }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <Label {...props}>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <StyledCheckbox checked={checked} />
      {title}
    </Label>
  );
}

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

const Label = styled.label`
  font-family: ${fonts.poppins};
  font-weight: 500;
  color: ${colors.secondary};
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${(props) =>
    props.checked ? colors.primary : 'transparent'};
  ${(props) => (props.checked ? `background-image: url(${icons.done});` : '')}
  background-size: contain;
  background-repeat: no-repeat;

  border-radius: 3px;
  transition: all 150ms;
  margin-right: 20px;
  border: 1px solid ${colors.gray};
`;
