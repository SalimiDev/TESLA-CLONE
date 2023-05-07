import React, { useState } from 'react';
import styled from 'styled-components';
//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.svg';
//Redux
import { useSelector } from 'react-redux';
import { selectCars } from '../features/car/carSlice';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Conatiner>
            <a href='/'>
                <img src={logo} alt='logo' />
            </a>
            <Menu>
                {cars?.map((car, index) => (
                    <a key={index} href='/'>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href='/'>Shop</a>
                <a href='/'>Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <ClosebtnWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </ClosebtnWrapper>
                    {cars?.map((car, index) => (
                      <li key={index}><a href="/">{car}</a></li>
                    ))}
                    <li><a href="/">Existing inventory</a></li>
                    <li><a href="/">Used inventory</a></li>
                    <li><a href="/">Trade-in</a></li>
                    <li><a href="/">Cybertruck</a></li>
                    <li><a href="/">Roadster</a></li>
                    <li><a href="/">Charging</a></li>
                    <li><a href="/">Power</a></li>
                    <li><a href="/">Utilities</a></li>
                    <li><a href="/">Test Drive</a></li>
            </BurgerNav>
        </Conatiner>
    );
};

export default Header;

//?Styles
const Conatiner = styled.div`
    position: fixed;
    z-index: 1;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`;

const Menu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.ul`
    position: fixed;
    z-index: 100;
    width: 300px;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    padding: 20px;
    text-align: start;
    transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.2s;
    li {
        width: 300px;
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }
    }
`;

const ClosebtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;
