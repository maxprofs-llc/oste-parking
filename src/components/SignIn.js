import React, {useState} from 'react'
import { startLogin, startLogout, startCreate, startVerify } from '../actions/auth'
import { connect } from 'react-redux'

const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onCreate = () => {
        props.create(email, password, name)
    }
    const onSignIn = () => {
        props.signIn(email, password)
    }
    const onVerify = () => {
        props.verify()
    }

        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">oste parking</h1>
                    <input type='text' placeholder='E-Mail' onChange={onEmailChange} />
                    <input type='password' placeholder='Passwort' onChange={onPasswordChange} />
                    <input type='text' placeholder='Username' onChange={onNameChange} />
                    <button className="button" onClick={onSignIn}>Einloggen</button>
                    <button className="button" onClick={onCreate}>Registrieren</button>
                    {/* <button onClick={onVerify}>Verify</button> */}
                </div>
            </div>
        )
}

const matchDispatchToProps = (dispatch) => ({
    signIn: (email, password) => dispatch(startLogin(email, password)),
    signOut: () => dispatch(startLogout()),
    create: (email, password, name) => dispatch(startCreate(email, password, name)),
    verify: () => dispatch(startVerify)
})

export default connect(undefined, matchDispatchToProps)(SignIn)