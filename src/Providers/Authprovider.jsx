import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
//social auth providers

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   console.log(loading)
    
    
    //create users
    const createUser = (email, password) => {
      setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    //update user profile
    const updateUserProfile = (name, image) => {
     return updateProfile(auth.currentUser, {
         displayName: name,
          photoURL: image
       })
    }

     //sign in user
     const signInUser = (email, password) => {
      setLoading(true)
       return  signInWithEmailAndPassword(auth, email, password)
     }
     //google log in
     const googleLogIn = () => {
      setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }
   
        
     // sign out
     const logOut = () => {
        setUser(null)
        signOut(auth)
     }
    //observer
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            setLoading(false);
            console.log(user);
            }
          });
          return () => unSubscribe();
    }, [])

    const AllValues = {
        createUser,
        signInUser,
        googleLogIn,
        logOut,
        user,
        updateUserProfile,
        loading
    }

    return (
        <AuthContext.Provider value={AllValues}>
           {children}
        
        </AuthContext.Provider>
    );
};

export default AuthProvider;