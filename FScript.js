const historia = [
    {
        titulo: "Los Orígenes (1894–1949)",
        texto: "Las raíces de la Fórmula 1 nacen en las primeras carreras de automóviles celebradas en Francia en 1894. Durante décadas, la velocidad evolucionó rápidamente mientras la seguridad prácticamente no existía. Después de la Segunda Guerra Mundial, la FIA creó en 1946 las reglas oficiales que darían origen a la Fórmula 1 moderna."
    },

    {
        titulo: "Los Años 50: El Nacimiento del Campeonato",
        texto: "El primer campeonato mundial comenzó el 13 de mayo de 1950 en Silverstone. Giuseppe Farina fue el primer campeón del mundo, pero la gran leyenda de la década fue Juan Manuel Fangio, quien conquistó cinco campeonatos mundiales."
    },

    {
        titulo: "Los Años 60: Innovación y Dominio Británico",
        texto: "Lotus revolucionó la categoría con el chasis monocasco de aluminio. La aerodinámica comenzó a ganar importancia y aparecieron los primeros grandes patrocinadores comerciales."
    },

    {
        titulo: "Los Años 70: La Época Dorada",
        texto: "El efecto suelo transformó el rendimiento de los monoplazas. La histórica rivalidad entre James Hunt y Niki Lauda marcó una de las temporadas más emocionantes de todos los tiempos."
    },

    {
        titulo: "Los Años 80: Senna vs Prost",
        texto: "La llegada de los motores turbo llevó la potencia a niveles nunca vistos. Ayrton Senna y Alain Prost protagonizaron una de las rivalidades más grandes de la historia del deporte."
    },

    {
        titulo: "Los Años 90: Tragedia y Renacimiento",
        texto: "La muerte de Ayrton Senna en 1994 cambió para siempre la seguridad en la Fórmula 1. Al mismo tiempo, Michael Schumacher comenzaba a construir una de las carreras más exitosas de todos los tiempos."
    },

    {
        titulo: "Los 2000: La Era Ferrari",
        texto: "Schumacher y Ferrari dominaron el campeonato mundial. Más adelante, Fernando Alonso rompió esa hegemonía y se convirtió en el campeón más joven de la historia en ese momento."
    },

    {
        titulo: "Los 2010: Vettel, Mercedes y los Híbridos",
        texto: "Sebastian Vettel ganó cuatro títulos consecutivos con Red Bull. Posteriormente Mercedes inició una de las etapas de dominio más impresionantes gracias a los nuevos motores híbridos."
    },

    {
        titulo: "Los 2020: Verstappen, Norris y el relevo generacional",
        texto: "Max Verstappen rompió la hegemonía de Mercedes y conquistó cuatro campeonatos consecutivos con Red Bull (2021–2024). En 2025, Lando Norris se coronó campeón con McLaren por solo dos puntos de ventaja sobre Verstappen, mientras la Fórmula 1 continuó expandiéndose a nivel global."
    },

    {
        titulo: "2026: Una Nueva Era",
        texto: "La Fórmula 1 entra en una nueva generación de motores híbridos con combustibles sostenibles. El objetivo es alcanzar emisiones netas cero para 2030 sin perder el espectáculo y la velocidad que caracterizan al deporte. La parrilla crece hasta 11 escuderías con la llegada de Cadillac."
    }
];




