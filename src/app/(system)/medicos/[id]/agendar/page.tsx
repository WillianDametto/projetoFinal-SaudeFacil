'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DatePicker } from '@/components/ui/date-picker'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

const timeSlots = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
]

export default function Agendar() {
  const [selectedTime, setSelectedTime] = useState('')

  return (
    <div className="c-container flex flex-col items-center justify-center py-8 md:py-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Agendamento</CardTitle>
          <CardDescription>
            Escolha uma data e um horário para agendar uma consulta com o Dr.
            Carlos.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[1fr_1fr] md:gap-12">
          {/* Doctor Info */}
          <div className="flex flex-1 flex-col items-center gap-4 md:max-w-sm md:items-start">
            <Image
              src="/doctor.png"
              alt="Dr. Carlos"
              width={112}
              height={112}
              className="h-28 w-28 object-cover"
            />
            <CardTitle className="w-full text-center md:text-left">
              Dr. Carlos - Fisioterapeuta
            </CardTitle>
            <ul className="text-muted-foreground mt-1 w-full space-y-1 text-sm">
              <li>
                <span className="text-foreground font-medium">
                  Localização:
                </span>{' '}
                São Caetano do Sul - São Paulo
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Experiência:
                </span>{' '}
                15 anos
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Atendimento:
                </span>{' '}
                Domiciliar ou Consultório
              </li>
              <li>
                <span className="text-foreground font-medium">Contato:</span>{' '}
                xxxx-xxxx
              </li>
              <li>
                <span className="text-foreground font-medium">Horários:</span>{' '}
                7:00 - 14:00
              </li>
            </ul>
          </div>

          {/* Scheduling Form */}
          <div className="flex flex-1 flex-col justify-center gap-4">
            <Label htmlFor="date">Data</Label>
            <DatePicker />
            <Label htmlFor="time">Hora</Label>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger id="time" className="w-full">
                <SelectValue placeholder="Selecione o horário" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="mt-4 w-full bg-cyan-400 px-0 text-white hover:bg-cyan-500">
              <Link className="w-full" href="/medicos/1/agendar/confirmacao">
                Agendar
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
