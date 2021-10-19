import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,sendEmailVerification,onAuthStateChanged, signOut } from '@firebase/auth';

import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';


initializeAuthentication()
const useRegister=()=>{
    const auth = getAuth();
 const [user,setUser]=useState({});
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
 const [emptyField,setEmptyField]=useState("");


    const handleEmail=(e)=>{

     setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
           
              setPassword(e.target.value)
    }


    const handleRegister=(e)=>{
        e.preventDefault();
        if(email===""){
            setEmptyField("please enter email")
            return
        }
        else{
            setEmptyField("")
        }
        if(password===""){
            setEmptyField("please enter password");

            return
        }
        if(password.length<6  ){
            setEmptyField("password must have atleast 6 character")
            return
        }
        if( ! /(?=.*?[#?!@$%^&*-])/.test(password) ){
            setEmptyField("password must have atleast 1 special character")
            return
        }
        else{
            setEmptyField("")
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            
           setUser(result.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            setEmptyField(errorCode)
            
          });
        
        
       }
       const handleLogin=(e)=>{
        e.preventDefault();
        if(email===""){
            setEmptyField("please enter email")
            return
        }
        else{
            setEmptyField("")
        }
        if(password===""){
            setEmptyField("please enter password");

            return
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            setEmptyField(errorCode)
          });
       }
       useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user)
            }
        })
       },[])
       const signOutEmail=()=>{
        signOut(auth).then(() => {
         setUser()
          })
    }
       
    return {

        handleEmail,
      handlePassword,
        handleRegister,
        emptyField,
        handleLogin,
        user,
        signOutEmail
       
    }
}
export default useRegister;