import React from 'react';
import styled from 'styled-components';

import CheckBox from './CheckBox';
import Input from './Input';
import { icons, fonts } from 'constants/index';
import colors from 'style/colors';

// const locations = [
//   { value: 'London', checked: false },
//   { value: 'New York', checked: false },
//   { value: 'Amsterdam', checked: false },
//   { value: 'Berlin', checked: false },
// ];

export default function Aside({
  loc,
  setLoc,
  fullTime,
  setFullTime,
  place,
  setPlace,
}) {
  const [locations, setLocations] = React.useState([
    { value: 'London', checked: false },
    { value: 'New York', checked: false },
    { value: 'Amsterdam', checked: false },
    { value: 'Berlin', checked: false },
  ]);
  return (
    <Container>
      <CheckBox title='Full time' checked={fullTime} setChecked={setFullTime} />
      <Title>Local</Title>
      <Input
        placeholder='País, estado, cidade'
        icon={icons.world}
        containerStyle={{ marginBottom: '25px', marginRight: '25px' }}
        value={loc}
        onChange={({ target }) => setLoc(target.value)}
      />
      {locations.map((location) => (
        <CheckBox
          checked={location.checked}
          setChecked={(check, value) => {
            locations.map((l, i) => {
              if (l.value == value) {
                let _temp = [...locations];
                _temp[i].checked = check;
                setLocations(_temp);
                setPlace(value);
                if (!check) setPlace(undefined);
              } else {
                l.checked = false;
              }
            });
          }}
          title={location.value}
          key={location.value}
          style={{ marginBottom: '20px' }}
          places={true}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin-top: 32px;
  margin-bottom: 14px;
  font-family: ${fonts.poppins};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  color: ${colors.gray};
`;
