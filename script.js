let currentLessonErrors = [];   // Errores de la lección original
let currentReviewErrors = [];   // Errores cometidos DURANTE el repaso actual
let originalLesson = null;      // Referencia para repetir la lección completa
let currentLessonCorrect = 0;   // Contador de aciertos
let activeLessonSession = null;
let currentLessonXP = 0; // XP temporal durante la lección


const skills = [
    { name: "Negociar" },
    { name: "Improvisar" },
    { name: "Desarrollo personal" },
    { name: "Comunicación efectiva" }
];


const skillData = {
"Negociar": {
    lessons:[
        {
            title: "Preparación estratégica",
            content: "Antes de negociar, define tus objetivos, límites y tu BATNA (mejor alternativa si no hay acuerdo).",
            questions: [
             {
             question: "Antes de negociar, ¿qué es más importante decidir primero?",
             options: [
              "Qué quieres lograr y hasta dónde puedes ceder",
              "Tu primera oferta para impresionar a la otra persona",
              "Qué excusa darás si no consigues tu objetivo",
            "Adivinar lo que hará la otra persona"
    ],
    correct: 0,
    explanation: "Es fundamental saber tus objetivos y límites antes de negociar. Si no lo haces, puedes aceptar algo que no te conviene simplemente por presión."
},
                {
    question: "En negociación, ¿qué significa BATNA?",
    options: [
        "La mejor alternativa que tienes si no llegas a un acuerdo",
        "Una táctica para presionar y asustar a la otra parte",
        "Un punto que usas para intimidar y forzar concesiones",
        "Un método para negociar sin escuchar lo que dice la otra persona"
    ],
    correct: 0,
    explanation: "El BATNA te da seguridad: sabes qué harás si no hay acuerdo y así no te dejas presionar para aceptar algo que no te conviene."
},
                {
    question: "¿Por qué es útil investigar a la otra parte antes de negociar?",
    options: [
        "Para conocer sus intereses y lo que realmente necesita",
        "Para imponer tus condiciones lo antes posible",
        "Para defenderte de posibles ataques antes de hablar",
        "No hace falta si confías solo en tu intuición"
    ],
    correct: 0,
    explanation: "Saber qué busca la otra parte te permite proponer soluciones que a ambos beneficien, en lugar de perder tiempo con suposiciones."
},
                {
    question: "En negociación, ¿por qué es valiosa la información sobre la otra parte?",
    options: [
        "Te ayuda a tomar decisiones más acertadas y preparar tu estrategia",
        "Solo sirve para manipular o engañar al otro",
        "Sirve para confundir y presionar sin justificación",
        "No importa si eres carismático y persuasivo"
    ],
    correct: 0,
    explanation: "Conocer los intereses, necesidades y límites de la otra parte te permite adaptar tus propuestas, negociar de forma inteligente y aumentar tus posibilidades de un buen acuerdo."
},
                {
    question: "Si no te preparas antes de negociar, ¿qué puede pasar?",
    options: [
        "Perder oportunidades o aceptar acuerdos que no te convienen",
        "Depender demasiado de tu intuición y reaccionar a presión",
        "Que la otra parte se aproveche sutilmente de tus vacíos de información",
        "Ganar igual, pero con más esfuerzo y riesgo"
    ],
    correct: 0,
    explanation: "Sin preparación, no tienes claridad sobre tus límites ni tus alternativas, lo que aumenta la probabilidad de aceptar un mal acuerdo o perder oportunidades valiosas."
},
          {
    question: "En negociación avanzada, ¿por qué es crucial definir límites claros antes de empezar?",
    options: [
        "Para saber exactamente hasta dónde puedes ceder y cuándo decir no",
        "Para aparentar seguridad y controlar la percepción de la otra parte",
        "Para crear presión y forzar concesiones del otro",
        "No es importante si confías en tu intuición y experiencia"
    ],
    correct: 0,
    explanation: "Los límites claros te protegen de aceptar acuerdos desfavorables y te permiten negociar con confianza, en lugar de improvisar bajo presión o emociones."
}

            ]
        },
        {
            title: "Escucha activa y rapport",
            content: "Escuchar activamente y hacer preguntas abiertas genera confianza y comprensión mutua.",
            questions: [
                {
    question: "En negociación, ¿qué significa 'rapport'?",
    options: [
        "Conectar y generar confianza con la otra persona",
        "Convencer rápidamente usando argumentos fuertes",
        "Controlar la conversación para imponer tus ideas",
        "Evitar mostrar emociones para parecer profesional"
    ],
    correct: 0,
    explanation: "El rapport es la base de cualquier relación efectiva: cuando la otra persona se siente comprendida y cómoda, la negociación fluye mejor."
},
                {
    question: "Para fortalecer el rapport con alguien, ¿qué estrategia es más efectiva?",
    options: [
        "Escuchar activamente y reflejar lo que la otra persona comunica",
        "Decir lo que crees que quieren oír para agradarles",
        "Hablar constantemente de tus logros para impresionar",
        "Evitar mostrar tus emociones para no parecer débil"
    ],
    correct: 0,
    explanation: "Reflejar y escuchar activamente demuestra que comprendes y valoras a la otra persona, lo que fortalece la conexión y facilita la negociación."
},
               {
    question: "Al intentar fortalecer el rapport, ¿qué detalle puede marcar la diferencia?",
    options: [
        "Adaptar tu tono y lenguaje al de la otra persona, mostrando interés genuino",
        "Repetir exactamente lo que dice la otra persona para parecer atento",
        "Evitar cualquier expresión de emoción para mantener control",
        "Conseguir que la otra persona esté de acuerdo contigo desde el principio"
    ],
    correct: 0,
    explanation: "Adaptar tu comunicación y mostrar interés genuino genera conexión real. Simplemente imitar o controlar la conversación no crea confianza duradera."
},
                {
    question: "En una negociación avanzada, ¿cómo puedes usar el rapport de manera estratégica?",
    options: [
        "Escuchar y adaptar tu estilo para generar confianza y facilitar acuerdos",
        "Decir siempre lo que la otra persona quiere oír para que ceda",
        "Imponer tu estilo y esperar que se adapten a ti",
        "Mantenerte neutral emocionalmente para que no perciban tus intenciones"
    ],
    correct: 0,
    explanation: "El rapport avanzado no es manipulación. Se trata de escuchar, adaptarte y generar confianza para que la otra parte se sienta cómoda colaborando, lo que facilita llegar a acuerdos beneficiosos para ambos."
},
                {
    question: "En negociación profesional, ¿cómo puedes usar el rapport para maximizar la cooperación sin manipular?",
    options: [
        "Observar y adaptar tu lenguaje corporal y tono, mostrando comprensión auténtica",
        "Imitar cada gesto y palabra de la otra persona para que se sienta cómodo",
        "Mantener siempre una postura neutral y distante para no mostrar emociones",
        "Hacer que la otra persona ceda primero para demostrar tu control"
    ],
    correct: 0,
    explanation: "El rapport avanzado combina escucha activa, adaptación del lenguaje verbal y no verbal y empatía genuina. La clave es que la otra persona se sienta comprendida y valorada, lo que facilita acuerdos beneficiosos para ambos sin recurrir a manipulación."
},
               {
    question: "En una negociación de alto nivel, ¿cómo puedes aplicar el rapport para influir efectivamente sin manipular?",
    options: [
        "Combinar escucha activa, adaptación de lenguaje verbal y no verbal, y empatía genuina para facilitar acuerdos",
        "Hacer que la otra parte se sienta cómoda mientras tú diriges silenciosamente la negociación hacia tus objetivos",
        "Repetir sus palabras y gestos para que crean que entiendes, aunque no sea así",
        "Mantenerte distante y neutral para que no perciban tus intenciones estratégicas"
    ],
    correct: 0,
    explanation: "En niveles avanzados, el rapport combina comprensión auténtica, adaptación verbal y no verbal y empatía. Esto genera confianza y cooperación, facilitando acuerdos mutuos sin manipular ni forzar a la otra parte."
}

            ]
        },
        {
            title: "Negociación basada en intereses",
            content: "Céntrate en los intereses reales de ambas partes y separa personas de problemas.",
            questions: [
                {
    question: "En negociación, ¿qué es más importante priorizar?",
    options: [
        "Los intereses reales de ambas partes",
        "Posiciones rígidas para proteger tu postura",
        "Amenazas sutiles para presionar",
        "Evitar comprometerse para mantener control"
    ],
    correct: 0,
    explanation: "Centrarse en intereses, no posiciones, permite encontrar soluciones que beneficien a todos."
},
                {
    question: "Separar a las personas del problema significa:",
    options: [
        "Tratar los problemas sin atacar a las personas",
        "Ignorar emociones y actuar solo racionalmente",
        "Evitar discutir para mantener buena relación",
        "Solo pensar en dinero o recursos tangibles"
    ],
    correct: 0,
    explanation: "Cuando atacas a la persona, el problema deja de resolverse y la negociación se bloquea."
},
                {
    question: "Centrarse en intereses reales permite:",
    options: [
        "Encontrar soluciones creativas y satisfactorias para ambos",
        "Mantener conflictos ocultos",
        "Imponer condiciones propias",
        "Evitar escuchar a la otra parte"
    ],
    correct: 0,
    explanation: "Los intereses comunes abren espacio a acuerdos mutuamente beneficiosos."
},
                {
    question: "Si solo consideramos posiciones rígidas, ¿qué puede pasar?",
    options: [
        "Se generan bloqueos y conflictos",
        "Todo sale mejor sin esfuerzo",
        "La otra parte cede inmediatamente",
        "No tiene relevancia en la negociación"
    ],
    correct: 0,
    explanation: "Las posiciones suelen chocar; los intereses permiten una negociación real y sostenible."
},
                {
    question: "Negociar centrado en intereses vs posiciones ayuda a:",
    options: [
        "Encontrar soluciones sostenibles y duraderas",
        "Ganar siempre sin ceder",
        "Confundir a la otra parte",
        "Evitar preparación previa"
    ],
    correct: 0,
    explanation: "Con intereses claros, los acuerdos son más duraderos y satisfactorios para todos los involucrados."
}
,
                {
    question: "Una negociación efectiva requiere:",
    options: [
        "Separar personas de problemas y centrarse en intereses",
        "Centrarse en la persona más que el problema",
        "Evitar compromisos difíciles",
        "Tomar decisiones al azar para no complicarse"
    ],
    correct: 0,
    explanation: "Separar emociones de problemas y enfocarse en intereses es la base de cualquier negociación efectiva y profesional."
}
            ]
        },
        {
            title: "Estrategias prácticas",
            content: "Usa win-win, anchoring y MESO para generar acuerdos beneficiosos para ambos.",
            questions: [
                {
    question: "¿Qué significa una estrategia win-win?",
    options: [
        "Que ambas partes ganen y se beneficien del acuerdo",
        "Que solo tú ganes",
        "Ceder todo sin condiciones para que todo salga bien",
        "Imponer tus condiciones sin escuchar al otro"
    ],
    correct: 0,
    explanation: "Una estrategia win-win busca acuerdos donde ambos salgan beneficiados, creando relaciones sostenibles."
},
                {
    question: "¿Qué es el anchoring en negociación?",
    options: [
        "La primera oferta que establece un punto de referencia para la negociación",
        "Una táctica para intimidar y forzar la ventaja",
        "Un tipo de lenguaje corporal para presionar",
        "Una pregunta diseñada para confundir a la otra parte"
    ],
    correct: 0,
    explanation: "El primer número no decide el resultado, pero marca el marco de referencia psicológico para toda la negociación."
},
                {
    question: "¿Qué significa MESO?",
    options: [
        "Presentar múltiples ofertas equivalentes al mismo tiempo",
        "Amenazar al otro con perder todo",
        "Negociar sin preparación",
        "Aceptar lo que la otra parte ofrece sin discutir"
    ],
    correct: 0,
    explanation: "Presentar varias alternativas aumenta las opciones de acuerdo y facilita soluciones creativas y satisfactorias para ambas partes."
},
                {
    question: "Una táctica win-win busca:",
    options: [
        "Que ambas partes sientan beneficio y satisfacción",
        "Que solo tú ganes y la otra parte pierda",
        "Que la otra parte ceda todo sin discusión",
        "Evitar acuerdos complicados para terminar rápido"
    ],
    correct: 0,
    explanation: "Un buen acuerdo no se trata de ganar a costa del otro, sino de crear beneficios mutuos que perduren."
}
,
                {
    question: "¿Por qué anchoring es una técnica efectiva?",
    options: [
        "Porque define un punto de referencia psicológico para valorar el acuerdo",
        "Porque confunde a la otra parte para que ceda",
        "Porque garantiza que la otra parte acepte tu propuesta",
        "Porque fuerza a la otra parte a ceder todo sin negociación"
    ],
    correct: 0,
    explanation: "El primer número establece un marco de referencia para las expectativas, ayudando a influir en la percepción de valor sin imponer resultados."
},
                {
    question: "MESO permite:",
    options: [
        "Aumentar flexibilidad y posibilidades de acuerdo",
        "Reducir interacción con la otra parte",
        "Ceder inmediatamente para evitar conflicto",
        "Imponer condiciones sin negociar"
    ],
    correct: 0,
    explanation: "Ofrecer varias alternativas facilita encontrar un acuerdo satisfactorio, aumentando la probabilidad de colaboración y soluciones creativas."
}

            ]
        },
    
            {
    title: "Control de emociones",
    content: "Mantén la calma, controla tus emociones y usa la empatía para identificar intereses.",
    questions: [
        // Nivel 1
        {
            question: "¿Por qué es importante controlar tus emociones en una negociación?",
            options: [
                "Para pensar con claridad y tomar decisiones racionales",
                "Para impresionar al otro con autocontrol",
                "Porque no tiene relevancia",
                "Para manipular sin que se note"
            ],
            correct: 0,
            explanation: "Mantener la calma permite evaluar opciones objetivamente y evita decisiones impulsivas que puedan perjudicar el acuerdo."
        },
        // Nivel 1.5
        {
            question: "La empatía durante la negociación sirve para:",
            options: [
                "Entender la perspectiva de la otra persona",
                "Demostrar debilidad ante el otro",
                "Ceder para evitar conflicto aunque pierdas valor",
                "Evitar preguntas incómodas que podrían incomodar"
            ],
            correct: 0,
            explanation: "Comprender los intereses y emociones de la otra parte ayuda a negociar de manera más informada y efectiva."
        },
        // Nivel 2
        {
            question: "Mantener la calma durante la negociación ayuda a:",
            options: [
                "Tomar decisiones racionales y efectivas",
                "Asustar a la otra parte",
                "Imponer tus condiciones sin escuchar",
                "Ignorar la situación"
            ],
            correct: 0,
            explanation: "La calma permite evaluar opciones, pensar estratégicamente y reaccionar con claridad ante situaciones tensas."
        },
        // Nivel 2.5
        {
            question: "Emociones descontroladas durante la negociación pueden causar:",
            options: [
                "Decisiones impulsivas y pérdida de oportunidades",
                "Confianza mutua y cooperación",
                "Mejor comunicación",
                "Acuerdos más sólidos"
            ],
            correct: 0,
            explanation: "Perder el control emocional nubla el juicio y puede llevar a ceder demasiado o tomar decisiones equivocadas."
        },
        // Nivel 3
        {
            question: "La empatía en negociaciones permite:",
            options: [
                "Identificar los verdaderos intereses y necesidades de la otra parte",
                "Manipular a la otra persona",
                "Evitar la negociación",
                "Ceder todo sin razón"
            ],
            correct: 0,
            explanation: "Comprender al otro ayuda a generar soluciones efectivas y acuerdos que beneficien a ambas partes."
        },
        // Nivel 4
        {
            question: "El autocontrol en negociaciones profesionales ayuda a:",
            options: [
                "Mantener relaciones y tomar decisiones efectivas incluso bajo presión",
                "Hacer que la otra parte se sienta intimidada",
                "Ignorar tus propios intereses",
                "Evitar preparación previa"
            ],
            correct: 0,
            explanation: "Controlar tus emociones permite negociar con eficacia, mantener relaciones sólidas y tomar decisiones estratégicas, incluso en situaciones tensas."
        }
    ]
}

    ]
},




"Improvisar": {
    lessons: [
        {
            title: "Responder rápido",
            content: "Aprende a reaccionar de manera efectiva ante situaciones inesperadas, manteniendo calma, coherencia y creatividad bajo presión.",
            questions: [
                // Nivel 1
                {
                    question: "Cuando surge un imprevisto y te quedas en blanco, ¿qué primer paso es más efectivo?",
                    options: [
                        "Pausar un momento, observar la situación y responder con calma",
                        "Responder lo primero que se te ocurra",
                        "Esperar a que alguien más actúe",
                        "Evitar la situación para no equivocarte"
                    ],
                    correct: 0,
                    explanation: "La pausa breve permite recuperar control y evitar respuestas impulsivas."
                },
                // Nivel 1.5
                {
                    question: "Al improvisar, ¿por qué reaccionar rápido no siempre es suficiente?",
                    options: [
                        "Porque la rapidez sin análisis puede generar errores",
                        "Porque siempre se necesita un plan detallado",
                        "Porque improvisar solo funciona en escenarios artísticos",
                        "Porque la velocidad garantiza mejores resultados"
                    ],
                    correct: 0,
                    explanation: "La velocidad es útil, pero sin dirección puede empeorar la situación."
                },
                // Nivel 2
                {
                    question: "Para que una improvisación sea coherente, es clave:",
                    options: [
                        "Escuchar lo que ocurre y construir a partir de ello",
                        "Decir cualquier cosa con seguridad",
                        "Romper la lógica para sorprender",
                        "Ignorar el contexto existente"
                    ],
                    correct: 0,
                    explanation: "Improvisar bien es conectar ideas, no inventar sin base."
                },
                // Nivel 2.5
                {
                    question: "¿Por qué la calma es una ventaja al improvisar?",
                    options: [
                        "Porque permite evaluar opciones antes de actuar",
                        "Porque transmite una imagen fuerte aunque no se piense",
                        "Porque elimina la necesidad de decidir",
                        "Porque reduce cualquier tipo de riesgo"
                    ],
                    correct: 0,
                    explanation: "La calma reduce errores impulsivos y mejora la calidad de la respuesta."
                },
                // Nivel 3
                {
                    question: "La creatividad al improvisar aumenta cuando:",
                    options: [
                        "Usas el contexto y los recursos disponibles de forma flexible",
                        "Ignoras todo lo que ocurre a tu alrededor",
                        "Repites fórmulas conocidas sin adaptarlas",
                        "Buscas sorprender sin un propósito claro"
                    ],
                    correct: 0,
                    explanation: "La creatividad práctica surge de adaptar lo que ya existe."
                },
                // Nivel 4
                {
                    question: "Practicar la improvisación desarrolla principalmente:",
                    options: [
                        "Capacidad de respuesta bajo presión y resolución flexible de problemas",
                        "Memoria y repetición automática",
                        "Dependencia de planes estrictos",
                        "Talento innato que no se puede entrenar"
                    ],
                    correct: 0,
                    explanation: "Improvisar es una habilidad entrenable que mejora con práctica consciente."
                }
            ]
        },
        {
            title: "Actuar sin plan",
            content: "Desarrolla la capacidad de actuar sin guion, adaptándote al momento y a las personas implicadas.",
            questions: [
                // Nivel 1
                {
                    question: "Si una situación te obliga a actuar sin preparación, ¿qué actitud es más útil?",
                    options: [
                        "Adaptarte al momento con apertura",
                        "Aferrarte a un guion que ya no encaja",
                        "No participar para evitar errores",
                        "Hacer lo opuesto a lo esperado sin criterio"
                    ],
                    correct: 0,
                    explanation: "Cuando el plan falla, la adaptación se convierte en la nueva estrategia."
                },
                // Nivel 1.5
                {
                    question: "¿Por qué la flexibilidad mental es clave al improvisar?",
                    options: [
                        "Porque permite ajustarse a cambios inesperados",
                        "Porque evita pensar demasiado",
                        "Porque sustituye toda preparación previa",
                        "Porque sirve solo en contextos informales"
                    ],
                    correct: 0,
                    explanation: "La flexibilidad responde mejor que cualquier técnica rígida."
                },
                // Nivel 2
                {
                    question: "Si cometes un error mientras improvisas, ¿qué enfoque es más efectivo?",
                    options: [
                        "Integrarlo y continuar sin bloquearte",
                        "Detenerte hasta corregirlo por completo",
                        "Ignorarlo y cambiar de tema bruscamente",
                        "Abandonar la improvisación"
                    ],
                    correct: 0,
                    explanation: "Un error bien integrado suele pasar desapercibido."
                },
                // Nivel 2.5
                {
                    question: "Confiar en tus instintos al improvisar implica:",
                    options: [
                        "Escuchar señales internas basadas en experiencia y contexto",
                        "Actuar sin pensar en consecuencias",
                        "Seguir siempre la primera idea",
                        "Ignorar cualquier lógica"
                    ],
                    correct: 0,
                    explanation: "El instinto eficaz se apoya en experiencia, no en impulsividad."
                },
                // Nivel 3
                {
                    question: "Adaptarte a otras personas durante la improvisación permite:",
                    options: [
                        "Crear interacciones más fluidas y soluciones mejores",
                        "Perder control de la situación",
                        "Evitar tomar decisiones",
                        "Imponer tu punto de vista"
                    ],
                    correct: 0,
                    explanation: "La improvisación social se construye en interacción, no en aislamiento."
                },
                // Nivel 4
                {
                    question: "Una actitud flexible al actuar sin plan facilita:",
                    options: [
                        "Resolver situaciones inesperadas con creatividad y eficacia",
                        "Evitar responsabilidades",
                        "Seguir siempre estructuras rígidas",
                        "Actuar de forma aleatoria"
                    ],
                    correct: 0,
                    explanation: "La flexibilidad es la base de una improvisación funcional."
                }
            ]
        },
        {
            title: "Historias espontáneas",
            content: "Crea historias coherentes sobre la marcha usando una estructura mínima y adaptación al público.",
            questions: [
                // Nivel 1
                {
                    question: "Al contar una historia improvisada, ¿por qué es importante una estructura básica?",
                    options: [
                        "Para que la historia sea comprensible y mantenga interés",
                        "Para limitar la creatividad",
                        "Para confundir a la audiencia",
                        "Para repetir historias conocidas"
                    ],
                    correct: 0,
                    explanation: "Sin estructura mínima, la atención se pierde rápidamente."
                },
                // Nivel 1.5
                {
                    question: "Si notas que tu audiencia pierde atención, ¿qué acción es más efectiva?",
                    options: [
                        "Ajustar ritmo, tono y contenido",
                        "Hablar más rápido sin parar",
                        "Ignorar sus reacciones",
                        "Alargar la historia"
                    ],
                    correct: 0,
                    explanation: "Improvisar también implica leer al público."
                },
                // Nivel 2
                {
                    question: "Improvisar historias ayuda principalmente a:",
                    options: [
                        "Desarrollar creatividad y adaptación",
                        "Memorizar guiones",
                        "Actuar solo en contextos lúdicos",
                        "Evitar la comunicación estructurada"
                    ],
                    correct: 0,
                    explanation: "Improvisar prepara para situaciones reales y cambiantes."
                },
                // Nivel 2.5
                {
                    question: "Una buena historia improvisada mantiene:",
                    options: [
                        "Coherencia y conexión con quien escucha",
                        "Solo sorpresa constante",
                        "Confusión intencionada",
                        "Detalles irrelevantes"
                    ],
                    correct: 0,
                    explanation: "La conexión es más importante que la sorpresa."
                },
                // Nivel 3
                {
                    question: "Para mejorar en historias espontáneas conviene:",
                    options: [
                        "Practicar imaginación y adaptación rápida",
                        "Memorizar estructuras rígidas",
                        "Evitar improvisar",
                        "Repetir siempre el mismo esquema"
                    ],
                    correct: 0,
                    explanation: "La práctica desarrolla fluidez narrativa."
                },
                // Nivel 4
                {
                    question: "Adaptar una historia al público significa:",
                    options: [
                        "Leer sus reacciones y ajustar contenido y estilo",
                        "Cambiar el mensaje constantemente",
                        "Ignorar sus expresiones",
                        "Imponer una historia sin importar la audiencia"
                    ],
                    correct: 0,
                    explanation: "La improvisación efectiva es dinámica y centrada en quien escucha."
                }
            ]
        }
    ]
},


"Desarrollo personal": {
    lessons: [
        {
            title: "Autoconocimiento profundo",
            content: "Conocerte de verdad no es cómodo, pero es la base de cualquier cambio real. Sin conciencia, repites patrones creyendo que eliges.",
            questions: [
                // Nivel 1
                {
                    question: "Si evitas mirar tus emociones y decisiones con honestidad, ¿qué es lo más probable que ocurra?",
                    options: [
                        "Ganas tranquilidad al no pensar demasiado",
                        "Repites los mismos errores con distintas excusas",
                        "Te vuelves más racional",
                        "Nada cambia realmente"
                    ],
                    correct: 1,
                    explanation: "Lo que no se observa, se automatiza."
                },
                // Nivel 1.5
                {
                    question: "Cuando algo en tu vida se repite (conflictos, bloqueos, frustración), ¿qué suele indicar?",
                    options: [
                        "Mala suerte constante",
                        "Un patrón interno no revisado",
                        "Que los demás siempre fallan",
                        "Que necesitas esforzarte más"
                    ],
                    correct: 1,
                    explanation: "La repetición es información, no casualidad."
                },
                // Nivel 2
                {
                    question: "Descubrir una debilidad personal suele generar incomodidad porque:",
                    options: [
                        "Cuestiona la imagen que tienes de ti mismo",
                        "Implica que eres incapaz",
                        "No tiene utilidad práctica",
                        "Te hace perder valor"
                    ],
                    correct: 0,
                    explanation: "Crecer exige soltar la versión idealizada de uno mismo."
                },
                // Nivel 2.5
                {
                    question: "¿Por qué el feedback honesto de otros puede ser difícil de aceptar?",
                    options: [
                        "Porque suele señalar puntos que evitamos ver",
                        "Porque los demás siempre exageran",
                        "Porque no aporta información útil",
                        "Porque te define como persona"
                    ],
                    correct: 0,
                    explanation: "Duele porque apunta a zonas ciegas, no porque sea falso."
                },
                // Nivel 3
                {
                    question: "El verdadero autoconocimiento comienza cuando:",
                    options: [
                        "Dejas de justificarte y empiezas a observarte",
                        "Lees más libros de desarrollo personal",
                        "Te comparas con personas más exitosas",
                        "Buscas validación externa"
                    ],
                    correct: 0,
                    explanation: "La observación honesta transforma más que cualquier consejo."
                },
                // Nivel 4
                {
                    question: "Practicar autoconocimiento de forma constante permite:",
                    options: [
                        "Elegir con mayor coherencia aunque no sea lo más cómodo",
                        "Evitar emociones difíciles",
                        "Tener siempre respuestas claras",
                        "Controlar a los demás"
                    ],
                    correct: 0,
                    explanation: "La conciencia no elimina el dolor, pero evita el autoengaño."
                }
            ]
        },
        {
            title: "Gestión consciente del tiempo",
            content: "Gestionar el tiempo no es hacer más, sino decidir qué merece tu energía y qué no, incluso cuando cuesta.",
            questions: [
                // Nivel 1
                {
                    question: "Si planificas tu día pero no cumples lo planeado, ¿qué suele fallar primero?",
                    options: [
                        "La herramienta que usas",
                        "La honestidad con tu energía real",
                        "La cantidad de tareas",
                        "La disciplina absoluta"
                    ],
                    correct: 1,
                    explanation: "Un plan irreal es solo una fantasía organizada."
                },
                // Nivel 1.5
                {
                    question: "Estar ocupado constantemente puede ser una forma de:",
                    options: [
                        "Avanzar con foco",
                        "Evitar lo importante",
                        "Gestionar bien el tiempo",
                        "Ser más productivo"
                    ],
                    correct: 1,
                    explanation: "La ocupación muchas veces es una huida elegante."
                },
                // Nivel 2
                {
                    question: "Cuando postergas una tarea importante repetidamente, ¿qué suele haber detrás?",
                    options: [
                        "Falta de capacidad",
                        "Miedo, resistencia o falta de claridad",
                        "Pereza sin explicación",
                        "Falta total de interés"
                    ],
                    correct: 1,
                    explanation: "La procrastinación casi siempre es emocional, no lógica."
                },
                // Nivel 2.5
                {
                    question: "Priorizar bien implica aceptar que:",
                    options: [
                        "No todo merece tu atención ahora",
                        "Puedes hacerlo todo si te organizas",
                        "Descansar es perder tiempo",
                        "Lo urgente siempre es lo más importante"
                    ],
                    correct: 0,
                    explanation: "Elegir algo implica renunciar a otra cosa."
                },
                // Nivel 3
                {
                    question: "Gestionar bien tu tiempo mejora tu vida porque:",
                    options: [
                        "Reduce fricción mental y sensación de culpa",
                        "Te hace trabajar más horas",
                        "Elimina el cansancio",
                        "Te vuelve perfecto"
                    ],
                    correct: 0,
                    explanation: "Menos decisiones innecesarias, más energía disponible."
                },
                // Nivel 4
                {
                    question: "La verdadera gestión del tiempo comienza cuando:",
                    options: [
                        "Alineas tus acciones con lo que dices que es importante",
                        "Encuentras el sistema perfecto",
                        "Eliminas todo ocio",
                        "Tienes motivación constante"
                    ],
                    correct: 0,
                    explanation: "Tu agenda revela tus prioridades reales, no tus intenciones."
                }
            ]
        },
        {
            title: "Motivación y hábitos duraderos",
            content: "No necesitas más motivación, necesitas sistemas que funcionen incluso cuando no tienes ganas.",
            questions: [
                // Nivel 1
                {
                    question: "Confiar solo en la fuerza de voluntad suele fallar porque:",
                    options: [
                        "Se agota con el tiempo",
                        "No funciona en absoluto",
                        "Es señal de debilidad",
                        "No sirve para hábitos pequeños"
                    ],
                    correct: 0,
                    explanation: "La voluntad es limitada; el entorno no."
                },
                // Nivel 1.5
                {
                    question: "Si empiezas hábitos con mucha motivación y los abandonas, ¿qué falta?",
                    options: [
                        "Más disciplina",
                        "Un sistema que te sostenga",
                        "Más presión externa",
                        "Objetivos más grandes"
                    ],
                    correct: 1,
                    explanation: "La motivación inicia, el sistema mantiene."
                },
                // Nivel 2
                {
                    question: "Intentar cambiar muchos hábitos a la vez suele llevar a:",
                    options: [
                        "Progreso acelerado",
                        "Agotamiento y abandono",
                        "Mayor claridad",
                        "Resultados sostenibles"
                    ],
                    correct: 1,
                    explanation: "El cambio real es acumulativo, no heroico."
                },
                // Nivel 2.5
                {
                    question: "Los hábitos pequeños funcionan porque:",
                    options: [
                        "Reducen la fricción para empezar",
                        "No requieren esfuerzo",
                        "Son irrelevantes",
                        "No generan resistencia"
                    ],
                    correct: 0,
                    explanation: "Lo fácil de empezar es fácil de repetir."
                },
                // Nivel 3
                {
                    question: "Celebrar pequeños avances es importante porque:",
                    options: [
                        "Refuerza identidad y continuidad",
                        "Es un premio superficial",
                        "No tiene impacto real",
                        "Sustituye el esfuerzo"
                    ],
                    correct: 0,
                    explanation: "Te conviertes en la persona que cumple consigo misma."
                },
                // Nivel 4
                {
                    question: "Un hábito duradero se consolida cuando:",
                    options: [
                        "Se integra en tu identidad y rutina",
                        "Te motiva todos los días",
                        "Es perfecto desde el inicio",
                        "Depende de disciplina constante"
                    ],
                    correct: 0,
                    explanation: "No lo haces por motivación, lo haces porque eres esa persona."
                }
            ]
        }
    ]
},

"Comunicación efectiva": {
    lessons: [
        {
            title: "Escucha activa",
            content: "Escuchar de verdad no es esperar tu turno para hablar. Es dejar de ser el centro durante unos minutos.",
            questions: [
                // Nivel 1
                {
                    question: "Cuando alguien te cuenta un problema y tú ya tienes una solución en mente, ¿qué suele pasar si la dices de inmediato?",
                    options: [
                        "Aceleras la resolución",
                        "La otra persona se siente poco escuchada",
                        "Demuestras inteligencia",
                        "Mejoras la relación"
                    ],
                    correct: 1,
                    explanation: "Resolver sin escuchar suele cerrar a la otra persona, no ayudarla."
                },
                // Nivel 1.5
                {
                    question: "Responder con frases automáticas mientras piensas en otra cosa comunica principalmente:",
                    options: [
                        "Eficiencia",
                        "Neutralidad",
                        "Desinterés",
                        "Empatía"
                    ],
                    correct: 2,
                    explanation: "Las personas notan cuando no estás realmente presente."
                },
                // Nivel 2
                {
                    question: "Escuchar activamente implica renunciar temporalmente a:",
                    options: [
                        "Tu opinión",
                        "Tu necesidad de tener razón",
                        "Tu identidad",
                        "Tu criterio"
                    ],
                    correct: 1,
                    explanation: "Escuchar no te quita razón, te da información."
                },
                // Nivel 2.5
                {
                    question: "Las preguntas abiertas son poderosas porque:",
                    options: [
                        "Te hacen parecer más inteligente",
                        "Permiten que el otro piense y se exprese mejor",
                        "Evitan que tengas que opinar",
                        "Alargan la conversación"
                    ],
                    correct: 1,
                    explanation: "Quien habla, procesa. Quien procesa, avanza."
                },
                // Nivel 3
                {
                    question: "Reflejar lo que el otro dice sirve principalmente para:",
                    options: [
                        "Demostrar que estabas escuchando",
                        "Corregirle",
                        "Confirmar que entendiste bien",
                        "Ganar control de la conversación"
                    ],
                    correct: 2,
                    explanation: "Entender mal es más común de lo que creemos."
                },
                // Nivel 4
                {
                    question: "Escuchar bien transforma la comunicación porque:",
                    options: [
                        "Reduce malentendidos y defensas",
                        "Te hace quedar bien",
                        "Evita conflictos siempre",
                        "Te da ventaja sobre el otro"
                    ],
                    correct: 0,
                    explanation: "Las personas bajan la guardia cuando se sienten escuchadas."
                }
            ]
        },
        {
            title: "Claridad al expresarse",
            content: "Si no te entienden, no es porque el otro no escuche, sino porque el mensaje no llegó.",
            questions: [
                // Nivel 1
                {
                    question: "Cuando explicas algo y no te entienden, el error más común es:",
                    options: [
                        "Pensar que el otro no presta atención",
                        "No adaptar el mensaje al receptor",
                        "Hablar demasiado claro",
                        "Dar pocos detalles"
                    ],
                    correct: 1,
                    explanation: "Comunicar no es hablar bien, es ser entendido."
                },
                // Nivel 1.5
                {
                    question: "Hablar mucho para explicar una idea suele indicar:",
                    options: [
                        "Dominio del tema",
                        "Falta de estructura",
                        "Seguridad",
                        "Claridad"
                    ],
                    correct: 1,
                    explanation: "Cuando una idea está clara, suele ser breve."
                },
                // Nivel 2
                {
                    question: "Adaptar tu mensaje a la otra persona significa:",
                    options: [
                        "Perder autenticidad",
                        "Cambiar la forma, no el fondo",
                        "Manipular",
                        "Ceder tu opinión"
                    ],
                    correct: 1,
                    explanation: "No cambias lo que piensas, cambias cómo lo dices."
                },
                // Nivel 2.5
                {
                    question: "Usar ejemplos mejora la comunicación porque:",
                    options: [
                        "Simplifica ideas abstractas",
                        "Alarga el mensaje",
                        "Evita pensar",
                        "Hace el mensaje más técnico"
                    ],
                    correct: 0,
                    explanation: "El cerebro entiende mejor lo concreto que lo teórico."
                },
                // Nivel 3
                {
                    question: "Ser claro al expresarte también implica:",
                    options: [
                        "Aceptar preguntas y dudas",
                        "Hablar sin interrupciones",
                        "Evitar feedback",
                        "Cerrar la conversación rápido"
                    ],
                    correct: 0,
                    explanation: "La claridad se confirma, no se asume."
                },
                // Nivel 4
                {
                    question: "Una comunicación clara reduce conflictos porque:",
                    options: [
                        "Evita interpretaciones erróneas",
                        "Impone autoridad",
                        "Hace todo más simple",
                        "Elimina emociones"
                    ],
                    correct: 0,
                    explanation: "Muchos conflictos nacen de lo que nunca se dijo bien."
                }
            ]
        },
        {
            title: "Feedback efectivo",
            content: "El feedback no trata de decir lo que piensas, sino de ayudar al otro a ver lo que no está viendo.",
            questions: [
                // Nivel 1
                {
                    question: "El mayor error al dar feedback es:",
                    options: [
                        "Ser honesto",
                        "Atacar a la persona en lugar de la acción",
                        "Decir poco",
                        "Ser directo"
                    ],
                    correct: 1,
                    explanation: "Cuando atacas a la persona, el mensaje se pierde."
                },
                // Nivel 1.5
                {
                    question: "El feedback genera resistencia cuando:",
                    options: [
                        "Es específico",
                        "Se percibe como juicio",
                        "Incluye ejemplos",
                        "Invita a reflexionar"
                    ],
                    correct: 1,
                    explanation: "El cerebro se defiende antes de aprender."
                },
                // Nivel 2
                {
                    question: "Recibir feedback sin reaccionar a la defensiva requiere:",
                    options: [
                        "Autoestima",
                        "Autocontrol emocional",
                        "Sumisión",
                        "Indiferencia"
                    ],
                    correct: 1,
                    explanation: "Escuchar no implica aceptar todo, implica considerar."
                },
                // Nivel 2.5
                {
                    question: "Separar emoción de información te permite:",
                    options: [
                        "Crecer incluso desde críticas incómodas",
                        "Ignorar el mensaje",
                        "Invalidar al otro",
                        "Evitar cambios"
                    ],
                    correct: 0,
                    explanation: "No todo feedback es justo, pero casi siempre hay algo útil."
                },
                // Nivel 3
                {
                    question: "Un feedback bien dado busca principalmente:",
                    options: [
                        "Corregir",
                        "Ayudar a mejorar",
                        "Liberar tensión",
                        "Demostrar superioridad"
                    ],
                    correct: 1,
                    explanation: "El objetivo no es ganar, es avanzar."
                },
                // Nivel 4
                {
                    question: "El feedback fortalece relaciones cuando:",
                    options: [
                        "Se da con respeto y claridad",
                        "Se evita para no incomodar",
                        "Se endulza demasiado",
                        "Se impone"
                    ],
                    correct: 0,
                    explanation: "La honestidad cuidada construye confianza."
                }
            ]
        },
        {
            title: "Comunicación no verbal",
            content: "Aunque no digas nada, siempre estás comunicando algo.",
            questions: [
                // Nivel 1
                {
                    question: "Cuando tus palabras dicen una cosa y tu cuerpo otra, ¿qué suele creer el otro?",
                    options: [
                        "Las palabras",
                        "El lenguaje corporal",
                        "Ambas por igual",
                        "Ninguna"
                    ],
                    correct: 1,
                    explanation: "El cuerpo suele parecer más honesto que las palabras."
                },
                // Nivel 1.5
                {
                    question: "Cruzar brazos y evitar contacto visual suele transmitir:",
                    options: [
                        "Interés",
                        "Defensividad o cierre",
                        "Autoridad",
                        "Neutralidad"
                    ],
                    correct: 1,
                    explanation: "El cuerpo habla incluso cuando no quieres."
                },
                // Nivel 2
                {
                    question: "La congruencia en la comunicación significa:",
                    options: [
                        "Decir lo correcto",
                        "Que gestos, tono y palabras coincidan",
                        "Hablar poco",
                        "Controlar cada movimiento"
                    ],
                    correct: 1,
                    explanation: "La incoherencia genera desconfianza inmediata."
                },
                // Nivel 2.5
                {
                    question: "El tono de voz afecta al mensaje porque:",
                    options: [
                        "Modifica la emoción con la que se recibe",
                        "No tiene impacto",
                        "Solo sirve para convencer",
                        "Es decorativo"
                    ],
                    correct: 0,
                    explanation: "El mismo mensaje puede sentirse como apoyo o ataque."
                },
                // Nivel 3
                {
                    question: "Adaptar tu lenguaje no verbal al otro implica:",
                    options: [
                        "Leer señales y ajustar tu forma de comunicar",
                        "Imitar gestos",
                        "Perder naturalidad",
                        "Actuar"
                    ],
                    correct: 0,
                    explanation: "La comunicación efectiva es dinámica, no rígida."
                },
                // Nivel 4
                {
                    question: "Dominar la comunicación no verbal te permite:",
                    options: [
                        "Transmitir confianza y coherencia",
                        "Manipular",
                        "Controlar a otros",
                        "Evitar hablar"
                    ],
                    correct: 0,
                    explanation: "Cuando lo que dices y lo que haces coincide, inspiras credibilidad."
                }
            ]
        }
    ]
}
};

