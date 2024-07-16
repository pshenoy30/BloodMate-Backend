import User from "../models/userSchema.js"
import bcrypt from "bcrypt"

const getDonorUsers = async (req, res) => {
    try{
        const users =  await User.find({userType:"donor" , city:req.params.city}).sort({"id": 1});
        if(users.length > 0){
          return res.status(200).json(users);
        } else{
          return res.status(404).send("No donors available")
        }
      } catch(err) {
        console.log(err);
        res.status(500).send("server error");
      }
}

const getRequestUsers = async (req, res) => {
    try{
        const users =  await User.find({userType:"requestor", city:req.params.city}).sort({"id": 1});
        if(users.length > 0){
          return res.status(200).json(users);
        } else{
          return res.status(404).send("No requestors available")
        }
      } catch(err) {
        console.log(err);
        res.status(500).send("server error");
      }
}


const getUser = async (req,res) => {
  try{
    const user =  await User.findOne({userName: req.body.userName})
      if(!user.validPassword(req.body.password) && !user){
        return res.status(401).send("Either the password or the username is not valid")
      } else{
        return res.status(200).json(user);
      }
  } catch(err) {
    console.log(err);
    res.status(500).send("server error");
  }
}

const postUser = async (req,res) => {
  try{
    const id = await User.countDocuments();
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user =  new User({
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      email: req.body.email,
      gender: req.body.gender,
      lastDonated: req.body.lastDonated,
      bloodType: req.body.bloodType,
      availability: req.body.availability,
      formSigned: req.body.formSigned,
      userType:  req.body.userType,
      city: req.body.city,
      siteId: req.body.siteId
    });
    user.id = id+1;
    user.password = user.generateHash(req.body.password);
    user.save();
    res.status(201).send("User created");
    // console.log(salt);
    // console.log(hashedPassword);
    // await User.save((err)=> {
    //   if (err){
    //     console.log(err);
    //     res.status(500).send("User not created");
    //   }else{
    //     res.status(201).send("User created");
    //   }
    // });
  }catch(err){
    console.log(err);
    res.status(500).send("server error");
  }
}


export { getDonorUsers, getRequestUsers, getUser, postUser };