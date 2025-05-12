import Link from "next/link"
import { CalendarDays, Clock, HomeIcon, Instagram, MapPin, Menu, Phone, Scissors, Star, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-amber-500 transition-transform hover:scale-105"
          >
            <Scissors className="h-6 w-6" />
            <span>THE BARBER</span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="relative font-medium text-amber-500 transition-colors hover:text-amber-400 after:absolute after:bottom-[-1.5rem] after:left-0 after:h-[3px] after:w-full after:bg-amber-500 after:rounded-t-md"
            >
              Início
            </Link>
            <Link
              href="/servicos"
              className="relative font-medium text-zinc-400 transition-colors hover:text-amber-500 after:absolute after:bottom-[-1.5rem] after:left-0 after:h-[3px] after:w-0 after:bg-amber-500 after:rounded-t-md hover:after:w-full after:transition-all"
            >
              Serviços
            </Link>
            <Link
              href="/agendar"
              className="relative font-medium text-zinc-400 transition-colors hover:text-amber-500 after:absolute after:bottom-[-1.5rem] after:left-0 after:h-[3px] after:w-0 after:bg-amber-500 after:rounded-t-md hover:after:w-full after:transition-all"
            >
              Agendar
            </Link>
            <Link
              href="/agenda"
              className="relative font-medium text-zinc-400 transition-colors hover:text-amber-500 after:absolute after:bottom-[-1.5rem] after:left-0 after:h-[3px] after:w-0 after:bg-amber-500 after:rounded-t-md hover:after:w-full after:transition-all"
            >
              Agenda
            </Link>
            <Link
              href="/contato"
              className="relative font-medium text-zinc-400 transition-colors hover:text-amber-500 after:absolute after:bottom-[-1.5rem] after:left-0 after:h-[3px] after:w-0 after:bg-amber-500 after:rounded-t-md hover:after:w-full after:transition-all"
            >
              Contato
            </Link>
          </nav>

          {/* Botão de Agendamento (visível em desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/admin" className="text-zinc-400 hover:text-amber-500 transition-colors">
              Admin
            </Link>
            <Button
              asChild
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/20"
            >
              <Link href="/agendar">AGENDAR</Link>
            </Button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-amber-500 hover:bg-zinc-900 hover:text-amber-400 transition-all"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-900 border-zinc-800 text-white">
                <SheetHeader>
                  <SheetTitle className="text-amber-500 flex items-center gap-2">
                    <Scissors className="h-5 w-5" />
                    THE BBARBERR
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-medium py-2 border-b border-zinc-800 text-amber-500 hover:pl-2 transition-all"
                  >
                    <HomeIcon className="h-5 w-5 text-amber-500" />
                    Início
                  </Link>
                  <Link
                    href="/servicos"
                    className="flex items-center gap-2 text-lg font-medium py-2 border-b border-zinc-800 text-white hover:text-amber-500 hover:pl-2 transition-all"
                  >
                    <Scissors className="h-5 w-5 text-amber-500" />
                    Serviços
                  </Link>
                  <Link
                    href="/agendar"
                    className="flex items-center gap-2 text-lg font-medium py-2 border-b border-zinc-800 text-white hover:text-amber-500 hover:pl-2 transition-all"
                  >
                    <CalendarDays className="h-5 w-5 text-amber-500" />
                    Agendar
                  </Link>
                  <Link
                    href="/agenda"
                    className="flex items-center gap-2 text-lg font-medium py-2 border-b border-zinc-800 text-white hover:text-amber-500 hover:pl-2 transition-all"
                  >
                    <Clock className="h-5 w-5 text-amber-500" />
                    Agenda
                  </Link>
                  <Link
                    href="/contato"
                    className="flex items-center gap-2 text-lg font-medium py-2 border-b border-zinc-800 text-white hover:text-amber-500 hover:pl-2 transition-all"
                  >
                    <Phone className="h-5 w-5 text-amber-500" />
                    Contato
                  </Link>
                  <Link
                    href="/admin"
                    className="flex items-center gap-2 text-lg font-medium py-2 border-b border-zinc-800 text-white hover:text-amber-500 hover:pl-2 transition-all"
                  >
                    <User className="h-5 w-5 text-amber-500" />
                    Admin
                  </Link>

                  <Button asChild className="mt-4 bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all">
                    <Link href="/agendar">AGENDAR AGORA</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-barber.png')] bg-cover bg-center opacity-20"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-500/10 px-3 py-1 text-sm text-amber-500 font-bold mb-2 border border-amber-500/20">
                  BARBEARIA PREMIUM
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-500">
                  ESTILO E PRECISÃO EM CADA CORTE
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agende seu horário online e desfrute de um atendimento premium com os melhores barbeiros da cidade.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/20"
                  >
                    <Link href="/agendar">AGENDAR AGORA</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-amber-500 text-amber-500 hover:bg-zinc-800 transition-all hover:scale-105"
                  >
                    <Link href="/servicos">VER SERVIÇOS</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <img
                  alt="Barbearia"
                  className="aspect-video object-cover rounded-xl shadow-xl hover:scale-105 transition-all duration-500"
                  height="310"
                  src="/images/interior-barbearia.png"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-500/10 px-3 py-1 text-sm text-amber-500 font-bold mb-2 border border-amber-500/20">
                  EXPERIÊNCIA PREMIUM
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-500">
                  NOSSOS SERVIÇOS
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma variedade de serviços premium para transformar seu visual.
                </p>
              </div>
            </div>

            <Tabs defaultValue="populares" className="w-full mt-8">
              <div className="flex justify-center">
                <TabsList className="bg-zinc-900 border border-zinc-800">
                  <TabsTrigger
                    value="populares"
                    className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                  >
                    Populares
                  </TabsTrigger>
                  <TabsTrigger
                    value="cabelo"
                    className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                  >
                    Cabelo
                  </TabsTrigger>
                  <TabsTrigger
                    value="barba"
                    className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                  >
                    Barba
                  </TabsTrigger>
                  <TabsTrigger
                    value="combos"
                    className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                  >
                    Combos
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="populares" className="mt-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 lg:grid-cols-3 lg:gap-12">
                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/corte-cabelo.png"
                        alt="Corte de Cabelo"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">CORTE DE CABELO</h3>
                      <p className="text-zinc-400">Cortes modernos e clássicos para todos os estilos e preferências.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 45,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=corte">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/barba.png"
                        alt="Barba"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">BARBA</h3>
                      <p className="text-zinc-400">Modelagem e aparagem de barba com produtos de alta qualidade.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 35,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=barba">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/combo-premium.png"
                        alt="Combo Premium"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">COMBO PREMIUM</h3>
                      <p className="text-zinc-400">
                        Pacote completo com corte de cabelo e barba por um preço especial.
                      </p>
                      <p className="font-bold text-lg text-amber-500">R$ 70,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=combo">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cabelo" className="mt-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 lg:grid-cols-3 lg:gap-12">
                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/corte-cabelo.png"
                        alt="Corte Executivo"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">CORTE EXECUTIVO</h3>
                      <p className="text-zinc-400">Corte clássico e elegante para o homem moderno.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 45,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=corte">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/degrade.png"
                        alt="Degradê"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">DEGRADÊ</h3>
                      <p className="text-zinc-400">Degradê perfeito com transições suaves e precisas.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 50,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=degradê">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/platinado.png"
                        alt="Platinado"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">PLATINADO</h3>
                      <p className="text-zinc-400">Descoloração profissional para um visual moderno e impactante.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 80,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=platinado">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="barba" className="mt-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 lg:grid-cols-3 lg:gap-12">
                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/barba.png"
                        alt="Barba Completa"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">BARBA COMPLETA</h3>
                      <p className="text-zinc-400">Modelagem e aparagem de barba com produtos de alta qualidade.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 35,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=barba">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/aparagem-simples.png"
                        alt="Aparagem Simples"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">APARAGEM SIMPLES</h3>
                      <p className="text-zinc-400">Aparagem rápida para manter sua barba sempre alinhada.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 25,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=aparagem">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/barba-pigmentacao.png"
                        alt="Barba com Pigmentação"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">BARBA COM PIGMENTAÇÃO</h3>
                      <p className="text-zinc-400">Pigmentação de barba para preenchimento e definição.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 60,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=pigmentacao">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="combos" className="mt-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 lg:grid-cols-3 lg:gap-12">
                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/combo-premium.png"
                        alt="Combo Premium"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">COMBO PREMIUM</h3>
                      <p className="text-zinc-400">
                        Pacote completo com corte de cabelo e barba por um preço especial.
                      </p>
                      <p className="font-bold text-lg text-amber-500">R$ 70,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=combo">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/combo-vip.png"
                        alt="Combo VIP"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">COMBO VIP</h3>
                      <p className="text-zinc-400">Corte, barba, hidratação e massagem facial.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 120,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=vip">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-zinc-900 text-white overflow-hidden group hover:shadow-amber-500/10 transition-all hover:-translate-y-1">
                    <div className="h-40 overflow-hidden">
                      <img
                        src="/images/combo-pai-filho.png"
                        alt="Combo Pai e Filho"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-amber-500/10 -mt-10 border border-zinc-800 bg-zinc-900 group-hover:bg-amber-500/20 transition-colors">
                        <Scissors className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">COMBO PAI E FILHO</h3>
                      <p className="text-zinc-400">Corte para pai e filho com preço especial.</p>
                      <p className="font-bold text-lg text-amber-500">R$ 75,00</p>
                      <Button
                        asChild
                        className="w-full bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold transition-all group-hover:bg-amber-500"
                      >
                        <Link href="/agendar?service=pai-filho">AGENDAR</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/20"
              >
                <Link href="/servicos">VER TODOS OS SERVIÇOS</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-500/10 px-3 py-1 text-sm text-amber-500 font-bold mb-2 border border-amber-500/20">
                  O QUE DIZEM NOSSOS CLIENTES
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-amber-500">DEPOIMENTOS</h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja o que nossos clientes têm a dizer sobre a experiência na THE BBARBERR.
                </p>
              </div>
            </div>

            {/* Depoimentos simplificados sem o carrossel */}
            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                </div>
                <p className="text-zinc-300 italic mb-6">
                  "Melhor barbearia da cidade! O atendimento é impecável e o resultado sempre supera minhas
                  expectativas. Recomendo a todos."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="/images/cliente1.png" alt="Cliente" className="h-full w-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">João Silva</p>
                    <p className="text-zinc-400 text-sm">Cliente desde 2022</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                </div>
                <p className="text-zinc-300 italic mb-6">
                  "Ambiente sofisticado, profissionais talentosos e um atendimento de primeira. Minha barba nunca esteve
                  tão bem cuidada!"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="/images/cliente2.png" alt="Cliente" className="h-full w-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">Pedro Santos</p>
                    <p className="text-zinc-400 text-sm">Cliente desde 2023</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                </div>
                <p className="text-zinc-300 italic mb-6">
                  "O sistema de agendamento online é super prático e o atendimento é pontual. Sempre saio satisfeito com
                  meu corte. Vale cada centavo!"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="/images/cliente3.png" alt="Cliente" className="h-full w-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">Carlos Oliveira</p>
                    <p className="text-zinc-400 text-sm">Cliente desde 2021</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2 mt-20">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-black font-bold">
                  LOCALIZAÇÃO
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  VISITE NOSSA BARBEARIA
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos localizados no centro da cidade, com fácil acesso e estacionamento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 group hover:bg-zinc-800 p-2 rounded-lg transition-colors cursor-pointer">
                    <MapPin className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <div className="text-zinc-300 group-hover:text-white transition-colors">
                      Rua das Barbearias, 123 - Centro
                    </div>
                  </div>
                  <div className="flex items-center gap-2 group hover:bg-zinc-800 p-2 rounded-lg transition-colors cursor-pointer">
                    <Phone className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <div className="text-zinc-300 group-hover:text-white transition-colors">(11) 99999-9999</div>
                  </div>
                  <div className="flex items-center gap-2 group hover:bg-zinc-800 p-2 rounded-lg transition-colors cursor-pointer">
                    <Clock className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <div className="text-zinc-300 group-hover:text-white transition-colors">
                      Segunda a Sábado: 9h às 19h
                    </div>
                  </div>
                  <div className="flex items-center gap-2 group hover:bg-zinc-800 p-2 rounded-lg transition-colors cursor-pointer">
                    <CalendarDays className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <div className="text-zinc-300 group-hover:text-white transition-colors">
                      Domingos e Feriados: Fechado
                    </div>
                  </div>
                  <div className="flex items-center gap-2 group hover:bg-zinc-800 p-2 rounded-lg transition-colors cursor-pointer">
                    <Instagram className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <div className="text-zinc-300 group-hover:text-white transition-colors">@thebbarberr</div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/20"
                  >
                    <Link href="/contato">ENTRE EM CONTATO</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full">
                <img
                  alt="Mapa da Barbearia"
                  className="aspect-video object-cover rounded-xl shadow-xl hover:scale-105 transition-all duration-500"
                  height="310"
                  src="/images/mapa-barbearia.png"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-zinc-800 py-6 bg-black">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex items-center gap-2 font-bold text-amber-500">
            <Scissors className="h-6 w-6" />
            <span>THE BBARBERR</span>
          </div>
          <p className="text-center text-sm text-zinc-500 md:text-left">
            &copy; {new Date().getFullYear()} THE BBARBERR. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">
              Facebook
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">
              WhatsApp
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
