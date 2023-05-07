import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { images } from '../assets';

const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg={images.model_s}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundImg={images.model_y}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImg={images.model_3}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImg={images.model_x}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                backgroundImg={images.solar_panel}
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                backgroundImg={images.solar_roof}
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section title='Accessories' description='' backgroundImg={images.accessories} leftBtnText='Shop now' />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    height: 100vh;
`;
