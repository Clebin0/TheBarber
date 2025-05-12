import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgendamentoConfirmadoPage() {
  return (
    <div className="container flex items-center justify-center min-h-[80vh] bg-black text-white">
      <Card className="max-w-md w-full bg-zinc-900 border-zinc-800">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-amber-500" />
          </div>
          <CardTitle className="text-2xl text-amber-500">AGENDAMENTO CONFIRMADO!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-zinc-300">
            Seu horário foi agendado com sucesso. Enviamos uma confirmação para seu e-mail e/ou telefone.
          </p>
          <p className="text-zinc-500">
            Lembre-se de chegar com 5 minutos de antecedência para não perder seu horário.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button asChild variant="outline" className="border-amber-500 text-amber-500 hover:bg-zinc-800">
            <Link href="/agenda">VER AGENDA</Link>
          </Button>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
            <Link href="/">VOLTAR AO INÍCIO</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
