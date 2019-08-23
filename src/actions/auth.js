import {auth} from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = (email, password) => {
    return () => {
        return auth.signInWithEmailAndPassword(email, password)
        .catch(e => console.log(e.message))
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return auth.signOut()
        .catch(e => console.log(e.message))
    }
}

export const startCreate = () => {
    return () => {
        return auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(e => console.log(e.message))
    }
}

export const startVerify = () => {
    return () => {
            const user = auth.currentUser
            if(user){
                return user.sendEmailVerification().then(() => {
                        console.log('email sent');
                }).catch(e => console.log(e.message))
       }
    }
}
