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


module.exports = router;