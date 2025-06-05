import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../../Firebase/firebase.init';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
     
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutAuth = () =>{
        setLoading(true);
        return signOut(auth);
    }
    
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);

            setUser(currentUser);
            setLoading(false);
        })

        return () =>{
            unSubscribe();
        }
    }, []);

    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log("current user logged user", currentUser);

    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log("no user not login");

    //         setUser(null);
    //     }
    // })


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signOutAuth,
    
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;