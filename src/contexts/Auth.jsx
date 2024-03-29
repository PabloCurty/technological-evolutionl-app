import React, { useState, useEffect, createContext } from 'react';
import { api, createSession } from '../services/Api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (user && token) {
            setUser(JSON.parse(user));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await createSession(email, password);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', JSON.stringify(response.data.token));
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        console.log(response.data.user.isTutor);
        if (response.data.user.isTutor) {
            navigate('/wards')
        } else {
            navigate('/');    
        }
        
    };
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/login')
    };
    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                user,
                loading,
                login,
                logout
            }} >
            {children}
        </AuthContext.Provider>
    )
}