import StepHeader from "@/components/StepHeader";
import { setAppDataClear, useDataStore } from "@/stores/data";
import { setAppLastStep } from "@/stores/steps";

export default function SuccessStep() {
  const { data } = useDataStore()

  const { diaCita, horaCita, vigenciaPrecio, curps } = data

  // calcular el precio
  const precio = vigenciaPrecio * curps.length

  // convertirlo a moneda local
  const precioLocal = precio.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  })

  return (
    <div className="">
      <div className=" shadow-xl p-3 mb-3">
        <StepHeader
          title={"Estimado(a) " + data.nombre + " " + data.apellidos}
          subtitle="Esta es su ficha de pago"
        />
        <div className="-mt-3 font-bold text-neutral-600">
          Valida unicamente 24 horas
        </div>
      </div>

      <p className="md:text-lg font-bold text-white bg-green-600 w-fit p-4 mb-4 text-center">
        Al no realizar su pago caducara y perdera su turno de cita
      </p>

      <div className="p-4 shadow-xl rounded-md 
      [&>div]:my-2 [&>div>span]:text-black [&>div>span]:font-bold">

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          Fecha y hora de cita:
          {diaCita && horaCita && <span className="capitalize">{diaCita} - {horaCita}</span>}
        </div>

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          Monto a pagar:
          {vigenciaPrecio && <span>{precioLocal}</span>}
        </div>

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          CLABE interbancaria:
          <span>1385 8000 0019 7371 54</span>
        </div>

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          Institucion bancaria:
          <span>ABC CAPITAL</span>
        </div>

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          Beneficiario:
          <span>Afiliado Mi Pasaporte</span>
        </div>

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          Concepto de pago:
          <span>SRE</span>
        </div>
      </div>

      <div
        className="bg-orange-500 text-white p-4 rounded-md flex justify-center items-center shadow-xl shadow-transparent hover:shadow-black/10 hover:cursor-pointer my-6 font-bold"
        onClick={() => {
          setAppLastStep()
          setAppDataClear()
        }}
      >
        Finalizar
      </div>

      <div className="text-red-600 p-4 flex gap-3 items-center mt-3 rounded-md">
        <p className="font-bold text-sm md:text-base">
          NOTA: Una vez realizado el pago favor de confimar con su comprobante de pago ó captura de pantalla al correo info@turnomicita.com
        </p>
      </div>

    </div>
  )
}
