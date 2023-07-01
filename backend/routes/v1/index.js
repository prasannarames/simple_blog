const express = require('express');
const authRoute = require('./auth.routes');
// const blogRoute = require('./blog.routes');
// const userRoute = require('./user.routes');
// const commentRoute = require('./comment.routes');

const router = express.Router();
router.use('/auth', authRoute);
// router.use('/blog', blogRoute);
// router.use('/user', userRoute);
// router.use('/comment', commentRoute);

module.exports = router;