////////////////////////////////////////////////////////////////////////

/*

// ===== RESET COMPLETO (solo para uso tuyo) =====
localStorage.removeItem('progreso');
localStorage.removeItem('profile');

// Reiniciar variables en memoria
progreso = {};
currentLessonXP = 0;
profile = {
    name: null,
    xp: 0,
    level: 1
};

// Forzar que se pida perfil al recargar
askForProfile();
updateProfileCard();



// Reiniciar todo el progreso
progreso = {};
localStorage.setItem('progreso', JSON.stringify(progreso));


*/

///////////////////////////////////////////////////////////////////////////

// ===== Cargar progreso desde localStorage =====
let progreso = {};
const savedProgress = localStorage.getItem('progreso');
if (savedProgress) progreso = JSON.parse(savedProgress);

// ===== Función genérica: Crear botón de volver =====
function createBackButton(onClick) {
    const btn = document.createElement('button');
    btn.textContent = "← Volver";
    btn.classList.add('back-button');
    btn.onclick = onClick;
    return btn;
}



// ===== Mostrar pantalla principal =====
function showHome() {
    activeLessonSession = null;
    mainContainer.innerHTML = "<h2>Habilidades</h2>";
    skills.forEach(skill => {
        const btn = document.createElement('button');
        btn.textContent = skill.name;
        btn.onclick = () => showSkill(skill.name);
        mainContainer.appendChild(btn);
    });
}

