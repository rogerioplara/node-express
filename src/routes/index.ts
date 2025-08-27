import express, { RequestHandler } from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos';
import { intervir } from '../middlewares/intervir';

const router = express.Router();

router.use(intervir);

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

router.get('/ping', intervir, (req, res) => {
    console.log('Executou o ping!')
    res.json({ pong: true });
});

router.get('/', (req, res) => {
    console.log('PARAMS', req.params);
    console.log('QUERY', req.query);
    console.log('BODY', req.body);

    let name = 'Rogerio';
    let age = 90;

    res.json({name, age});
});

export default router;