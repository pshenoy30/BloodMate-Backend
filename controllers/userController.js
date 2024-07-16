import User from "../models/userSchema.js"

const getDonorUsers = async (req, res) => {
    try{
<<<<<<< HEAD
        const users =  await User.find({userType:"donor" , city:req.body.city}).sort({"id": 1});
=======
        const users =  await User.find({userType:"donor" , city:req.params.city}).sort({"id": 1});
        console.log(users)
>>>>>>> develop
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
        const users =  await User.find({userType:"requestor", city:req.body.city}).sort({"id": 1});
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

export { getDonorUsers, getRequestUsers };