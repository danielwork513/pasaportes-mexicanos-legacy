import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent,
  SelectGroup, SelectItem,
  SelectLabel, SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { setAppDataBank, setAppDataVigencia } from "@/stores/data"
import { setAppPersonalDataStep } from "@/stores/steps"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function SelectVigenciaStep() {
  const [vigencia, setVigencia] = useState("")
  const [metodoPago, setMetodoPago] = useState("")

  return (
    <div>
      <StepHeader
        title="Vigencia del Pasaporte"
        subtitle="Selecciona una vigencia para tu pasaporte, recuerda que el precio varia segun la vigencia"
      />

      <Select
        onValueChange={(value) => setVigencia(value)}
      >
        <SelectTrigger className="w-full md:w-[330px] mb-5">
          <SelectValue placeholder="Vigencia del pasaporte" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Vigencias Disponibles</SelectLabel>
            <SelectItem value="1655">3 años - $1,655</SelectItem>
            <SelectItem value="2250">6 años - $2,250</SelectItem>
            <SelectItem value="3940">10 años - $3,940</SelectItem>
            <SelectItem value="5000">Permanente - $5,000</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => setMetodoPago(value)}
      >
        <SelectTrigger className="w-full md:w-[330px]">
          <SelectValue placeholder="Metodo de Pago" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="SPEI">Transferencia Bancaria SPEI</SelectItem>
          <SelectItem value="OXXO">Pago por OXXO</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
        <Button
          onClick={() => {
            setAppPersonalDataStep()
            setAppDataVigencia(parseInt(vigencia))
            setAppDataBank(metodoPago)
          }}
          className="px-10"
          disabled={!vigencia || !metodoPago}
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}