import React from 'react';
import styled from 'styled-components';

import { colors } from '../consts'
import Day from './Day'


const WeekRow = styled.div`
    border: 1px solid ${colors.lightGrey};
    display: flex;
    height: 100vh;
    align-items: stretch;
`

export default function Week() {
    return (
        <WeekRow>
            <Day number={1} />
            <Day number={7} />
            <Day number={3} />
            <Day number={5} />
            <Day number={4} />
            <Day number={2} />
            <Day number={6} />
        </WeekRow>
    );
}