import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'


export const Header = ({signOut}) => (
    <header>
        <h2>OSTE-B Parking App</h2>
        {/* <NavLink to='/' exact={true} activeClassName='is-active'>SignIn </NavLink> */}
        <NavLink to='/u1' activeClassName='is-active'>U1</NavLink>
        <NavLink to='/u2' activeClassName='is-active'>U2</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
        <button onClick={signOut}>SignOut</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
