import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface DoctorCardProps {
  name: string
  specialty: string
  location: string
  experienceYears: number
  serviceType: string
  contact: string
  workingHours: string
}

export function DoctorCard({
  name,
  specialty,
  location,
  experienceYears,
  serviceType,
  contact,
  workingHours,
}: DoctorCardProps) {
  return (
    <Card className="mx-auto flex w-full flex-col items-start gap-6 bg-white px-8 py-6 md:flex-row">
      <div className="flex-shrink-0">
        <Image
          src={'/doctor.png'}
          alt={name}
          width={112}
          height={112}
          className="bg-muted h-20 w-20 rounded-xl object-cover md:h-28 md:w-28"
        />
      </div>
      <CardContent className="flex flex-col justify-center p-0">
        <span className="mb-1 text-xl leading-tight font-semibold">{name}</span>
        <span className="text-muted-foreground mb-1 text-sm">{specialty}</span>
        <span className="mb-1 text-sm">{serviceType}</span>
        <span className="mb-1 text-sm">{location}</span>
        <span className="mb-1 text-sm">
          Experiência: {experienceYears} anos
        </span>
        <span className="mb-1 text-sm">Horário: {workingHours}</span>
        <span className="mb-1 text-sm">Contato: {contact}</span>

        <Button className="mt-6 w-full" size="sm" variant="default">
          <Link className="w-full" href={`/medicos/1`}>
            Ver mais informações
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