// ===== Mostrar habilidad y sus lecciones =====
// ===== Mostrar habilidad y sus lecciones con Bloqueo Progresivo =====
function showSkill(skill) {
    if (!skillData[skill]) return showHome();

    mainContainer.innerHTML = "";
mainContainer.appendChild(createBackButton(showHome));

const title = document.createElement('h2');
title.textContent = skill;
title.classList.add('skill-title'); // 👈 clase para controlar tamaño
mainContainer.appendChild(title);

const lessons = skillData[skill].lessons;

lessons.forEach((lesson, index) => {
    const lessonRow = document.createElement('div');
    lessonRow.classList.add('lesson-row');

    const totalQuestions = lesson.questions?.length || 0;
    const currentSavedProgress = progreso[skill]?.[lesson.title] || 0;

        // --- LÓGICA DE DESBLOQUEO ---
        let isUnlocked = true;

        if (index > 0) {
            // Verificamos la lección anterior
            const prevLesson = lessons[index - 1];
            const prevTotal = prevLesson.questions?.length || 0;
            const prevProgress = progreso[skill]?.[prevLesson.title] || 0;

            // Si la anterior no está terminada, esta se bloquea
            isUnlocked = prevProgress >= prevTotal && prevTotal > 0;
        }

        const lessonBtn = document.createElement('button');
        lessonBtn.classList.add('lesson-btn');
        lessonBtn.style.flex = '1';

        // --- RENDERIZADO SEGÚN ESTADO ---
        if (!isUnlocked) {
            // ESTADO: BLOQUEADA 🔒
            lessonBtn.classList.add('locked');
            lessonBtn.textContent = `🔒 ${lesson.title}`;
            
            // Animación Shake al hacer clic
            lessonBtn.onclick = () => {
                lessonBtn.classList.remove('shake-animation');
                void lessonBtn.offsetWidth; // Truco para reiniciar animación
                lessonBtn.classList.add('shake-animation');
            };
        } else {
            // ESTADO: DESBLOQUEADA
            if (totalQuestions > 0) {
                if (currentSavedProgress >= totalQuestions) {
                    lessonBtn.classList.add('completed');
                    lessonBtn.textContent = `${lesson.title} ✓`;
                } else if (currentSavedProgress > 0) {
                    lessonBtn.classList.add('in-progress');
                    lessonBtn.textContent = `${lesson.title} (${currentSavedProgress}/${totalQuestions})`;
                } else {
                    lessonBtn.textContent = `${lesson.title} (0/${totalQuestions})`;
                }
            } else {
                lessonBtn.textContent = lesson.title;
            }

            lessonBtn.onclick = () => {
                let startIndex = currentSavedProgress;
                if (currentSavedProgress >= totalQuestions) startIndex = 0;
                
                if (totalQuestions > 0) showQuestion(skill, lesson, startIndex);
                else showLesson(skill, lesson);
            };
        }

        lessonRow.appendChild(lessonBtn);

        // Botón Estudiar (solo aparece si está desbloqueada)
        if (isUnlocked) {
            const studyBtn = document.createElement('button');
            studyBtn.textContent = "Estudiar";
            studyBtn.classList.add('study-button');
            studyBtn.onclick = () => showLessonStudy(skill, lesson);
            lessonRow.appendChild(studyBtn);
        }

        mainContainer.appendChild(lessonRow);
    });
}

