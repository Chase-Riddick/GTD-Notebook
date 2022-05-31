const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const foldersRouter = require('./folders.js');
const notesRouter = require('./notes.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/folders', foldersRouter);
router.use('/notes', notesRouter);

//This is a test route.
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;