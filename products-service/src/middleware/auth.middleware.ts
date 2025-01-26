import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import { getProfile } from "../services/users.service"

async function authMiddleware(req: Request, res: Response, next: any) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized!!" })
    }

    const decoded: JwtPayload = verify(token, `${process.env.JWT_SECRET}`) as JwtPayload
    const response = await getProfile(token);

    if (!response) {
      return res.status(401).json({ message: "User is not found!" })
    }
    req.user = response
    next()
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export default authMiddleware;