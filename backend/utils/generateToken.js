import jwt from "jsonwebtoken";

const generateToken = (id) => {
  console.log(process.JWT_SECRET)
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
};

export default generateToken;
