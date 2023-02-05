import '../assets/styles.css';
import { ConfigProvider, theme } from 'antd';

const DarkTheme = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default DarkTheme;
