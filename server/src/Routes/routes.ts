import express from 'express'
const router:express.Router = express.Router();

router.get('/',(req,res) => {
    res.send('<h2>Hi</h2>')
})

export default router 


