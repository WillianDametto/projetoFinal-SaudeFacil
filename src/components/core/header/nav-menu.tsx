import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { SheetClose } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import { ProfileDropdown } from './profile-dropdown'

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
    label: 'Médicos',
    href: '/medicos',
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
          <SheetClose asChild key={item.href}>
            <Link
              href={item.href}
              className="text-primary-foreground hover:bg-primary-foreground/10 rounded-md px-4 py-3 text-sm font-semibold transition-colors"
            >
              {item.label}
            </Link>
          </SheetClose>
        ))}
      </nav>
      <div className="mx-4 mt-auto">
        <ProfileDropdown />
      </div>
    </div>
  )
}

export { MobileNavMenu, NavMenu }
