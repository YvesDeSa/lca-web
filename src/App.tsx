import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { ToastProvider } from './hooks/toast';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard'; 
import Forms from './pages/forms';
import RegistrationCompany from './pages/company registration';
const App: React.FC = () => {
  
  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem('jwtToken'); 
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/company-registration" element={<PrivateRoute><RegistrationCompany /></PrivateRoute>} />
            <Route path="/forms" element={<PrivateRoute><Forms /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
