const { Router } = require('express');

const usersController = require('../controllers/users');
const commentsController = require('../controllers/comments');

const router = Router();

router.get('/', usersController.getUsers);
router.get('/:id/comments', commentsController.getCommentsByUser);
router.post('/signin', usersController.signInUser);
router.get('/:id', usersController.getUser);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
