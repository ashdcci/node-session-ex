var express = require('express')
var router = express.Router()

router.use(function(req, res, next) {
  if(req.flash){
   //  res.locals.flash = req.flash;
    console.log(req.locals.flash);
  }else{
    res.locals.flash = '';
  }
})

router.get('/',function(req, res, next){
  res.send('helo')
  return
})

router.post('/data',function(req, res, next){
    res.redirect('/post')
})

module.exports = router
