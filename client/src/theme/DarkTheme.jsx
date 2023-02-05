import '../assets/dark.css';
import { ConfigProvider, theme } from 'antd';

const DarkTheme = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default DarkTheme;