const leyendas = [
    {
        nombre: "Juan Manuel Fangio",
        pais: "Argentina",
        anosActivos: "1950–1958",
        titulos: 5,
        victorias: 24,
        poles: 29,
        podios: 35,
        escuderias: "Alfa Romeo, Ferrari, Maserati, Mercedes-Benz",
        frase: "Para ganar, primero tienes que terminar.",
        imagen: "https://grandprixexperience.com/wp-content/uploads/Juan-Manuel-Fangio-2.jpg"
    },

    {
        nombre: "Ayrton Senna",
        pais: "Brasil",
        anosActivos: "1984–1994",
        titulos: 3,
        victorias: 41,
        poles: 65,
        podios: 80,
        escuderias: "Toleman, Lotus, McLaren, Williams",
        frase: "Si todo parece bajo control, es que no vas suficientemente rápido.",
        imagen: "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/08e9591b-675d-4330-84c9-e6859621ae00/avatarhd"
    },

    {
        nombre: "Alain Prost",
        pais: "Francia",
        anosActivos: "1980–1991, 1993",
        titulos: 4,
        victorias: 51,
        poles: 33,
        podios: 106,
        escuderias: "McLaren, Renault, Williams",
        frase: "Ganar no es suficiente si no lo haces con estilo.",
        imagen: "https://tse1.mm.bing.net/th/id/OIP.IKaV4_cmY30IPpjQwuJ5XAHaLC?cb=thfc1&w=1717&h=2560&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        nombre: "Niki Lauda",
        pais: "Austria",
        anosActivos: "1971–1979, 1982–1985",
        titulos: 3,
        victorias: 25,
        poles: 24,
        podios: 54,
        escuderias: "March, BRM, Ferrari, Brabham, McLaren",
        frase: "El miedo no existe. Solo existe la preparación y la falta de ella.",
        imagen: "https://tse2.mm.bing.net/th/id/OIP.BML09le4nn8OAUdD4EpVpQHaLH?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        nombre: "Michael Schumacher",
        pais: "Alemania",
        anosActivos: "1991–2006, 2010–2012",
        titulos: 7,
        victorias: 91,
        poles: 68,
        podios: 155,
        escuderias: "Jordan, Benetton, Ferrari, Mercedes",
        frase: "Cuando estás en el coche, eres uno solo con la máquina.",
        imagen: "https://tse4.mm.bing.net/th/id/OIP.lfmQ4A_07pPvRSRX8pkT9AAAAA?cb=thfc1&w=306&h=428&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        nombre: "Giuseppe Farina",
        pais: "Italia",
        anosActivos: "1950–1955",
        titulos: 1,
        victorias: 5,
        poles: 5,
        podios: 20,
        escuderias: "Alfa Romeo, Ferrari",
        frase: "La única manera de superar tus límites es empujándolos.",
        imagen: "https://tse1.mm.bing.net/th/id/OIP.1S9smEkGMdz361PF2a96QwHaJJ?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        nombre: "Jim Clark",
        pais: "Reino Unido",
        anosActivos: "1960–1968",
        titulos: 2,
        victorias: 25,
        poles: 33,
        podios: 32,
        escuderias: "Lotus",
        frase: "No me importa lo que digan. Solo me importa lo que pasa en la pista.",
        imagen: "https://millsf1.weebly.com/uploads/2/3/8/4/23842228/jim-clark-fileminimizer_orig.jpg"
    },

    {
        nombre: "Alberto Ascari",
        pais: "Italia",
        anosActivos: "1950–1955",
        titulos: 2,
        victorias: 13,
        poles: 14,
        podios: 17,
        escuderias: "Ferrari, Maserati, Lancia",
        frase: "Después de un accidente lo mejor es ponerse de nuevo al volante lo antes posible.",
        imagen: "https://vignette.wikia.nocookie.net/f1wikia/images/b/ba/52.jpg/revision/latest?cb=20170617092458"
    },

    {
        nombre: "Jackie Stewart",
        pais: "Escocia",
        anosActivos: "1965–1973",
        titulos: 3,
        victorias: 27,
        poles: 17,
        podios: 43,
        escuderias: "BRM, Tyrrell",
        frase: "El objetivo es cruzar la línea de meta en primer lugar. Y llegar vivo.",
        imagen: "https://2.bp.blogspot.com/-tENLa-2lbV0/VAJu4ewxfsI/AAAAAAAAgtM/uV5JUuvtrjY/s1600/Sports-Illustrated-Jackie-Stewart-September-6-1971-Rolex.jpg"
    },

    {
        nombre: "Nico Rosberg",
        pais: "Alemania",
        anosActivos: "2006–2016",
        titulos: 1,
        victorias: 23,
        poles: 30,
        podios: 57,
        escuderias: "Williams, Mercedes",
        frase: "Cuando ganas el campeonato del mundo, no hay nada más que demostrar.",
        imagen: "https://th.bing.com/th/id/R.b32327b21598bc28c78103ee046f7582?rik=6PgG07AJEs8ZOA&riu=http%3a%2f%2fimg.dailymail.co.uk%2fi%2fpix%2f2007%2f10_01%2frosberg0310_468x708.jpg&ehk=O4b7tFExP0571fB3kVRqZkOiPMyTUVeRWA9rJFCz5tM%3d&risl=&pid=ImgRaw&r=0"
    }
];




