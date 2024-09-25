import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Login from './pages/login';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastProvider>
        <Login />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;