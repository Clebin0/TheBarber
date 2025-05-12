import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

// Em um ambiente real, você usaria um banco de dados para armazenar usuários
// e um método seguro para verificar senhas (como bcrypt)
const ADMIN_USERS = [
  {
    id: "1",
    name: "Admin",
    email: "admin@thebbarberr.com",
    // Em produção, nunca armazene senhas em texto puro
    password: "admin123",
    role: "admin",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Verificar se o email e senha foram fornecidos
    if (!email || !password) {
      return NextResponse.json({ message: "Email e senha são obrigatórios" }, { status: 400 })
    }

    // Encontrar o usuário pelo email
    const user = ADMIN_USERS.find((u) => u.email === email)

    // Verificar se o usuário existe e a senha está correta
    if (!user || user.password !== password) {
      return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 })
    }

    // Em um ambiente real, você usaria JWT ou outro método seguro
    // para gerar tokens de autenticação
    const token = generateToken(user)

    // Definir o cookie de autenticação
    cookies().set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
    })

    // Retornar resposta de sucesso
    return NextResponse.json({
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Erro ao fazer login:", error)
    return NextResponse.json({ message: "Erro interno do servidor" }, { status: 500 })
  }
}

// Função para gerar um token simples
// Em produção, use uma biblioteca como jsonwebtoken
function generateToken(user: (typeof ADMIN_USERS)[0]) {
  // Simulação simples de token
  // Em produção, use JWT com chave secreta
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 1 semana
  }

  return Buffer.from(JSON.stringify(payload)).toString("base64")
}
