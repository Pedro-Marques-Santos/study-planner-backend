import { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import { AppError } from "../../errors/AppError";

export async function authGoogle(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const bearertoken = request.headers.authorization;

  if (!bearertoken) {
    throw new AppError("No authorization token provided", 401);
  }

  const [, token] = bearertoken.split(" ");

  if (!token) {
    throw new AppError("Invalid token format", 401);
  }

  try {
    const result = await admin.auth().verifyIdToken(token);
    const idgoogle = result.uid;

    request.user = {
      id: idgoogle,
    };

    next();
  } catch (e: any) {
    if (e.code === "auth/id-token-expired") {
      throw new AppError("Token expired", 401);
    }

    throw new AppError("Authentication failed", 401);
  }
}
