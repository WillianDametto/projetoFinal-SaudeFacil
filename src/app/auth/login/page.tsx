import { LoginForm } from './login-form'

export default function Login() {
  return (
    <main className="grid h-screen w-screen grid-cols-2">
      <div className="bg-muted flex flex-1 items-end p-6">
        <span className="text-sm font-medium">Saúde Facil</span>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <LoginForm />
      </div>
    </main>
  )
}
