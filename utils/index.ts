const jwt = require('jsonwebtoken');

export async function getToken(did: string) {
  const [accessToken] = await Promise.all([
    jwt.sign(
      {
        sub: did,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' },
    ),
  ]);

  return {
    accessToken,
  };
}

export async function verifyToken(req) {
  try {
    const token = req?.headers?.authorization?.split(' ')[1];
    console.log(token);

    if (!token) {
      return false;
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    console.log(verified);

    if (verified) {
      return verified.sub;
    }

    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}
