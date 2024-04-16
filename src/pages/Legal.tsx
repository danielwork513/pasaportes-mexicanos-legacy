import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion"
import { terminosYCondiciones } from "../data/tyc"
import MainLayout from "../layouts/MainLayout"
import { useEffect } from "react"

export default function LegalPage() {
  useEffect(() => {
    document.title = "Pasaportes - Terminos y condiciones"
  }, [])

  const { principal, articulos } = terminosYCondiciones

  return (
    <MainLayout>
      <div className="m-5">
        <h1 className="text-xl md:text-3xl font-bold">Terminos y condiciones</h1>

        <p className=" leading-relaxed text-pretty my-4">
          {principal}
        </p>

        <Accordion type="single" collapsible className="w-full">
          {articulos.map((articulo, index) => {
            const { principal, subarticulos } = articulo

            return (
              <AccordionItem key={index} className="mb-2" value={principal}>
                <AccordionTrigger>
                  {principal}
                </AccordionTrigger>
                <AccordionContent>
                  {subarticulos && subarticulos.map(({ content }) => (
                    <p key={content} className="leading-relaxed ml-4 mb-2">
                      {content}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </MainLayout>
  )
}