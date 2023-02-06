import { ConfigProvider, theme } from 'antd';
import { Suspense, lazy } from 'react';
import { useAuthState } from '../contexts';

const DefaultTheme = lazy(() => import('./DefaultTheme'));
const DarkTheme = lazy(() => import('./DarkTheme'));

export const ThemeSelector = ({ children, theme }) => {
  return (
    <Suspense fallback={<></>}>
      {theme === 'default' ? <DefaultTheme /> : <DarkTheme />}
      {children}
    </Suspense>
  );
};

const ThemeProvider = ({ children }) => {
  const user = useAuthState();

  return (
    <>
      {user.theme && (
        <ThemeSelector theme={user.theme}>
          <ConfigProvider
            theme={{
              algorithm:
                user.theme === 'default'
                  ? theme.defaultAlgorithm
                  : theme.darkAlgorithm,
            }}
          >
            {children}
          </ConfigProvider>
        </ThemeSelector>
      )}
    </>
  );
};

export default ThemeProvider;
