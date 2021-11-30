import { MijozData } from "../../Data/MijozData"

export default function handler(req, res) {
    if(req.method === "GET"){res.status(200).json(MijozData)}
    else if(req.method === "POST"){
      const mijozInfo = {
        id: Math.random,
        ...req.body.newMijoz
      }
      MijozData.push(mijozInfo)
      res.status(201).json(mijozInfo)
    }
}