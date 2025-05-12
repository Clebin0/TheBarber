"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, LogOut, Pencil, Trash2, User } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

// Tipos para os dados do agendamento
type Appointment = {
  id: string
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
}

// Simulação de dados para o painel administrativo
const mockAppointments: Appointment[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao@example.com",
    phone: "(11) 98765-4321",
    service: "corte",
    date: "2025-05-10",
    time: "14:00",
  },
  {
    id: "2",
    name: "Maria Souza",
    email: "maria@example.com",
    phone: "(11) 91234-5678",
    service: "combo",
    date: "2025-05-10",
    time: "15:30",
  },
  {
    id: "3",
    name: "Pedro Santos",
    email: "pedro@example.com",
    phone: "(11) 99876-5432",
    service: "barba",
    date: "2025-05-11",
    time: "10:00",
  },
]

export default function AdminPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [date, setDate] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(true)

  // Mapear serviços para nomes amigáveis
  const serviceNames: Record<string, string> = {
    corte: "Corte de Cabelo",
    barba: "Barba",
    combo: "Combo Premium",
    degradê: "Degradê",
    platinado: "Platinado",
    kids: "Corte Infantil",
  }

  useEffect(() => {
    // Simulação de carregamento de dados
    const loadData = async () => {
      setIsLoading(true)
      // Em um ambiente real, você buscaria do banco de dados
      await new Promise((resolve) => setTimeout(resolve, 500))
      setAppointments(mockAppointments)
      setIsLoading(false)
    }

    loadData()
  }, [])

  // Filtrar agendamentos pela data selecionada
  const filteredAppointments = appointments.filter((appointment) => appointment.date === format(date, "yyyy-MM-dd"))

  const handleDeleteAppointment = (id: string) => {
    // Em um ambiente real, você enviaria uma requisição para excluir do banco de dados
    setAppointments(appointments.filter((appointment) => appointment.id !== id))

    toast({
      title: "Agendamento cancelado",
      description: "O agendamento foi cancelado com sucesso.",
    })
  }

  const handleLogout = async () => {
    // Simulação de logout
    router.push("/login")
  }

  return (
    <div className="container py-10 bg-black text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-amber-500">PAINEL ADMINISTRATIVO</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-md border border-zinc-800">
              <User className="h-4 w-4 text-amber-500" />
              <span className="text-zinc-300">admin</span>
            </div>
            <Button
              variant="outline"
              className="border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-zinc-800">
            <TabsTrigger
              value="appointments"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
            >
              Agendamentos
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
              Configurações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-4">
            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <CardTitle className="text-amber-500">GERENCIAR AGENDAMENTOS</CardTitle>
                <CardDescription className="text-zinc-400">
                  Visualize, edite ou cancele os agendamentos da barbearia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-lg font-medium mb-2 text-white">Selecione uma data</h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-zinc-800 border-zinc-700 hover:bg-zinc-700",
                            !date && "text-zinc-500",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
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
                          onSelect={(date) => date && setDate(date)}
                          locale={ptBR}
                          className="bg-zinc-800 text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="md:w-2/3">
                    <h3 className="text-lg font-medium mb-2 text-white">
                      Agendamentos para {format(date, "dd 'de' MMMM", { locale: ptBR })}
                    </h3>

                    {isLoading ? (
                      <div className="text-center p-10">
                        <p className="text-zinc-400">Carregando agendamentos...</p>
                      </div>
                    ) : filteredAppointments.length === 0 ? (
                      <div className="text-center p-10 border rounded-lg border-zinc-800">
                        <p className="text-zinc-400">Não há agendamentos para esta data.</p>
                      </div>
                    ) : (
                      <Table>
                        <TableHeader className="bg-zinc-800">
                          <TableRow className="border-zinc-700">
                            <TableHead className="text-zinc-300">Horário</TableHead>
                            <TableHead className="text-zinc-300">Cliente</TableHead>
                            <TableHead className="text-zinc-300">Serviço</TableHead>
                            <TableHead className="text-zinc-300">Contato</TableHead>
                            <TableHead className="text-right text-zinc-300">Ações</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredAppointments
                            .sort((a, b) => a.time.localeCompare(b.time))
                            .map((appointment) => (
                              <TableRow key={appointment.id} className="border-zinc-800">
                                <TableCell className="font-medium text-white">{appointment.time}</TableCell>
                                <TableCell className="text-white">{appointment.name}</TableCell>
                                <TableCell className="text-white">
                                  {serviceNames[appointment.service] || appointment.service}
                                </TableCell>
                                <TableCell className="text-white">{appointment.phone}</TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="hover:bg-zinc-800 text-zinc-300 hover:text-white"
                                    >
                                      <Pencil className="h-4 w-4" />
                                      <span className="sr-only">Editar</span>
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteAppointment(appointment.id)}
                                      className="hover:bg-zinc-800 text-zinc-300 hover:text-white"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                      <span className="sr-only">Excluir</span>
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <CardTitle className="text-amber-500">CONFIGURAÇÕES DA BARBEARIA</CardTitle>
                <CardDescription className="text-zinc-400">
                  Gerencie os horários de funcionamento e serviços oferecidos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">
                  Esta seção está em desenvolvimento. Em breve você poderá configurar os horários de funcionamento,
                  serviços oferecidos e preços.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
