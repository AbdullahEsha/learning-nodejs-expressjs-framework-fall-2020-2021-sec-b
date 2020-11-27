const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get('/', (req, res)=>{
  if(req.session.user != null){
    res.render('customer/index');
  }else{
    res.redirect('/login');
  }
})


module.exports = router;
