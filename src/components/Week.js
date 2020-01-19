import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

import { colors } from '../consts';
import Day from './Day';
import LarpBar from './LarpBar';

const WeekDiv = styled.div`
  border: 1px solid ${colors.lightGrey};
  display: flex;
  justify-content: ${props => props.alignment};
  flex-grow: 1;
  order: ${props => props.order};
  position: relative;
`;

const BarContainer = styled.div`
  position: absolute;
  left: 0;
  top: 1.2em;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignment};
  overflow-y: auto;
`;

export default function Week({ weekId, order, alignment, days, bars }) {
  return (
    <WeekDiv key={weekId} order={order} alignment={alignment}>
      {days.map(day => (
        <Day
          key={`day_${weekId}_${day.date()}`}
          number={day.date()}
          position={day.day()}
        />
      ))}
      <BarContainer>
        {bars.map(({ name, color, positions }, index) => (
          <LarpBar
            name={name}
            color={color}
            positions={positions}
            marginTop={index === 0 ? 'auto' : 0}
          />
        ))}
      </BarContainer>
    </WeekDiv>
  );
}

Week.propTypes = {
  weekId: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  alignment: PropTypes.PropTypes.oneOf(['flex-end', 'flex-start']),
  days: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  bars: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

Week.defaultProps = {
  alignment: 'flex-start',
  days: [],
  bars: [],
};
