import MainLayout from "../layouts/MainLayout";
import { APP_STATUS, useStepsStore } from "../stores/steps";
import CurpsStep from "./steps/CurpsStep";
import LastStep from "./steps/LastStep";
import MigratorioStep from "./steps/MigratorioStep";
import PersonalDataStep from "./steps/PersonalDataStep";
import SelectCitaLugarStep from "./steps/SelectCitaStep";
import SelectDayStep from "./steps/SelectDayStep";
import SelectTipoCitaStep from "./steps/SelectTipoCitaStep";
import SelectVigenciaStep from "./steps/SelectVigenciaStep";
import SuccessStep from "./steps/SuccessStep";
import VerificarDatosStep from "./steps/VerificarDatosStep";

export default function IndexPage() {
  const { status } = useStepsStore()

  return (
    <MainLayout>
      <div className="flex justify-center items-center w-full">

        <div className="p-6 md:p-4 md:px-8 rounded-md shadow-xl bg-white relative overflow-hidden w-full">

          <div className="h-2 bg-green-900 absolute top-0 inset-x-0" />

          {/* Primer paso de la solicitud */}
          {status === APP_STATUS.SELECT_TIPO_CITA_STEP && (
            <SelectTipoCitaStep />
          )}

          {/* Pasos siguientes de la solicitud */}
          {status !== APP_STATUS.SELECT_TIPO_CITA_STEP && (
            <div className="md:p-6">
              {status === APP_STATUS.CURPS_STEP && (
                <CurpsStep />
              )}
              {status === APP_STATUS.MIGRATORIO_STEP && (
                <MigratorioStep />
              )}
              {status === APP_STATUS.SELECT_CITA_LUGAR_STEP && (
                <SelectCitaLugarStep />
              )}
              {status === APP_STATUS.SELECT_DAY_STEP && (
                <SelectDayStep />
              )}
              {status === APP_STATUS.SELECT_VIGENCIA_STEP && (
                <SelectVigenciaStep />
              )}
              {status === APP_STATUS.PERSONAL_DATA_STEP && (
                <PersonalDataStep />
              )}
              {status === APP_STATUS.VERIFICACION_STEP && (
                <VerificarDatosStep />
              )}
              {status === APP_STATUS.SUCCESS_STEP && (
                <SuccessStep />
              )}
               {status === APP_STATUS.LAST_STEP && (
                <LastStep />
              )}
            </div>
          )}

        </div>
      </div>
    </MainLayout>
  )
}