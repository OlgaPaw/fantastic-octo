import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${props => props.marginTop};
`;

const Bar = styled.div`
  background: ${props => props.color};
  text-align: center;
  line-height: 2em;
  order: ${props => props.order};
  flex-grow: 1;
  border-radius: 2em;
  margin-bottom: 1px;
`;

const SpaceItem = styled.div`
  background: ${props => props.color};
  text-align: center;
  line-height: 2em;
  order: ${props => props.order};
  flex: 0 1 14.28%;
`;

function GenerateSpaces(positions) {
  return [...Array(7).keys()]
    .filter(n => !positions.includes(n))
    .map(space => <SpaceItem key={space} order={space} />);
}

export default function LarpBar(props) {
  const { name, color, positions, marginTop } = props;
  return (
    <Container marginTop={marginTop}>
      {GenerateSpaces(positions)}
      <Bar color={color} order={positions[0]}>
        {name}
      </Bar>
    </Container>
  );
}

LarpBar.propTypes = {
  name: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  positions: PropTypes.arrayOf(PropTypes.number).isRequired,
  marginTop: PropTypes.oneOf(['auto', 0]).isRequired,
};
