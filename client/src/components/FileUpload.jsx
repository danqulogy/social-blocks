import { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const JWT = process.env.REACT_APP_JWT;
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function FileUpload({ previewImage, setPreviewImage }) {
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
      setPreviewImage(file.url || file.preview);
    }
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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
      fileList={fileList}
      onPreview={handlePreview}
      onChange={handleChange}
    >
      <Button size="large" icon={<PlusOutlined />} className="web-bg">
        Upload
      </Button>
    </Upload>
  );
}
