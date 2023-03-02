import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../../Firebase/firebase';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser]=useState();

    function signup(name,email,phonenumber,password,repassword){
        return auth.createUserWithEmailAndPassword(name,email,phonenumber,password,repassword)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>(
            setCurrentUser(user)
        ))    
        return unsubscribe;
    },[])

    
    const value ={
        currentUser,
        signup
    }

  return (
    <>
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
