const express = require('express');
const asyncHandler = require('express-async-handler');
const { Folder, Note} = require('../../db/models');

const router = express.Router();

router.get('/:folderId', asyncHandler(async function(req, res) {
    const notes = await Note.byFolder(req.params.folderId)
    return res.json(notes)
}))

router.get('/:id/:title', asyncHandler(async function(req, res) {
    const notes = await Note.getAll(req.params.id, req.params.title)
    return res.json(notes)
}))

router.put(
    '/:id',
    asyncHandler(async function (req, res) {
      const {
        title
      } = req.body;
      let folder = await Folder.findByPk(req.params.id);
      folder.title = title;
      await folder.save()
      return res.json(folder);
    })
  );

  router.delete('/:id',
  asyncHandler(async function (req, res) {
    const folder = await Folder.findByPk(req.params.id);
    if (folder) {
      await folder.destroy();
      return res.json({message: 'Success'});
  } else {
      res.json({message: 'Fail'})
  }
  })
);

router.post(
    '/',
    asyncHandler(async function (req, res) {
      const folder = await Folder.create(req.body);
      return res.json(folder);
    })
  );



module.exports = router;