const pilotos = [
    {
        nombre: "George Russell",
        codigo: "RUS",
        clase: "mercedes",
        pais: "Gran Bretaña",
        anosActivos: "2019–presente",
        titulos: 0,
        victorias: 6,
        poles: 10,
        podios: 26,
        escuderias: "Williams, Mercedes",
        posicion2026: 2,
        puntos2026: 242,
        frase: "El sábado me da confianza, pero el domingo es donde se gana todo.",
        imagen: "https://media.formula1.com/image/upload/v1712849109/content/dam/fom-website/drivers/2024Drivers/russell.png"
    },

    {
        nombre: "Andrea Kimi Antonelli",
        codigo: "ANT",
        clase: "mercedes",
        pais: "Italia",
        anosActivos: "2025–presente",
        titulos: 0,
        victorias: null,
        poles: 3,
        podios: null,
        escuderias: "Mercedes",
        posicion2026: 1,
        puntos2026: 365,
        frase: "Tengo 19 años y ya estoy peleando por el campeonato. Solo voy hacia adelante.",
        imagen: "https://th.bing.com/th/id/R.959a74db3f919ad25279480dbec9bd42?rik=c6SChjlN9hZ%2fFw&riu=http%3a%2f%2fus.f1authentics.com%2fcdn%2fshop%2fcollections%2fMercedes-Kimi.jpg%3fcrop%3dcenter%26height%3d1200%26v%3d1744035942%26width%3d1200&ehk=FiF46JMKEQCKpXVti7WYI%2baSAW0gz6GMq%2bQvSfjBVCI%3d&risl=&pid=ImgRaw&r=0"
    },

    {
        nombre: "Charles Leclerc",
        codigo: "LEC",
        clase: "ferrari",
        pais: "Mónaco",
        anosActivos: "2018–presente",
        titulos: 0,
        victorias: 8,
        poles: 27,
        podios: 52,
        escuderias: "Sauber, Ferrari",
        posicion2026: 5,
        puntos2026: 233,
        frase: "Siempre doy el 100%, eso es lo único que puedo controlar.",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2025Drivers/leclerc"
    },

    {
        nombre: "Lewis Hamilton",
        codigo: "HAM",
        clase: "ferrari",
        pais: "Reino Unido",
        anosActivos: "2007–presente",
        titulos: 7,
        victorias: 103,
        poles: 104,
        podios: 197,
        escuderias: "McLaren, Mercedes, Ferrari",
        posicion2026: 3,
        puntos2026: 241,
        frase: "La única manera de superar tus límites es empujándolos.",
        imagen: "https://www.f1-fansite.com/wp-content/uploads/2020/08/Lewis-Hamilton-2020-scaled.jpg"
    },

    {
        nombre: "Max Verstappen",
        codigo: "VER",
        clase: "redbull",
        pais: "Países Bajos",
        anosActivos: "2015–presente",
        titulos: 4,
        victorias: "63+",
        poles: "40+",
        podios: "110+",
        escuderias: "Toro Rosso, Red Bull Racing",
        posicion2026: 4,
        puntos2026: 236,
        frase: "No me importa lo que digan. Solo me importa lo que pasa en la pista.",
        imagen: "https://wallpapers.com/images/hd/red-bull-racing-max-verstappen-helmet-te7xj8yx9ci7zawi.jpg"
    },

    {
        nombre: "Isack Hadjar",
        codigo: "HAD",
        clase: "redbull",
        pais: "Francia",
        anosActivos: "2025–presente",
        titulos: 0,
        victorias: 0,
        poles: 0,
        podios: null,
        escuderias: "Racing Bulls, Red Bull",
        posicion2026: 8,
        puntos2026: 105,
        frase: "El debutante de hoy puede ser el campeón de mañana.",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2025Drivers/hadjar"
    },

    {
        nombre: "Lando Norris",
        codigo: "NOR",
        clase: "mclaren",
        pais: "Gran Bretaña",
        anosActivos: "2019–presente",
        titulos: 1,
        victorias: 11,
        poles: 16,
        podios: 45,
        escuderias: "McLaren",
        posicion2026: 6,
        puntos2026: 211,
        frase: "No se trata solo de velocidad, se trata de creer en ti mismo en cada vuelta.",
        imagen: "https://tse2.mm.bing.net/th/id/OIP.lDuiCLsnpNPhbk8sTXFZfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        nombre: "Oscar Piastri",
        codigo: "PIA",
        clase: "mclaren",
        pais: "Australia",
        anosActivos: "2023–presente",
        titulos: 0,
        victorias: 9,
        poles: 6,
        podios: 28,
        escuderias: "McLaren",
        posicion2026: 7,
        puntos2026: 144,
        frase: "Soy tranquilo por fuera, pero por dentro siempre estoy atacando.",
        imagen: "https://media.formula1.com/image/upload/f_auto,q_auto/v1741268877/content/dam/fom-website/drivers/2025Drivers/piastri.png"
    },

    {
        nombre: "Liam Lawson",
        codigo: "LAW",
        clase: "racingbulls",
        pais: "Nueva Zelanda",
        anosActivos: "2023–presente",
        titulos: 0,
        victorias: 0,
        poles: 0,
        podios: 0,
        escuderias: "AlphaTauri, Red Bull, Racing Bulls",
        posicion2026: 9,
        puntos2026: 77,
        frase: "Estoy aquí para aprender, crecer y ganar.",
        imagen: "https://i.pinimg.com/originals/8a/15/ce/8a15ce180402c543acea1135bb516a78.png"
    },

    {
        nombre: "Arvid Lindblad",
        codigo: "LIN",
        clase: "racingbulls",
        pais: "Gran Bretaña",
        anosActivos: "2026–presente",
        titulos: 0,
        victorias: 0,
        poles: 0,
        podios: 0,
        escuderias: "Racing Bulls",
        posicion2026: 11,
        puntos2026: 38,
        frase: "Solo tengo 18 años y ya estoy en la Fórmula 1. Todo es posible.",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.7bWRKTs84mH1ul5gf5KB3gHaJd?rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        nombre: "Pierre Gasly",
        codigo: "GAS",
        clase: "alpine",
        pais: "Francia",
        anosActivos: "2017–presente",
        titulos: 0,
        victorias: 1,
        poles: 0,
        podios: 6,
        escuderias: "Toro Rosso, Red Bull, AlphaTauri, Alpine",
        posicion2026: 10,
        puntos2026: 42,
        frase: "Cada carrera es una nueva oportunidad para demostrar quién soy.",
        imagen: "https://wallpapers.com/images/hd/pierre-gasly-waving-hvax3m4lk3cnmgwg.jpg"
    },

    {
        nombre: "Franco Colapinto",
        codigo: "COL",
        clase: "alpine",
        pais: "Argentina",
        anosActivos: "2024–presente",
        titulos: 0,
        victorias: 0,
        poles: 0,
        podios: 0,
        escuderias: "Williams, Alpine",
        posicion2026: 12,
        puntos2026: 27,
        frase: "Argentina tiene un piloto de Fórmula 1 de nuevo, y no pienso desperdiciar esta oportunidad.",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/drivers/2025Drivers/colapinto"
    },

    {
        nombre: "Esteban Ocon",
        codigo: "OCO",
        clase: "haas",
        pais: "Francia",
        anosActivos: "2016–presente",
        titulos: 0,
        victorias: 1,
        poles: 0,
        podios: 4,
        escuderias: "Manor, Force India, Renault, Alpine, Haas",
        posicion2026: 16,
        puntos2026: 7,
        frase: "Cada punto en la tabla vale una batalla ganada.",
        imagen: "https://www.gp1.hr/wp-content/uploads/2023/03/Esteban-Ocon-2023.jpg"
    },

    {
        nombre: "Oliver Bearman",
        codigo: "BEA",
        clase: "haas",
        pais: "Gran Bretaña",
        anosActivos: "2024–presente",
        titulos: 0,
        victorias: 0,
        poles: 0,
        podios: 0,
        escuderias: "Ferrari (sustituto), Haas",
        posicion2026: 13,
        puntos2026: 23,
        frase: "Cada oportunidad que me dan la aprovecho al máximo.",
        imagen: "https://media.formula1.com/image/upload/f_auto,q_auto/v1741268869/content/dam/fom-website/drivers/2025Drivers/bearman.png"
    },

    {
        nombre: "Nico Hülkenberg",
        codigo: "HUL",
        clase: "audi",
        pais: "Alemania",
        anosActivos: "2010–presente",
        titulos: 0,
        victorias: 0,
        poles: 1,
        podios: 1,
        escuderias: "Williams, Force India, Sauber, Renault, Racing Point, Aston Martin, Haas, Audi",
        posicion2026: 14,
        puntos2026: 13,
        frase: "La perseverancia es lo que te mantiene en la parrilla año tras año.",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.xPd2oBNC3p5z1V3RxGMjQQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        nombre: "Gabriel Bortoleto",
        codigo: "BOR",
        clase: "audi",
        pais: "Brasil",
        anosActivos: "2025–presente",
        titulos: 0,
        victorias: 0,
        poles: 0,
        podios: 0,
        escuderias: "Sauber, Audi",
        posicion2026: 15,
        puntos2026: 10,
        frase: "Brasil siempre ha tenido grandes pilotos y quiero seguir esa tradición.",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2025Drivers/bortoleto"
    },

    {
        nombre: "Carlos Sainz",
        codigo: "SAI",
        clase: "williams",
        pais: "España",
        anosActivos: "2015–presente",
        titulos: 0,
        victorias: 4,
        poles: 6,
        podios: 29,
        escuderias: "Toro Rosso, Renault, McLaren, Ferrari, Williams",
        posicion2026: 18,
        puntos2026: 7,
        frase: "Cada circuito es un reto nuevo. Eso es lo que amo de este deporte.",
        imagen: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/sainz.jpg.img.1536.high.jpg"
    },

    {
        nombre: "Alexander Albon",
        codigo: "ALB",
        clase: "williams",
        pais: "Tailandia",
        anosActivos: "2019–presente",
        titulos: 0,
        victorias: 0,
        poles: 0,
        podios: 2,
        escuderias: "Toro Rosso, Red Bull, Williams",
        posicion2026: 19,
        puntos2026: 5,
        frase: "Trabajar duro y nunca rendirse, ese es mi camino.",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2025Drivers/albon"
    },

    {
        nombre: "Fernando Alonso",
        codigo: "ALO",
        clase: "aston",
        pais: "España",
        anosActivos: "2001–2018, 2021–presente",
        titulos: 2,
        victorias: 32,
        poles: 22,
        podios: 106,
        escuderias: "Minardi, Renault, McLaren, Ferrari, Alpine, Aston Martin",
        posicion2026: 17,
        puntos2026: 7,
        frase: "La Fórmula 1 es mi vida. No sé hacer otra cosa.",
        imagen: "https://tse1.mm.bing.net/th/id/OIP.XeTdNnuvcACZucsL7-lg2AHaLG?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        nombre: "Lance Stroll",
        codigo: "STR",
        clase: "aston",
        pais: "Canadá",
        anosActivos: "2017–presente",
        titulos: 0,
        victorias: 0,
        poles: 1,
        podios: 3,
        escuderias: "Williams, Force India, Racing Point, Aston Martin",
        posicion2026: 21,
        puntos2026: 0,
        frase: "La experiencia en la pista no tiene precio.",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/stroll"
    },

    {
        nombre: "Sergio Pérez",
        codigo: "PER",
        clase: "cadillac",
        pais: "México",
        anosActivos: "2011–presente",
        titulos: 0,
        victorias: 6,
        poles: 3,
        podios: 39,
        escuderias: "Sauber, McLaren, Force India, Racing Point, Red Bull, Cadillac",
        posicion2026: 23,
        puntos2026: 0,
        frase: "México me da la fuerza para seguir adelante en cada circuito del mundo.",
        imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2023Drivers/perez"
    },

    {
        nombre: "Valtteri Bottas",
        codigo: "BOT",
        clase: "cadillac",
        pais: "Finlandia",
        anosActivos: "2013–presente",
        titulos: 0,
        victorias: 10,
        poles: 20,
        podios: 67,
        escuderias: "Williams, Mercedes, Alfa Romeo/Sauber, Cadillac",
        posicion2026: 22,
        puntos2026: 0,
        frase: "Todavía tengo mucho que dar en este deporte.",
        imagen: "https://wallpapers.com/images/hd/valtteri-bottas-black-petronas-race-suit-vh6y4zzjsb40l2ls.jpg"
    },

    {
        nombre: "Dayvid Chetvezc",
        codigo: "",
        clase: "",
        pais: "Holanda",
        anosActivos: "2017–presente",
        titulos: 3,
        victorias: 14,
        poles: 12,
        podios: 55,
        escuderias: "Aston Martini, Dinono",
        posicion2026: null,
        puntos2026: null,
        frase: "El mejor no tiene nada que demostrar.",
        imagen: "https://i.ibb.co/k2FRrYBV/Chat-GPT-Image-22-sept-2026-02-52-44-p-m.png"
    }
];



