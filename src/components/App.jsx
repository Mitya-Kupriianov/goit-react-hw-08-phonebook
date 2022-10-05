import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from './Container/index';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { refreshUser } from 'redux/auth/operations';

import { selectIsRefreshing } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Loader from './Loader/Loader';

// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          {/* <Suspense fallback={<Loader />}> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />
            </Route>
          </Routes>
          {/* </Suspense> */}
        </>
      )}
    </Container>

    // <Container>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route
    //         index
    //         element={
    //           <PublicRoute>
    //             <Home />
    //           </PublicRoute>
    //         }
    //       />
    //       <Route
    //         path="contacts"
    //         element={
    //           <PrivateRoute>
    //             <Contacts />
    //           </PrivateRoute>
    //         }
    //       />
    //       <Route
    //         path="register"
    //         element={
    //           <PublicRoute restricted>
    //             <Register />
    //           </PublicRoute>
    //         }
    //       />
    //       <Route
    //         path="login"
    //         element={
    //           <PublicRoute restricted>
    //             <Login />
    //           </PublicRoute>
    //         }
    //       />
    //     </Route>
    //   </Routes>
    // </Container>
  );
}
