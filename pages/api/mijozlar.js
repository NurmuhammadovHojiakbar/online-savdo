import { MijozData } from "../../Data/MijozData"

export default function handler(req, res) {
    res.status(200).json(MijozData)
}