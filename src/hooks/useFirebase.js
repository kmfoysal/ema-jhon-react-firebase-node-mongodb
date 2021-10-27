import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebaseInitialization";


firebaseAuthentication();

const useFirebse = () =>{

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
        });
    },[])


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = ()=>{
        // event.preventDefault();
        
        return signInWithPopup(auth, googleProvider)
            // .then(result =>{
            //     console.log(result)
            //     setUser(result.user)
            // })
            // .catch(error =>{
            //     setError(error.message)
            // })
    }

    const logout = () =>{
        signOut(auth)
        .then(() => {
            setUser({});
          }).catch((error) => {
            setError(error);
          });
    }


    return {
        user,
        error,
        signInWithGoogle,
        logout

    }

}

export default useFirebse;