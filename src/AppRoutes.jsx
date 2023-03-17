import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage'
import MainPage from './pages/mainPage/MainPage'
import WardsPage from './pages/wardsPage/WardsPage'
import { AuthProvider, AuthContext } from './contexts/Auth'

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <div className="loading">Loading...</div>
    }
    if (!authenticated) {
      return <Navigate to="/login" />
    }
    return children;
  }
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Private> <MainPage /> </Private>} />
          <Route exact path="/wards" element={<Private> <WardsPage /> </Private>} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes