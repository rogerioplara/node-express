import express from 'express';

const router = express.Router();

router.get('/:from/:to', (req, res) => {
    const from = req.params.from.toUpperCase();
    const to = req.params.to.toUpperCase();
    res.json({ flight: { from: from, to: to, price: 1234.56 } })
});

export default router;