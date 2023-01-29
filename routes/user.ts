import { User } from '../entities/user.entity';
import { myDataSource } from '../data-source';
import { getToken } from '../utils';
const express = require('express');
const app = express.Router();

// login user
app.post('/', async function (req, res) {
  try {
    const request = req.body;

    const user = await myDataSource
      .getRepository(User)
      .findOneBy({ did: request.did });

    if (user?._id) {
      const tokens = await getToken(user.did);
      return res.send(tokens);
    }

    const newUser = myDataSource.getRepository(User).create(request);
    await myDataSource.getRepository(User).save(newUser);

    const tokens = await getToken(request.did);

    return res.send(tokens);
  } catch (e) {
    console.log(e);
    return res.status(500);
  }
});

module.exports = app;
