import { useState } from 'react';
import { Connect } from '@did-connect/react';
import { Button, Row, Col, Typography, Layout } from 'antd';
import { Helmet } from 'react-helmet';
import Logo from '../assets/logo.svg';
import { login } from '../contexts/actions';
import { useAuthDispatch } from '../contexts';
import { createProfile } from '../services';
const { Text } = Typography;
const { Content } = Layout;

export default function Login() {
  const [open, setOpen] = useState(false);
  const dispatch = useAuthDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleApprove = async (ctx, event) => {
    console.log(event);
  };

  const handleConnect = async (ctx, event) => {
    console.log(event);
  };

  const handleComplete = async (ctx, event) => {
    console.log(event);

    try {
      await createProfile(ctx.currentConnected.userDid);

      await login(dispatch, ctx.currentConnected.userDid);
    } catch (e) {
      console.log(e);
    }

    window.location.assign('/account');
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
              <img src={Logo} alt="Social Blocks" />

              <br />

              <Button
                type="link"
                className="brand top-12 bottom-12"
                href="https://www.socialblocks.io"
                target="_blank"
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
              className="email-bg"
              onClick={() => setOpen(true)}
            >
              Connect
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
