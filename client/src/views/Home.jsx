import { Avatar, Button, Row, Col, Typography, Layout, QRCode } from 'antd';
import { Helmet } from 'react-helmet';
import Logo from '../assets/Logo';
const { Title, Text } = Typography;
const { Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout className="layout">
      <Helmet>
        <title>Vincent | Social Blocks</title>
      </Helmet>
      <Content className="content">
        <Row justify="center" className="top-24">
          <Col xs={18} lg={4}>
            <Avatar size={80} className="avatar top-12">
              V
            </Avatar>
            <Typography className="top-12">
              <Title>Vincent</Title>
              <Text strong>
                <i className="fas fa-map-marker location" /> US
              </Text>
            </Typography>
            <Typography className="top-12">
              <Text>A short bio about me and who I am.</Text>
            </Typography>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6}>
            <Button
              type="primary"
              icon={<i className="fa fa-envelope right-12" />}
              size="large"
              block
              className="email-bg"
              href="mailto:vincent@vmcodes.com"
            >
              Email
            </Button>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6}>
            <Button
              type="dashed"
              icon={<i className="fa fa-globe right-12" />}
              size="large"
              block
              className="web-bg"
              href="https://vmcodes.com"
            >
              Website
            </Button>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6}>
            <Button
              type="secondary"
              icon={<i className="fa-brands fa-github right-12" />}
              size="large"
              block
              className="git-bg"
            >
              GitHub
            </Button>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6}>
            <Button
              type="primary"
              icon={<i className="fa-brands fa-twitter right-12" />}
              size="large"
              block
            >
              Twitter
            </Button>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6}>
            <Button
              type="dashed"
              icon={<i className="fa-brands fa-tiktok right-12" />}
              size="large"
              block
              className="tiktok-bg"
            >
              TikTok
            </Button>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6}>
            <Button
              type="secondary"
              icon={<i className="fa-brands fa-instagram right-12" />}
              size="large"
              block
              className="insta-bg"
            >
              Instagram
            </Button>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6}>
            <Button
              type="primary"
              icon={<i className="fa-brands fa-facebook right-12" />}
              size="large"
              block
            >
              Facebook
            </Button>
          </Col>
        </Row>

        <Row justify="center" className="top-48 bottom-12">
          <Col xs={18} lg={6}>
            <QRCode size={200} className="qrcode" value="https://ant.design/" />
          </Col>
        </Row>
      </Content>

      <Footer className="footer">
        <Row justify="center">
          <Col xs={18} lg={6}>
            <Typography>
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
              <br />
              <Button
                type="dashed"
                className="top-24 bottom-12 web-bg"
                size="large"
                href="/login"
              >
                <i className="fa fa-unlock right-12" /> Login
              </Button>
            </Typography>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}
