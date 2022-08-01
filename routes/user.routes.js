const router = require("express").Router();
const { isLoggedIn } = require("../middlewares/auth.js");
const User = require("../models/User.model.js");


//GET "/user/myprofile Render my profile view
router.get("/myprofile", isLoggedIn, async (req, res, next) => {
  try {
    const profileUser = await User.findById(req.session.user._id);
    res.render("user/my-profile.hbs", {profileUser});
  } catch (err){
    next(err)
  }
})

//GET "user/myprofile/edit" Render edit profile view
router.get("/myprofile/edit", async (req, res, next) =>{
    
    try{
        const profileUser = await User.findById(req.session.user._id);
        res.render("user/edit.hbs", {profileUser})
    }catch (err){
        next(err)
    }
})

//POST "user/myprofile/edit" Edit profile and redirect to my profile
router.post("/myprofile/edit", async (req, res, next) =>{
    const {username, email} = req.body
    try{    
        const profileUser = await User.findByIdAndUpdate(req.session.user._id, {
            username,
            email,
        });
        res.redirect("/user/myprofile")
    }catch(err){
        next(err)
    }
})



module.exports = router;
