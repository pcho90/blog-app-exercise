const { Router } = require('express');
const commentsController = require('../controllers/comments');

const router = Router();

router.get('/:id', commentsController.getComments);
router.post('/', commentsController.createComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
