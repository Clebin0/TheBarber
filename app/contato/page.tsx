"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Instagram, Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContatoPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio de mensagem
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Mensagem enviada",
      description: "Recebemos sua mensagem e responderemos em breve.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="container py-10 bg-black text-white">
      <h1 className="text-3xl font-bold text-center mb-10 text-amber-500">ENTRE EM CONTATO</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-amber-500">ENVIE UMA MENSAGEM</CardTitle>
              <CardDescription className="text-zinc-400">
                Preencha o formulário abaixo para entrar em contato conosco.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-300">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-300">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-zinc-300">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-zinc-300">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem aqui..."
                    className="min-h-[120px] bg-zinc-800 border-zinc-700 text-white"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "ENVIANDO..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> ENVIAR MENSAGEM
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-amber-500">INFORMAÇÕES DE CONTATO</CardTitle>
              <CardDescription className="text-zinc-400">Entre em contato conosco pelos canais abaixo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Endereço</h3>
                  <p className="text-zinc-400">Rua das Barbearias, 123 - Centro</p>
                  <p className="text-zinc-400">São Paulo - SP, 01234-567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Telefone</h3>
                  <p className="text-zinc-400">(11) 99999-9999</p>
                  <p className="text-zinc-400">(11) 2222-3333</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">E-mail</h3>
                  <p className="text-zinc-400">contato@thebbarberr.com</p>
                  <p className="text-zinc-400">agendamento@thebbarberr.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Horário de Funcionamento</h3>
                  <p className="text-zinc-400">Segunda a Sexta: 9h às 19h</p>
                  <p className="text-zinc-400">Sábado: 9h às 18h</p>
                  <p className="text-zinc-400">Domingo e Feriados: Fechado</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Instagram</h3>
                  <p className="text-zinc-400">@thebbarberr</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-amber-500">LOCALIZAÇÃO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-md">
                <img
                  src="/images/mapa-barbearia.png"
                  alt="Mapa da localização da barbearia"
                  className="h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
