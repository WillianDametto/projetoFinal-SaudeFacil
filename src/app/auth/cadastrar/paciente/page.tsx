import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function PacienteForm() {
  return (
    <Card className="w-[80vw] max-w-xl rounded-2xl p-8 shadow-lg">
      <CardHeader className="mb-4 pl-0">
        <CardTitle className="text-2xl font-semibold">
          Crie sua conta de paciente
        </CardTitle>
        <CardDescription>
          Preencha os campos abaixo para criar sua conta de paciente.
        </CardDescription>
      </CardHeader>
      <form className="flex w-full flex-col gap-4">
        <Input
          id="email"
          type="email"
          placeholder="E-mail"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        <Input
          id="confirm-email"
          type="email"
          placeholder="Confirmar e-mail"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        <Input
          id="password"
          type="password"
          placeholder="Senha"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        <Input
          id="confirm-password"
          type="password"
          placeholder="Confirmar senha"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        <Input
          id="contact"
          type="text"
          placeholder="Contato"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        <Button
          type="submit"
          className="mt-2 w-full rounded-full text-base font-semibold"
        >
          Criar conta
        </Button>
      </form>
    </Card>
  )
}
