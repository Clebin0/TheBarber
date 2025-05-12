"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Lock, LogIn, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Login realizado com sucesso",
          description: "Você será redirecionado para o painel administrativo.",
          variant: "default",
        })

        // Redirecionar para o painel administrativo
        setTimeout(() => {
          router.push("/admin")
        }, 1000)
      } else {
        toast({
          title: "Erro ao fazer login",
          description: data.message || "Credenciais inválidas. Tente novamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: "Ocorreu um erro ao tentar fazer login. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen bg-black text-white py-10">
      <div className="w-full max-w-md">
        <div>
          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Lock className="h-6 w-6 text-amber-500" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center text-amber-500">ACESSO ADMINISTRATIVO</CardTitle>
              <CardDescription className="text-center text-zinc-400">
                Entre com suas credenciais para acessar o painel administrativo
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-300">
                    E-mail
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="admin@thebbarberr.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white pl-10 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-zinc-300">
                      Senha
                    </Label>
                    <Link href="#" className="text-xs text-amber-500 hover:text-amber-400">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white pl-10 focus:border-amber-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-zinc-500 hover:text-zinc-300"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                    </button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all hover:scale-105"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>ENTRANDO...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      <span>ENTRAR</span>
                    </div>
                  )}
                </Button>
              </CardFooter>
            </form>
            <div className="p-6 pt-0 text-center text-sm text-zinc-500">
              <Link href="/" className="hover:text-amber-500 transition-colors">
                Voltar para a página inicial
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-6 text-center text-sm text-zinc-500">
          <p>Para fins de demonstração, use:</p>
          <p className="mt-1">
            <span className="text-zinc-400">Email:</span> admin@thebbarberr.com
          </p>
          <p>
            <span className="text-zinc-400">Senha:</span> admin123
          </p>
        </div>
      </div>
    </div>
  )
}
