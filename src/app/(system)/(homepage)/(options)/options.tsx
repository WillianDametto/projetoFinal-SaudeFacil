import { OptionCard } from './option-card'

function Options() {
  return (
    <section className="c-container py-20">
      <h2 className="mb-8 text-2xl font-semibold">Selecione seu convênio</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OptionCard />
        <OptionCard />
        <OptionCard />
        <OptionCard />
        <OptionCard />
        <OptionCard />
      </div>
    </section>
  )
}

export { Options }
