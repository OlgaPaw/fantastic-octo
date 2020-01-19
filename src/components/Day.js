import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../consts';

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  background-color: ${colors.lightGrey};
`;

const Content = styled.div`
  text-align: center;
`;

const Card = styled.div`
  border: 1px solid ${colors.lightGrey};
  order: ${props => props.order};
  flex: 0 1 14.28%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default function Day({ number, position }) {
  return (
    <Card order={position}>
      <Title>{number}</Title>
      <Content />
    </Card>
  );
}

Day.propTypes = {
  number: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
};
