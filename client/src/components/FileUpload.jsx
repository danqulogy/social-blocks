import { Upload, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const JWT = process.env.REACT_APP_JWT;

export default function FileUpload({ setHash }) {
  const handleChange = ({ fileList: newFileList }) => {
    const ipfsHash = newFileList[0]?.response?.IpfsHash;

    if (ipfsHash) {
      setHash(ipfsHash);
    }
  };

  const props = {
    name: 'file',
    action: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
    headers: {
      authorization: `Bearer ${JWT}`,
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload
      {...props}
      type="file"
      accept=".jpg, .jpeg, .png, .webp"
      onChange={handleChange}
    >
      <Button size="large" icon={<PlusOutlined />} className="web-bg">
        Upload
      </Button>
    </Upload>
  );
}
