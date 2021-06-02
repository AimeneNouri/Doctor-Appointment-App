import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../firebase.js';
import firebase from 'firebase'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function signup(email, password, nom, prenom, adresse, tel){
        const db = firebase.database();
        return auth.createUserWithEmailAndPassword(email, password)
        .then(function(res){
            var user = firebase.auth().currentUser;
            var valueUid = user.uid;
            db.ref('users/' + valueUid).set({
                "uid": valueUid,
                "nom" : nom,
                "prenom" : prenom,
                "adresse" : adresse,
                "tel" : tel,
                "email": email,
                "password": password,
            }).catch(function(error) {
                console.log(error.message);
                console.log(error.code);
            })
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe  
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
