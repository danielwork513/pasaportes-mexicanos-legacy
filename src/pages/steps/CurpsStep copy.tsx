import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import {
  Form, FormControl,
  FormField, FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { setAppDataCurps } from "@/stores/data";
import { setAppStatusMigratorioStep } from "@/stores/steps";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const curpsFormSchema = z.object({
  cantidad: z
    .string({ required_error: "Please enter a number." }),
  curps: z
    .array(
      z.object({
        value: z
          .string({ required_error: "Please enter a CURP." })
          .min(18, { message: "CURP debe de tener 18 caracteres.", }),
      })
    )
})

type CurpsFormValues = z.infer<typeof curpsFormSchema>

const defaultValues: Partial<CurpsFormValues> = {
  curps: [
    { value: "" },
  ],
}


export default function CurpsStep() {

  const form = useForm<CurpsFormValues>({
    resolver: zodResolver(curpsFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "curps",
    control: form.control,
  })

  function onSubmit(data: CurpsFormValues) {
    setAppDataCurps(data.curps.map((curp) => curp.value))
    setAppStatusMigratorioStep()
  }

  const [cantidad, setCantidad] = useState("")

  useEffect(() => {
    for (let i = 0; i < parseInt(cantidad); i++) {
      append({ value: "" })
    }
    setCantidad("")
  }, [cantidad])

  console.log(form.formState)

  return (
    <div>
      <StepHeader
        title="CURPs de personas solicitantes"
      />

      <p className="text-gray-600 mb-6">
        Si no conoces su curp, puedes consultarla{" "}
        <a
          href="https://www.gob.mx/curp/"
          className="text-blue-600 hover:underline"
        >
          aqui
        </a>
      </p>

      <Select
        onValueChange={(value) => {
          setCantidad(value)
          form.reset({ curps: [] })
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Numero de personas" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
          <SelectItem value="7">7</SelectItem>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="9">9</SelectItem>
          <SelectItem value="10">10</SelectItem>
        </SelectContent>
      </Select>

      <Separator className="my-8"></Separator>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5">
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`curps.${index}.value`}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>CURP de la persona {index + 1}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
            <Button
              type="submit"
              className="px-10"
              disabled={!form.formState.isValid}
            >
              Continuar el tramite
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>

        </form>
      </Form>
    </div>
  )
}