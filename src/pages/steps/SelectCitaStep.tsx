import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent,
  SelectGroup, SelectItem,
  SelectLabel, SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Oficina, estados } from "@/data/estados"
import { setAppDataEstadoCita, setAppDataOficinaCita } from "@/stores/data"
import { setAppSelectDayStep } from "@/stores/steps"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function SelectCitaLugarStep() {
  const [estado, setEstado] = useState("")
  const [oficina, setOficina] = useState<Oficina | null>(null)

  return (
    <div>
      <StepHeader
        title="Estado y delegacion de la cita"
        subtitle="Selecciona un estado y una delegacion donde quieres asistir a tu cita"
      />

      <div className="flex flex-col  gap-5 ">
        <div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <span className="font-bold w-[70px]">Estado</span>
            <Select onValueChange={(value) => {
              setEstado(value)
              setOficina(null)
            }}>
              <SelectTrigger className="w-full md:w-[320px]">
                <SelectValue placeholder="Selecciona un estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Estados</SelectLabel>
                  {estados.map((estado) => (
                    <SelectItem
                      key={estado.value}
                      value={estado.value}
                    >
                      {estado.estado}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:items-center my-4">
            <span className="font-bold w-[70px]">Oficina</span>
            <Select
              disabled={!estado}
              onValueChange={(value) => {
                const oficina = estados
                  .find((e) => e.value === estado)?.oficinas
                  .find((o) => o.oficina === value)

                if (!oficina) return
                setOficina(oficina)
              }}
            >
              <SelectTrigger className="w-full md:w-[320px]">
                <SelectValue placeholder="Selecciona una oficina" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Estados</SelectLabel>
                  {estados.filter((e) => e.value === estado).map((state) => (
                    state.oficinas.map((oficina) => (
                      <SelectItem
                        key={oficina.oficina}
                        value={oficina.oficina}
                      >
                        {oficina.oficina}
                      </SelectItem>
                    ))
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {oficina && (
          <div className="border border-neutral-300 rounded-md h-fit w-full">
            <header className="p-2 flex justify-center items-center bg-blue-100 rounded-t-md text-blue-800 font-bold">
              Lugar de la cita
            </header>
            <footer className="p-3 flex flex-col justify-center items-center">
              <p className="text-center text-sm">{oficina.direccion}</p>
            </footer>
          </div>
        )}

      </div>


      <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
        <Button
          onClick={() => {
            setAppSelectDayStep()
            setAppDataEstadoCita(estado)
            setAppDataOficinaCita(oficina?.direccion || "")
          }}
          className="px-10"
          disabled={!oficina}
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}