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
    <Card className="mx-auto flex w-full flex-row items-center gap-6 bg-white px-8 py-6">
      <div className="flex-shrink-0">
        <Image
          src={'/pacient.jpg'}
          alt={patientName}
          width={80}
          height={80}
          className="bg-muted rounded-xl object-cover"
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
