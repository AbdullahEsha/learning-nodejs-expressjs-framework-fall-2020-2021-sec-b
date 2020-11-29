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
router.get('/allCustomer', (req, res)=>{
  userModel.getAll(function(results){
    console.log(results);
    res.render('admin/allCustomer', {cuslist: results});
  });
});


router.get('/deleteCustomer/:id', (req, res)=>{
  var data = req.params.id;
  userModel.getById(data,function(results){
    console.log(results);
    res.render('admin/deleteCustomer', {cuslist: results});
  });
});

router.post('/deleteCustomer/:id',(req,res)=>{
  var data = req.params.id;
  userModel.delete(data,function(status){
    if (status) {
      res.redirect('/admin/allCustomer');
    }else{
      res.redirect('/admin/deleteCustomer/:id?sql_error!!');
    }
  });
});
 


module.exports = router;
