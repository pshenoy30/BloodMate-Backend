import User from "../models/userSchema.js"

const getDonorUsers = async (req, res, next) => {
    try{
        const users =  await User.find({"userType":"donor"}).sort({"id": 1});
    
        return res.status(200).json({
          data: users
        });
      } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }
}

const getRequestUsers = async (req, res, next) => {
    try{
        const users =  await User.find({"userType":"requestor"}).sort({"id": 1});
        return res.status(200).json({
          data: users
        });
      } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }
}

export { getDonorUsers, getRequestUsers };