const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const foldersRouter = require('./folders.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/folders', foldersRouter);

//This is a test route.
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;