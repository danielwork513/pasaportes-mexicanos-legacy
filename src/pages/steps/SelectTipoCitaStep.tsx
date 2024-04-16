import Button from "@/components/Button";
import { setAppDataTipoCita } from "@/stores/data";
import passport from "../../assets/image.png";
import { setAppStatusCurpsStep } from "../../stores/steps";

export default function SelectTipoCitaStep() {
  const handleClick = (type: string) => {
    setAppStatusCurpsStep()
    setAppDataTipoCita(type)
  }

  return (
    <>
      <h2 className="font-bold text-xl md:text-3xl text-center mt-3">
        Agenda tu cita ahora mismo
      </h2>

      <div className="flex justify-center items-center w-full my-5">
        <img
          src={passport}
          width={550}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-3 md:gap-5 mt-14">
        <Button
          variant="primary"
          label="Primera Vez"
          onClick={() => handleClick("Primera Vez")} />
        <Button
          variant="primary"
          label="Renovacion"
          onClick={() => handleClick("Renovacion")} />
        <Button
          variant="primary"
          label="Pasaporte Extraviado"
          onClick={() => handleClick("Pasaporte Extraviado")} />
      </div>
    </>
  )
}
