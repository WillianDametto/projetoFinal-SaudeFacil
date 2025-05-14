import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DatePicker } from '@/components/ui/date-picker'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function RegisterForm() {
  return (
    <form className="flex w-full max-w-[440px] flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Crie uma conta</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Escolha um tipo de conta abaixo para continuar
        </p>
      </div>
      <Tabs defaultValue="doctor" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="doctor">Médico</TabsTrigger>
          <TabsTrigger value="patient">Paciente</TabsTrigger>
        </TabsList>
        <TabsContent value="doctor">
          <Card className="border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle>Médico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="doctor-nome"
                    className="text-black dark:text-white"
                  >
                    Nome
                  </Label>
                  <Input
                    id="doctor-nome"
                    name="nome"
                    placeholder="Nome completo"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="doctor-cpf"
                    className="text-black dark:text-white"
                  >
                    CPF
                  </Label>
                  <Input
                    id="doctor-cpf"
                    name="cpf"
                    placeholder="000.000.000-00"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-black dark:text-white">
                    Data de Nascimento
                  </Label>
                  <DatePicker />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="doctor-crm"
                    className="text-black dark:text-white"
                  >
                    CRM
                  </Label>
                  <Input
                    id="doctor-crm"
                    name="crm"
                    placeholder="CRM"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="doctor-email"
                    className="text-black dark:text-white"
                  >
                    Email
                  </Label>
                  <Input
                    id="doctor-email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="doctor-telefone"
                    className="text-black dark:text-white"
                  >
                    Telefone
                  </Label>
                  <Input
                    id="doctor-telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="doctor-cep"
                    className="text-black dark:text-white"
                  >
                    CEP
                  </Label>
                  <Input
                    id="doctor-cep"
                    name="cep"
                    placeholder="00000-000"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="doctor-senha"
                    className="text-black dark:text-white"
                  >
                    Senha
                  </Label>
                  <Input
                    id="doctor-senha"
                    name="senha"
                    type="password"
                    placeholder="********"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="patient">
          <Card className="border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle>Paciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="patient-nomeCompleto"
                    className="text-black dark:text-white"
                  >
                    Nome Completo
                  </Label>
                  <Input
                    id="patient-nomeCompleto"
                    name="nomeCompleto"
                    placeholder="Nome completo"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="patient-cpf"
                    className="text-black dark:text-white"
                  >
                    CPF
                  </Label>
                  <Input
                    id="patient-cpf"
                    name="cpf"
                    placeholder="000.000.000-00"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-black dark:text-white">
                    Data de Nascimento
                  </Label>
                  <DatePicker />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="patient-genero"
                    className="text-black dark:text-white"
                  >
                    Gênero
                  </Label>
                  <Input
                    id="patient-genero"
                    name="genero"
                    placeholder="Gênero"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="patient-estadoCivil"
                    className="text-black dark:text-white"
                  >
                    Estado Civil
                  </Label>
                  <Input
                    id="patient-estadoCivil"
                    name="estadoCivil"
                    placeholder="Estado civil"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="patient-email"
                    className="text-black dark:text-white"
                  >
                    Email
                  </Label>
                  <Input
                    id="patient-email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="patient-telefone"
                    className="text-black dark:text-white"
                  >
                    Telefone
                  </Label>
                  <Input
                    id="patient-telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="patient-cep"
                    className="text-black dark:text-white"
                  >
                    CEP
                  </Label>
                  <Input
                    id="patient-cep"
                    name="cep"
                    placeholder="00000-000"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="patient-senha"
                    className="text-black dark:text-white"
                  >
                    Senha
                  </Label>
                  <Input
                    id="patient-senha"
                    name="senha"
                    type="password"
                    placeholder="********"
                    required
                    className="border-zinc-300 bg-white text-black placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Button type="submit" className="w-full">
        Criar conta
      </Button>
      <div className="text-center text-sm">
        Já tem uma conta?{' '}
        <Link href="/auth/login" className="underline underline-offset-4">
          Entre
        </Link>
      </div>
    </form>
  )
}