// ===== Mostrar lección normal =====
function showLesson(skill, lesson) {
    mainContainer.innerHTML = "";
    mainContainer.appendChild(createBackButton(() => {
        cleanupQuestion();
        showSkill(skill);
    }));

    const title = document.createElement('h2');
    title.textContent = lesson.title || "Lección";
    mainContainer.appendChild(title);

    const div = document.createElement('div');
    div.textContent = lesson.content || "Aquí irá la lección (contenido por ahora)";
    mainContainer.appendChild(div);
}

// ===== Mostrar lección en modo estudio =====
function showLessonStudy(skill, lesson) {
    mainContainer.innerHTML = "";
    mainContainer.appendChild(createBackButton(() => showSkill(skill)));

    const title = document.createElement('h2');
    title.textContent = lesson.title || "Lección";
    mainContainer.appendChild(title);

    const div = document.createElement('div');
    div.style.textAlign = 'left';
    div.style.marginTop = '1rem';
    div.style.lineHeight = '1.5rem';

    if (lesson.questions?.length > 0) {
        let studyHTML = `<p><strong>${lesson.title}</strong> es un apartado fundamental. Repasa estos conceptos:</p>`;
        lesson.questions.forEach((q, i) => {
            let concept = q.question.split('?')[0];
            studyHTML += `<h3>Concepto ${i + 1}: ${concept}</h3>`;
            studyHTML += `<p>${q.explanation}</p>`;
        });
        div.innerHTML = studyHTML;
    } else {
        div.textContent = lesson.content || "Aquí irá la lección (contenido por ahora)";
    }

    mainContainer.appendChild(div);
}

