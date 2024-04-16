import StepHeader from '@/components/StepHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { setAppDataCurps } from '@/stores/data';
import { setAppStatusMigratorioStep } from '@/stores/steps';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>('0');
  const [curps, setCurps] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);

  // Función para manejar cambios en el select
  const handleSelectChange = (value: string) => {
    setSelectValue(value);
    // Resetear los valores de los inputs si cambia el valor del select
    setCurps(Array(parseInt(value)).fill(''));
    setNames(Array(parseInt(value)).fill(''));
  };

  // Función para manejar cambios en los inputs de nombre
  const handleNameInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newNames = [...names];
    newNames[index] = e.target.value;
    setNames(newNames);
  };

  // Función para manejar cambios en los inputs de CURP
  const handleCurpInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newCurps = [...curps];
    newCurps[index] = e.target.value;
    setCurps(newCurps);
  };

  const areInputsValid = () => {
    return curps.every(value => value.length >= 18);
  };

  // Función para manejar el envío de datos
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAppDataCurps(curps);
    setAppStatusMigratorioStep();
  };

  return (
    <div>
      <StepHeader
        title="Ingrese el CURP de cada persona"
      />

      <p className="text-gray-600 mb-6 mt-2">
        Si no conoces su curp, puedes consultarla{" "}
        <a
          href="https://www.gob.mx/curp/"
          className="text-blue-600 hover:underline"
        >
          aquí
        </a>
      </p>

      <form onSubmit={handleSubmit}>

        <div className='flex flex-col md:flex-row gap-3 md:items-center my-4 relative'>
          <p className="font-bold w-[70px] mr-3 md:-mt-12">Cantidad:</p>
          <Select value={selectValue} onValueChange={handleSelectChange}>
            <SelectTrigger className='mb-8 w-full md:w-[300px]'>
              <SelectValue placeholder="Numero de personas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Numero de personas</SelectItem>
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
        </div>

        {curps.map((_, index) => (
          <div key={index} className='flex flex-col gap-2 mb-8'>
            <Label className='mb-2'>Datos de la Persona {index + 1}</Label>
            <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
              <Input
                type="text"
                placeholder="Nombre"
                value={names[index]}
                onChange={(e) => handleNameInputChange(index, e)}
              />
              <Input
                type="text"
                placeholder="CURP"
                className='uppercase'
                value={curps[index]}
                onChange={(e) => handleCurpInputChange(index, e)}
                maxLength={18}
              />
            </div>
          </div>
        ))}

        <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
          <Button
            type="submit"
            className="px-10"
            disabled={!areInputsValid() || selectValue === '0'}
          >
            Continuar el trámite
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </form>
    </div>

  );
};

export default MyComponent;
