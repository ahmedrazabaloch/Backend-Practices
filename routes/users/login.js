import User from "../../models/user/index.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const checkPassword = bcrypt.compareSync(password, user.password);
      if (checkPassword) {
        var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
        res
          .status(200)
          .send({ status: 200, message: "login successfull", user, token });
      } else {
        res.status(401).send({ status: 401, message: "Incorrect password" });
      }
    } else {
      res.status(404).send({ status: 404, message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ status: 500, err });
  }
};

export default loginUser;