const equipos = [
    {
        nombre: "Mercedes",
        clase: "mercedes",
        lema: "La perfección en ingeniería.",
        campeonatosConstructores: 8,
        campeonatosPilotos: 9,
        victorias: "130+",
        podios: "300+",
        poles: "140+",
        motor: "Mercedes",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedeslogowhite.webp"
    },

    {
        nombre: "Ferrari",
        clase: "ferrari",
        lema: "Pasión italiana desde 1950.",
        campeonatosConstructores: 16,
        campeonatosPilotos: 15,
        victorias: 248,
        podios: "800+",
        poles: "250+",
        motor: "Ferrari",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/ferrari/2026ferrarilogowhite.webp"
    },

    {
        nombre: "Red Bull Racing",
        clase: "redbull",
        lema: "Nacidos para desafiar los límites.",
        campeonatosConstructores: 6,
        campeonatosPilotos: 8,
        victorias: "120+",
        podios: "280+",
        poles: "100+",
        motor: "Red Bull Ford",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracinglogowhite.webp"
    },

    {
        nombre: "McLaren",
        clase: "mclaren",
        lema: "Velocidad en la innovación.",
        campeonatosConstructores: 9,
        campeonatosPilotos: 12,
        victorias: "190+",
        podios: "500+",
        poles: "150+",
        motor: "Mercedes",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarenlogowhite.webp"
    },

    {
        nombre: "Racing Bulls",
        clase: "racingbulls",
        lema: "",
        campeonatosConstructores: null,
        campeonatosPilotos: null,
        victorias: null,
        podios: null,
        poles: null,
        motor: "Red Bull Ford",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullslogowhite.webp"
    },

    {
        nombre: "Alpine",
        clase: "alpine",
        lema: "",
        campeonatosConstructores: null,
        campeonatosPilotos: null,
        victorias: null,
        podios: null,
        poles: null,
        motor: "Mercedes",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/alpine/2026alpinelogowhite.webp"
    },

    {
        nombre: "Haas F1 Team",
        clase: "haas",
        lema: "",
        campeonatosConstructores: 0,
        campeonatosPilotos: 0,
        victorias: 0,
        podios: null,
        poles: null,
        motor: "Ferrari",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/haasf1team/2026haasf1teamlogowhite.webp"
    },

    {
        nombre: "Audi",
        clase: "audi",
        lema: "",
        campeonatosConstructores: null,
        campeonatosPilotos: null,
        victorias: null,
        podios: null,
        poles: null,
        motor: "Audi",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/audi/2026audilogowhite.webp"
    },

    {
        nombre: "Williams",
        clase: "williams",
        lema: "La leyenda de la Fórmula 1.",
        campeonatosConstructores: 9,
        campeonatosPilotos: 7,
        victorias: 114,
        podios: "300+",
        poles: "120+",
        motor: "Mercedes",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/williams/2026williamslogowhite.webp"
    },

    {
        nombre: "Aston Martin",
        clase: "aston",
        lema: "Elegancia y rendimiento.",
        campeonatosConstructores: 0,
        campeonatosPilotos: 0,
        victorias: 0,
        podios: "10+",
        poles: 1,
        motor: "Honda",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartinlogowhite.webp"
    },

    {
        nombre: "Cadillac",
        clase: "cadillac",
        lema: "",
        campeonatosConstructores: 0,
        campeonatosPilotos: 0,
        victorias: 0,
        podios: 0,
        poles: 0,
        motor: "Ferrari",
        imagen: "https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/2026/cadillac/2026cadillaclogowhite.webp"
    }
];


