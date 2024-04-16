import StepHeader from '@/components/StepHeader'
import { Button as ButtonS } from '@/components/ui/button'
import { setAppDataNacionalidad, setAppDataResidencia } from '@/stores/data'
import { setAppSelectCitaLugarStep } from '@/stores/steps'
import { ArrowRight, CheckCheck } from 'lucide-react'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
  isSelected: boolean
  onClick: () => void
}

function Button({ children, isSelected, onClick }: Props) {
  return (
    <button
      className={`w-full py-3 md:py-6 px-4 border border-neutral-300 rounded-md flex items-center justify-center ${isSelected ? "bg-[#00281f] text-white" : "bg-white"}`}
      onClick={onClick}
    >
      {isSelected && (<CheckCheck className='mr-2' />)}
      {children}
    </button>
  )
}

export default function MigratorioStep() {
  const [nacionalidad, setNacionalidad] = useState("")
  const [ubicacion, setUbicacion] = useState("")

  return (
    <div>
      <StepHeader
        title="Estatus migratorio"
        subtitle='Selecciona la opcion que se adecua a tu caso'
      />

      <p className="my-2 text-lg text-neutral-600">Nacionalidad</p>
      <div className='flex md:flex-row flex-col gap-2 md:gap-5'>
        <Button
          isSelected={nacionalidad === "Mexicana"}
          onClick={() => setNacionalidad("Mexicana")}
        >
          Mexicana
        </Button>
        <Button
          isSelected={nacionalidad === "Extranjera"}
          onClick={() => setNacionalidad("Extranjera")}
        >
          Extranjera
        </Button>
      </div>


      <p className="my-2 mt-8 text-lg text-neutral-600">¿Donde reside?</p>
      <div className='flex md:flex-row flex-col gap-2 md:gap-5'>
        <Button
          isSelected={ubicacion === "Mexicana"}
          onClick={() => setUbicacion("Mexicana")}
        >
          México
        </Button>
        <Button
          isSelected={ubicacion === "Extranjera"}
          onClick={() => setUbicacion("Extranjera")}
        >
          Extranjero
        </Button>
      </div>

      {nacionalidad === "Extranjera" && (
        <div className="p-2 flex justify-center items-center mt-5 text-red-500">
          Actualmente el servicio solo esta disponible para la republica mexicana
        </div>
      )}

      <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
        <ButtonS
          onClick={() => {
            setAppSelectCitaLugarStep()
            setAppDataNacionalidad(nacionalidad)
            setAppDataResidencia(ubicacion)
          }}
          disabled={nacionalidad === "Mexicana" && ubicacion === "Mexicana" ? false : true}
          className="px-10"
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </ButtonS>
      </div>
    </div>
  )
}