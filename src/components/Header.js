import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import SolarSystemSVG from './SolarSystemSVG';
import SolarSystemLogo from '../app/assets/img/solarSystem.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar sticky='top' expand='sm' className='solar-nav navbar-dark'>
            <NavbarBrand href='./' style={{ paddingRight: '32px' }}>
                {/* <SolarSystemSVG color={'#000'} style={{ height: '24px' }} /> */}
                <img src={SolarSystemLogo} width='25%' height='25%' alt='solar explorer logo' className='float-start' />

                <h3 className='solar-nav'>SolarExplorer</h3>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar >
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/explore'>
                            Explorer
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );

};

export default Header;
