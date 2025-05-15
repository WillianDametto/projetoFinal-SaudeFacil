import { ConsultationCard } from './consultation-card'

const fakeConsultations = [
  {
    doctorName: 'Dr. João da Silva',
    location: 'São Caetano do Sul - São Paulo',
    time: '10:00',
    date: '15/05/2025',
    type: 'Clínico Geral',
  },
  {
    doctorName: 'Dra. Maria Oliveira',
    location: 'São Caetano do Sul - São Paulo',
    time: '10:00',
    date: '15/05/2025',
    type: 'Pediatria',
  },
  {
    doctorName: 'Dr. José Santos',
    location: 'São Caetano do Sul - São Paulo',
    time: '10:00',
    date: '15/05/2025',
    type: 'Pediatria',
  },
  {
    doctorName: 'Dra. Ana Paula',
    location: 'São Caetano do Sul - São Paulo',
    time: '10:00',
    date: '15/05/2025',
    type: 'Ginecologia e Obstetrícia',
  },
]
export default function Consultas() {
  return (
    <div className="c-container py-16">
      <h1 className="text-2xl font-medium">Consultas Agendadas</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {fakeConsultations.map((consultation, index) => (
          <ConsultationCard key={index} {...consultation} />
        ))}
      </div>
    </div>
  )
}
