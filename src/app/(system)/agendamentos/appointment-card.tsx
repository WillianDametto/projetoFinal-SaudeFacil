import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'

interface AppointmentCardProps {
  patientName: string
  date: string
  time: string
  type: string
  location: string
  insurance: string
}

function AppointmentCard({
  patientName,
  date,
  time,
  type,
  location,
  insurance,
}: AppointmentCardProps) {
  return (
    <Card className="mx-auto flex w-full flex-col items-start gap-6 bg-white px-8 py-6 md:flex-row md:items-center">
      <div className="flex-shrink-0">
        <Image
          src={'/pacient.jpg'}
          alt={patientName}
          width={80}
          height={80}
          className="bg-muted h-10 w-10 rounded-xl object-cover md:h-20 md:w-20"
        />
      </div>
      <CardContent className="flex flex-col justify-center p-0">
        <span className="mb-1 text-xl leading-tight font-semibold">
          {patientName}
        </span>
        <span className="text-muted-foreground mb-1 text-sm">
          {date} - {time}
        </span>
        <span className="mb-1 text-sm">{type}</span>
        <span className="mb-1 text-sm">{location}</span>
        <span className="text-primary text-sm font-medium">{insurance}</span>
      </CardContent>
    </Card>
  )
}

export { AppointmentCard }
