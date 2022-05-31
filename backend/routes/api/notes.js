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

  router.put(
    '/:id',
    asyncHandler(async function (req, res) {
      const {
        title,
        content
      } = req.body;

      const note = await Note.findByPk(req.params.id);
      console.log("****************1**************")
      console.log(note)
      note.title = title;
      note.content = content;
      await note.save()
      console.log("****************2**************")
      console.log(note)
      return res.json(note);
    })
  );

module.exports = router;