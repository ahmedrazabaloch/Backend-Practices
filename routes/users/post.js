import User from "../../models/user/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const postUser = async (req, res) => {
  // const user = new User(req.body)
  // user.save()
  try {
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create({ ...req.body, password });
    const data = user.toObject();
    delete data.password;
    var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    res.status(201).send({ status: 201, user: data, token });
  } catch (err) {
    res.status(500).send({ status: 500, error: err });
  }
};

export default postUser;
