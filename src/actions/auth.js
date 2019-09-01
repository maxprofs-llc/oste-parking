import {auth} from '../firebase/firebase'

export const login = (uid, name) => ({
    type: 'LOGIN',
    uid,
    name
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

export const startCreate = (email, password, name) => {
    return (dispatch) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            res.user.updateProfile({
                displayName: name
            }).then(() => {
                dispatch(login(auth.currentUser.uid, auth.currentUser.displayName))
            })
        }).catch(e => console.log(e.message))
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
