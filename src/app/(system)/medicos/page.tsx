import { DoctorCard } from './doctor-card'

const fakeDoctors = [
  {
    name: 'Dr. Carlos Almeida',
    specialty: 'Fisioterapeuta',
    location: 'São Caetano do Sul - São Paulo',
    experienceYears: 15,
    serviceType: 'Domiciliar ou Consultório',
    contact: '1234-5678',
    workingHours: '07:00 - 14:00',
  },
  {
    name: 'Dra. Fernanda Ribeiro',
    specialty: 'Nutricionista',
    location: 'Campinas - São Paulo',
    experienceYears: 10,
    serviceType: 'Consultório',
    contact: '2345-6789',
    workingHours: '08:00 - 16:00',
  },
  {
    name: 'Dr. João Batista',
    specialty: 'Cardiologista',
    location: 'Rio de Janeiro - RJ',
    experienceYears: 20,
    serviceType: 'Consultório',
    contact: '3456-7890',
    workingHours: '09:00 - 17:00',
  },
  {
    name: 'Dra. Luiza Costa',
    specialty: 'Dermatologista',
    location: 'Belo Horizonte - MG',
    experienceYears: 12,
    serviceType: 'Domiciliar',
    contact: '4567-8901',
    workingHours: '10:00 - 18:00',
  },
  {
    name: 'Dr. Pedro Silva',
    specialty: 'Ortopedista',
    location: 'Salvador - BA',
    experienceYears: 18,
    serviceType: 'Consultório',
    contact: '5678-9012',
    workingHours: '07:30 - 15:30',
  },
  {
    name: 'Dra. Marina Lopes',
    specialty: 'Ginecologista',
    location: 'Curitiba - PR',
    experienceYears: 11,
    serviceType: 'Domiciliar ou Consultório',
    contact: '6789-0123',
    workingHours: '08:00 - 14:00',
  },
  {
    name: 'Dr. Ricardo Nunes',
    specialty: 'Clínico Geral',
    location: 'Porto Alegre - RS',
    experienceYears: 9,
    serviceType: 'Consultório',
    contact: '7890-1234',
    workingHours: '06:00 - 12:00',
  },
  {
    name: 'Dra. Paula Mendes',
    specialty: 'Psicóloga',
    location: 'Recife - PE',
    experienceYears: 14,
    serviceType: 'Domiciliar',
    contact: '8901-2345',
    workingHours: '10:00 - 16:00',
  },
  {
    name: 'Dr. Felipe Rocha',
    specialty: 'Endocrinologista',
    location: 'Florianópolis - SC',
    experienceYears: 13,
    serviceType: 'Consultório',
    contact: '9012-3456',
    workingHours: '08:30 - 14:30',
  },
  {
    name: 'Dra. Ana Clara Souza',
    specialty: 'Fonoaudióloga',
    location: 'Fortaleza - CE',
    experienceYears: 7,
    serviceType: 'Domiciliar ou Consultório',
    contact: '0123-4567',
    workingHours: '09:00 - 15:00',
  },
]

export default function Consultas() {
  return (
    <div className="c-container py-16">
      <h1 className="text-2xl font-medium">Médicos Disponíveis</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {fakeDoctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  )
}
