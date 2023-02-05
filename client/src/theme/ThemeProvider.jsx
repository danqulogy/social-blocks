import '../assets/styles.css';
import { ConfigProvider, theme } from 'antd';

const ThemeProvider = ({ children, algorithm }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm:
          algorithm === 'default'
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
