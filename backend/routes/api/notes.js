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
      note.title = title;
      note.content = content;
      await note.save()
      return res.json(note);
    })
  );

  router.delete('/:id',
  asyncHandler(async function (req, res) {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      await note.destroy();
      return res.json({message: 'Success'});
  } else {
      res.json({message: 'Fail'})
  }
  })
);

module.exports = router;