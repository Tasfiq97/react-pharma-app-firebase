import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from "react";



initializeAuthentication()
const useFirebase=()=>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState({})

const signInGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        setUser(result.user)

    })
}

  
return {signInGoogle,user}
    
 
}
export default useFirebase;