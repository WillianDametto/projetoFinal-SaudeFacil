import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function LoginForm() {
  return (
    <Card className="flex w-[80vw] max-w-xl flex-col items-center rounded-2xl p-8 shadow-lg">
      <h1 className="mb-8 text-xl font-semibold">Faça o login</h1>
      <form className="flex w-full flex-col gap-4">
        <Input
          id="email"
          type="email"
          placeholder="E-mail"
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
        <Button
          type="submit"
          className="mt-2 w-full rounded-full text-base font-semibold"
        >
          Entrar
        </Button>
      </form>
      <div className="mt-4 flex items-center justify-center gap-2">
        <Link
          href="/auth/esqueci-a-senha"
          className="text-xs text-black/70 hover:underline"
        >
          Esqueceu sua senha?
        </Link>
        <Link
          href="/auth/cadastrar"
          className="text-xs text-black/70 hover:underline"
        >
          Criar conta
        </Link>
      </div>
    </Card>
  )
}
