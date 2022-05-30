const express = require('express');
const asyncHandler = require('express-async-handler');
const { Note } = require('../../db/models');

const router = express.Router();

router.post(
    '/',
    asyncHandler(async function (req, res) {
      const note = await Note.create(req.body);
      return res.json(note);
    })
  );

module.exports = router;