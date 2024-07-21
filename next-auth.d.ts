import { Role } from "@/schemas/user.schema"
import { type DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

export type ExtendedUser = DefaultSession["user"] & {
  role: Role
  isOAuth: boolean
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: Role
  }
}