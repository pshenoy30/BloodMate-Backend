import User from "../models/userSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
    const { email, password } = req.body;
    console.log(email, password);
    if( !email || !password){
      return res.status(400).send("All fields are mandatory");
    }
    const user =  await User.findOne({email: email});
    if(await bcrypt.compare(password, user.password) && user){
      const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "60m"});
      return res.status(200).json({accessToken}); 
    }else{
      return res.status(401).send("Email or password is not valid");
    }
  } catch(err) {
    console.log(err);
    res.status(500).send("server error");
  }
}

const postUser = async (req,res) => {
  try{
    const {email, userName, password}  = req.body;
    if(!email || !userName || !password){
      console.log("email", req.body.email);
      console.log("username", req.body.userName);
      console.log("password", req.body.password);
      return res.status(400).send("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email: email});
    if(userAvailable){
      return res.status(400).json(userAvailable);
    }

    const id = await User.countDocuments();
    const hashedPassword = await bcrypt.hash(password, 10)
    const user =  await User.create({
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      birthDate:req.body.birthDate,
      email: req.body.email,
      gender: req.body.gender,
      lastDonated: req.body.lastDonated,
      bloodType: req.body.bloodType,
      availability: req.body.availability,
      formSigned: req.body.formSigned,
      userType:  "donor",
      city: req.body.city,
      siteId: req.body.siteId,
      password: hashedPassword,
      id: id+1
    });
    res.status(201).send("User created");
  }catch(err){
    console.log(err);
    res.status(400).send("User data was not valid");
  }
}

const currentUser = async (req,res) => {
  console.log(req.user)
  if(req.user){
    return res.status(200).json(req.user);
  } else{
    return res.status(404).send("No user is found");
  }
}


export { getDonorUsers, getRequestUsers, getUser, postUser, currentUser};