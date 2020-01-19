import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { colors } from '../consts';
import Week from './Week';

const CalendarDiv = styled.div`
  border: 1px solid ${colors.mediumGrey};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  min-height: 80%;
  min-width: 80%;
`;

const CalendarHeader = styled.div`
  background: ${colors.mediumGrey};
  justify-content: space-between;
  display: flex;
`;

const CalendarBody = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function groupDaysByWeeks(daysInMonth) {
  return daysInMonth.reduce((acc, day) => {
    if (!acc[day.weeks()]) {
      acc[day.weeks()] = [];
    }
    acc[day.weeks()].push(day);
    return acc;
  }, {});
}

export default function Calendar() {
  const months = moment.months();
  const [date, setDate] = useState(moment());
  const monthName = months[date.month()];
  const daysInMonth = [...Array(date.daysInMonth()).keys()].map(day =>
    moment([date.year(), date.month(), day + 1]),
  );
  const weeks = Object.entries(
    groupDaysByWeeks(daysInMonth),
  ).map(([weekId, days]) => (
    <Week
      weekId={weekId}
      order={days[0].date()}
      alignment={days[0].date() === 1 ? 'flex-end' : 'flex-start'}
      days={days}
    ></Week>
  ));

  return (
    <CalendarDiv>
      <CalendarHeader>
        <span
          className="title"
          onClick={() => setDate(date.clone().subtract(1, 'months'))}
        >
          {'<<'}
        </span>
        <span className="title">
          {date.year()} {monthName}
        </span>
        <span
          className="title"
          onClick={() => setDate(date.clone().add(1, 'months'))}
        >
          {'>>'}
        </span>
      </CalendarHeader>
      <CalendarBody>{weeks}</CalendarBody>
    </CalendarDiv>
  );
}
