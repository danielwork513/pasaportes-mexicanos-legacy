import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import {
  Form, FormControl,
  FormField, FormItem,
  FormLabel, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { setAppDataApellidos, setAppDataEmail, setAppDataNombre } from "@/stores/data"
import { setAppVerificacionStep } from "@/stores/steps"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const profileFormSchema = z.object({
  nombre: z
    .string({ required_error: "Ingresa tu nombre." })
    .min(2, { message: "Nombre demasiado corto." }),
  apellidos: z
    .string({ required_error: "Ingresa tus apellidos." })
    .min(2, { message: "Apellidos demasiado cortos." }),
  email: z
    .string({ required_error: "Ingresa tu correo electrónico." })
    .email({ message: "Ingresa un correo electrónico válido." })
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function PersonalDataStep() {
  // nombre, apellidos, email, entidad bancaria

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    setAppVerificacionStep()
    setAppDataNombre(data.nombre)
    setAppDataApellidos(data.apellidos)
    setAppDataEmail(data.email)
  }

  return (
    <div>
      <StepHeader
        title="Datos Personales"
        subtitle="Ingresa tus datos personales para continuar con el tramite y guardar tu cita"
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apellidos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electronico</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
            <Button
              type="submit"
              className="px-10"
              disabled={!form.formState.isValid}
            >
              Confimar datos personales
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