const campeones = [
    {
        piloto: "Lewis Hamilton",
        titulos: 7,
        anosTitulo: "2008, 2014–2015, 2017–2020",
        victorias: 103,
        podios: 197,
        carrerasDisputadas: "360+"
    },

    {
        piloto: "Michael Schumacher",
        titulos: 7,
        anosTitulo: "1994–1995, 2000–2004",
        victorias: 91,
        podios: 155,
        carrerasDisputadas: 308
    },

    {
        piloto: "Juan Manuel Fangio",
        titulos: 5,
        anosTitulo: "1951, 1954–1957",
        victorias: 24,
        podios: 35,
        carrerasDisputadas: 52
    },

    {
        piloto: "Max Verstappen",
        titulos: 4,
        anosTitulo: "2021–2024",
        victorias: "63+",
        podios: "110+",
        carrerasDisputadas: "220+"
    },

    {
        piloto: "Sebastian Vettel",
        titulos: 4,
        anosTitulo: "2010–2013",
        victorias: 53,
        podios: 122,
        carrerasDisputadas: 299
    },

    {
        piloto: "Alain Prost",
        titulos: 4,
        anosTitulo: "1985–1986, 1989, 1993",
        victorias: 51,
        podios: 106,
        carrerasDisputadas: 199
    },

    {
        piloto: "Ayrton Senna",
        titulos: 3,
        anosTitulo: "1988, 1990–1991",
        victorias: 41,
        podios: 80,
        carrerasDisputadas: 161
    },

    {
        piloto: "Niki Lauda",
        titulos: 3,
        anosTitulo: "1975, 1977, 1984",
        victorias: 25,
        podios: 54,
        carrerasDisputadas: 177
    }
];



