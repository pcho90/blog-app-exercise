const { Router } = require('express');
const postsController = require('../controllers/posts');

const router = Router();

router.get('/', postsController.getPosts);
router.post('/', postsController.createPost);

module.exports = router;
