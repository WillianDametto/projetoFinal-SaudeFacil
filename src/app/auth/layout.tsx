import Image from 'next/image'

import { ThemeToggle } from '@/components/ui/theme-toggle'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid h-screen w-screen grid-cols-2">
      <div className="bg-muted relative flex flex-1 flex-col items-center justify-between p-6">
        <div className="absolute top-6 left-6">
          <ThemeToggle />
        </div>
        <div className="inset-0 m-auto flex flex-col items-center gap-2">
          <Image
            src="/logo.png"
            alt="Saúde Facil"
            width={200}
            height={200}
            className="h-20 w-20"
          />
          <span className="text-sm font-medium">Saúde Facil</span>
        </div>
      </div>
      <div className="flex h-screen flex-1 items-center justify-center overflow-y-auto py-20">
        {children}
      </div>
    </main>
  )
}

export default AuthLayout