const carreras = [
    {
        ronda: 1,
        fecha: "6-8 Mar",
        granPremio: "Australia",
        circuito: "Melbourne",
        sprint: false,
        podio: ["RUS","ANT","LEC"]
    },

    {
        ronda: 2,
        fecha: "13-15 Mar",
        granPremio: "China",
        circuito: "Shanghai",
        sprint: true,
        podio: ["ANT","RUS","HAM"]
    },

    {
        ronda: 3,
        fecha: "27-29 Mar",
        granPremio: "*****ón",
        circuito: "Suzuka",
        sprint: false,
        podio: ["ANT","PIA","LEC"]
    },

    {
        ronda: 4,
        fecha: "1-3 May",
        granPremio: "Miami",
        circuito: "Miami",
        sprint: true,
        podio: ["ANT","NOR","PIA"]
    },

    {
        ronda: 5,
        fecha: "22-24 May",
        granPremio: "Canadá",
        circuito: "Montreal",
        sprint: true,
        podio: ["ANT","HAM","VER"]
    },

    {
        ronda: 6,
        fecha: "5-7 Jun",
        granPremio: "Mónaco",
        circuito: "Monte Carlo",
        sprint: false,
        podio: ["ANT","HAM","HAD"]
    },

    {
        ronda: 7,
        fecha: "12-14 Jun",
        granPremio: "Barcelona-Catalunya",
        circuito: "Catalunya",
        sprint: false,
        podio: ["HAM","RUS","NOR"]
    },

    {
        ronda: 8,
        fecha: "26-28 Jun",
        granPremio: "Austria",
        circuito: "Red Bull Ring",
        sprint: false,
        podio: ["RUS","VER","ANT"]
    },

    {
        ronda: 9,
        fecha: "3-5 Jul",
        granPremio: "Gran Bretaña",
        circuito: "Silverstone",
        sprint: true,
        podio: ["LEC","RUS","HAM"]
    },

    {
        ronda: 10,
        fecha: "17-19 Jul",
        granPremio: "Bélgica",
        circuito: "Spa-Francorchamps",
        sprint: false,
        podio: ["ANT","LEC","VER"]
    },

    {
        ronda: 11,
        fecha: "24-26 Jul",
        granPremio: "Hungría",
        circuito: "Hungaroring",
        sprint: false,
        podio: ["NOR","VER","ANT"]
    },

    {
        ronda: 12,
        fecha: "21-23 Ago",
        granPremio: "Países Bajos",
        circuito: "Zandvoort",
        sprint: true,
        podio: ["NOR","ANT","RUS"]
    },

    {
        ronda: 13,
        fecha: "4-6 Sep",
        granPremio: "Italia",
        circuito: "Monza",
        sprint: false,
        podio: ["ANT","RUS","VER"]
    },

    {
        ronda: 14,
        fecha: "11-13 Sep",
        granPremio: "España (Madrid)",
        circuito: "Madring",
        sprint: false,
        podio: ["ANT","VER","NOR"]
    },

    {
        ronda: 15,
        fecha: "24-26 Sep",
        granPremio: "Azerbaiyán",
        circuito: "Baku",
        sprint: false,
        podio: ["RUS","VER","HAD"]
    },

    {
        ronda: 16,
        fecha: "2-4 Oct",
        granPremio: "Bahréin (disputado en Malasia)",
        circuito: "Sepang",
        sprint: false,
        podio: ["VER","ANT","HAM"]
    },

    {
        ronda: 17,
        fecha: "9-11 Oct",
        granPremio: "Singapur",
        circuito: "Marina Bay",
        sprint: true,
        podio: ["VER","LEC","ANT"]
    },

    {
        ronda: 18,
        fecha: "23-25 Oct",
        granPremio: "Estados Unidos",
        circuito: "Austin",
        sprint: false,
        podio: ["ANT","LEC","VER"]
    },

    {
        ronda: 19,
        fecha: "30 Oct-1 Nov",
        granPremio: "México",
        circuito: "Ciudad de México",
        sprint: false,
        podio: null
    },

    {
        ronda: 20,
        fecha: "6-8 Nov",
        granPremio: "Brasil",
        circuito: "Interlagos",
        sprint: false,
        podio: null
    },

    {
        ronda: 21,
        fecha: "19-21 Nov",
        granPremio: "Las Vegas",
        circuito: "Las Vegas Strip",
        sprint: false,
        podio: null
    },

    {
        ronda: 22,
        fecha: "27-29 Nov",
        granPremio: "Qatar",
        circuito: "Lusail",
        sprint: false,
        podio: null
    },

    {
        ronda: 23,
        fecha: "4-6 Dic",
        granPremio: "Abu Dhabi",
        circuito: "Yas Marina",
        sprint: false,
        podio: null
    }
];


