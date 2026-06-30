const quizData = [
    // --- GRAMÁTICA Y PRONOMBRES ---
    {
        id: "g1", type: "multiple_choice", topic: "Gramática",
        question: "¿Qué pronombre personal corresponde a 'Ellos/Ellas' o 'Usted(es)' formal?",
        options: ["wir", "ihr", "Sie / sie", "er"], correctAnswer: "Sie / sie"
    },
    {
        id: "g2", type: "multiple_choice", topic: "Gramática",
        question: "¿Cuál es el pronombre para 'Nosotros'?",
        options: ["wir", "ihr", "sie", "du"], correctAnswer: "wir"
    },
    {
        id: "g3", type: "fill_in_blank", topic: "Gramática",
        question: "Completa la conjugación (sein - Yo soy/estoy):",
        text: "Ich ___", correctAnswer: "bin"
    },
    {
        id: "g4", type: "fill_in_blank", topic: "Gramática",
        question: "Completa la conjugación (haben - Él tiene):",
        text: "Er ___", correctAnswer: "hat"
    },
    {
        id: "g5", type: "true_false", topic: "Gramática",
        question: "Responde Verdadero o Falso:",
        text: "¿El pronombre <strong>wir</strong> significa <strong>Nosotros</strong>?", correctAnswer: "Verdadero"
    },
    {
        id: "g6", type: "true_false", topic: "Gramática",
        question: "Responde Verdadero o Falso:",
        text: "¿La conjugación correcta del verbo 'sein' para <strong>ich</strong> (yo) es <strong>ist</strong>?", correctAnswer: "Falso"
    },
    {
        id: "g7", type: "true_false", topic: "Gramática",
        question: "Responde Verdadero o Falso:",
        text: "¿El pronombre <strong>Sie</strong> (con mayúscula) se usa para dirigirse a una persona formalmente (Usted)?", correctAnswer: "Verdadero"
    },
    {
        id: "g8", type: "true_false", topic: "Gramática",
        question: "Responde Verdadero o Falso:",
        text: "¿La conjugación correcta del verbo 'haben' para <strong>wir</strong> (nosotros) es <strong>habt</strong>?", correctAnswer: "Falso"
    },
    {
        id: "g9", type: "sentence_builder", topic: "Gramática",
        question: "Traduce: Yo no voy, porque estoy enfermo.",
        text: "Ich gehe nicht weil ich krank bin", correctAnswer: "Ich gehe nicht weil ich krank bin"
    },
    {
        id: "g10", type: "sentence_builder", topic: "Gramática",
        question: "Traduce: ¿Cómo te llamas?",
        text: "Wie heißt du ?", correctAnswer: "Wie heißt du ?"
    },

    // --- SALUDOS Y DESPEDIDAS ---
    {
        id: "s1", type: "multiple_choice", topic: "Saludos",
        question: "¿Cómo se dice 'Buenas noches' (al irse a dormir)?",
        options: ["Guten Abend", "Guten Morgen", "Gute Nacht", "Tschüss"], correctAnswer: "Gute Nacht"
    },
    {
        id: "s2", type: "match_pairs", topic: "Saludos",
        question: "Conecta el saludo o despedida con su significado:",
        pairs: [
            { de: "Bis später", es: "Más tarde" },
            { de: "Auf Wiedersehen", es: "Hasta luego" },
            { de: "Gleich", es: "En un rato" },
            { de: "Tschüss", es: "Adiós" }
        ]
    },
    {
        id: "s3", type: "sentence_builder", topic: "Saludos",
        question: "Ordena el saludo: Buenos días, señora Müller.",
        text: "Guten Morgen Frau Müller", correctAnswer: "Guten Morgen Frau Müller"
    },

    // --- FAMILIA E INFO PERSONAL ---
    {
        id: "f1", type: "multiple_choice", topic: "Familia",
        question: "¿Cómo se dice 'El hermano' en alemán?",
        options: ["der Bruder", "die Schwester", "der Sohn", "der Vater"], correctAnswer: "der Bruder"
    },
    {
        id: "f2", type: "multiple_choice", topic: "Familia",
        question: "¿Cómo se dice 'La hija'?",
        options: ["der Sohn", "die Tochter", "die Enkelin", "die Mutter"], correctAnswer: "die Tochter"
    },
    {
        id: "f3", type: "fill_in_blank", topic: "Familia",
        question: "Traduce al alemán 'Los padres':",
        text: "die ___", correctAnswer: "Eltern"
    },
    {
        id: "f4", type: "match_pairs", topic: "Familia",
        question: "Empareja los miembros de la familia:",
        pairs: [
            { de: "der Großvater", es: "el abuelo" },
            { de: "die Tante", es: "la tía" },
            { de: "der Enkel", es: "el nieto" },
            { de: "die Geschwister", es: "los hermanos" }
        ]
    },

    // --- PROFESIONES ---
    {
        id: "p1", type: "multiple_choice", topic: "Profesiones",
        question: "¿Qué significa 'der Arzt'?",
        options: ["el arquitecto", "el médico", "el ingeniero", "el maestro"], correctAnswer: "el médico"
    },
    {
        id: "p2", type: "fill_in_blank", topic: "Profesiones",
        question: "Completa la oración (Trabajo como maestro):",
        text: "Ich arbeite ___ Lehrer.", correctAnswer: "als"
    },

    // --- VERBOS Y CONJUGACIONES ---
    {
        id: "v1", type: "multiple_choice", topic: "Verbos",
        question: "El verbo 'essen' (comer) es irregular. ¿Cómo se dice 'Tú comes'?",
        options: ["du esst", "du esse", "du isst", "du issest"], correctAnswer: "du isst"
    },
    {
        id: "v2", type: "fill_in_blank", topic: "Verbos",
        question: "Completa la frase con el verbo 'sprechen' (Él habla):",
        text: "Er ___ sehr gut Deutsch.", correctAnswer: "spricht"
    },
    {
        id: "v3", type: "fill_in_blank", topic: "Verbos",
        question: "Completa la frase con el verbo 'arbeiten' (Nosotros trabajamos):",
        text: "Wir ___ heute.", correctAnswer: "arbeiten"
    },
    {
        id: "v4", type: "match_pairs", topic: "Verbos",
        question: "Conecta el verbo en infinitivo con su significado:",
        pairs: [
            { de: "wohnen", es: "habitar" },
            { de: "brauchen", es: "necesitar" },
            { de: "finden", es: "encontrar" },
            { de: "kaufen", es: "comprar" }
        ]
    },

    // --- NÚMEROS Y DÍAS ---
    {
        id: "n1", type: "multiple_choice", topic: "Números",
        question: "¿Cómo se escribe el número 45?",
        options: ["vierzigfünf", "fünfundvierzig", "vierundfünfzig", "fünfundfünfzig"], correctAnswer: "fünfundvierzig"
    },
    {
        id: "n2", type: "fill_in_blank", topic: "Números",
        question: "Escribe el número 12 en alemán:",
        text: "___", correctAnswer: "zwölf"
    },
    {
        id: "n3", type: "match_pairs", topic: "Días",
        question: "Empareja los días de la semana:",
        pairs: [
            { de: "Montag", es: "Lunes" },
            { de: "Mittwoch", es: "Miércoles" },
            { de: "Freitag", es: "Viernes" },
            { de: "Sonntag", es: "Domingo" }
        ]
    },

    // --- LA CASA Y OBJETOS ---
    {
        id: "c1", type: "multiple_choice", topic: "Muebles",
        question: "¿Cuál es el artículo correcto para 'Tisch' (Mesa)?",
        options: ["die", "der", "das", "ein"], correctAnswer: "der"
    },
    {
        id: "c2", type: "multiple_choice", topic: "Objetos",
        question: "¿Qué es 'das Feuerzeug'?",
        options: ["el reloj", "el encendedor", "el celular", "la llave"], correctAnswer: "el encendedor"
    },

    // --- COLORES Y ADJETIVOS ---
    {
        id: "col1", type: "fill_in_blank", topic: "Colores",
        question: "Traduce el color al alemán (Azul):",
        text: "Das Auto ist ___.", correctAnswer: "blau"
    },
    {
        id: "adj1", type: "match_pairs", topic: "Adjetivos",
        question: "Conecta el adjetivo con su contrario:",
        pairs: [
            { de: "groß", es: "klein" },
            { de: "gut", es: "schlecht" },
            { de: "teuer", es: "billig" },
            { de: "neu", es: "alt" }
        ]
    },

    // --- SOPAS DE LETRAS ---
    {
        id: "ws1", type: "word_search", topic: "Familia",
        question: "Sopa de Letras: Encuentra VATER, MUTTER, SOHN y TANTE",
        words: ["VATER", "MUTTER", "SOHN", "TANTE"]
    },
    {
        id: "ws2", type: "word_search", topic: "Saludos",
        question: "Sopa de Letras: Encuentra HALLO, TSCHUESS y MORGEN",
        words: ["HALLO", "TSCHUESS", "MORGEN"]
    },
    {
        id: "ws3", type: "word_search", topic: "Colores",
        question: "Sopa de Letras: Encuentra ROT, BLAU, GELB y GRUEN",
        words: ["ROT", "BLAU", "GELB", "GRUEN"]
    },

    // --- LECTURAS (READING COMPREHENSION) ---
    {
        id: "r1", type: "reading", topic: "Lecturas",
        question: "Lee el siguiente texto y responde (Verdadero o Falso):",
        text: "Hallo, ich bin Lukas. Ich bin 28 Jahre alt und ich wohne in München. Ich arbeite als Architekt. Meine Hobbys sind Fußball spielen und Musik hören. Ich habe eine kleine Schwester, sie heißt Anna und studiert in Berlin. Am Wochenende besuche ich oft meine Großeltern.",
        questions: [
            { q: "Lukas vive en Berlín.", ans: "Falso" },
            { q: "Lukas trabaja como arquitecto.", ans: "Verdadero" },
            { q: "La hermana de Lukas se llama Anna.", ans: "Verdadero" },
            { q: "Lukas visita a sus abuelos los fines de semana.", ans: "Verdadero" }
        ]
    },
    {
        id: "r2", type: "reading", topic: "Lecturas",
        question: "Lee el itinerario y contesta:",
        text: "Heute ist Samstag. Am Morgen gehe ich in den Supermarkt, denn ich brauche Äpfel, Brot und Milch. Um 14 Uhr treffe ich meinen Freund Thomas im Café am Hauptbahnhof. Danach gehen wir ins Kino. Der Film beginnt um 16:30 Uhr.",
        questions: [
            { q: "Hoy es domingo.", ans: "Falso" },
            { q: "La persona necesita comprar manzanas, pan y leche.", ans: "Verdadero" },
            { q: "Se encontrará con su amigo Thomas en el aeropuerto.", ans: "Falso" },
            { q: "El largometraje comienza a las cuatro y media.", ans: "Verdadero" }
        ]
    },
    
    // --- 🧱 ORACIONES (SENTENCE BUILDER) ---
    {
        id: "sb_g1", type: "sentence_builder", topic: "Gramática",
        question: "Traduce: Yo hablo un poco de alemán.",
        text: "Ich spreche ein bisschen Deutsch", correctAnswer: "Ich spreche ein bisschen Deutsch"
    },
    {
        id: "sb_g2", type: "sentence_builder", topic: "Gramática",
        question: "Traduce: Esa no es una manzana (Acusativo).",
        text: "Das ist keinen Apfel", correctAnswer: "Das ist keinen Apfel"
    },
    {
        id: "sb_g3", type: "sentence_builder", topic: "Gramática",
        question: "Traduce: Nosotros tenemos un perro.",
        text: "Wir haben einen Hund", correctAnswer: "Wir haben einen Hund"
    },
    {
        id: "sb_f1", type: "sentence_builder", topic: "Familia",
        question: "Traduce: Mi madre es muy amable.",
        text: "Meine Mutter ist sehr nett", correctAnswer: "Meine Mutter ist sehr nett"
    },
    {
        id: "sb_f2", type: "sentence_builder", topic: "Familia",
        question: "Traduce: Él tiene dos hermanos.",
        text: "Er hat zwei Brüder", correctAnswer: "Er hat zwei Brüder"
    },
    {
        id: "sb_f3", type: "sentence_builder", topic: "Familia",
        question: "Traduce: ¿Cuántos años tiene tu abuelo?",
        text: "Wie alt ist dein Opa ?", correctAnswer: "Wie alt ist dein Opa ?"
    },
    {
        id: "sb_s1", type: "sentence_builder", topic: "Saludos",
        question: "Traduce: Buenos días, ¿cómo estás?",
        text: "Guten Morgen wie geht es dir ?", correctAnswer: "Guten Morgen wie geht es dir ?"
    },
    {
        id: "sb_s2", type: "sentence_builder", topic: "Saludos",
        question: "Traduce: Hasta luego, señora Müller.",
        text: "Bis später Frau Müller", correctAnswer: "Bis später Frau Müller"
    },
    {
        id: "sb_s3", type: "sentence_builder", topic: "Saludos",
        question: "Traduce: Lo siento mucho.",
        text: "Es tut mir sehr leid", correctAnswer: "Es tut mir sehr leid"
    },
    {
        id: "sb_v1", type: "sentence_builder", topic: "Verbos",
        question: "Traduce: Me gusta beber café.",
        text: "Ich trinke gerne Kaffee", correctAnswer: "Ich trinke gerne Kaffee"
    },
    {
        id: "sb_v2", type: "sentence_builder", topic: "Verbos",
        question: "Traduce: Ella trabaja en Berlín.",
        text: "Sie arbeitet in Berlin", correctAnswer: "Sie arbeitet in Berlin"
    },
    {
        id: "sb_v3", type: "sentence_builder", topic: "Verbos",
        question: "Traduce: ¿Qué haces hoy?",
        text: "Was machst du heute ?", correctAnswer: "Was machst du heute ?"
    },
    {
        id: "sb_n1", type: "sentence_builder", topic: "Números",
        question: "Traduce: Tengo veinte años.",
        text: "Ich bin zwanzig Jahre alt", correctAnswer: "Ich bin zwanzig Jahre alt"
    },
    {
        id: "sb_n2", type: "sentence_builder", topic: "Números",
        question: "Traduce: Eso cuesta cincuenta euros.",
        text: "Das kostet fünfzig Euro", correctAnswer: "Das kostet fünfzig Euro"
    },
    {
        id: "sb_n3", type: "sentence_builder", topic: "Números",
        question: "Traduce: Tenemos tres gatos.",
        text: "Wir haben drei Katzen", correctAnswer: "Wir haben drei Katzen"
    },
    {
        id: "sb_c1", type: "sentence_builder", topic: "Colores",
        question: "Traduce: El cielo es muy azul.",
        text: "Der Himmel ist sehr blau", correctAnswer: "Der Himmel ist sehr blau"
    },
    {
        id: "sb_c2", type: "sentence_builder", topic: "Colores",
        question: "Traduce: Yo compro el auto rojo.",
        text: "Ich kaufe das rote Auto", correctAnswer: "Ich kaufe das rote Auto"
    },
    {
        id: "sb_c3", type: "sentence_builder", topic: "Colores",
        question: "Traduce: Mi gato es negro.",
        text: "Meine Katze ist schwarz", correctAnswer: "Meine Katze ist schwarz"
    },
    {
        id: "sb_m1", type: "sentence_builder", topic: "Muebles",
        question: "Traduce: La mesa es muy pequeña.",
        text: "Der Tisch ist zu klein", correctAnswer: "Der Tisch ist zu klein"
    },
    {
        id: "sb_m2", type: "sentence_builder", topic: "Muebles",
        question: "Traduce: Necesito una cama nueva.",
        text: "Ich brauche ein neues Bett", correctAnswer: "Ich brauche ein neues Bett"
    },
    {
        id: "sb_m3", type: "sentence_builder", topic: "Muebles",
        question: "Traduce: El armario es muy grande.",
        text: "Der Schrank ist sehr groß", correctAnswer: "Der Schrank ist sehr groß"
    }
];
