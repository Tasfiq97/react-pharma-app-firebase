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
 const [loading,setLoading]=useState(true)


    const handleEmail=(e)=>{

     setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
           
              setPassword(e.target.value)
    }


    const handleRegister=()=>{
        
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
 setLoading(true)
      return   createUserWithEmailAndPassword(auth,email,password)
      .finally(setLoading(false));
        
        
        
       }
       const handleLogin=()=>{
       setLoading(true)
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
       return signInWithEmailAndPassword(auth, email, password)
       .finally(setLoading(false))
       
       }
       useEffect(()=>{
           setLoading(true)
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user)
            }
            setLoading(false)
        })
       },[])
       const signOutEmail=()=>{
        signOut(auth).then(() => {
         setUser()
          })
          .finally(setLoading(false))
    }
       
    return {

        handleEmail,
      handlePassword,
        handleRegister,
        emptyField,
        handleLogin,
        user,
        signOutEmail,
        loading
       
    }
}
export default useRegister;