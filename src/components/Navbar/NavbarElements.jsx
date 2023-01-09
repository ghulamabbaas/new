import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background-color: black;
height: 70px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-weight:500;
text-transform:uppercase;
cursor: pointer;
border-bottom:solid 1px black;
&.active {
	color: #edbd10;
	border-bottom:solid 1px #edbd10;
}
&:hover{
	color:#edbd10;
	border-bottom:solid 1px #edbd10;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: center;


`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #edbd10;
padding: 10px 22px;
color: #000;
outline: none;
font-weight:600;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #edbd10;
}
`;
export const Navlogo = styled.div`
font-weight: 700;
    color: #fff;
    font-size: 25px;
	@media screen and (max-width: 768px) {
		margin-left:5px;
	}
	
`;
export const NavlogoLink = styled(Link)`
text-decoration: none;
color: #edbd10;
display: flex;
align-items: end;
text-decoration: none;
padding: 2px 0;
height: 70%;
border-bottom:solid 2px #fff;
`;

