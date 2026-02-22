import e, { Router } from "express";


const router = Router();

router.get('/', (_req, res) => {
    res.send('Hello from the main route!');
});


export default router;