const fechaActualizacion = "25 octubre del 2026";


function valor(dato) {
    if (dato === null || dato === undefined) {
        return "—";
    }
    return dato;
}


function estadisticas2026(codigo) {

    let victorias = 0;
    let podios = 0;

    carreras.forEach((carrera) => {

        if (carrera.podio === null) {
            return;
        }

        if (carrera.podio[0] === codigo) {
            victorias++;
        }

        if (carrera.podio.includes(codigo)) {
            podios++;
        }
    });

    return { victorias: victorias, podios: podios };
}


function crearEstadistica(cifra, etiqueta) {
    return `<li><span class="valor">${valor(cifra)}</span><span class="etiqueta">${etiqueta}</span></li>`;
}


function mostrarPortada() {

    const contenedor = document.getElementById("datosPortada");

    const disputadas = carreras.filter((carrera) => carrera.podio !== null).length;
    const sprints = carreras.filter((carrera) => carrera.sprint).length;
    const pilotosEnParrilla = pilotos.filter((piloto) => piloto.clase !== "").length;

    const cifras = [
        [disputadas + "/" + carreras.length, "Carreras disputadas"],
        [sprints, "Fines de semana Sprint"],
        [equipos.length, "Escuderías"],
        [pilotosEnParrilla, "Pilotos"]
    ];

    let html = "";

    cifras.forEach(([cifra, etiqueta]) => {

        html += `<div class="dato">
            <span class="valor">${cifra}</span>
            <span class="etiqueta">${etiqueta}</span>
        </div>
    `;

    });

    contenedor.innerHTML = html;

    document.getElementById("totalGP").textContent = carreras.length;
    document.getElementById("totalSprint").textContent = sprints;
}



function mostrarClasificacion() {

    const tabla = document.getElementById("datosClasificacion");

    const primeros = pilotos
        .filter((piloto) => piloto.posicion2026 !== null)
        .sort((a, b) => a.posicion2026 - b.posicion2026)
        .slice(0, 5);

    let html = "";

    primeros.forEach((piloto) => {

        const equipo = equipos.find((e) => e.clase === piloto.clase);

        html += `
            <tr>
                <td>${piloto.posicion2026}</td>
                <td>${piloto.nombre}</td>
                <td>${equipo.nombre}</td>
                <td>${piloto.puntos2026}</td>
            </tr>
        `;

    });

    tabla.innerHTML = html;
}


function mostrarNotas() {

    const ultimaRonda = carreras.filter((carrera) => carrera.podio !== null).length;
    const texto = "Los datos de la temporada 2026 según formula1.com, tras la ronda " + ultimaRonda + " (" + fechaActualizacion + ").";

    document.querySelectorAll(".notaActualizacion").forEach((nota) => {
        nota.textContent = texto;
    });
}


function mostrarHistoria() {

    const contenedor = document.getElementById("listaHistoria");
    let html = "";

    historia.forEach((etapa) => {

        html += `
        <div class="cardHistoria">
            <h2>${etapa.titulo}</h2>
            <p>${etapa.texto}</p>
        </div>
    `;

    });

    contenedor.innerHTML = html;
}


