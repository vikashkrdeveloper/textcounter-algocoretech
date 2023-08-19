const express=require('express');
const route=express.Router();
const pagenotfoundcontrollers=require('../controllers/pagenotfoundcontrollers');
const homepagecontrollers=require('../controllers/homepagecontrollers');
const registercontrollers=require('../controllers/registercontrollers');
const logincontrollers=require('../controllers/logincontrollers');
const userauthcontrollers=require('../controllers/userauthcontrollers');
const userdatacontrollers=require('../controllers/userdatacontrollers');
const userauthmiddleware=require('../middleware/userauthmiddleware');
const userdatamiddleware=require('../middleware/userdatamiddleware');
const logoutcontrollers=require('../controllers/logoutcontrollers');
route.get('/',homepagecontrollers);
route.get('/userauth',userauthmiddleware,userauthcontrollers);
route.get('/userdata',userdatamiddleware,userdatacontrollers);
route.get('/user/logout',logoutcontrollers)
route.post('/user/register',registercontrollers);
route.post('/login',logincontrollers);

route.all('*',pagenotfoundcontrollers)
module.exports=route;