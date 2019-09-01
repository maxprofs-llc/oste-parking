import React from 'react'
import { startLogin, startLogout, startCreate, startVerify } from '../actions/auth'
import { connect } from 'react-redux'

export class SignIn extends React.Component {

    state = {
        email: '',
        name: '',
        password: ''
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    onNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    onCreate = () => {
        this.props.create(this.state.email, this.state.password, this.state.name)
    }
    onSignIn = () => {
        this.props.signIn(this.state.email, this.state.password)
    }
    onVerify = () => {
        this.props.verify()
    }


    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">oste parking</h1>
                    <input type='text' placeholder='E-Mail' onChange={this.onEmailChange} />
                    <input type='password' placeholder='Passwort' onChange={this.onPasswordChange} />
                    <input type='text' placeholder='Username' onChange={this.onNameChange} />
                    <button className="button" onClick={this.onSignIn}>Einloggen</button>
                    <button className="button" onClick={this.onCreate}>Registrieren</button>
                    {/* <button onClick={this.onVerify}>Verify</button> */}
                </div>
            </div>
        )
    }
}

const matchDispatchToProps = (dispatch) => ({
    signIn: (email, password) => dispatch(startLogin(email, password)),
    signOut: () => dispatch(startLogout()),
    create: (email, password, name) => dispatch(startCreate(email, password, name)),
    verify: () => dispatch(startVerify)
})

export default connect(undefined, matchDispatchToProps)(SignIn)