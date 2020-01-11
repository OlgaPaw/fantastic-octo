import React from 'react';
import styled from 'styled-components';
import { colors } from '../consts'

const Title = styled.div`
    text-align: center;
    font-weight: bold;
    background-color: ${colors.lightGrey};
`

const Card = styled.div`
    border: 1px solid ${colors.lightGrey};
    order: ${props => props.order};
    flex: 1;
`

export default function Day({ number }) {
    return (
        <Card order={number} >
            <Title>{number}</Title>
        </Card>
    );
}