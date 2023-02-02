import { Button, Row, Col, Typography, Layout, QRCode, Image } from 'antd';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../assets/logo.svg';
import { getProfile } from '../services';
const { Title, Text } = Typography;
const { Content, Footer } = Layout;

export default function Home() {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    const response = await getProfile();

    if (response?.did) {
      setProfile(response);
    } else {
      setProfile(false);
    }
  };

  useEffect(() => {
    if (profile === null) {
      fetchProfile();
    }
  }, [profile]);

  return (
    <Layout className="layout">
      <Helmet>
        <title>{profile?.name && `${profile.name} | Social Blocks`}</title>
      </Helmet>
      <Content className="content">
        {profile === false && (
          <>
            <Row justify="center" className="top-24">
              <Col xs={18} lg={6}>
                <Typography className="top-12">
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

            <Row justify="center" className="top-48 bottom-12">
              <Col xs={18} lg={6}>
                <QRCode
                  size={200}
                  className="qrcode"
                  value="https://www.socialblocks.io"
                />
              </Col>
            </Row>
          </>
        )}

        <Row justify="center" className="top-24">
          <Col xs={18} lg={4}>
            {profile?.ipfsHash && (
              <Image
                src={`https://gateway.pinata.cloud/ipfs/${profile.ipfsHash}`}
                fallback={Logo}
                className="profile-image top-12"
              />
            )}

            <Typography className="top-12">
              <Title>{profile?.name && profile.name}</Title>

              {profile?.location && (
                <Text strong>
                  <i className="fas fa-map-marker location" />{' '}
                  {profile.location}
                </Text>
              )}
            </Typography>
            <Typography className="top-12">
              <Text>{profile?.bio && profile.bio}</Text>
            </Typography>
          </Col>
        </Row>

        {profile?.email && (
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Button
                type="primary"
                icon={<i className="fa fa-envelope right-12" />}
                size="large"
                block
                className="email-bg"
                href={`mailto:${profile.email}`}
              >
                Email
              </Button>
            </Col>
          </Row>
        )}

        {profile?.website && (
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Button
                type="dashed"
                icon={<i className="fa fa-globe right-12" />}
                size="large"
                block
                className="web-bg"
                href={`${profile.website}`}
              >
                Website
              </Button>
            </Col>
          </Row>
        )}

        {profile?.github && (
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Button
                type="secondary"
                icon={<i className="fa-brands fa-github right-12" />}
                size="large"
                block
                className="git-bg"
                href={`${profile.github}`}
              >
                GitHub
              </Button>
            </Col>
          </Row>
        )}

        {profile?.twitter && (
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Button
                type="primary"
                icon={<i className="fa-brands fa-twitter right-12" />}
                size="large"
                block
                href={`${profile.twitter}`}
                className="twitter-bg"
              >
                Twitter
              </Button>
            </Col>
          </Row>
        )}

        {profile?.tiktok && (
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Button
                type="dashed"
                icon={<i className="fa-brands fa-tiktok right-12" />}
                size="large"
                block
                className="tiktok-bg"
                href={`${profile.tiktok}`}
              >
                TikTok
              </Button>
            </Col>
          </Row>
        )}

        {profile?.instagram && (
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Button
                type="secondary"
                icon={<i className="fa-brands fa-instagram right-12" />}
                size="large"
                block
                className="insta-bg"
                href={`${profile.instagram}`}
              >
                Instagram
              </Button>
            </Col>
          </Row>
        )}

        {profile?.facebook && (
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Button
                type="primary"
                icon={<i className="fa-brands fa-facebook right-12" />}
                size="large"
                block
                href={`${profile.facebook}`}
                className="fb-bg"
              >
                Facebook
              </Button>
            </Col>
          </Row>
        )}

        {profile?.qrcode && (
          <Row justify="center" className="top-48">
            <Col xs={18} lg={6}>
              <QRCode size={200} className="qrcode" value={profile.qrcode} />
            </Col>
          </Row>
        )}
      </Content>

      {profile?._id && (
        <Footer className="footer">
          <Row justify="center" className="top-24">
            <Col xs={18} lg={6}>
              <Typography className="top-12">
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
      )}
    </Layout>
  );
}
