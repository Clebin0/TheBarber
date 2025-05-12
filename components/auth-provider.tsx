"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

type User = {
  id: string
  name: string
  email: string
  role: string
} | null

type AuthContextType = {
  user: User
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  // Função de login simplificada
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulação de login
      if (email === "admin@thebbarberr.com" && password === "admin123") {
        setUser({
          id: "1",
          name: "Admin",
          email: email,
          role: "admin",
        })
        return true
      } else {
        toast({
          title: "Erro ao fazer login",
          description: "Credenciais inválidas",
          variant: "destructive",
        })
        return false
      }
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: "Ocorreu um erro ao tentar fazer login",
        variant: "destructive",
      })
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Função de logout simplificada
  const logout = async () => {
    setIsLoading(true)
    try {
      setUser(null)
      router.push("/login")
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }
  return context
}
