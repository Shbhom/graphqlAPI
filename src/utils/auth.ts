import * as jwt from "jsonwebtoken";
export const APP_SECRET = "t3hrda27SU10HL+QsANH5I7ny1k=";
export interface AuthTokenPayload {
  UserId: number;
}

export function decodeAuthHeader(authHeader: string): AuthTokenPayload {
  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    throw new Error("No token found");
  }
  return jwt.verify(token, APP_SECRET) as AuthTokenPayload;
}
