'use client'

import { useDoctors } from '@/hooks/https/use-doctor'

import { DoctorCard } from './doctor-card'

export default function Consultas() {
  const { data: doctors } = useDoctors()

  return (
    <div className="c-container py-16">
      <h1 className="text-2xl font-medium">Médicos Disponíveis</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {doctors?.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}
