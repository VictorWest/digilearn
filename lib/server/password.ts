import bcrypt from "bcrypt"

export async function hashPassword(password: string){
  const SALT_ROUNDS = 10

  return await bcrypt.hash(password, SALT_ROUNDS)
}