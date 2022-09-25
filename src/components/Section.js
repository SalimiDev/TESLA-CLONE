import React from 'react';
import styled from 'styled-components';

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>Custom Order</LeftButton>
                    <RightButton>Existing Inventory</RightButton>
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    width: 256px;
    height: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
    cursor: pointer;
`;

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`;
