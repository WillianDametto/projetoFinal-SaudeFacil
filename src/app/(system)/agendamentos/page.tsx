import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { AppointmentCard } from './appointment-card'

const fakeAppointments = [
  {
    patientName: 'Willian Martins Dametto',
    date: '23/03/25',
    time: '15:00',
    type: 'Primeira Consulta',
    location: 'Consultório',
    insurance: 'Amil',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'Maria Clara Souza',
    date: '24/03/25',
    time: '09:30',
    type: 'Retorno',
    location: 'Clínica Central',
    insurance: 'Unimed',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'João Pedro Lima',
    date: '25/03/25',
    time: '11:00',
    type: 'Primeira Consulta',
    location: 'Consultório',
    insurance: 'Bradesco Saúde',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'Ana Beatriz Ramos',
    date: '26/03/25',
    time: '14:00',
    type: 'Exame',
    location: 'Laboratório Vida',
    insurance: 'SulAmérica',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'Carlos Henrique Alves',
    date: '27/03/25',
    time: '16:30',
    type: 'Retorno',
    location: 'Clínica Central',
    insurance: 'Amil',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'Fernanda Silva',
    date: '28/03/25',
    time: '10:15',
    type: 'Primeira Consulta',
    location: 'Consultório',
    insurance: 'Unimed',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'Lucas Pereira',
    date: '29/03/25',
    time: '13:45',
    type: 'Exame',
    location: 'Laboratório Vida',
    insurance: 'Bradesco Saúde',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'Juliana Costa',
    date: '30/03/25',
    time: '08:00',
    type: 'Primeira Consulta',
    location: 'Consultório',
    insurance: 'SulAmérica',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'Rafael Gomes',
    date: '31/03/25',
    time: '17:00',
    type: 'Retorno',
    location: 'Clínica Central',
    insurance: 'Amil',
    imageUrl: '/logo.png',
  },
  {
    patientName: 'Patrícia Mendes',
    date: '01/04/25',
    time: '12:30',
    type: 'Exame',
    location: 'Laboratório Vida',
    insurance: 'Unimed',
    imageUrl: '/logo.png',
  },
]

export default function Agendamentos() {
  return (
    <div className="c-container py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">Agendamentos Marcados</h1>
        <Button className="px-0" variant="outline">
          <Link className="w-full px-4" href="/agendamentos/relatorio">
            Ver relatorio de agendamentos
          </Link>
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {fakeAppointments.map((appointment, index) => (
          <AppointmentCard key={index} {...appointment} />
        ))}
      </div>
    </div>
  )
}
