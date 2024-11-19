import { useEffect } from 'react';
import {auth} from '../firebase/firebase';
import { useState } from 'react';
import { useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';


const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
   
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(auth,initializeUser);
        return unsubscribe;
        }, [])
        async function initializeUser(user){
            if (user) {
                setCurrentUser(...user);
                setUserLoggedIn(true);
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
            setLoading(false);
        }
        const value = {
            currentUser,
            userLoggedIn,
            loading
        }
        return (
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        )   
}