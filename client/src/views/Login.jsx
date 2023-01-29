import { useState } from 'react';
import { Connect } from '@did-connect/react';
import { Button, Row, Col, Typography, Layout } from 'antd';
import { Helmet } from 'react-helmet';
import Logo from '../assets/Logo';
import { useNavigate } from 'react-router-dom';
const { Text } = Typography;
const { Content } = Layout;

export default function Login() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Connect');
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleApprove = async (ctx, e) => {
    console.log(e);
  };

  const handleConnect = async (ctx, e) => {
    console.log(e);
  };

  const handleComplete = (ctx, e) => {
    setMessage('You are now connected');
    console.log(ctx.currentConnected);
    setOpen(false);
    navigate('/');
  };

  return (
    <Layout className="layout">
      <Helmet>
        <title>Login | Social Blocks</title>
      </Helmet>
      <Content className="content">
        <Row justify="center" className="top-24">
          <Col xs={18} lg={4}>
            <Typography className="top-12 bottom-24">
              <Text>
                <Logo />
              </Text>
              <br />
              <Button
                type="link"
                className="brand"
                href="https://socialblocks.io"
              >
                SOCIAL BLOCKS
              </Button>
            </Typography>
            <Typography className="top-12">
              <Text>
                Please connect with your DID Wallet to login to your personal
                account.
              </Text>
            </Typography>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6} className="top-24">
            <Button
              type="primary"
              icon={<i className="fa fa-lock right-12" />}
              size="large"
              block
              className="email-bg"
              href="/account"
              // onClick={() => setOpen(true)}
            >
              {message}
            </Button>
          </Col>
        </Row>

        <Connect
          popup
          open={open}
          onlyConnect
          messages={{
            title: 'Connect DID Wallet',
            scan: 'You will always see the app connection screen on DID Wallet when scan follow qrcode',
            confirm: 'Confirm operation on your DID Wallet',
            success: 'You have successfully connected!',
          }}
          onClose={handleClose}
          onConnect={handleConnect}
          onApprove={handleApprove}
          onComplete={handleComplete}
          relayUrl="/.well-known/service/api/connect/relay"
        />
      </Content>
    </Layout>
  );
}
