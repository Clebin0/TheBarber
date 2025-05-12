import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const authToken = cookies().get("auth_token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Não autenticado" }, { status: 401 })
    }

    // Em um ambiente real, você verificaria a validade do token
    // e buscaria os dados do usuário no banco de dados
    try {
      const payload = JSON.parse(Buffer.from(authToken, "base64").toString())

      // Verificar se o token expirou
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        cookies().delete("auth_token")
        return NextResponse.json({ message: "Token expirado" }, { status: 401 })
      }

      return NextResponse.json({
        user: {
          id: payload.id,
          email: payload.email,
          role: payload.role,
          name: "Administrador", // Em um ambiente real, isso viria do banco de dados
        },
      })
    } catch (error) {
      cookies().delete("auth_token")
      return NextResponse.json({ message: "Token inválido" }, { status: 401 })
    }
  } catch (error) {
    console.error("Erro ao verificar autenticação:", error)
    return NextResponse.json({ message: "Erro interno do servidor" }, { status: 500 })
  }
}
