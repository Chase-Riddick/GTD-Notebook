const express = require('express');
const asyncHandler = require('express-async-handler');
const { Folder } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const { userId } = req.body;
    const folders = await Folder.foldersByUserId(userId)
    return res.json({ folders })
}))

// router.get('/:id', asyncHandler(async function(req, res) {
// }))

module.exports = router;