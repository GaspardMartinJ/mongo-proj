import express from 'express';

const router = express.Router();

// Route GET /about
router.get('/', (req, res) => {
  res.render('about');
});

export default router;