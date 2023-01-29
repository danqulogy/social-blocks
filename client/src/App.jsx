import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
const Home = lazy(() => import('./views/Home'));
const Login = lazy(() => import('./views/Login'));
const Account = lazy(() => import('./views/Account'));

function App() {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/account" element={<Account />} exact />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
