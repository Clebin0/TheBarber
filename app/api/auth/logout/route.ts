import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST() {
  // Remover o cookie de autenticação
  cookies().delete("auth_token")

  // Retornar resposta de sucesso
  return NextResponse.json({ message: "Logout realizado com sucesso" })
}
