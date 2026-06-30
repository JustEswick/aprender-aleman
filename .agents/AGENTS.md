# Directrices para AlemanLingo (Agentes)

Este proyecto es una aplicación web interactiva estilo Duolingo para practicar vocabulario y gramática en alemán.

## Reglas Estrictas para Agentes:

1. **Escalabilidad de Datos (Separación de Preocupaciones):**
   Toda la lógica de la aplicación vive en `index.html`, `css/style.css` y `js/app.js`. Los datos de los juegos (vocabulario, preguntas, opciones) viven **EXCLUSIVAMENTE** en el archivo `data/data.js` dentro del array `quizData`. NO agregues preguntas harcodeadas en el HTML.

2. **Actualización de Vocabulario (Prevención de Duplicados):**
   Siempre que el usuario solicite agregar nuevo vocabulario o reglas gramaticales para crear nuevos minijuegos, debes:
   - **Paso 1:** Leer y analizar el contenido actual de `data/data.js`.
   - **Paso 2:** Verificar cruzando datos que la palabra, frase o regla exacta no exista ya en el banco de preguntas.
   - **Paso 3:** Si existe un duplicado o una pregunta semánticamente idéntica, adviérteselo al usuario y pide confirmación antes de proceder.
   - **Paso 4:** Si es vocabulario nuevo, genera la estructura del objeto JSON correspondiente (`type: multiple_choice` o `type: fill_in_blank`), inyectando el nuevo objeto al arreglo `quizData`.

3. **Estructura de las Preguntas (JSON):**
   Usa estrictamente este formato para agregar elementos a `quizData`:
   ```javascript
   {
       id: "identificador_unico",
       type: "multiple_choice", // o "fill_in_blank"
       topic: "Tema (ej. Muebles, Verbos)",
       question: "Pregunta formulada al usuario",
       options: ["Opc1", "Opc2", "Opc3", "Opc4"], // Solo para multiple_choice
       text: "Frase con ___ para llenar", // Solo para fill_in_blank
       correctAnswer: "Respuesta exacta"
   }
   ```

4. **Calidad del Contenido (Diseño de Juegos):**
   - Asegúrate de que las opciones incorrectas en `multiple_choice` sean plausibles pero claramente erróneas (ej. usar el artículo equivocado o una conjugación incorrecta).
   - En `fill_in_blank`, especifica claramente qué verbo u objeto se está evaluando en la pregunta para no crear ambigüedades.
