'use client';
import { Component, createContext, useContext, useEffect, useState } from 'react';
import { UserType } from '@/helpers/types';
import { fetchProfile } from '@/helpers/backend_helper';

export interface UserContextType {
    user: UserType | null;
    setLoggedInUser: (data: UserType) => void;
    logOut: () => void;
}

const UserContext = createContext<UserContextType>({
    user: null,
    setLoggedInUser: () => {
    },
    logOut: () => {
    },
});

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setLoggedInUser] = useState<UserType | null>(null);

    // Fetch the current logged-in user by token
    // Logout function by removing the token from local storage
     const logOut = () => {
        localStorage.removeItem('authToken');
        setLoggedInUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            console.log(token);
            fetchProfile().then((data) => {
                setLoggedInUser(data.data);
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, logOut, setLoggedInUser } as UserContextType}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;
