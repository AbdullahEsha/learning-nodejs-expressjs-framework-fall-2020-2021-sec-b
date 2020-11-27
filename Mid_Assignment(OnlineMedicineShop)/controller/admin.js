const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get('/', (req, res)=>{
  if(req.session.user != null){
    res.render('admin/index');
  }else{
    res.redirect('/login');
  }
})

router.get('/profile', (req, res)=>{
	var id = req.cookies['id'];
    //res.send(data);
    userModel.getById(id, function(results){
		console.log(results);
        res.render('admin/profile', {userlist : results});
    });
	
});
router.get('/editProfile', (req, res)=>{
  var id = req.cookies['id'];
    //res.send(data);
    userModel.getById(id, function(results){
    console.log(results);
        res.render('admin/editProfile', {userlist : results});
    });
  
});

router.post('/editProfile',(req,res)=>{
  var user = {
    name     : req.body.name,
    userName : req.body.userName,
    email    : req.body.email,
    password : req.body.password,
    image    : req.body.image,
    id       : req.cookies['id']
  }
  userModel.updateUser(user,function(status){
    if (status) {
      res.redirect('/admin/Profile');
    }else{
      res.redirect('/admin/editProfile?sql_error!!');
    }
  });
});
router.get('/allUser', (req, res)=>{
  userModel.getAll(function(results){
    console.log(results);
    res.render('admin/allUser', {userlist: results});
  });
});

module.exports = router;
