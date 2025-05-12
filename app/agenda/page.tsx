import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAppointments } from "../agendar/actions"

export const dynamic = "force-dynamic"

export default async function AgendaPage() {
  const appointments = await getAppointments()

  // Agrupar agendamentos por data
  const groupedAppointments = appointments.reduce(
    (acc, appointment) => {
      const date = appointment.date
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(appointment)
      return acc
    },
    {} as Record<string, typeof appointments>,
  )

  // Ordenar datas
  const sortedDates = Object.keys(groupedAppointments).sort()

  // Mapear serviços para nomes amigáveis
  const serviceNames: Record<string, string> = {
    corte: "Corte de Cabelo",
    barba: "Barba",
    combo: "Combo Premium",
    degradê: "Degradê",
    platinado: "Platinado",
    kids: "Corte Infantil",
  }

  return (
    <div className="container py-10 bg-black text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-amber-500">AGENDA DA SEMANA</h1>
        <p className="text-center text-zinc-400 mb-8">Confira os horários já agendados para planejar sua visita.</p>

        {sortedDates.length === 0 ? (
          <div className="text-center p-10 border rounded-lg border-zinc-800 bg-zinc-900">
            <p className="text-zinc-400">Não há agendamentos para mostrar.</p>
          </div>
        ) : (
          sortedDates.map((date) => {
            const dateObj = new Date(date)
            const formattedDate = format(dateObj, "EEEE, dd 'de' MMMM", { locale: ptBR })

            return (
              <div key={date} className="mb-8">
                <h2 className="text-xl font-semibold mb-4 capitalize text-amber-500">{formattedDate}</h2>
                <Table className="border-zinc-800">
                  <TableCaption className="text-zinc-500">Horários agendados para {formattedDate}</TableCaption>
                  <TableHeader className="bg-zinc-900">
                    <TableRow className="border-zinc-800">
                      <TableHead className="text-zinc-300">Nome</TableHead>
                      <TableHead className="text-zinc-300">Horário</TableHead>
                      <TableHead className="text-zinc-300">Serviço</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {groupedAppointments[date]
                      .sort((a, b) => a.time.localeCompare(b.time))
                      .map((appointment, index) => (
                        <TableRow key={index} className="border-zinc-800 bg-zinc-900">
                          <TableCell className="font-medium text-white">{appointment.name}</TableCell>
                          <TableCell className="text-white">{appointment.time}</TableCell>
                          <TableCell className="text-white">
                            {serviceNames[appointment.service] || appointment.service}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
