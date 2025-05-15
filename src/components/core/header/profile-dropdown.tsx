import { MessageCircleQuestion, User } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User /> Matheus
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link className="flex items-center gap-2" href="/dados-da-conta">
            <User />
            Dados da conta
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2" href="/suporte">
            <MessageCircleQuestion />
            Suporte
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { ProfileDropdown }
