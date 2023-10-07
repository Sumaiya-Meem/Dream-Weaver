import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../FireBase/Firebase";

export const AuthContext =createContext(null);
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

  const authInfo={
   user,
   createNewUser
  }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;