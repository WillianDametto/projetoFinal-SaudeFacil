import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

import { ActionButtons } from './action-buttons'

const navMenuItems = [
  {
    label: 'Agendamentos',
    href: '/agendamentos',
  },
  {
    label: 'Consultas',
    href: '/consultas',
  },
  {
    label: 'Exames',
    href: '/exames',
  },
  {
    label: 'Prontuário',
    href: '/prontuario',
  },
]

function NavMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navMenuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                'bg-primary text-primary-foreground transition-all duration-300',
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNavMenu() {
  return (
    <div className="flex h-full flex-col justify-between">
      <nav className="flex flex-col gap-2">
        {navMenuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-primary-foreground hover:bg-primary-foreground/10 rounded-md px-4 py-3 text-sm font-semibold transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mx-4 mt-auto">
        <ActionButtons />
      </div>
    </div>
  )
}

export { MobileNavMenu, NavMenu }
