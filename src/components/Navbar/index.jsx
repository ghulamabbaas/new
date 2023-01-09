import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Navlogo,
    NavlogoLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Navlogo>
                    <NavlogoLink to='/'>ABBAS</NavlogoLink>
                </Navlogo>
                <Bars />
                <NavMenu>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/skills' >
                        skills
                    </NavLink>
                    <NavLink to='/resume' >
                        resume
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/skills'>HIRE ME</NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    );
};

export default Navbar;