function mostrarPersonas(datos, idContenedor, clase) {

    const contenedor = document.getElementById(idContenedor);
    const esPiloto = clase === "cardPilotos";
    let html = "";

    datos.forEach((persona) => {

        const claseEquipo = persona.clase ? " " + persona.clase : "";

        let filaTemporada = "";

        if (persona.posicion2026) {

            const temporada = estadisticas2026(persona.codigo);

            filaTemporada = `
                        <h4 class="tituloEstadisticas">Temporada 2026</h4>
                        <ul class="estadisticas temporada">
                            ${crearEstadistica("P" + persona.posicion2026, "Posición")}
                            ${crearEstadistica(persona.puntos2026, "Puntos")}
                            ${crearEstadistica(temporada.victorias, "Victorias")}
                            ${crearEstadistica(temporada.podios, "Podios")}
                        </ul>`;
        }

        html += `
                <div class="${clase}${claseEquipo}">

                    <img src="${persona.imagen}" alt="${persona.nombre}" loading="lazy">

                    <div class="datosPersona">

                        <h3>${persona.nombre}</h3>

                        <p class="detallePersona">
                            ${persona.pais} |
                            Años activos: ${persona.anosActivos}
                        </p>

                        <em>"${persona.frase}"</em>

                        <h4 class="tituloEstadisticas">${esPiloto ? "Carrera*" : "Carrera"}</h4>
                        <ul class="estadisticas">
                            ${crearEstadistica(persona.titulos, "Títulos")}
                            ${crearEstadistica(persona.victorias, "Victorias")}
                            ${crearEstadistica(persona.poles, "Poles")}
                            ${crearEstadistica(persona.podios, "Podios")}
                        </ul>
                        ${filaTemporada}

                        <p class="detallePersona">Equipos: ${persona.escuderias}</p>

                    </div>

                </div>
            `;

    });

    contenedor.innerHTML = html;
}



function mostrarEquipos() {

    const contenedor = document.getElementById("listaEquipos");
    let html = "";

    equipos.forEach((equipo) => {

        const susPilotos = pilotos.filter((piloto) => piloto.clase === equipo.clase);
        const nombresPilotos = susPilotos.map((piloto) => piloto.nombre).join(" · ");

        let victorias2026 = 0;
        let podios2026 = 0;

        susPilotos.forEach((piloto) => {
            const temporada = estadisticas2026(piloto.codigo);
            victorias2026 += temporada.victorias;
            podios2026 += temporada.podios;
        });

        const lema = equipo.lema ? `<em>"${equipo.lema}"</em>` : "";

        html += `
            <div class="cardEquipo ${equipo.clase}">

                <img src="${equipo.imagen}" alt="Logotipo de ${equipo.nombre}" loading="lazy">

                <div class="datosPersona">

                    <h2>${equipo.nombre}</h2>

                    ${lema}

                    <p class="detallePersona">Pilotos 2026: ${nombresPilotos}</p>

                    <h4 class="tituloEstadisticas">Historia del equipo</h4>
                    <ul class="estadisticas">
                        ${crearEstadistica(equipo.campeonatosConstructores, "Constructores")}
                        ${crearEstadistica(equipo.campeonatosPilotos, "Pilotos")}
                        ${crearEstadistica(equipo.victorias, "Victorias")}
                        ${crearEstadistica(equipo.podios, "Podios")}
                        ${crearEstadistica(equipo.poles, "Poles")}
                    </ul>

                    <h4 class="tituloEstadisticas">Temporada 2026</h4>
                    <ul class="estadisticas temporada">
                        ${crearEstadistica(victorias2026, "Victorias")}
                        ${crearEstadistica(podios2026, "Podios")}
                    </ul>

                    <p class="detallePersona">Motor: ${equipo.motor}</p>

                </div>

            </div>
        `;

    });

    contenedor.innerHTML = html;
}


function mostrarCampeones() {

    const tabla = document.getElementById("datosCampeones");
    let html = "";

    campeones.forEach((campeon, indice) => {

        html += `
            <tr>
                <td>${indice + 1}</td>
                <td>${campeon.piloto}</td>
                <td>${campeon.titulos}</td>
                <td>${campeon.anosTitulo}</td>
                <td>${campeon.victorias}</td>
                <td>${campeon.podios}</td>
                <td>${campeon.carrerasDisputadas}</td>
            </tr>
        `;

    });

    tabla.innerHTML = html;
}



function mostrarCalendario() {

    const tabla = document.getElementById("datosCalendario");
    let html = "";
    let proximaMarcada = false;

    carreras.forEach((carrera) => {

        let claseFila = "";
        let textoPodio = "—";

        if (carrera.podio !== null) {
            claseFila = "disputada";
            textoPodio = `<strong>${carrera.podio[0]}</strong> · ${carrera.podio[1]} · ${carrera.podio[2]}`;
        } else if (!proximaMarcada) {
            claseFila = "proxima";
            proximaMarcada = true;
        }

        html += `
            <tr class="${claseFila}">
                <td>${carrera.ronda}</td>
                <td>${carrera.fecha}</td>
                <td>${carrera.granPremio}</td>
                <td>${carrera.circuito}</td>
                <td>${carrera.sprint ? '<span class="etiquetaSprint">Sprint</span>' : "-"}</td>
                <td>${textoPodio}</td>
            </tr>
        `;

    });

    tabla.innerHTML = html;
}


mostrarPortada();
mostrarClasificacion();
mostrarNotas();
mostrarHistoria();
mostrarPersonas(leyendas, "listaLeyendas", "cardLeyendas");
mostrarPersonas(pilotos, "listaPilotos", "cardPilotos");
mostrarEquipos();
mostrarCampeones();
mostrarCalendario();