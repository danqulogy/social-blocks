import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col, Typography, Layout } from 'antd';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../assets/logo.svg';
import FileUpload from '../components/FileUpload';
import { getProfile, updateProfile } from '../services';
import { logout } from '../contexts/actions';
import { useAuthDispatch } from '../contexts';
const { Text } = Typography;
const { Content } = Layout;

export default function Account() {
  const [profile, setProfile] = useState(null);
  const [hash, setHash] = useState(null);
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const fetchProfile = async () => {
    const response = await getProfile();
    if (response?.did) {
      setProfile(response);
    } else {
      setProfile(false);
    }
  };

  useEffect(() => {
    if (!profile?.did && profile === null) {
      fetchProfile();
    }
  }, [profile]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (profile?.did) {
      try {
        await updateProfile({ ...profile, ipfsHash: hash });

        await logout(dispatch).then(() => {
          navigate('/');
        });
      } catch (e) {
        console.log(e);
      }
    }
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
                Provide the link or information for each item that you would
                like to include.
              </Text>
            </Typography>
          </Col>
        </Row>

        <Row justify="center" className="top-24">
          <Col xs={18} lg={6} className="top-24 bottom-12">
            <FileUpload setHash={setHash} />
          </Col>
        </Row>

        <Form layout="vertical" autoComplete="off" onSubmit={handleSubmit}>
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6} className="top-24">
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

              <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
                <Input
                  size="large"
                  placeholder="Email"
                  type="email"
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

              <Form.Item name="github" label="GitHub" rules={[{ type: 'url' }]}>
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

              <Form.Item name="tiktok" label="TikTok" rules={[{ type: 'url' }]}>
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
            </Col>
          </Row>
          <Row justify="center" className="bottom-24">
            <Col xs={18} lg={6}>
              <Form.Item className="bottom-24">
                <Button
                  type="primary"
                  icon={<i className="fa fa-upload right-12" />}
                  htmlType="submit"
                  className="top-24 bottom-12"
                  size="large"
                  block
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Content>
    </Layout>
  );
}
