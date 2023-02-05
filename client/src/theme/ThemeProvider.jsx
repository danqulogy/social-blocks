import '../assets/styles.css';
import { ConfigProvider, theme } from 'antd';
import { useAuthState } from '../contexts';

const ThemeProvider = ({ children }) => {
  const user = useAuthState();

  return (
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
  );
};

export default ThemeProvider;
