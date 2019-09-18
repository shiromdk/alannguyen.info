const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send({ status: false, message: 'Alan' })
})
router.post('/test', (req, res) => {
  // res.redirect(process.env.WEBAPP_URL);
  res.send('SERVER ALIVE')
})

module.exports = router
