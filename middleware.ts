import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // Versão simplificada do middleware para evitar problemas com o Service Worker
  return NextResponse.next()
}

// Configurar quais rotas o middleware deve ser executado
export const config = {
  matcher: ["/admin/:path*", "/login"],
}
