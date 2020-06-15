const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('Users route'));

module.exports = router;
