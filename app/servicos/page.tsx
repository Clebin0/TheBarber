import Link from "next/link"
import { Check, Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    id: "corte",
    name: "CORTE DE CABELO",
    price: "R$ 45,00",
    description: "Corte moderno ou clássico, com acabamento perfeito.",
    features: [
      "Consulta de estilo",
      "Lavagem com produtos premium",
      "Corte personalizado",
      "Finalização com produtos de qualidade",
      "Acabamento com máquina ou navalha",
    ],
    popular: false,
    image: "/images/corte-cabelo.png",
  },
  {
    id: "degradê",
    name: "DEGRADÊ",
    price: "R$ 50,00",
    description: "Degradê perfeito com transições suaves e precisas.",
    features: [
      "Consulta de estilo",
      "Técnica de degradê personalizada",
      "Acabamento com navalha",
      "Produtos premium para finalização",
      "Alinhamento de contornos",
    ],
    popular: true,
    image: "/images/degrade.png",
  },
  {
    id: "barba",
    name: "BARBA",
    price: "R$ 35,00",
    description: "Modelagem e aparagem de barba com produtos especiais.",
    features: [
      "Toalha quente para preparação",
      "Aplicação de óleo pré-barba",
      "Modelagem personalizada",
      "Acabamento com navalha",
      "Aplicação de balm pós-barba",
    ],
    popular: false,
    image: "/images/barba.png",
  },
  {
    id: "combo",
    name: "COMBO PREMIUM",
    price: "R$ 70,00",
    description: "Pacote completo com corte de cabelo e barba por um preço especial.",
    features: [
      "Todos os itens do corte de cabelo",
      "Todos os itens do serviço de barba",
      "Desconto especial no combo",
      "Prioridade no agendamento",
      "Bebida cortesia (água, café ou refrigerante)",
    ],
    popular: false,
    image: "/images/combo-premium.png",
  },
  {
    id: "platinado",
    name: "PLATINADO",
    price: "R$ 80,00",
    description: "Descoloração profissional para um visual moderno e impactante.",
    features: [
      "Consulta de cor",
      "Produtos de alta qualidade",
      "Técnica profissional de descoloração",
      "Tratamento pós-descoloração",
      "Finalização com produtos especiais",
    ],
    popular: false,
    image: "/images/platinado.png",
  },
  {
    id: "kids",
    name: "CORTE INFANTIL",
    price: "R$ 35,00",
    description: "Corte especial para crianças com atendimento diferenciado.",
    features: [
      "Ambiente amigável para crianças",
      "Corte personalizado",
      "Produtos suaves",
      "Experiência divertida",
      "Brinde especial",
    ],
    popular: false,
    image: "/images/corte-infantil.png",
  },
]

export default function ServicosPage() {
  return (
    <div className="container py-10 bg-black text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-500">NOSSOS SERVIÇOS</h1>
        <p className="mx-auto mt-4 max-w-[700px] text-zinc-400 md:text-xl">
          Oferecemos serviços premium para transformar seu visual com os melhores profissionais.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`bg-zinc-900 border-zinc-800 text-white ${service.popular ? "border-amber-500" : ""}`}
          >
            {service.popular && (
              <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-amber-500 px-3 py-1 text-xs font-bold text-black">
                MAIS POPULAR
              </div>
            )}
            <div className="h-48 overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-amber-500/10 p-3">
                  <Scissors className="h-8 w-8 text-amber-500" />
                </div>
              </div>
              <CardTitle className="text-xl text-center">{service.name}</CardTitle>
              <CardDescription className="text-zinc-400 text-center">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-3xl font-bold text-amber-500">{service.price}</div>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold">
                <Link href={`/agendar?service=${service.id}`}>AGENDAR AGORA</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mx-auto max-w-3xl mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-amber-500">SERVIÇOS ADICIONAIS</h2>
        <p className="text-zinc-400 mb-8">
          Além dos nossos serviços principais, oferecemos opções adicionais para complementar sua experiência.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-amber-500">SOBRANCELHA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 mb-2">Design e alinhamento de sobrancelhas para complementar seu visual.</p>
              <p className="font-bold text-amber-500">R$ 25,00</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-amber-500">HIDRATAÇÃO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 mb-2">Tratamento profundo para revitalizar cabelos danificados.</p>
              <p className="font-bold text-amber-500">R$ 50,00</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-amber-500">MASSAGEM FACIAL</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 mb-2">Massagem relaxante com óleos essenciais para revitalizar a pele.</p>
              <p className="font-bold text-amber-500">R$ 40,00</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-amber-500">PIGMENTAÇÃO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 mb-2">Pigmentação de barba para preenchimento e definição.</p>
              <p className="font-bold text-amber-500">R$ 60,00</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
            <Link href="/agendar">AGENDAR SERVIÇO</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
