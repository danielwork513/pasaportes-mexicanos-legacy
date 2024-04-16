interface Subarticulo {
  content: string;
}

interface Articulo {
  principal: string;
  subarticulos?: Subarticulo[];
}

interface TerminosYCondiciones {
  principal: string;
  articulos: Articulo[];
}

export const terminosYCondiciones: TerminosYCondiciones = {
  principal: "Este contrato (el 'Contrato') contiene los términos, condiciones y limitaciones que rigen para el uso del sitio y servicio denominado Pasaportes MX en adelante “La Empresa”, y pone a disposición de la persona interesada en su utilización (el 'Usuario') en el sitio pasapirotemexicano.space (el 'Sitio').",
  articulos: [
    {
      principal: "1. Aceptación del contrato y sus modificaciones",
      subarticulos: [
        {
          content: "1.1 - El uso del Sistema y el sólo hecho de abonar los honorarios por servicios que La Empresa y el Usuario acuerden para las gestiones encomendadas implica la aceptación sin reservas por parte del Usuario de este contrato"
        },
        {
          content: "1.2 - La Empresa podrá modificar unilateralmente el Contrato. Las modificaciones serán obligatorias desde su publicación en el Sitio o desde su notificación al Usuario, lo que suceda primero, sin perjuicio de la facultad del Usuario de terminar el Contrato."
        }
      ]
    },
    {
      principal: "2. El Servicio",
      subarticulos: [
        {
          content: "2.1 - La Empresa ofrece un servicio privado de intermediación y gestoria ante oficinas de Relaciones Exteriores que se limita al diligenciamiento de Pasaporte Mexicano en base a la información proporcionada por El Usuario y que incluye las siguientes 3 instancias de tramitación: La empresa Pasaporte MX no tiene ningun vinculo con la Secretaria de Relaciones Exteriores (SRE) El servicio que se da es solo de gestión."
        },
      ]
    },
    {
      principal: "3. Plazos de Gestión Estimados y Tiempos de Entrega",
      subarticulos: [
        {
          content: "3.1 - El Plazo expresado como “Plazo de Gestión Estimado” es un plazo promedio estimado de referencia para el Usuario que dependen de la agilidad y disponibilidad técnica/operativa de cada Delegación .La Empresa no posee atención preferencial para agilizar las gestiones."
        },
        {
          content: "3.2 - Los tiempos expresados como “Tiempos de Entrega” se refieren al tiempo de tránsito de la correspondencia canalizada por la empresa de correo y son de exclusiva responsabilidad de estas."
        },
        {
          content: "3.3 - Las demoras en los plazos de gestión ocasionadas por eventualidades no serán responsabilidad de La Empresa. El Usuario entiende y acepta que podrían existir contratiempos y asume el riesgo con el sólo hecho de utilizar el servicio."
        },
        {
          content: "3.4 - La Empresa realizará todos los esfuerzos lógicos necesarios para la obtención de cada acta y para el cumplimiento de los 'Plazos de Gestión Estimados'. La Empresa no garantiza la obtención de los pasaportes ni de los “Plazo de Gestión Estimados” ya que la obtención de estas depende de que las mismas se puedan obtener por medio de cualquiera de las 3 instancias de tramitación detalladas en el punto 2.1 del presente documento."
        },
        {
          content: "3.5 - El Usuario queda notificado y entiende que el solo hecho de utilizar el servicio le brinda la posibilidad de acceder a los beneficios de éste y sus valores añadidos, pero también a los riesgos implícitos."
        },
      ]
    },
    {
      principal: "4. El sistema",
      subarticulos: [
        {
          content: "4.1 - Se considera fecha y hora de inicio de gestiones a partir de las 9 horas del día hábil siguiente al día en que el Usuario confirma los datos aportados para las gestiones."
        },
        {
          content: "4.2 - Los datos suministrados por un Usuario a La Empresa para la gestión de un Pasaporte y los datos postales para el envío y entrega serán de su exclusiva responsabilidad no teniendo derecho a reclamo en caso de que los mismos no correspondan al acta solicitada o que con los datos proporcionados no se localice el acta por ser éstos erróneos o escasos según considere la Delegación. El Usuario asume la responsabilidad, queda notificado y acepta los riesgos con el solo hecho de utilizar el servicio."
        },
      ]
    },
    {
      principal: "5. Costos del Servicio",
      subarticulos: [
        {
          content: "La Empresa cobra honorarios en concepto de servicios de gestoría. La Empresa será quien asuma la responsabilidad por los gastos que las gestiones eroguen en todo concepto: aranceles a pagar en oficinas públicas, timbrados, sellados, legalizaciones, gastos de envío, tasas e impuestos de todo tipo y pago de honorarios a profesionales que pudieran corresponder."
        },
      ]
    },
    {
      principal: "6. Exclusión de responsabilidad de 'La Empresa'",
      subarticulos: [
        {
          content: "6.1 - El uso del Sitio, del Sistema y del Servicio tal y como se especifica en el presente documento y en cualquier otro es en todos los casos bajo exclusiva responsabilidad y riesgo del Usuario. La Empresa no garantiza la disponibilidad y continuidad de la operación del Sitio y del Servicio. El Usuario toma a su cargo y exime a La Empresa de toda responsabilidad derivada de hechos de caso fortuito o fuerza mayor."
        },
        {
          content: "6.2 - La Empresa hará todos los esfuerzos razonables para asegurar que los plazos estimados de gestión, procesamiento y operaciones con terceras empresas, como los bancos, Organismos Públicos y empresas de correo sean efectuadas de acuerdo a los plazos de gestión de referencia y tiempos de entrega estimados, sin embargo, algunos factores, en su mayoría externos a La Empresa pueden determinar retrasos en el tiempo necesario para culminar un proceso necesario para llevar adelante un servicio. El Usuario entiende que estas fallas son ajenas a La Empresa y la exime de toda responsabilidad por los inconvenientes o perjuicios derivados de estas fallas."
        },
      ]
    },
    {
      principal: "7. Uso del sitio",
      subarticulos: [
        {
          content: "7.1 - Cualquier tipo de manipulación y/o publicación de páginas, código, logotipo e información del Sitio en páginas de Internet del Usuario o un tercero está estrictamente prohibido. Esto incluye, pero no se limita a la publicación de cualquier página o parte de página del Sitio en un 'frame' o 'cuadro' de otra página."
        },
        {
          content: "7.2 - El Usuario se compromete a no utilizar el Sistema para obtener documentos que deriven en operaciones ilegales, incluyendo pero no limitado a cualquier producto o servicio que infrinja leyes de propiedad intelectual o derechos de terceros. El Usuario no utilizará los servicios de La Empresa para ningún tipo de actividad que pueda ser considerada fraudulenta o ilegal y que devenguen perjuicios para La Empresa o terceros como consecuencia del uso indebido del sitio de su propiedad y de la documentación obtenida mediante los servicios de La Empresa, y declara que el mismo es solicitado bajo interés legitimo con el sólo hecho de contratar el servicio."
        },
      ]
    },
    {
      principal: "8. Cesión",
      subarticulos: [
        {
          content: "8.1 - El Usuario no puede ceder el Contrato, y cualquier intento de cesión por su parte será considerado nulo y de ningún efecto."
        },
        {
          content: "8.2 - La Empresa tiene amplias facultades para ceder o transferir el Contrato o cualquier derecho que tenga bajo el mismo sin necesidad de notificación o consentimiento por parte del Usuario."
        },
      ]
    },
    {
      principal: "9. Información introducida por el usuario en el sitio",
      subarticulos: [
        {
          content: "El Usuario se obliga a no introducir en el Sitio información de carácter obsceno, ofensivo o agraviante, o que contenga amenazas, virus u otros programas perjudiciales o mecanismos para captar o distorsionar información contenida en el Sitio."
        },
      ]
    },
    {
      principal: "10. Derechos sobre el sitio y su contenido",
      subarticulos: [
        {
          content: "El Sitio, las marcas y los logotipos y todo otro contenido del Sitio son propiedad de La Empresa o de sus proveedores y están protegidos por las normas de derechos de autor, marcas, propiedad intelectual, inventos, software y demás normas aplicables y está prohibida su copia, reproducción, venta o cualquier otro uso comercial o difusión no autorizado por La Empresa."
        },
      ]
    },
    {
      principal: "11. Información del usuario",
      subarticulos: [
        {
          content: "11.1 - Toda la información brindada por el Usuario al Sitio se entiende hecha en carácter de declaración jurada."
        },
        {
          content: "11.2 - El Usuario autoriza a La Empresa a utilizar su información personal para fines propios de operaciones de gestión y procesos necesarios para llevar adelante un servicio. La Empresa no publicará, venderá ni cederá a terceros la información recabada del Usuario, salvo que deba ser revelada en cumplimiento de una orden judicial o de autoridad administrativa."
        },
      ]
    },
  ]
}