function showQuestion(skill, lesson, questionIndex, isReview = false) {
    // 1. Si es el inicio de una lección normal, reseteamos contadores y errores
    if (questionIndex === 0 && !isReview) {
        currentLessonCorrect = 0;
        currentLessonErrors = [];
        originalLesson = lesson; 
    }

    const sessionId = Date.now();
    activeLessonSession = sessionId;
    const questionData = lesson.questions[questionIndex];

    mainContainer.innerHTML = "";
    
    // Botón volver
    mainContainer.appendChild(createBackButton(() => {
        cleanupQuestion();
        showSkill(skill);
    }));

    const qTitle = document.createElement('h2');
    qTitle.textContent = questionData.question;
    mainContainer.appendChild(qTitle);

    const optionsContainer = document.createElement('div');
    mainContainer.appendChild(optionsContainer);

    const explanationDiv = document.createElement('div');
    explanationDiv.style.marginTop = '1rem';
    explanationDiv.style.fontStyle = 'italic';
    mainContainer.appendChild(explanationDiv);

    const { progressContainer, startProgress, completeProgress } = createProgressBar(sessionId, () => goNext());
    mainContainer.appendChild(progressContainer);

    let questionCompleted = false;

    function cleanupQuestion() {
        questionCompleted = true;
        activeLessonSession = null;
        if (startProgress.stop) startProgress.stop();
        document.removeEventListener('click', clickHandler);
    }

    function goNext() {
        if (questionCompleted || activeLessonSession !== sessionId) return;
        cleanupQuestion();
        
        if (questionIndex + 1 < lesson.questions.length) {
            showQuestion(skill, lesson, questionIndex + 1, isReview);
        } else {
            // Al terminar la lista actual, vamos al final
            showLessonEnd(skill, lesson, isReview);
        }
    }

    questionData.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.classList.add('option-btn');
        optionsContainer.appendChild(btn);

        btn.onclick = (e) => {
            e.stopPropagation();
            if (questionCompleted) return;
            
            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

            // Guardar progreso real (solo si no es un repaso)
            if (!isReview) {
                if (!progreso[skill]) progreso[skill] = {};
                progreso[skill][lesson.title] = questionIndex + 1;
                localStorage.setItem('progreso', JSON.stringify(progreso));
            }

            if (i === questionData.correct) {
                btn.classList.add('correct');
                
                if (!isReview) {
                    currentLessonCorrect++;
                    currentLessonXP += 10; // <--- XP por cada acierto
                } else {
                    // SI ES REPASO Y ACIERTA: La borramos de la lista de fallos
                    currentLessonErrors = currentLessonErrors.filter(q => q.question !== questionData.question);
                }
            } else {
                btn.classList.add('wrong');
                btn.style.animation = 'shake 0.5s';
                document.querySelectorAll('.option-btn')[questionData.correct].classList.add('correct');

                // SI ES LECCIÓN NORMAL Y FALLA: La añadimos a la lista
                if (!isReview) {
                    if (!currentLessonErrors.some(q => q.question === questionData.question)) {
                        currentLessonErrors.push(questionData);
                    }
                }
                // Si falla en repaso, NO hacemos nada (se queda en currentLessonErrors)
            }

            explanationDiv.textContent = questionData.explanation;
            startProgress();
        };
    });

    function clickHandler() { completeProgress(); }
    document.addEventListener('click', clickHandler);
    if (i === questionData.correct) {
    btn.classList.add('correct');
    if (!isReview) {
        currentLessonCorrect++;
        currentLessonXP += 10; // XP temporal por pregunta
    }
}

}

