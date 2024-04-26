import "dotenv/config";
import jwt from "jsonwebtoken";

const tokenVerifications = (req, res, next) => {
  try {
    if (req.headers?.authorization) {
      const token = req.headers.authorization.split(" ")[0];
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        next();
      } else {
        res.status(403).send({ status: 403, message: "token unauthorized" });
      }
    } else {
      res.status(403).send({ status: 403, message: "token not provided" });
    }
  } catch (err) {
    res.status(403).send({ status: 403, message: "token unauthorized" });
  }
};

export default tokenVerifications;
