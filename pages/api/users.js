import { UsersDefault } from "../../Data/UsersDefault"

export default function handler(req, res) {
    if(req.method === "GET"){res.status(200).json(UsersDefault)}
    else if(req.method === "POST"){
      const userInfo = {
        id: Math.random,
        ...req.body.newData
      }
      UsersDefault.push(userInfo)
      res.status(201).json(userInfo)
    }
  }