// ===== Crear barra de progreso =====
function createProgressBar(sessionId, onComplete) {
    const progressContainer = document.createElement('div');
    progressContainer.style.width = '100%';
    progressContainer.style.height = '12px';
    progressContainer.style.backgroundColor = '#ddd';
    progressContainer.style.borderRadius = '6px';
    progressContainer.style.marginTop = '0.5rem';
    progressContainer.style.display = 'none';

    const progressBar = document.createElement('div');
    progressBar.style.width = '0%';
    progressBar.style.height = '100%';
    progressBar.style.backgroundColor = 'green';
    progressBar.style.borderRadius = '6px';
    progressContainer.appendChild(progressBar);

    let animating = false;
    let animationFrameId = null;

    function startProgress() {
        if (animating) return;
        animating = true;
        progressContainer.style.display = 'block';
        let start = null;
        const duration = 4000;

        function animate(timestamp) {
            if (activeLessonSession !== sessionId) return;
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration * 100, 100);
            progressBar.style.width = progress + '%';
            if (progress < 100) animationFrameId = requestAnimationFrame(animate);
            else { animating = false; onComplete(); }
        }
        animationFrameId = requestAnimationFrame(animate);
    }

    function completeProgress() {
        if (!animating) return;
        cancelAnimationFrame(animationFrameId);
        progressBar.style.width = '100%';
        animating = false;
        onComplete();
    }

    return { progressContainer, progressBar, startProgress, completeProgress, stop: () => cancelAnimationFrame(animationFrameId) };
}

