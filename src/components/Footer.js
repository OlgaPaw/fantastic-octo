import React from 'react';
import styled from 'styled-components';
import { colors } from '../consts'

const FooterDiv = styled.div`
    text-align: center;
    background-color: ${colors.mediumGrey};
    flex-shrink: 0;
`
export default function Footer() {
    return (
        <FooterDiv>
            <span className='title'>2020 OlgaPaw</span>
        </FooterDiv>
    );
}