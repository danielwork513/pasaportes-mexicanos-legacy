import { create } from "zustand"

type StepsStore = {
  status: number,
  setStatus: (status: number) => void
}

export const APP_STATUS = {
  SELECT_TIPO_CITA_STEP: 0,
  CURPS_STEP: 1,
  MIGRATORIO_STEP: 2,
  SELECT_CITA_LUGAR_STEP: 3,
  SELECT_DAY_STEP: 4,
  SELECT_VIGENCIA_STEP: 5,
  PERSONAL_DATA_STEP: 6,
  VERIFICACION_STEP: 7,
  SUCCESS_STEP: 8,
  LAST_STEP: 9,
  ERROR: -1
}

export const useStepsStore = create<StepsStore>((set) => ({
  status: APP_STATUS.SELECT_TIPO_CITA_STEP,
  setStatus: (status: number) => set({ status }),
}))

export function setAppStatusSelectTipoCitaStep() {
  useStepsStore.getState().setStatus(APP_STATUS.SELECT_TIPO_CITA_STEP)
}

export function setAppStatusCurpsStep() {
  useStepsStore.getState().setStatus(APP_STATUS.CURPS_STEP)
}

export function setAppStatusMigratorioStep() {
  useStepsStore.getState().setStatus(APP_STATUS.MIGRATORIO_STEP)
}

export function setAppSelectCitaLugarStep() {
  useStepsStore.getState().setStatus(APP_STATUS.SELECT_CITA_LUGAR_STEP)
}

export function setAppSelectDayStep() {
  useStepsStore.getState().setStatus(APP_STATUS.SELECT_DAY_STEP)
}

export function setAppVigenciaStep() {
  useStepsStore.getState().setStatus(APP_STATUS.SELECT_VIGENCIA_STEP)
}

export function setAppPersonalDataStep() {
  useStepsStore.getState().setStatus(APP_STATUS.PERSONAL_DATA_STEP)
}

export function setAppVerificacionStep() {
  useStepsStore.getState().setStatus(APP_STATUS.VERIFICACION_STEP)
}

export function setAppSuccessStep() {
  useStepsStore.getState().setStatus(APP_STATUS.SUCCESS_STEP)
}

export function setAppLastStep() {
  useStepsStore.getState().setStatus(APP_STATUS.LAST_STEP)
}

export function setAppStatusError() {
  useStepsStore.getState().setStatus(APP_STATUS.ERROR)
}
