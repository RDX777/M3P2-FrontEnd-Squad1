import { ThemeProvider } from 'styled-components';
import { theme } from '../themes';
import { GlobalStyles } from '../styles/GlobalStyles';
import { PublicRoutes } from '../routes/PublicRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../hooks/useAuth';
import { PrivateRoutes } from '../routes/PrivateRoutes';
import { Sidebar } from '../components';
import { PrivateWrapper } from './LayoutStyled';
import { DevicesProvider } from '../contexts/Devices/DevicesProvider';
import { LocalsProvider } from '../contexts/Locals/LocalsProvider';

export const Layout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <ToastContainer />
        <LocalsProvider>
          <DevicesProvider>
            <Header Authenticated={isAuthenticated} />
            {isAuthenticated ? (
              <PrivateWrapper>
                <Sidebar />
                <PrivateRoutes />
              </PrivateWrapper>
            ) : (
              <PublicRoutes />
            )}
          </DevicesProvider>
        </LocalsProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
