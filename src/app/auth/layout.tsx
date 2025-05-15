import Image from 'next/image'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid h-screen w-screen grid-cols-2">
      <div className="bg-muted relative flex flex-1 flex-col items-center justify-between p-6">
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
      <div className="flex h-screen w-full flex-1 items-center overflow-y-auto">
        <div className="mx-auto my-auto w-full max-w-[440px] py-20">
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
