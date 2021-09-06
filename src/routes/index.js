import express from 'express';
const indexRouter = express.Router();

router.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'Welcome to Express API template' });
});

module.exports = router;
