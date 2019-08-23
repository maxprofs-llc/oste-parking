import React from 'react'
import {startLogin, startLogout, startCreate, startVerify} from '../actions/auth'
import {connect} from 'react-redux'

export class SignIn extends React.Component{

        state = {
            email: '',
            password: ''
        }
    
    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    onCreate = () => {
        this.props.create(this.state.email, this.state.password)
    }
    onSignIn = () => {
        this.props.signIn(this.state.email, this.state.password)
    }
    onVerify  = () => {
       this.props.verify()
    }
    

    render(){
        return(
            <div>
                <input type='text' placeholder='email' onChange={this.onEmailChange}/>
                <input type='password' placeholder='password' onChange={this.onPasswordChange}/>
                <button onClick={this.onCreate}>Create</button>
                <button onClick={this.onSignIn}>SignIn</button>
                <button onClick={this.onVerify}>Verify</button>
            </div>
        )
    }
}

const matchDispatchToProps = (dispatch) => ({
    signIn: (email, password) => dispatch(startLogin(email,password)),
    signOut: () => dispatch(startLogout()),
    create : (email, password) => dispatch(startCreate(email, password)),
    verify: () => dispatch(startVerify)
})

export default connect(undefined,matchDispatchToProps )(SignIn)