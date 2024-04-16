import Button from "@/components/Button";
import passport from "../../assets/image.png";
import { setAppStatusSelectTipoCitaStep } from "../../stores/steps";

export default function LastStep() {
  const handleClick = () => {
    setAppStatusSelectTipoCitaStep()
  }

  return (
    <>
      <div className="flex justify-center items-center w-full mb-5">
        <img
          src={passport}
          width={550}
        />
      </div>

      <h2 className="font-bold text-xl text-center mt-8 text-red-500 md:px-20">
        Haz finalizado tu tramite, recuerda realizar tu pago antes de las 24 horas, confirma tu cita y no pierdas tu turno
      </h2>

      <div className="grid gap-3 md:gap-5 mt-14">
        <Button
          variant="primary"
          label="Regresar al Inicio"
          onClick={() => handleClick()} />
      </div>
    </>
  )
}
