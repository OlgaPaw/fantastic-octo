import React from 'react';
import styled from 'styled-components';

import { colors } from '../consts'

const CalendarDiv = styled.div`
    border: 1px solid ${colors.mediumGrey};
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 80%;
    min-width: 80%;
`

const CalendarHeader = styled.div`
    background: ${colors.mediumGrey};
    align-items: stretch;
    text-align: center;
`

const CalendarBody = styled.div`
    background: ${colors.mediumGrey};
    align-items: stretch;
`

export default function Calendar({ month: { name, days } }) {
    return (
        <CalendarDiv>
            <CalendarHeader>
                <span className='title'>{name}</span>
            </CalendarHeader>
            <CalendarBody>

            </CalendarBody>
        </CalendarDiv>
    );
}