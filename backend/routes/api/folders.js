const express = require('express');
const asyncHandler = require('express-async-handler');
const { Folder, Note} = require('../../db/models');

const router = express.Router();

router.get('/:id', asyncHandler(async function(req, res) {
    // const { userId } = req.params.userId;
    const folders = await Folder.foldersByUserId(req.params.id)
    return res.json({ folders })
}))

router.get('/:id/:title', asyncHandler(async function(req, res) {
    // const { userId } = req.params.userId;
    const notes = await Note.byUserAndFolder(req.params.id, req.params.title)
    return res.json({ notes })
}))

// router.get('/:id', asyncHandler(async function(req, res) {
// }))

module.exports = router;