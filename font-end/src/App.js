import Login from './Pages/login/login.jsx';
import Register from './Pages/Register/dangki.jsx';
import Navbar from './compoment/nabar/Navbar.jsx';
import LeftNabar from './compoment/leftNabar/leftNabar.jsx';
import RightNabar from './compoment/rightNabar/rightNabar.jsx';
import Home from './Pages/Home/Home.jsx';
import Profile from './Pages/profile/Profie.jsx';

//import css
import './style.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext.js';
import { AuthContext } from './context/AthContext.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }
    return children;
  };
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? 'dark ' : 'light'}`}>
          <div style={{ margin: '-8px' }}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <LeftNabar />
              <div style={{ flex: 4 }}>
                <Outlet />
              </div>{' '}
              <RightNabar />
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </QueryClientProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRouter>
          <Layout />
        </ProtectedRouter>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },

    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/Register',
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />{' '}
    </div>
  );
}

export default App;
