import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "4321";

/**
 * JWT를 생성하는 함수.
 * @param userId 사용자의 고유 식별자
 * @param isSuccess 회원가입 성공 여부
 * @returns 생성된 JWT
 */
export const generateJWT = (userId: string, isSuccess: boolean): string => {
  const expiresIn = "3m";
  const payload = { userId, isSuccess };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn });
  return token;
};

/**
 * JWT를 생성하는 함수.
 * @param userId 사용자의 고유 식별자
 * @param isSuccess 회원가입 성공 여부
 * @returns 생성된 JWT
 */
export const generateLoginJWT = (userId: string, isSuccess: boolean): string => {
  const expiresIn = "1h";
  const payload = { userId, isSuccess };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn });
  return token;
};

/**
 * JWT를 검증하는 함수.
 * @param token 검증할 JWT
 * @returns 검증된 토큰의 정보 객체 또는 null
 */
export const verifyJWT = (
  token: string
): { userId: string; isSuccess: boolean } | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;

    if (
      typeof decoded === "object" &&
      "userId" in decoded &&
      "isSuccess" in decoded
    ) {
      return {
        userId: decoded.userId,
        isSuccess: decoded.isSuccess,
      };
    }
    return null;
  } catch (error) {
    return null;
  }
};