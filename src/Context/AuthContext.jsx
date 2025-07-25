import { createContext, useContext, useEffect, useState } from 'react'
import CryptoJS from 'crypto-js';
import { Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { verify_token } from './Base_Api_Url';

const AppContextProvider = createContext()
const AuthContext = ({ children }) => {

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
    const decryptData = (data) => {
        try {
            if (!data) { console.log("No data found to decrypt."); return null }
            const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        } catch (error) {
            console.error('Decryption failed:', error);
            return null;
        }
    }

    // Verify JWT token validity
    const verifyToken = async (token) => {
        try {
            
            if (!token) return false;
            const response = await axios.post(verify_token, { accessToken: token });
            if (response && response.data) {
                return response.data.success;
            }

        } catch (error) {
            console.error('Token verification failed:', error);
            return false;
        }
    };

    // our team
    const [handleError, setHandleError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ourTeam, setOurTeam] = useState([]);
    const getOurTeam = async () => {
        try {
            setIsLoading(true);
            setHandleError(null);
            const response = await fetch("/team_database.json");
            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data)) {
                    setOurTeam(data);
                } else {
                    throw new Error("Invalid data format. Expected an array.");
                }
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setHandleError(error.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };


    // meet our clients
    const [handleError1, setHandleError1] = useState(null);
    const [isLoading1, setIsLoading1] = useState(false);
    const [meetOurClient, setMeetOurClient] = useState([]);
    const getMeetOurClient = async () => {
        try {
            setIsLoading1(true);
            setHandleError1(null);
            const response = await fetch("/our_clients_database.json");
            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data)) {
                    setMeetOurClient(data);
                } else {
                    throw new Error("Invalid data format. Expected an array.");
                }
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setHandleError1(error.message || "Something went wrong");
        } finally {
            setIsLoading1(false);
        }
    };











    // User Logout
    const logOut = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem('roots');
            navigate('/login');
        }
    };



    return (
        <AppContextProvider.Provider value={{ encryptData, decryptData, verifyToken, logOut, handleError, isLoading, ourTeam, getOurTeam, handleError1, isLoading1, meetOurClient, getMeetOurClient }}>
            {children}
        </AppContextProvider.Provider>
    )
}

export default AuthContext

// coustom hooks
export const useAppContextProvider = () => {
    return useContext(AppContextProvider)
};


// Protected Route Component
export const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { decryptData, verifyToken } = useAppContextProvider();
    const [authState, setAuthState] = useState({ isValid: null, isLoading: true, error: null });

    useEffect(() => {
        let isMounted = true;

        const checkToken = async () => {
            try {
                const encryptedToken = localStorage.getItem("roots");
                const decryptToken = encryptedToken ? decryptData(encryptedToken) : null;
                const isTokenValid = decryptToken?.accessToken;

                if (!isTokenValid) {
                    if (isMounted) { setAuthState({ isValid: false, isLoading: false, error: 'No token found' }) }
                    return;
                }

                const valid = await verifyToken(isTokenValid);
                if (isMounted) { setAuthState({ isValid: valid, isLoading: false, error: valid ? null : 'Invalid token' }) }

            } catch (error) {
                if (isMounted) {
                    setAuthState({ isValid: false, isLoading: false, error: error.message });
                }
            }
        };

        checkToken();
        return () => { isMounted = false };

    }, [location, decryptData, verifyToken]);

    if (authState.isLoading) {
        return <span className='d-flex align-items-center justify-content-center vh-100'>Loading...</span>;
    }

    if (!authState.isValid) {
        localStorage.removeItem("roots");
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return children ? children : <Outlet />;
}