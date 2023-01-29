import { Profile } from '../entities/profile.entity';
import { myDataSource } from '../data-source';
import { verifyToken } from '../utils';
const express = require('express');
const app = express.Router();

// create profile
app.put('/', async function (req, res) {
  try {
    const rows = await myDataSource.getRepository(Profile).count({ take: 1 });

    const verified = verifyToken(req, res);

    if (rows < 2 && verified) {
      const request = req.body;

      const profile = myDataSource.getRepository(Profile).create(request);
      await myDataSource.getRepository(Profile).save(profile);

      return res.status(201);
    }

    return res.status(403);
  } catch (e) {
    console.log(e);
    return res.status(500);
  }
});

// get profile
app.get('/', async function (req, res) {
  try {
    const results = await myDataSource.getRepository(Profile).find();

    return res.json(results[0]);
  } catch (e) {
    console.log(e);
    return res.status(500);
  }
});

// update profile
app.post('/', async function (req, res) {
  try {
    const verified = verifyToken(req, res);
    const request = req.body;

    if (verified === request.did) {
      const profile = await myDataSource.getRepository(Profile).findOneBy({
        did: request.did,
      });

      myDataSource.getRepository(Profile).merge(profile, request);
      await myDataSource.getRepository(Profile).save(profile);

      return res.status(201);
    }

    return res.status(403);
  } catch (e) {
    console.log(e);
    return res.status(500);
  }
});

module.exports = app;
