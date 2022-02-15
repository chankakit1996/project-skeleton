import express from 'express';

const router = express.Router();

router.get('/', () => {
    console.log("success")
})

export default router;
