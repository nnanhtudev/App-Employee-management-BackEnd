import jwt from "jsonwebtoken";
import "dotenv/config";

const createJWT = (req, res) => {
  let payload = { name: 'tudev', address: 'Quang Nam' }
  let key = process.env.JWT_SECRET

  let token = null
  try {
    token = jwt.sign(payload, key);
    console.log(token)
  } catch (error) {
    console.log(error)
  }
  return token
}

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET
  let data = null
  try {
    let decoded = jwt.verify(token, key)
    data = decoded
  } catch (err) {
    console.log(err)
  }
  return data
}

module.exports = { createJWT, verifyToken } 