// ===== UN SOLO BLOQUE DEFINITIVO: Fin de lección =====
function showLessonEnd(skill, lesson, wasReview = false) {
    activeLessonSession = null; // Detenemos cualquier barra de progreso activa
    mainContainer.innerHTML = "";

    const title = document.createElement('h2');
    title.textContent = wasReview ? "Repaso de Fallos" : "Lección Completada";
    mainContainer.appendChild(title);

    // La clave es mirar SIEMPRE currentLessonErrors, que es nuestra lista maestra
    let fallosRestantes = currentLessonErrors.length;
    const summary = document.createElement('p');

    if (wasReview) {
        summary.innerHTML = fallosRestantes === 0 
            ? "¡Excelente! Has corregido todos los errores. 🎉" 
            : `Te quedan <strong>${fallosRestantes}</strong> fallos por resolver.`;
    } else {
        summary.innerHTML = `Has terminado <strong>${lesson.title}</strong>.<br>Aciertos: ${currentLessonCorrect} / ${lesson.questions.length}`;
    }
    mainContainer.appendChild(summary);

    // --- BOTÓN 1: REPASAR FALLOS (Solo si hay fallos) ---
    if (fallosRestantes > 0) {
        const reviewBtn = document.createElement('button');
        reviewBtn.textContent = `Repasar fallos (${fallosRestantes})`;
        reviewBtn.style.backgroundColor = "#ff9800"; // Color naranja para resaltar
        reviewBtn.onclick = () => {
            // Creamos una lección ficticia con lo que queda en la lista de errores
            const reviewLesson = {
                title: "Repaso de fallos",
                questions: [...currentLessonErrors] 
            };
            // Lanzamos el repaso (isReview = true)
            showQuestion(skill, reviewLesson, 0, true);
        };
        mainContainer.appendChild(reviewBtn);
    }

    // --- BOTÓN 2: REPETIR LECCIÓN COMPLETA ---
    const repeatBtn = document.createElement('button');
    repeatBtn.textContent = "Repetir lección completa";
    repeatBtn.onclick = () => {
        // Al repetir todo, reseteamos la lista de errores
        currentLessonErrors = []; 
        showQuestion(skill, originalLesson, 0, false);
    };
    mainContainer.appendChild(repeatBtn);

    // --- BOTÓN 3: VOLVER ---
    const backBtn = document.createElement('button');
    backBtn.textContent = "Volver a Habilidades";
    backBtn.classList.add('back-button');
    backBtn.onclick = () => showSkill(skill);
    mainContainer.appendChild(backBtn);
    if (!wasReview) {
    addXP(currentLessonXP);
    currentLessonXP = 0;
}

}




