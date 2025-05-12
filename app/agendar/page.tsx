"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { motion } from "@/components/ui/motion"

// Tipos para os serviços
type Service = {
  id: string
  name: string
  price: string
  duration: string
  description: string
  image: string
}

export default function AgendarPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [step, setStep] = useState(1)

  // Lista de serviços disponíveis
  const services: Service[] = [
    {
      id: "corte",
      name: "Corte de Cabelo",
      price: "R$ 45,00",
      duration: "30 min",
      description: "Corte moderno ou clássico, com acabamento perfeito.",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "barba",
      name: "Barba",
      price: "R$ 35,00",
      duration: "20 min",
      description: "Modelagem e aparagem de barba com produtos de alta qualidade.",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "combo",
      name: "Combo Premium",
      price: "R$ 70,00",
      duration: "50 min",
      description: "Pacote completo com corte de cabelo e barba por um preço especial.",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "degradê",
      name: "Degradê",
      price: "R$ 50,00",
      duration: "35 min",
      description: "Degradê perfeito com transições suaves e precisas.",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "platinado",
      name: "Platinado",
      price: "R$ 80,00",
      duration: "60 min",
      description: "Descoloração profissional para um visual moderno e impactante.",
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ]

  // Verificar se há um serviço selecionado nos parâmetros da URL
  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      setService(serviceParam)
    }
  }, [searchParams])

  // Avançar para o próximo passo
  const nextStep = () => {
    if (step === 1 && !service) {
      toast({
        variant: "destructive",
        title: "Selecione um serviço",
        description: "Por favor, selecione um serviço para continuar.",
      })
      return
    }

    if (step === 2 && (!date || !time)) {
      toast({
        variant: "destructive",
        title: "Selecione data e horário",
        description: "Por favor, selecione uma data e horário para continuar.",
      })
      return
    }

    setStep(step + 1)
  }

  // Voltar para o passo anterior
  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !time || !name || !phone || !service) {
      toast({
        variant: "destructive",
        title: "Erro no agendamento",
        description: "Por favor, preencha todos os campos obrigatórios.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const selectedDate = new Date(date)
      const formattedDate = format(selectedDate, "yyyy-MM-dd")

      // Fix: Don't destructure the result directly
      const result = await agendarHorario({
        name,
        email,
        phone,
        service,
        date: formattedDate,
        time,
      })

      if (result.success) {
        toast({
          title: "Agendamento realizado com sucesso!",
          description: `Seu horário foi agendado para ${format(selectedDate, "dd 'de' MMMM", { locale: ptBR })} às ${time}.`,
        })

        // Redirecionar para a página de confirmação ou home
        router.push("/agendamento-confirmado")
      } else {
        toast({
          variant: "destructive",
          title: "Erro no agendamento",
          description: result.error || "Ocorreu um erro ao agendar seu horário. Por favor, tente novamente.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro no agendamento",
        description: "Ocorreu um erro ao agendar seu horário. Por favor, tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Função simulada para agendar horário
  async function agendarHorario(data: any) {
    // Simulate a successful booking
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Basic validation
    if (!data.name || !data.phone || !data.service || !data.date || !data.time) {
      return { success: false, error: "Todos os campos são obrigatórios." }
    }

    // Simulate checking for time slot availability (replace with actual database check)
    const isTimeSlotAvailable = true // Assume it's always available for this simulation

    if (!isTimeSlotAvailable) {
      return { success: false, error: "Este horário não está disponível. Por favor, escolha outro." }
    }

    // In a real application, you would save the data to a database here
    console.log("Agendamento realizado:", data)

    return { success: true }
  }

  return (
    <div className="container py-10 bg-black text-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-500 mb-2">AGENDAR HORÁRIO</h1>
          <p className="text-zinc-400">Escolha seu serviço, data e horário preferidos</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-amber-500 text-black" : "bg-zinc-800 text-zinc-400"}`}
              >
                1
              </div>
              <span className={step >= 1 ? "text-white" : "text-zinc-500"}>Serviço</span>
            </div>
            <div className={`h-px w-12 ${step >= 2 ? "bg-amber-500" : "bg-zinc-700"}`}></div>
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-amber-500 text-black" : "bg-zinc-800 text-zinc-400"}`}
              >
                2
              </div>
              <span className={step >= 2 ? "text-white" : "text-zinc-500"}>Data e Hora</span>
            </div>
            <div className={`h-px w-12 ${step >= 3 ? "bg-amber-500" : "bg-zinc-700"}`}></div>
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-amber-500 text-black" : "bg-zinc-800 text-zinc-400"}`}
              >
                3
              </div>
              <span className={step >= 3 ? "text-white" : "text-zinc-500"}>Seus Dados</span>
            </div>
          </div>
        </div>

        <Card className="bg-zinc-900 border-zinc-800 text-white overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Passo 1: Seleção de Serviço */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-amber-500">ESCOLHA SEU SERVIÇO</CardTitle>
                  <CardDescription className="text-zinc-400">Selecione o serviço que deseja agendar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((svc) => (
                      <div
                        key={svc.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all hover:border-amber-500 ${service === svc.id ? "border-amber-500 bg-amber-500/10" : "border-zinc-800 bg-zinc-900"}`}
                        onClick={() => setService(svc.id)}
                      >
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img
                              src={svc.image || "/placeholder.svg"}
                              alt={svc.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white">{svc.name}</h3>
                            <p className="text-sm text-zinc-400">{svc.description}</p>
                            <div className="flex justify-between mt-2">
                              <span className="text-amber-500 font-bold">{svc.price}</span>
                              <span className="text-zinc-500 text-sm">{svc.duration}</span>
                            </div>
                          </div>
                        </div>
                        {service === svc.id && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle className="h-5 w-5 text-amber-500" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all hover:scale-105"
                  >
                    Próximo
                  </Button>
                </CardFooter>
              </motion.div>
            )}

            {/* Passo 2: Seleção de Data e Hora */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-amber-500">ESCOLHA DATA E HORÁRIO</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Selecione a data e horário para seu agendamento
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-amber-500",
                            !date && "text-zinc-500",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-amber-500" />
                          {date ? (
                            format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-zinc-800 border-zinc-700">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ptBR}
                          className="bg-zinc-800 text-white"
                          disabled={(date) => {
                            const day = date.getDay()
                            // Desabilita domingos (0) e datas passadas
                            return day === 0 || date < new Date(new Date().setHours(0, 0, 0, 0))
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-zinc-300">
                      Horário
                    </Label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {availableTimes.map((t) => (
                        <Button
                          key={t}
                          type="button"
                          variant="outline"
                          className={cn(
                            "border-zinc-700 hover:border-amber-500",
                            time === t
                              ? "bg-amber-500 text-black border-amber-500 hover:bg-amber-600"
                              : "bg-zinc-800 text-white",
                          )}
                          onClick={() => setTime(t)}
                          disabled={!date}
                        >
                          {t}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                  >
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all hover:scale-105"
                  >
                    Próximo
                  </Button>
                </CardFooter>
              </motion.div>
            )}

            {/* Passo 3: Informações Pessoais */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-amber-500">SEUS DADOS</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Preencha seus dados para confirmar o agendamento
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-zinc-800 rounded-lg mb-4">
                    <h3 className="font-medium text-white mb-2">Resumo do Agendamento</h3>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-400">Serviço:</span>
                      <span className="text-white">{services.find((s) => s.id === service)?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-400">Preço:</span>
                      <span className="text-amber-500 font-bold">{services.find((s) => s.id === service)?.price}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-400">Data:</span>
                      <span className="text-white">{date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : ""}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Horário:</span>
                      <span className="text-white">{time}</span>
                    </div>
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-amber-500"
                    />
                    <p className="text-sm text-zinc-500">Opcional. Usado para enviar confirmação do agendamento.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-zinc-300">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-amber-500"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                  >
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>AGENDANDO...</span>
                      </div>
                    ) : (
                      "CONFIRMAR AGENDAMENTO"
                    )}
                  </Button>
                </CardFooter>
              </motion.div>
            )}
          </form>
        </Card>
      </div>
    </div>
  )
}
