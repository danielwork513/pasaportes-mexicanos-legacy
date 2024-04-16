export interface Estado {
  estado: string
  value: string
  oficinas: Oficina[]
}

export interface Oficina {
  oficina: string
  direccion: string
}

export const estados: Estado[] = [
  {
    estado: "Aguascalientes",
    value: "aguascalientes",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "CENTRO COMERCIAL EL DORADO, AV. LAS AMRICAS No.1701, P.B. FRACC. EL DORADO, COLONIA SANTA ELENA 2 SECCIN, C.P. 20238, AGUASCALIENTES, AGS."
      },
      {
        oficina: "Oficina de Enlace Calvillo, Ags.",
        direccion: "PROLONGACIN INDEPENDENCIA NO. 201 ESQ. GUANAJUATO, PALACIO DE JUSTICIA Y ADMINISTRACIN. COL. LOS NGELES C.P.20800"
      },
      {
        oficina: "Oficina de Enlace Juchipila, Zac.",
        direccion: "MIXTON S/N, PRESIDENCIA MUNICIPAL"
      },
    ]
  },
  {
    estado: "Baja California",
    value: "baja-california",
    oficinas: [
      {
        oficina: "Delegacion Tijuana",
        direccion: "AV. PASEO DE LOS HROES 9111, 1er. PISO CENTRO COMERCIAL PAVILION, PLAZA TIJUANA, ESQ. AV. GRAL. M. MRQUEZ DE LEN, ZONA CENTRO C.P. 22010 TIJUANA, BAJA CALIFORNIA"
      },
      {
        oficina: "Oficina Central",
        direccion: "CALLE MEXICO 161, LOTES 20 Y 21, MANZANA 35 DE LA PRIMERA SECCIN, COLONIA CENTRO, MEXICALI, B. C., C.P. 21000"
      },
      {
        oficina: "Oficina de Enlace Mexicali, B.C.",
        direccion: "CALLE NOVENA Y CARRETERA A SAN LUIS CENTRO COMERCIAL POPULAR S/N LOCAL 3 Y 4"
      },
      {
        oficina: "Oficina de Enlace San Luis Ro Colorado, Son.",
        direccion: "CALLE 26 ESQUINA CON AVENIDA KINO COLONIA BURCRATA, C.P. 83448"
      },
    ]
  },
  {
    estado: "Baja California Sur",
    value: "baja-california-sur",
    oficinas: [
      {
        oficina: "Delegacion Baja California Sur",
        direccion: "CALLE IGNACIO RAMREZ #3035 ESQUINA CALLE SONORA, COL. PUEBLO NUEVO, C.P. 23060, LA PAZ, B.C.S"
      },
    ]
  },
  {
    estado: "Campeche",
    value: "campeche",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AV. 16 DE SEPTIEMBRE S/N, EDIFICIO DEL PALACIO FEDERAL, 1er PISO, COL. CENTRO, C.P. 24000 SAN FRANCISCO, CAMPECHE"
      },
      {
        oficina: "Oficina de Enlace Municipal en Cd. Del Carmen, Camp.",
        direccion: "CALLE 20 X 31, COL. CENTRO, C.P. 24100. Cd. Del Carmen, Campeche"
      },
    ]
  },
  {
    estado: "Coahuila",
    value: "coahuila",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "BOULEVARD LAS QUINTAS No.50 LOCALES 17,18,19 Y ANEXO, COL. QUINTAS SAN ISIDRO, TORREN COAHUILA (DENTRO DEL INMUEBLE DENOMINADO PLAZA INDEPENDENCIA) C.P. 27016"
      },
      {
        oficina: "Oficina de Enlace Municipal en Acua, Coahuila.",
        direccion: "Calle Matamoros, esquina con calle Reforma No. 660 Zona Centro, C.P. 26200. Acua, Coahuila"
      },
      {
        oficina: "Oficina de Enlace Municipal en Monclova, Coah.",
        direccion: "BOULEVARD HAROLD R PAPE, ESQ., BLVD. FRANCISCO I. MADERO (ANEXO CANACO) COL. GUADALUPE, C.P. 25700"
      },
      {
        oficina: "Oficina de Enlace Municipal en Piedras Negras, Coah.",
        direccion: "BLVD. PLAZA DE LAS CULTURAS, No. 620, COL. GONZLEZ, C.P. 26020, PIEDRAS NEGRAS, COAHUILA."
      },
      {
        oficina: "Oficina de Enlace San Juan de Sabinas, Coah.",
        direccion: "LOCALIDAD DE NUEVA ROSITA EN EL MUNICIPIO DE SAN JUAN DE SABINAS, COAHUILA DE ZARAGOZA"
      },
      {
        oficina: "Oficina de Enlace Municipal en Saltillo, Coah.",
        direccion: "PADRE FLORES N. 181, ZONA CENTRO, C.P. 25000"
      },
    ]
  },
  {
    estado: "Colima",
    value: "colima",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "PLAZA LA PAZ, AVENIDA DE LA PAZ No. 33, RESIDENCIAL SANTA GERTRUDIS C.P. 28017 COLIMA, COLIMA"
      },
      {
        oficina: "Oficina de Enlace Colima, Col",
        direccion: "TERCER ANILLO PERIFRICO #301 PLAZA ZENTRALIA.LOCAL 270 ALTOS, COLONIA VALLE DORADO CP: 28000 COLIMA,COLIMA."
      },
    ]
  },
  {
    estado: "Chiapas",
    value: "chiapas",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "TORRE CHIAPAS BLV. ANDRS SERRA ROJAS No. 1090, 1er PISO,COL. PASO LIMN, C.P. 29405 TUXTLA GUTIRREZ, CHIAPAS"
      },
      {
        oficina: "Oficina de Enlace Comitan, Chis.",
        direccion: "BOULEVARD SUR DR. BELISARIO DOMNGUEZ EDIFICIO DE SEGURIDAD PBLICA, 2DO. PISO, C.P.30000,COMITN DE DOMNGUEZ, CHIAPAS"
      },
      {
        oficina: "Delegacion Tapachula",
        direccion: "3a SUR No. 45 'A' ENTRE 6a Y 8a ORIENTE C.P. 30700 TAPACHULA, CHIAPAS"
      },
    ]
  },
  {
    estado: "Chihuahua",
    value: "chihuahua",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "EDIFICIO 'LA NACIONAL', AV. INDEPENDENCIA N 1003 ESQ. JOS MARA MORELOS, COL. CENTRO, C.P. 31020 CHIHUAHUA, CHIHUAHUA"
      },
      {
        oficina: "Oficina de Enlace Chihuahua, Chih. I",
        direccion: "HIPER PLAZA MIRADOR LOCAL 2D Y 2C, CALLE MIRADOR E INDIANA, C.P, 31000"
      },
      {
        oficina: "Oficina de Enlace Municipal Cuauhtemoc, Chih.",
        direccion: "CALLE MORELOS Y 23 FRACCIONAMIENTO SAN ANTONIO, COL. CENTRO, C.P. 31501"
      },
      {
        oficina: "Oficina de Enlace Municipal. Delicias, Chih.",
        direccion: "AV. SEXTA ORIENTE Y PRIMERA ORIENTE, COL. CENTRO, C.P. 33000"
      },
      {
        oficina: "Oficina de Enlace Municipal en Hidalgo del Parral,Chih.",
        direccion: "CALLE 20 DE NOVIEMBRE S/N, COL. CENTRO, C.P. 33800 (FRENTE A LA PLAZA PRINCIPAL) HIDALGO DEL PARRAL, CHIH."
      },
      {
        oficina: "Oficina Central Ciudad Juarez",
        direccion: "EDIFICIO ARMANDO BONIFACIO CHVEZ MONTAEZ UBICADO EN EJE VIAL JUAN GABRIEL Y ASERRADEROS, SECTOR CENTRAL DE CIUDAD JUÁREZ, CHIHUAHUA, COLONIA MELCHOR OCAMPO, C.P. 32600"
      },
      {
        oficina: "Oficina de Enlace Municipal en Galerias Tec. Cd. JuÁrez, Chihuahua.",
        direccion: "AV. TECNOLGICO No. 1770, CENTRO COMERCIAL GALERAS TEC LOCAL A15 COL. FUENTES DEL VALLE C.P. 32500"
      },
      {
        oficina: "Oficina de Enlace Nuevo Casas Grandes, Chihuahua.",
        direccion: "PRESIDENCIA MUNICIPAL, AV. CONSTITUCIN Y 2 DE ABRIL NO. 300 CENTRO, C.P. 31700"
      },
    ]
  },
  {
    estado: "Ciudad de México",
    value: "ciudad-de-mexico",
    oficinas: [
      {
        oficina: "Delegacion Alvaro Obregón",
        direccion: "BATALLN DE SAN PATRICIO S/N, ESQUINA CALLE 10 Y CANARIOS, COL. TOLTECAS, ÁLCALDIA LVARO OBREGÓN, CIUDAD DE MEXICO,"
      },
      {
        oficina: "Delegacion Benito Juarez",
        direccion: "AV. INSURGENTES SUR No.1391, PISO 7 COL. INSURGENTES MIXCOAC, ALCALDIA BENITO JUÁREZ, C.P. 03920, CIUDAD DE MEXICO"
      },
      {
        oficina: "Delegacion Cajimalpa",
        direccion: "CENTRO COMERCIAL SANTA FE, LOCAL 1003 PISO 1, VASCO DE QUIROGA No. 3800, COL. ANTIGUA MINA LA TOTOLAPA, ALCALDIA CUAJIMALPA DE MORELOS C.P. 05109, CIUDAD DE MEXICO."
      },
      {
        oficina: "Delegacion Cuauhtemoc",
        direccion: "AV. RICARDO FLORES MAGN No. 2, PISO 1 ALA 'B', COL. GUERRERO, ALCALDIA Cuauhtemoc, C. P. 06300, CIUDAD DE MEXICO."
      },
      {
        oficina: "Delegacion Gustavo A. Madero",
        direccion: "GRAL. VICENTE VILLADA Y 5 DE FEBRERO, (EDIFICIO ANEXO ALCALDIA G.A.M.) C.P. 07050, CIUDAD DE MEXICO."
      },
      {
        oficina: "Delegacion Iztacalco",
        direccion: "AV. RO CHURUBUSCO Y CALLE TE S/N, COL. GABRIEL RAMOS MILLN, ALCALDIA IZTACALCO, C.P. 08000, CIUDAD DE MEXICO."
      },
      {
        oficina: "Delegacipon Iztapalapa",
        direccion: "ALDAMA No. 63 ESQ. AYUNTAMIENTO, COL. BARRIO SAN LUCAS, ALCALDIA IZTAPALAPA, C.P. 09000, CIUDAD DE MEXICO."
      },
      {
        oficina: "Delegacion Miguel Hidalgo 1",
        direccion: "PARQUE LIRA NO. 94, ESQ. SSTENES ROCHA, COL. OBSERVATORIO, ALCALDIA MIGUEL HIDALGO, C.P. 11860, CIUDAD DE MEXICO."
      },
      {
        oficina: "Delegacion Miguel Hidalgo 2",
        direccion: "CENTRO COMERCIAL 'GALERIAS PLAZA DE LAS ESTRELLAS' LOCAL S-2 AV. MELCHOR OCAMPO No. 193, COL. VERNICA ANZURES, ALCALDIA MIGUEL HIDALGO, C.P. 11300, CIUDAD DE MEXICO"
      },
      {
        oficina: "Delegacion Naucalpan",
        direccion: "AV. MEXICAS N 63, COL. SANTA CRUZ ACATLAN, NAUCALPAN, MEX. C.P. 53150 CENTRO DE SERVICIOS ADMINISTRATIVOS"
      },
      {
        oficina: "Delegacion Tlalpan",
        direccion: "INSURGENTES SUR CASI ESQ. PERIFRICO COL. VILLA OLMPICA, ALCALDIA TLALPAN, C.P. 14020, CIUDAD DE MEXICO"
      },
    ]
  },
  {
    estado: "Durango",
    value: "durango",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "CENTRO COMERCIAL PASEO DURANGO BOULEVARD FELIPE PESCADOR NUM. 1401, LOCAL A05, COL. ESPERANZA, C.P. 34080, DURANGO, DURANGO"
      },
      {
        oficina: "Oficina de Enlace Santiago Papasquiaro, Dgo.",
        direccion: "CALLE BRUNO MARTNEZ No. 206, INTERIOR '8' ENTRE ARROYO TAGARETE Y LEYVA SANTIAGO PAPASQUIARO, DGO. C.P. 34600"
      },
      {
        oficina: "Oficina de Enlace Nuevo Ideal, Dgo.",
        direccion: "JOS RAMN VALDEZ N. 503, ZONA CENTRO, C.P. 34422"
      }
    ]
  },
  {
    estado: "Guanajuato",
    value: "guanajuato",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "PLAZA GALERA 'LAS TORRES'-BOULEVARD JUAN ALONSO DE TORRES ORIENTE No.1315, COL. SAN JOS DEL CONSUELO, C.P. 37200 LEN,GTO."
      },
      {
        oficina: "Oficina de Enlace Acámbaro, Gto.",
        direccion: "CALLE HIDALGO N. 373 (FRENTE AL JARDIN) COLONIA CENTRO C.P. 38600 ACMBARO, GTO."
      },
      {
        oficina: "Oficina de Enlace Celaya, Gto.",
        direccion: "PLAZA VELEROS LOCAL 1, FRACCIONAMIENTO DEL PARQUE CELAYA, GTO."
      },
      {
        oficina: "Oficina de Enlace Irapuato, Gto.",
        direccion: "DON BOSCO PLAZA COMERCIAL BLVD. LUIS DONALDO COLOSIO #1477, COL. INDEPENDENCIA, NAVE Z.1, C.P. 35559."
      },
      {
        oficina: "Oficina de Enlace León, Gto.",
        direccion: "CENTRO COMERCIAL PLAZA MAYOR. BLVD. JUAN ALONSO DE TORRES, #2002, LOCAL 71, COL. VALLE DEL CAMPESTRE. C.P. 37129. LEN, GTO."
      },
      {
        oficina: "Oficina de Enlace San Felipe, Gto.",
        direccion: "CASA JUÁREZ PLANTA ALTA, ZONA CENTRO, C.P. 37600. SAN FELIPE, GTO."
      },
      {
        oficina: "Oficina de Enlace Pnjamo, Gto.",
        direccion: "CALLE 5 DE MAYO # 13 A, ZONA CENTRO, C.P. 36900, PNJAMO, GTO."
      },
      {
        oficina: "Oficina de Enlace Municipal San Miguel de Allende, Gto.",
        direccion: "EDIFICIO ADMINISTRATIVO,BLVD DE LA CONSPIRACIN No 130 C.P. 37748"
      }
    ]
  },
  {
    estado: "Guerrero",
    value: "guerrero",
    oficinas: [
      {
        oficina: "Oficina central",
        direccion: "CENTRO DE CONGRESOS COPACABANA, AV. COSTERA MIGUEL ALEMN No.63 LOCAL C-16 2do. NIVEL, FRACC. CLUB DEPORTIVO, C.P. 39690, ACAPULCO DE JUÁREZ, GRO."
      },
      {
        oficina: "Oficina de Enlace Cd. Altamirano, Gro. (Pungarabato)",
        direccion: "AV. LVARO OBREGN No. 8 COL. CENTRO,C.P. 40660"
      },
    ]
  },
  {
    estado: "Hidalgo",
    value: "hidalgo",
    oficinas: [
      {
        oficina: "Oficina central",
        direccion: "AV. JUÁREZ #400 -A, COL. CENTRO, C.P. 42000 PACHUCA, HIDALGO"
      },
      {
        oficina: "Oficina de Enlace Tepeji del Ro, Hgo.",
        direccion: "PALACIO MUNICIPAL, COL. CENTRO C.P. 42850, TEPEJI DEL RIO"
      },
      {
        oficina: "Oficina de Enlace Tulancingo, Hgo.",
        direccion: "PLAZA MANUEL FERNANDO SOTO S/N PALTOS, FRACC. LOS PINOS C.P. 43626"
      },
    ]
  },
  {
    estado: "Jalisco",
    value: "jalisco",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "CENTRO COMERCIAL PLAZA BONITA, AV. MEXICO No.3370 COL. VILLA SANTA RITA, C.P. 44690, GUADALAJARA, JALISCO"
      },
      {
        oficina: "Oficina de Enlace Ameca, Jal.",
        direccion: "CALLE ZARAGOZA No. 66, COL. CENTRO, C.P. 46600"
      },
      {
        oficina: "Oficina de Enlace Arandas, Jal.",
        direccion: "CALLE LVARO OBREGN 50, UNIDAD ADMINISTRATIVA NO.1 COLONIA CENTRO, C. P. 4780"
      },
      {
        oficina: "Oficina de Enlace Atotonilco el Alto, Jal.",
        direccion: "UNIDAD ADMINISTRATIVA BENITO JUREZ S/N COL. INFONAVIT, C.P. 47750"
      },
      {
        oficina: "Oficina de Enlace Autln de Navarro, Jal.",
        direccion: "VENUSTIANO CARRANZA No. 1 COL. CENTRO, C.P. 48900"
      },
      {
        oficina: "Oficina de enlace Cd. Guzmn, Jal.",
        direccion: "JOS CLEMENTE OROZCO No 22-A INT-5, COL. CENTRO, C.P. 49000"
      },
      {
        oficina: "Oficina de Enlace Colotlan, Jal.",
        direccion: "EDIF. UNISE (UNIDAD REGIONAL DE SERVICIOS DEL ESTADO) PLANTA BAJA KILMETRO 01 CARRETERA COLOTLAN-GUADALAJARA, JALISCO C.P. 46200"
      },
      {
        oficina: "Oficina de Enlace Etzatln, Jal.",
        direccion: "INDEPENDENCIA 227 EDIF. (PRESIDENCIA MUNICIPAL), COL. CENTRO, C.P.46500"
      },
      {
        oficina: "Oficina de Enlace Guadalajara, Jal. I",
        direccion: "AV. VALLARTA No. 3233 DENTRO DE LA PLAZA EXHIMODA LOCALES 6F Y 7F"
      },
      {
        oficina: "Oficina de Enlace Guadalajara, Jal. II",
        direccion: "AV. CIRCUNVALACIN 20700 (GRAN TERRAZA OBLATOS) LOCALES LS-03 Y 04 COL. OBLATOS, C.P.44700 GUADALAJARA, JALISCO"
      },
      {
        oficina: "Oficina de Enlace Ocotln, Jal.",
        direccion: "MORELOS No. 20, COL. CENTRO, C.P. 47800"
      },
      {
        oficina: "Oficina de Enlace Tepatitln de Morelos , Jal.",
        direccion: "MATAMOROS LOCAL No. 21, COL. CENTRO C.P. 47600"
      },
      {
        oficina: "Oficina de Enlace Tlaquepaque, Jal.",
        direccion: "UNIDAD ADMINISTRATIVA LA PILA SECA, LOCAL No. 2 COL CENTRO C.P. 45500"
      },
      {
        oficina: "Oficina de Enlace Tlaquepaque Sur, Jal.",
        direccion: "CENTRO COMERCIAL CENTRO SUR ANILLO PERIFRICO SUR No.7835 PRIMER PISO, LOCAL 25A Y 25B COLONIA SANTA MARA TEQUEPEXPAN C.P. 45601 SAN PEDRO TLAQUEPAQUE"
      },
      {
        oficina: "Oficina de Enlace Tonal, Jal.",
        direccion: "AV. RIO NILO No. 8096 EXPLANADA WAL-MART COL. LOMA DORADA C.P. 45400"
      },
      {
        oficina: "Oficina de Enlace Zapopan, Jal.",
        direccion: "AV. GUADALUPE No. 6000, COL. CHAPALITA C.P. 45070"
      },
      {
        oficina: "Oficina de Enlace Lagos de Moreno, Jal.",
        direccion: "NICOLAS BRAVO No. 714, COL. CENTRO, LAGOS DE MORENO JALISCO C.P. 47400"
      },
      {
        oficina: "NICOLAS BRAVO No. 714, COL. CENTRO, LAGOS DE MORENO JALISCO C.P. 47400",
        direccion: "CALLE INDEPENDENCIA #123, COL. CENTRO, PUERTO VALLARTA, JAL. C.P. 48300"
      },
    ]
  },
  {
    estado: "Estado de México",
    value: "estado-de-mexico",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AV. PASEO TOLLOCAN, No. 1195, INT. 27, (PLAZA COMERCIAL 'LA MARKETA') COL. SANTA MARA TOTOLTEPEC, C.P. 50245, TOLUCA, ESTADO DE MEXICO"
      },
      {
        oficina: "Oficina de Enlace Atlacomulco, Edo. de Mex.",
        direccion: "CENTRO DE SERVICIOS ADMINISTRATIVOS, EDIFICIO 'D'-101 P.B., (FRENTE AL REGISTRO CIVIL REGIONAL), C.P. 50450,"
      },
      {
        oficina: "Oficina de Enlace Tenancingo, Edo. de Mex.",
        direccion: "AV. MORELOS NO. 102 INTERIOR 7-8 CENTRO COMERCIAL PLAZA JARDN COL. CENTRO TENANCINGO. EDO. DE MEX. C.P. 52400"
      },
      {
        oficina: "Oficina de Enlace Tonatico, Edo. de Mex.",
        direccion: "CALLE VENUSTIANO CARRANZA S/N ESQUINA CON GALEANA, COL. CENTRO, TONATICO, EDO. DE MEXICO, C.P. 51950"
      },
      {
        oficina: "Oficina de Enlace Valle de Bravo, Edo. de Mex.",
        direccion: "CALLE NICOLS BRAVO #300B, COL. CENTRO C.P. 51200 VALLE DE BRAVO, EDO. DE MEXICO"
      },
      {
        oficina: "Delegacion CUAUTITLN IZCALLI",
        direccion: "AV. LA SUPER S/N EDIFICIO OPERAGUA IZCALLI LOCAL A-1 CENTRO URBANO CUAUTITLN, CUAUTITLN IZCALLI, ESTADO DE MEXICO, C.P. 54700"
      },
      {
        oficina: "Delegacion Texcoco",
        direccion: "CALLE NEZAHUALCOYTL NO. 110, COLONIA CENTRO, C. P. 56100, TEXCOCO, EDO. DE MEXICO"
      },
      {
        oficina: "Delegacion TLALNEPANTLA",
        direccion: "BOULEVARD MANUEL VILA CAMACHO 1007, LOCAL 3-C, SEGUNDO PISO, COL. SAN LUCAS, TLALNEPANTLA DE BAZ, EDO. MX, C. P. 54055"
      }
    ]
  },
  {
    estado: "Michoacán",
    value: "michoacan",
    oficinas: [
      {
        oficina: "Oficina de Enlace Zitacuaro, Mich.",
        direccion: "CALLE OCAMPO PTE. No 13 ESQ. 5 DE MAYO (Palacio Municipal), COL. CENTRO C.P.61500"
      },
      {
        oficina: "Oficina Central",
        direccion: "AV. LZARO CRDENAS No. 2998 PLAZA NUEVA ESPAA COL. CHAPULTEPEC SUR (ENTRE FUERTE DE LORETO Y ALCZAR DE CHAPULTEPEC) C.P. 58260 MORELIA,"
      },
      {
        oficina: "Oficina de Enlace Chern, Mich.",
        direccion: "INDEPENDENCIA No.78 BARRIO SEGUNDO COL. CENTRO, C.P. 60270"
      },
      {
        oficina: "Oficina de Enlace Lázaro Cárdenas, Mich.",
        direccion: "AV. LÁZARO CÁRDENAS No. 516, COL. CENTRO, PALACIO MUNICIPAL C.P. 60950, LZARO CRDENAS, MICH."
      },
      {
        oficina: "Oficina de Enlace Moroleon, Gto",
        direccion: "BRASIL No. 72 FRACCIONAMIENTO MODELO MOROLEN, GTO"
      },
      {
        oficina: "Oficina de Enlace Peribán de Ramos, Mich.",
        direccion: "OCAMPO No.1, COL. CENTRO, C.P. 60440, PERIBAN, MICHOACAN"
      },
      {
        oficina: "Oficina de Enlace Sahuayo, Mich.",
        direccion: "BOULEVARD LZARO CRDENAS SUR #1190 LOCAL 83 PLAZA FERIA SAHUAYO COL. NORIA DE MONTES, SAHUAYO, MICHOACN"
      },
      {
        oficina: "Oficina de Enlace Uruapan, Mich.",
        direccion: "AV. CHIAPAS No. 93 INTERIOR 201, COL. RAMN FARIAS, C.P. 60050 URUAPAN, MICHOACÁN"
      },
      {
        oficina: "Oficina de Enlace Zacapu, Mich.",
        direccion: "IGNACIO ALLENDE #91-A COL. CENTRO C.P. 58600"
      },
      {
        oficina: "Oficina de Enlace Zamora, Mich.",
        direccion: "GUERRERO 82 ORIENTE, COLONIA CENTRO, C.P. 59600 ZAMORA, MICHOACÁN"
      },
      {
        oficina: "Oficina de Enlace Apatzingán, Mich.",
        direccion: "JOS SOTERO DE CASTANEDA No. 20, COL. CENTRO, C.P. 60600, APATZINGN, MICHOACÁN"
      },
      {
        oficina: "Oficina de Enlace Hidalgo, Mich.",
        direccion: "GUADALUPE VICTORIA No.17 COL. CENTRO, C.P. 61100 CD. HIDALGO, MICHOACN"
      },
      {
        oficina: "Oficina de Enlace La Piedad, Mich.",
        direccion: "PLAZA BOULEVARD LOCAL No. 1-B, COL. CENTRO, C.P. 59300"
      },
    ]
  },
  {
    estado: "Morelos",
    value: "morelos",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "LOCALES 12 AL 16, AV. PLAN DE AYALA No. 501 COL. TEOPANZOLCO, CUERNAVACA, MORELOS, C.P. 62350"
      },
    ]
  },
  {
    estado: "Nayarit",
    value: "nayarit",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AV. INSURGENTES No. 1121 ORIENTE, COL. LOS LLANITOS, C.P. 63170, TEPIC, NAYARIT"
      },
    ]
  },
  {
    estado: "Nuevo León",
    value: "nuevo-leon",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AV. EUGENIO GARZA SADA, No. 2411 Y 2413, COL. ROMA, C.P. 64700, MONTERREY, NL. COMPLEJO COMERCIAL 'PASEO TEC', 1ER. NIVEL, LOCALES L-49, L-50, L-51, L-52, L-53, L-54, L-55, L-56, L-57"
      },
      {
        oficina: "Oficina de Enlace Apodaca, N.L.",
        direccion: "5 DE MAYO No. 103, LOCAL 5 Y 6, COL. CENTRO, C.P. 66600"
      },
      {
        oficina: "Oficina de Enlace General Escobedo, N.L.",
        direccion: "AV. MANUEL L. BARRAGAN # 220, ACCESO 5, LOCAL 55, COL. EX HACIENDA EL CANADA, C.P. 66054"
      },
      {
        oficina: "Oficina de Enlace Guadalupe, N.L.",
        direccion: "GRAN PARQUE GUADALUPE UNIDAD TOLTECA, AV. TOLTECA ESQ. RO LA SILLA S/N, COL. TOLTECA, C.P. 67100"
      },
      {
        oficina: "Oficina de Enlace Linares, N.L.",
        direccion: "CARRETERA A GALEANA, KILMETRO 1.5 PARQUE NOGALAR, EDIFICIO OFICINA DE ENLACE S.R.E., C.P. 67700"
      },
      {
        oficina: "Oficina de Enlace Montemorelos, N.L.",
        direccion: "Cuauhtemoc No. 509, HIDALGO Y CINCO DE MAYO, COL. CENTRO C.P. 67500"
      },
      {
        oficina: "Oficina de Enlace Monterrey, N.L. (parque Espaa)",
        direccion: "AV. MORONES PRIETO S/N, COL. FRACCIONAMIENTO BUENOS AIRES, PARQUE ESPAA, C.P. 64810"
      },
      {
        oficina: "Oficina de enlace Monterrey, N.L. III (parque Tucn)",
        direccion: "AV. COMISIN TRIPARTITA Y URANIO, COL. VALLE DE INFONAVIT 5TO. SECTOR INTERIOR PARQUE TUCN MONTERREY, N.L."
      },
      {
        oficina: "Oficina de Enlace San Nicols de los Garza, N.L.",
        direccion: "AV. JUÁREZ No. 655 PONIENTE, ENTRE RYON Y CORREGIDORA, ZONA CENTRO, C.P. 66400"
      },
      {
        oficina: "Oficina de Enlace San Pedro Garza Garca, N.L.",
        direccion: "MORONES PRIETO No. 2090 ESQ. HUMBERTO LOBO EDIFICIO SERVICIOS CIUDADANOS COL. DEL VALLE C.P. 66214."
      },
      {
        oficina: "Oficina de Enlace Santa Catarina, N.L.",
        direccion: "'PLAZA LAS QUINTA', AV. MANUEL ORDOEZ No. 620 LOCAL 10-11, PLANTA BAJA COL. LA AURORA, C.P. 66350"
      },
      {
        oficina: "Oficina de Enlace Santiago, N.L.",
        direccion: "HIDALGO S/N, ESQ. EUTIMIO SILVA, PLANTA ALTA, EL CERCADO, SANTIAGO N.L."
      },
    ]
  },
  {
    estado: "Oaxaca",
    value: "oaxaca",
    oficinas: [
      {
        oficina: "Delegacion Oaxaca",
        direccion: "CALLE LAMOS No. 603, COL. REFORMA, C.P. 68050 CIUDAD DE OAXACA, OAXACA DE JUÁREZ"
      },
    ]
  },
  {
    estado: "Puebla",
    value: "puebla",
    oficinas: [
      {
        oficina: "Delegacion Puebla",
        direccion: "VA ATLIXCAYOTL No.1101, EDIFICIO NORTE, COLONIA RESERVA TERRITORIAL ATLIXCAYOTL, C.P. 72190 PUEBLA."
      },
    ]
  },
  {
    estado: "Querétaro",
    value: "queretaro",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "BOULEVARD BERNARDO QUINTANA # 112 COL. CARRETAS DE SANTIAGO DE QUERTARO. C.P. 76050"
      },
      {
        oficina: "Oficina de Enlace en Corregidora, Qro.",
        direccion: "AV. PROLONGACIN CANDILES 204, COL FRACC. CAMINO REAL, ENTRE CAMINO REAL Y BLVD. CAMINO REAL, LOCALES A-01 AL A-05, C.P. 76190, CORREGIDORA, QRO"
      },
      {
        oficina: "Oficina de Enlace San Juan del Ro, Qro.",
        direccion: "CALLE ING. LEOPOLDO PERALTA S/N CECUCO, COLONIA RAMOS MILLN, SAN JUAN DEL RO, QRO. C.P. 76807"
      },
    ]
  },
  {
    estado: "Quintana Roo",
    value: "quintana-roo",
    oficinas: [
      {
        oficina: "Delegacion Quintana Roo",
        direccion: "LOCALES DEL 209 AL 214, AVENIDA NADER No. 8, SPER MANZANA 5, COLONIA PLAZA CENTRO, C.P. 77501, CANCN, QUINTANA ROO"
      },
    ]
  },
  {
    estado: "San Luis Potosí",
    value: "san-luis-potosi",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "CALLE RO NAZAS No. 180 y 190, COLONIA LOMAS LOS FILTROS, C.P. 78210, SAN LUIS POTOS"
      },
      {
        oficina: "Oficina de Enlace Cd. Valles, S.L.P.",
        direccion: "BOCANEGRA 28 LOCAL'A' COLONIA OBRERA C.P. 79050"
      },
      {
        oficina: "Oficina de enlace Matehuala, S.L.P.",
        direccion: "GALEANA S/N ZONA CENTRO C.P 78700"
      },
      {
        oficina: "Oficina de Enlace Ro Verde, S.L.P.",
        direccion: "BENITO JUÁREZ NORTE 101, ESQ. GABRIEL MARTNEZ, COL. CENTRO, C.P. 79610"
      },
      {
        oficina: "Oficina de Enlace San Luis Potos, S.L.P",
        direccion: "TERRAZAS 1280-A, FRACC. TANGAMANGA, C.P. 78269"
      },
      {
        oficina: "Oficina de Enlace Soledad de Graciano Snchez, S.L.P.",
        direccion: "BLAS ESCONTRIA 832, ESQ. CRUZ VERDE, LOCAL 3, C.P. 78430"
      },
    ]
  },
  {
    estado: "Sinaloa",
    value: "sinaloa",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "PLANTA BAJA Y MEZZANINE, TORRE TRES AFLUENCIAS UBICADO EN BOULEVARD ALFONSO ZARAGOZA MAYTORENA No. 1780 PONIENTE, DESARROLLO URBANO TRES ROS, C.P. 80020"
      },
      {
        oficina: "Oficina de Enlace Guasave Sin.",
        direccion: "AV. ADOLFO LPEZ MATEOS S/N, COL. DEL BOSQUE, C.P. 81020"
      },
      {
        oficina: "Oficina de Enlace Ahome, Sin. (Los Mochis)",
        direccion: "PALACIO MUNICIPAL DE AHOME, DEGOLLADO S/N, COLONIA CENTRO. C.P. 81200"
      },
      {
        oficina: "Oficina de Enlace Mazatlan, Sin.",
        direccion: "CALLE CAMPANA S/N COL. CENTRO, ESQ NGEL FLORES. C.P. 82000"
      },
    ]
  },
  {
    estado: "Sonora",
    value: "sonora",
    oficinas: [
      {
        oficina: "Oficina central",
        direccion: "RO SONORA Y COMONFORT, EDIFICIO HERMOSILLO, P.B. DEL CENTRO DE GOBIERNO EN HERMOSILLO ESTADO DE SONORA"
      },
      {
        oficina: "Oficina de Enlace Agua Prieta, Son.",
        direccion: "CALLE INTERNACIONAL Y AVE. CINCO, PLAZA COMERCIAL TERN, LOCAL 2 'A', C.P.84200"
      },
      {
        oficina: "Oficina de Enlace Caborca, Son.",
        direccion: "CALLE 6TA. ESQ. CON AVENIDA O, COL. CENTRO CABORCA, SONORA C.P. 83600"
      },
      {
        oficina: "Oficina de Enlace Cd. Obregn, Son.",
        direccion: "SUFRAGIO EFECTIVO ESQUINA CON GUERRERO, INTERIOR S/N, COL. CENTRO, EDIFICIO YAQUI FORUM CUM"
      },
      {
        oficina: "Oficina de Enlace Guaymas, Son.",
        direccion: "CALLE 21 Y 22 AVE. ALFONSO IBERRI No75, INTERIOR 14, COLONIA CENTRO, GUAYMAS, SONORA."
      },
      {
        oficina: "Oficina de Enlace Navojoa, Son.",
        direccion: "CALLE ALLENDE, ESQUINA CON CALLE TALAMANTE S/N COL. REFORMA, C.P. 85830 HORARIO LUNES A VIERNES 8:00 A 15:00 HRS"
      },
      {
        oficina: "Oficina de Enlace Nogales, Son.",
        direccion: "AVE. PLUTARCO ELAS CALLES No. 898 LOCAL 4, ENTRE CALLE RUIZ CORTINES Y AVE. ALVARO OBREGON COL. LA MODERNA, C.P. 84055 NOGALES, SONORA"
      },
    ]
  },
  {
    estado: "Tabasco",
    value: "tabasco",
    oficinas: [
      {
        oficina: "Oficina central",
        direccion: "AV. CIRCUITO DEPORTIVO No. 312, COL. PENSIONES C.P. 86169, VILLAHERMOSA, TABASCO"
      },
    ]
  },
  {
    estado: "Tamaulipas",
    value: "tamaulipas",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AVE. CINCO DE MAYO ESQUINA CON HIDALGO #112, ZONA CENTRO, C.P. 87000 CD. VICTORIA, TAMAULIPAS"
      },
      {
        oficina: "Oficina de Enlace Cd. Mante, Tamps",
        direccion: "AVE. JUÁREZ No. 101 PONIENTE, COL. CENTRO C.P. 89800"
      },
      {
        oficina: "Oficina de enlace Matamoros, Tamps.",
        direccion: "CALLE PRIMERA Y AVE. CONSTITUCIN S/N, C.P. 87330"
      },
      {
        oficina: "Oficina de Enlace Nvo. Laredo, Tamps.",
        direccion: "GUERRERO ENTRE MACLOVIO HERRERA Y HROES DE NACATAZ CENTRO, C.P. 88000"
      },
      {
        oficina: "Oficina de Enlace Reynosa, Tamps.",
        direccion: "ZARAGOZA # 496, ENTRE OCAMPO Y CANALES, ZONA CENTRO C.P. 88500, REYNOSA, TAMAULIPAS"
      },
      {
        oficina: "Oficina de Enlace Tampico, Tamps.",
        direccion: "EMILIO CARRANZA No. 104 PONIENTE, JUNTO AL PALACIO MUNICIPAL, COL. CENTRO C.P. 89000"
      },
    ]
  },
  {
    estado: "Tlaxcala",
    value: "tlaxcala",
    oficinas: [
      {
        oficina: "Delgacion Tlaxcala",
        direccion: "BOULEVARD EMILIO SNCHEZ PIEDRAS No 409-1, SUB ANCLA 2-3, CENTRO COMERCIAL LA ANTIGUA ESTACIN, COL. CENTRO, APIZACO, TLAXCALA, C.P. 90300"
      },
    ]
  },
  {
    estado: "Veracruz",
    value: "veracruz",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "BOULEVARD CRISTBAL COLN NM. 5, FRACCTO. AMPLIACIN JARDINES DE LAS ANIMAS, SECCIN TORRE ANIMAS, XALAPA, VERACRUZ, C.P. 91190"
      },
      {
        oficina: "Oficina de Enlace Boca del Ro, Ver.",
        direccion: "AVENIDA LAS AMRICAS S/N, ENTRE CARRETERA BOTICARIA MOCAMBO Y RUIZ CORTNEZ COL: YLANG YLANG, LOCAL 3 ZONA T BOCA DEL RO, VER, C.P. 94290"
      },
      {
        oficina: "Oficina de Enlace Coatzacoalcos, Ver.",
        direccion: "CALLE ZARAGOZA No. 404, COL. CENTRO, C.P. 96400, COATZACOALCOS, VERACRUZ"
      },
      {
        oficina: "Oficina de Enlace Córdoba, Ver.",
        direccion: "CALLE 1 ENTRE AVENIDA 3 Y 5 No. 306, COL. CENTRO CÓRDOBA, VERACRUZ, C.P. 94500"
      },
      {
        oficina: "Oficina de Enlace Tuxpan, Ver.",
        direccion: "AV. JUÁREZ S/N, COL. CENTRO, C.P. 92800 TUXPAN, VERACRUZ"
      },
      {
        oficina: "Oficina de Enlace Papantla, Ver.",
        direccion: "CALLE ARTES S/N, COL. CENTRO PAPANTLA DE OLARTE, VERACRUZ, CP. 93400"
      },
      {
        oficina: "Oficina de Enlace Orizaba Ver.",
        direccion: "AV. FCO. I. MADERO S/n ENTRE PONIENTE 1 Y 2 ZONA CENTRO"
      },
    ]
  },
  {
    estado: "Yucatán",
    value: "yucatan",
    oficinas: [
      {
        oficina: "Delegacion Yucatán",
        direccion: "CALLE 56 'A' No.442, LOCALES 101, 103, 105, 107, 109, 03 Y 05, PASEO MONTEJO, C.P. 97000, MRIDA, YUCATÁN"
      },
    ]
  },
  {
    estado: "Zacatecas",
    value: "zacatecas",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AV. MEXICO No. 2, COLONIA DEPENDENCIAS FEDERALES EN GUADALUPE ZACATECAS, C.P. 98618"
      },
      {
        oficina: "Oficina de Enlace Fresnillo, Zac.",
        direccion: "FRANCISCO JAVIER MINA No. 111,ESQUINA 18 DE MARZO,C.P. 99000"
      },
      {
        oficina: "Oficina de Enlace Jerez de Garca Salinas, Zac.",
        direccion: "CALLE JUÁREZ No.1 ESQ.PORTAL HUMBOLT, CENTROC.P. 99300"
      },
      {
        oficina: "Oficina de Enlace Sombrerete, Zac.",
        direccion: "HIDALGO No. 232-F,CENTROC.P. 99100"
      },
      {
        oficina: "Oficina de Enlace Juan Aldama, Zac.",
        direccion: "AV. CENTENARIO SUR No. 33,CENTRO C.P.98300"
      },
      {
        oficina: "Oficina de Enlace Juchipila, Zac.",
        direccion: "MIXTON S/N, PRESIDENCIA MUNICIPAL"
      },
    ]
  }
];
