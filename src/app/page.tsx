import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Button>Teste</Button>
      <ThemeToggle />
    </main>
  )
}
