import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () => (
    <header>
        <h2>OSTE-B Parking App</h2>
        <NavLink to='/' exact={true} activeClassName='is-active'>Home </NavLink>
        <NavLink to='/u1' activeClassName='is-active'>U1 </NavLink>
        <NavLink to='/u2' activeClassName='is-active'>U2 </NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
)

export default Header