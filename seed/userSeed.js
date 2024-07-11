import User from "../models/userSchema.js";
import UserJson from "../data/user.json" assert {type: "json"};

const importUserData = async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(UserJson);
    console.log("User data successfully seeded");
    
  } catch (error) {
    console.log(error);
  }
}

export default importUserData;