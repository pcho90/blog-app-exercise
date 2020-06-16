const { Router } = require('express');
const postsController = require('../controllers/posts');

const router = Router();

router.get('/', postsController.getPosts);
router.get('/:id', postsController.getPost);
router.post('/', postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;
