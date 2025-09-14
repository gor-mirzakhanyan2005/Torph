import { createContext, useEffect, useState, useContext } from "react";
import supabase from "../config/supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined);

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
    }, [])

    const signUpNewUser = async(email, password) => {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if(error){
            console.error(error);
            return {success: false, error}
        }
        return {success: true, data}
    }

    const signInUser = async(email, password) => {
        try{
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });
            if(error){
                console.error(error);
                return {success: false, error}
            }
            console.log(data)
            return {success: true, data};
        }
        catch (error){
            console.error(error);
        }
    }

    const signOut = () => {
        const {error} = supabase.auth.signOut();
        if(error){
            console.error(error);
        }
    }

    return(
        <AuthContext.Provider value={{session, signOut, signInUser, signUpNewUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}