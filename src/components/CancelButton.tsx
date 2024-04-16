import { setAppStatusSelectTipoCitaStep } from "../stores/steps"
import { Button } from "./ui/button"

export default function CancelButton() {
  return (
    <Button
      variant="destructive"
      onClick={() => setAppStatusSelectTipoCitaStep()}
    >
      Cancelar tramite
    </Button>
  )
}
