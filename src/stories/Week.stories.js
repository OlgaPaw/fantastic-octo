import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Week from '../components/Week';

export default {
  title: 'Week',
  component: Week,
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-grow: 1;
`;

function Days(days = 7) {
  const startDate = moment('01/01/2020');
  return [...Array(days).keys()].map(day =>
    moment([startDate.year(), startDate.month(), day + 1]),
  );
}

function Bars(count = 5) {
  return [...Array(count).keys()].map(bar => ({
    name: `Test${bar + 1}`,
    color: 'red',
    positions: [bar % 7, (bar % 7) + 1],
  }));
}

export const FullWeek = () => {
  return (
    <Container>
      <Week weekId={1} days={Days()}></Week>
    </Container>
  );
};

export const FullWeekWithLarpBars = () => {
  return (
    <Container>
      <Week weekId={1} days={Days()} bars={Bars()}></Week>
    </Container>
  );
};

export const FullWeekWithLarpBarsOverflow = () => {
  return (
    <Container>
      <Week weekId={1} days={Days()} bars={Bars(10)}></Week>
    </Container>
  );
};
