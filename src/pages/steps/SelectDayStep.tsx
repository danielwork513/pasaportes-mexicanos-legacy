import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select, SelectContent,
  SelectGroup, SelectItem,
  SelectLabel, SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { setAppDataDiaCita, setAppDataHoraCita } from "@/stores/data"
import { setAppVigenciaStep } from "@/stores/steps"
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const horas = [
  "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "13:00 PM",
  "13:30 PM", "14:00 PM", "14:30 PM", "15:00 PM",
]

export default function SelectDayStep() {
  const [hora, setHora] = useState("")
  const [date, setDate] = useState<Date | undefined>(new Date())

  const currentDate = new Date();

  // determinar el mes de inicio, en este caso el mes actual
  const fromMonth = new Date(2024, currentDate.getMonth() - 1);
  
  // determinar el mes final, en este caso 8 meses despues del mes actual
  const toMonth = new Date(2024, fromMonth.getMonth() + 8);

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  const disabledDays = [
    new Date(currentYear, currentMonth, currentDay + 3),
    new Date(currentYear, currentMonth, currentDay + 9),
    new Date(currentYear, currentMonth, currentDay + 12),
    new Date(currentYear, currentMonth, currentDay + 18),
    new Date(currentYear, currentMonth, currentDay + 24),
    {
      from: new Date(currentYear, currentMonth, currentDate.getDate() - 1),
      to: new Date(2024, 1, 0)
    }
  ];

  // Desabilirar los fines de semana
  for (let i = fromMonth.getTime(); i <= toMonth.getTime(); i += 24 * 60 * 60 * 1000) {
    const day = new Date(i);
    if (day.getDay() === 0 || day.getDay() === 6) {
      disabledDays.push(day);
    }
  }

  return (
    <div>
      <StepHeader
        title="Selecciona dia y hora para tu cita"
        subtitle="Selecciona un dia y una hora para tu cita, recuerda que deberas ser puntual"
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md my-4 w-full flex justify-center items-center"
        numberOfMonths={1}
        locale={es}
        disabled={disabledDays}
        showOutsideDays={false}
        fromMonth={fromMonth}
        toMonth={toMonth}
      />

      <div className="flex flex-col gap-4">
        <div className="[&>p]:text-sm [&>p>span]:rounded-sm [&>p]:flex [&>p]:gap-2 [&>p]:items-center flex flex-col md:flex-row md:gap-5 gap-2 px-1">
          <p><span className="flex size-4 bg-yellow-300" /> Hoy</p>
          <p><span className="flex size-4 bg-green-300" /> Seleccionado</p>
          <p><span className="flex size-4 bg-red-300" /> No Disponible</p>
        </div>
      </div>


      <div className="flex-col md:flex-row gap-3 md:items-center mt-6 hidden md:flex">
        <span className="font-bold w-[120px]">Horario de cita</span>
        <Select
          disabled={!date}
          onValueChange={(value) => {
            setHora(value)
          }}>
          <SelectTrigger className="w-full md:w-[320px]">
            <SelectValue placeholder="Seleccione la hora de la cita" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Horarios Disponibles</SelectLabel>
              {horas.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:items-center mt-6 md:hidden">
        <span className="font-bold w-[120px]">Horario de cita</span>
        <select
          disabled={!date}
          onChange={(e) => {
            const value = e.target.value;
            setHora(value);
          }}
          className="w-full md:w-[320px] p-2 border border-neutral-300 px-3 rounded-md">
          <option value="">Seleccione la hora de la cita</option>
          {horas.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
        <Button
          disabled={!hora || !date}
          onClick={() => {
            setAppVigenciaStep()
            setAppDataDiaCita(format(date as Date, "EEEE dd \'de\' MMMM \'del\' yyyy", { locale: es }) as string)
            setAppDataHoraCita(hora)
          }}
          className="px-10"
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}