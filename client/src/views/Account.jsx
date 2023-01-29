import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col, Typography, Layout } from 'antd';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../assets/Logo';
const { Text } = Typography;
const { Content } = Layout;

export default function Account() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile) {
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <Layout className="layout">
      <Helmet>
        <title>Profile | Social Blocks</title>
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
                Provide the link or information for each item that you would
                like to include.
              </Text>
            </Typography>
          </Col>
        </Row>

        <form onSubmit={handleSubmit}>
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item name="name" label="Name">
                  <Input
                    size="large"
                    placeholder="Name"
                    required
                    prefix={<i className="fa fa-user right-12" />}
                    value={profile?.name}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item name="location" label="Location">
                  <Input
                    size="large"
                    placeholder="Location"
                    prefix={<i className="fas fa-map-marker right-12" />}
                    value={profile?.location}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        location: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item name="bio" label="Bio">
                  <Input
                    size="large"
                    placeholder="Bio"
                    required
                    prefix={<i className="fa fa-book right-12" />}
                    value={profile?.bio}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        bio: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ type: 'email' }]}
                >
                  <Input
                    size="large"
                    placeholder="Email"
                    type="email"
                    required
                    prefix={<i className="fa fa-envelope right-12" />}
                    value={profile?.email}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  name="website"
                  label="Website"
                  rules={[{ type: 'url' }]}
                >
                  <Input
                    size="large"
                    placeholder="Website"
                    prefix={<i className="fa fa-globe right-12" />}
                    value={profile?.website}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        website: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  name="github"
                  label="GitHub"
                  rules={[{ type: 'url' }]}
                >
                  <Input
                    size="large"
                    placeholder="GitHub"
                    prefix={<i className="fa-brands fa-github right-12" />}
                    value={profile?.github}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        github: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  name="twitter"
                  label="Twitter"
                  rules={[{ type: 'url' }]}
                >
                  <Input
                    size="large"
                    placeholder="Twitter"
                    prefix={<i className="fa-brands fa-twitter right-12" />}
                    value={profile?.twitter}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        twitter: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  name="tiktok"
                  label="TikTok"
                  rules={[{ type: 'url' }]}
                >
                  <Input
                    size="large"
                    placeholder="TikTok"
                    prefix={<i className="fa-brands fa-tiktok right-12" />}
                    value={profile?.tiktok}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        tiktok: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  name="instagram"
                  label="Instagram"
                  rules={[{ type: 'url' }]}
                >
                  <Input
                    size="large"
                    placeholder="Instagram"
                    prefix={<i className="fa-brands fa-instagram right-12" />}
                    value={profile?.instagram}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        instagram: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  name="facebook"
                  label="Facebook"
                  rules={[{ type: 'url' }]}
                >
                  <Input
                    size="large"
                    placeholder="Facebook"
                    prefix={<i className="fa-brands fa-facebook right-12" />}
                    value={profile?.facebook}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        facebook: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={18} lg={6}>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  name="qrcode"
                  label="QRCode Link"
                  rules={[{ type: 'url' }]}
                >
                  <Input
                    size="large"
                    placeholder="QRCode Link"
                    prefix={<i className="fas fa-qrcode right-12" />}
                    value={profile?.qrcode}
                    onChange={(e) =>
                      setProfile((prevState) => ({
                        ...prevState,
                        qrcode: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Row justify="center" className="bottom-24">
            <Col xs={18} lg={6}>
              <Form.Item>
                <Button
                  type="primary"
                  icon={<i className="fa fa-upload right-12" />}
                  htmlType="submit"
                  className="top-12"
                  size="large"
                  block
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </form>
      </Content>
    </Layout>
  );
}
