import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface ConsultationCardProps {
  doctorName: string
  location: string
  time: string
  date: string
  type: string
}

function ConsultationCard({
  doctorName,
  location,
  time,
  date,
  type,
}: ConsultationCardProps) {
  return (
    <Card className="mx-auto flex w-full flex-col items-start gap-6 bg-white px-8 py-6 md:flex-row">
      <div className="flex-shrink-0">
        <Image
          src={'/doctor.png'}
          alt={doctorName}
          width={112}
          height={112}
          className="bg-muted h-20 w-20 rounded-xl object-cover md:h-28 md:w-28"
        />
      </div>
      <CardContent className="flex flex-col justify-center p-0">
        <span className="mb-1 text-xl leading-tight font-semibold">
          {doctorName}
        </span>
        <span className="text-muted-foreground mb-1 text-sm">
          {date} - {time}
        </span>
        <span className="mb-1 text-sm">{type}</span>
        <span className="mb-1 text-sm">{location}</span>

        <Button className="mt-6" size="sm" variant="default">
          Conversar
        </Button>
      </CardContent>
    </Card>
  )
}

export { ConsultationCard }
