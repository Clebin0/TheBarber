export async function agendarHorario(data: any) {
  // Simulate a successful booking
  await new Promise((resolve) => setTimeout(resolve, 500))

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

export async function getAppointments() {
  // Simulate fetching appointments from a database
  await new Promise((resolve) => setTimeout(resolve, 500))

  const appointments = [
    {
      id: "1",
      name: "João Silva",
      email: "joao@example.com",
      phone: "(11) 98765-4321",
      service: "corte",
      date: "2024-01-20",
      time: "09:00",
    },
    {
      id: "2",
      name: "Maria Souza",
      email: "maria@example.com",
      phone: "(11) 91234-5678",
      service: "barba",
      date: "2024-01-20",
      time: "10:00",
    },
    {
      id: "3",
      name: "José Santos",
      email: "jose@example.com",
      phone: "(11) 99999-9999",
      service: "combo",
      date: "2024-01-21",
      time: "11:00",
    },
  ]

  return appointments
}
