import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import { useAuthState } from './contexts';
const Home = lazy(() => import('./views/Home'));
const Login = lazy(() => import('./views/Login'));
const Account = lazy(() => import('./views/Account'));

function App() {
  const user = useAuthState();

  return (
    <>
      {user && (
        <ThemeProvider algorithm={user.theme}>
          <Suspense fallback={<></>}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/login" element={<Login />} exact />

                {user.authenticated && (
                  <Route path="/account" element={<Account />} exact />
                )}

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
