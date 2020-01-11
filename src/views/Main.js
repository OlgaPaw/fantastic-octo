import React from 'react';
import styled from 'styled-components';

import Calendar from '../components/Calendar'
import Footer from '../components/Footer'

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px;
    display: flex;
    flex-direction: column;
`

const Main = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function MainView() {
    const month = {
        name: 'Test',
        days: [1,2,3],
    }
    return (
        <Body>
            <Main>
                <Calendar month={month} />
            </Main>
            <Footer />
        </Body>
    );
}