var express = require('express')
var app = express()
var router = express.Router()

router.use('/', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })

router.post('/', function (req, res,next) {
    res.send('Post method');
});
router.get('/', function (req, res,next) {
    res.send('Get method');
})
app.listen(5000,()=>console.log('Listening on server port 5000'))

app.use('/', router)
