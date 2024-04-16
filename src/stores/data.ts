import { create } from "zustand"

interface Data {
  tipoCita: string
  curps: string[]
  // statusMigratorio
  nacionalidad: string
  residencia: string
  // cita
  estadoCita: string
  oficinaCita: string
  diaCita: string
  horaCita: string
  //pasaporte
  vigenciaPrecio: number
  //datos personales
  nombre: string
  apellidos: string
  email: string
  //tipo pago
  bank: string
}

type DataStore = {
  data: Data,
  setData: (data: Data) => void
}

export const useDataStore = create<DataStore>((set) => ({
  data: {
    tipoCita: "",
    curps: [],
    nacionalidad: "",
    residencia: "",
    estadoCita: "",
    oficinaCita: "",
    diaCita: "",
    horaCita: "",
    vigenciaPrecio: 0,
    nombre: "",
    apellidos: "",
    email: "",
    bank: "",
  },
  setData: (data: Data) => set({ data }),
}))


export function setAppDataTipoCita(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, tipoCita: data })
}

export function setAppDataCurps(data: string[]) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, curps: data })
}

export function setAppDataNacionalidad(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, nacionalidad: data })
}

export function setAppDataResidencia(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, residencia: data })
}

export function setAppDataEstadoCita(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, estadoCita: data })
}

export function setAppDataOficinaCita(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, oficinaCita: data })
}

export function setAppDataDiaCita(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, diaCita: data })
}

export function setAppDataHoraCita(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, horaCita: data })
}

export function setAppDataVigencia(data: number) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, vigenciaPrecio: data })
}

export function setAppDataNombre(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, nombre: data })
}

export function setAppDataApellidos(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, apellidos: data })
}

export function setAppDataEmail(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, email: data })
}

export function setAppDataBank(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, bank: data })
}

export function setAppDataClear() {
  useDataStore.getState().setData({
    tipoCita: "",
    curps: [],
    nacionalidad: "",
    residencia: "",
    estadoCita: "",
    oficinaCita: "",
    diaCita: "",
    horaCita: "",
    vigenciaPrecio: 0,
    nombre: "",
    apellidos: "",
    email: "",
    bank: "",
  })
}
