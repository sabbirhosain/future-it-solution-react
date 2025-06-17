import { createContext, useContext, useEffect, useState } from 'react'
import CryptoJS from 'crypto-js';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { premium_tools_list } from './Base_Api_Url';

const AppContextProvider = createContext()
const Context = ({ children }) => {

    const navigate = useNavigate();
    const SECRET_KEY = import.meta.env.VITE_CRYPTOJS_SECRET_KEY || 'YourFallbackSecretKey';

    // encrypt localstroge data
    const encryptData = (data) => {
        try {
            if (!data) { console.log("No data found to encrypt."); return null }
            return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
        } catch (error) {
            console.error("Encryption error:", error);
            return null;
        }
    }

    // decrypt localstroge data
    const decryptData = (encryptedData) => {
        try {
            if (!encryptedData) { console.log("No data found to decrypt."); return null }
            const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        } catch (error) {
            console.error('Decryption failed:', error);
            return null;
        }
    }

    // User Logout
    const logOut = () => {
        localStorage.removeItem('root');
        navigate('/login');
    };

























    return (
        <AppContextProvider.Provider value={{ encryptData, decryptData, logOut }}>
            {children}
        </AppContextProvider.Provider>
    )
}

export default Context

// coustom hooks
export const useAppContextProvider = () => {
    return useContext(AppContextProvider)
};


// Protected Route Component
export const ProtectedRoute = ({ children }) => {
    const { decryptData } = useAppContextProvider();
    const encryptedToken = localStorage.getItem("roots");
    const decryptToken = encryptedToken ? decryptData(encryptedToken) : null;

    if (!decryptToken?.accessToken) {
        return <Navigate to="/login" />;
    } else {
        return children ? children : <Outlet />;
    }
};
