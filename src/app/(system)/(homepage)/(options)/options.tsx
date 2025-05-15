import Image from 'next/image'

function Options() {
  return (
    <section className="c-container py-20">
      <h2 className="mb-8 text-2xl font-semibold">Selecione seu convênio</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-primary flex aspect-video h-auto w-full flex-col items-center justify-center rounded-2xl shadow-md">
          <Image
            src="/logo.png"
            alt="Logo Saúde Fácil"
            width={80}
            height={80}
            className="mb-2"
          />
          <p className="text-sm font-semibold text-white">Saúde Fácil</p>
        </div>
      </div>
    </section>
  )
}

export { Options }
