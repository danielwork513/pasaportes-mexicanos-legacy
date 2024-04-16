import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/stores/data";
import { setAppSuccessStep } from "@/stores/steps";
import { ArrowRight } from "lucide-react";

export default function VerificarDatosStep() {
  const { data } = useDataStore()
  return (
    <div>
      <StepHeader
        title="Verificar Datos"
      />

      <main className="grid gap-5 mt-6 md:mt-10">
        <div className="border border-neutral-300 rounded-md">
          <header className="p-2 flex justify-center items-center bg-blue-100 rounded-t-md text-blue-800 font-bold">
            Fecha y hora de cita
          </header>
          <footer className="p-5 flex justify-center items-center capitalize">
            {data.diaCita} - hora de su cita {data.horaCita}
          </footer>
        </div>

        <div className="border border-neutral-300 rounded-md h-fit w-full">
          <header className="p-2 flex justify-center items-center bg-blue-100 rounded-t-md text-blue-800 font-bold">
            Lugar de la cita
          </header>
          <footer className="p-5 px-10 md:px-20 flex flex-col justify-center items-center">
            <p className="text-center">{data.oficinaCita}</p>
          </footer>
        </div>
      </main>

      <div className="flex justify-center items-center px-10 md:px-0 py-6 md:py-10 font-bold text-green-700">
        <p className="text-center">Si tus datos son correctos, da clic en el boton de abajo para ver tu ficha de pago</p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-end mt-2 gap-4">
        <Button
          onClick={() => setAppSuccessStep()}
          className="px-10"
        >
          Ver ficha de pago
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}