// === 1. VARIABLES GLOBALES (Asegúrate de tener estas arriba) ===
let profile = { name: null, xp: 0, level: 1 };
const mainContainer = document.getElementById('main-container');

// --- FUNCIÓN: Formulario de bienvenida "Bonito" ---
function showNameInput() {
    const inputCard = document.createElement('div');
    inputCard.id = 'welcome-card';
    inputCard.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        text-align: center;
        margin-top: 20px;
        border: 2px solid #3584d4ff;
        animation: fadeIn 0.5s ease;
    `;

    inputCard.innerHTML = `
        <h2 style="color: #3584d4ff; margin-bottom: 15px;">¡Hola!</h2>
        <p style="color: #666; margin-bottom: 20px;">¿Cómo te llamas? Tu progreso se guardará automáticamente.</p>
        <input type="text" id="name-field" placeholder="Escribe tu nombre..." 
            style="width: 80%; padding: 12px; border-radius: 8px; border: 1px solid #ddd; outline: none; font-size: 1rem;">
        <br><br>
        <button id="start-btn" style="
            background: #3584d4ff; color: white; border: none; padding: 12px 30px; 
            border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1rem;">
            Empezar
        </button>
    `;

    mainContainer.appendChild(inputCard);

    document.getElementById('start-btn').onclick = () => {
        const val = document.getElementById('name-field').value.trim();
        profile.name = val || "Estudiante";
        saveProfile();
        
        // ARREGLO: Limpiamos y reiniciamos todo para que salgan las habilidades
        inputCard.remove(); 
        inicializarApp(); 
    };
}

// --- FUNCIÓN: Tarjeta de Perfil (Esquina superior) ---
function createProfileCard() {
    let card = document.getElementById('profile-card');

    if (!card) {
        card = document.createElement('div');
        card.id = 'profile-card';
        card.style.cssText = `
            position: fixed;
            top: 15px;
            left: 15px;
            width: 190px;
            padding: 15px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            font-family: sans-serif;
            z-index: 1000;
        `;
        document.body.appendChild(card);
    }

    renderCardContent(card);
}

// --- FUNCIÓN: Renderizar Contenido (Versión única y completa) ---
function renderCardContent(card) {
    card.style.position = 'fixed'; 

    card.innerHTML = `
        <button id="logout-btn" title="Cerrar sesión" style="
            position: absolute;
            top: 4px;
            right: 4px;
            width: 16px;
            height: 16px;
            background: #eee;
            color: #999;
            border: 1px solid #ddd;
            border-radius: 3px;
            cursor: pointer;
            font-size: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            transition: all 0.2s;
        ">✕</button>

        <div style="font-weight: bold; color: #333; font-size: 0.85rem; margin-bottom: 2px; padding-right: 12px;">
            ${profile.name}
        </div>
        
        <div style="font-size: 0.7rem; color: #666; margin-bottom: 4px;">
            Nivel ${profile.level}
        </div>
        
        <div style="width: 100%; height: 4px; background: #f0f0f0; border-radius: 4px; overflow: hidden;">
            <div id="xp-fill" style="width: ${profile.xp % 100}%; height: 100%; background: #4caf50; transition: width 0.5s;"></div>
        </div>
    `;

    const btn = document.getElementById('logout-btn');
    btn.onmouseover = () => { btn.style.background = '#ff5f5f'; btn.style.color = 'white'; btn.style.borderColor = '#ff5f5f'; };
    btn.onmouseout = () => { btn.style.background = '#eee'; btn.style.color = '#999'; btn.style.borderColor = '#ddd'; };

    btn.onclick = () => {
        if (confirm("¿Cerrar sesión y borrar datos?")) {
            localStorage.clear();
            location.reload();
        }
    };
}

// --- Funciones de Utilidad ---
function saveProfile() {
    localStorage.setItem('profile', JSON.stringify(profile));
}

function addXP(amount) {
    profile.xp += amount;
    const newLevel = Math.floor(profile.xp / 100) + 1;

    if (newLevel > profile.level) {
        profile.level = newLevel;
        console.log(`¡Subiste al nivel ${newLevel}!`); 
        alert(`¡Felicidades! Has subido al nivel ${newLevel}`);
    }

    saveProfile();
    const card = document.getElementById('profile-card');
    if (card) renderCardContent(card);
}

// ===== Animación y Responsive =====
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } }
.shake-animation { animation: shake 0.4s ease; }

@media (max-width: 600px) {
    #profile-card { width: 120px !important; padding: 8px !important; font-size: 0.75rem !important; }
}
`;
document.head.appendChild(style);

// --- Lógica de Inicio ---
function inicializarApp() {
    const savedProfile = localStorage.getItem('profile');
    
    if (savedProfile) {
        profile = JSON.parse(savedProfile);
        createProfileCard();
        // ARREGLO: Aquí llamamos a tu función que muestra las habilidades
        if (typeof showHome === 'function') {
            showHome(); 
        }
    } else {
        if (mainContainer) mainContainer.innerHTML = '<h1>App Habilidades</h1>'; 
        showNameInput();
    }
}

inicializarApp();
