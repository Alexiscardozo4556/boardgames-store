import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { 
createUserWithEmailAndPassword, 
signInWithEmailAndPassword, 
signOut, 
onAuthStateChanged 
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const logoutUser = () => {
    return signOut(auth);
};

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
    });
    return () => unsubscribe();
}, []);

return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logoutUser, loading }}>
    {!loading && children}
    </AuthContext.Provider>
);
}