import { User } from 'lucide-react'

import { Button } from '@/components/ui/button'

function ActionButtons() {
  const isLoggedIn = true

  return isLoggedIn ? (
    <Button variant="outline">
      <User className="mr-2 h-4 w-4" /> Matheus
    </Button>
  ) : (
    <div className="flex items-center gap-2">
      <Button variant="outline">Entrar</Button>
      <Button variant="secondary">Cadastrar</Button>
    </div>
  )
}

export { ActionButtons }
