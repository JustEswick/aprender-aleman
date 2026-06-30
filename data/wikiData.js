const wikiData = [
    {
        category: "1. Guía de Pronunciación",
        id: "cat-pronunciacion",
        items: [
            {
                id: "pronunciacion-general",
                title: "Reglas de Pronunciación (Aussprache)",
                content: `
                    <div class="pro-grid">
                        <div class="pro-card"><strong>äu</strong> "oi"</div>
                        <div class="pro-card"><strong>v</strong> "f" (fau)</div>
                        <div class="pro-card"><strong>er</strong> "a" suave (al final)</div>
                        <div class="pro-card"><strong>ch</strong> "g" suave</div>
                        <div class="pro-card"><strong>sch</strong> "sh"</div>
                        <div class="pro-card"><strong>ß</strong> "ss" (Eszett)</div>
                        <div class="pro-card"><strong>h</strong> "j" (ja)</div>
                        <div class="pro-card"><strong>j</strong> "y" (yot)</div>
                        <div class="pro-card"><strong>z</strong> "ts" (dzett)</div>
                        <div class="pro-card"><strong>r</strong> gutural (similar a la R francesa)</div>
                        <div class="pro-card"><strong>Ä / ä</strong> "e" abierta</div>
                        <div class="pro-card"><strong>Ö / ö</strong> "oe"</div>
                        <div class="pro-card"><strong>Ü / ü</strong> "iu"</div>
                    </div>
                    <div class="note-box">
                        <strong>💡 Notas de Consonantes:</strong><br>
                        <strong>b / w / v:</strong> <em>b</em> es labial; <em>w</em> y <em>v</em> (a veces) son labiodentales.
                    </div>
                `
            },
            {
                id: "abecedario",
                title: "El Abecedario (Das Alphabet)",
                content: `
                    <div class="pro-grid">
                        <div class="pro-card"><strong>A, a</strong> a<br><small style="color:#555;">(a)</small></div>
                        <div class="pro-card"><strong>B, b</strong> be<br><small style="color:#555;">(be)</small></div>
                        <div class="pro-card"><strong>C, c</strong> ce<br><small style="color:#555;">(tse)</small></div>
                        <div class="pro-card"><strong>D, d</strong> de<br><small style="color:#555;">(de)</small></div>
                        <div class="pro-card"><strong>E, e</strong> e<br><small style="color:#555;">(e)</small></div>
                        <div class="pro-card"><strong>F, f</strong> ef<br><small style="color:#555;">(ef)</small></div>
                        <div class="pro-card"><strong>G, g</strong> ge<br><small style="color:#555;">(gue)</small></div>
                        <div class="pro-card"><strong>H, h</strong> ha<br><small style="color:#555;">(ha / ja)</small></div>
                        <div class="pro-card"><strong>I, i</strong> i<br><small style="color:#555;">(i)</small></div>
                        <div class="pro-card"><strong>J, j</strong> jot<br><small style="color:#555;">(yot)</small></div>
                        <div class="pro-card"><strong>K, k</strong> ka<br><small style="color:#555;">(ka)</small></div>
                        <div class="pro-card"><strong>L, l</strong> el<br><small style="color:#555;">(el)</small></div>
                        <div class="pro-card"><strong>M, m</strong> em<br><small style="color:#555;">(em)</small></div>
                        <div class="pro-card"><strong>N, n</strong> en<br><small style="color:#555;">(en)</small></div>
                        <div class="pro-card"><strong>O, o</strong> o<br><small style="color:#555;">(o)</small></div>
                        <div class="pro-card"><strong>P, p</strong> pe<br><small style="color:#555;">(pe)</small></div>
                        <div class="pro-card"><strong>Q, q</strong> qu<br><small style="color:#555;">(ku)</small></div>
                        <div class="pro-card"><strong>R, r</strong> er<br><small style="color:#555;">(er)</small></div>
                        <div class="pro-card"><strong>S, s</strong> es<br><small style="color:#555;">(es)</small></div>
                        <div class="pro-card"><strong>T, t</strong> te<br><small style="color:#555;">(te)</small></div>
                        <div class="pro-card"><strong>U, u</strong> u<br><small style="color:#555;">(u)</small></div>
                        <div class="pro-card"><strong>V, v</strong> vau<br><small style="color:#555;">(fau)</small></div>
                        <div class="pro-card"><strong>W, w</strong> we<br><small style="color:#555;">(ve)</small></div>
                        <div class="pro-card"><strong>X, x</strong> ix<br><small style="color:#555;">(iks)</small></div>
                        <div class="pro-card"><strong>Y, y</strong> ypsilon<br><small style="color:#555;">(ípsilon)</small></div>
                        <div class="pro-card"><strong>Z, z</strong> zett<br><small style="color:#555;">(tset)</small></div>
                        <div class="pro-card"><strong>Ä, ä</strong> a-Umlaut<br><small style="color:#555;">(e abierta)</small></div>
                        <div class="pro-card"><strong>Ö, ö</strong> o-Umlaut<br><small style="color:#555;">(oe)</small></div>
                        <div class="pro-card"><strong>Ü, ü</strong> u-Umlaut<br><small style="color:#555;">(iu)</small></div>
                        <div class="pro-card"><strong>ß</strong> eszett<br><small style="color:#555;">(ss)</small></div>
                    </div>
                    <div class="note-box">
                        <strong>💡 Nota:</strong> Te recomiendo memorizar bien la <strong>v (fau)</strong> y la <strong>w (ve)</strong>, además de la <strong>j (yot)</strong>, ya que son las que más cambian en la escritura alemana frente al español. Y recuerda, la letra <strong>ß</strong> nunca aparece al inicio de una palabra.
                    </div>
                `
            }
        ]
    },
    {
        category: "2. Gramática y Reglas Fundamentales",
        id: "cat-gramatica",
        items: [
            {
                id: "pronombres-personales",
                title: "Pronombres Personales",
                content: `
                    <table>
                        <tr><th>Pronombre</th><th>Significado</th><th>Notas</th></tr>
                        <tr><td><strong>Ich</strong></td><td>Yo</td><td></td></tr>
                        <tr><td><strong>Du</strong></td><td>Tú</td><td></td></tr>
                        <tr><td><strong>Er</strong></td><td>Él</td><td></td></tr>
                        <tr><td><strong>Sie</strong></td><td>Ella</td><td>Singular</td></tr>
                        <tr><td><strong>Es</strong></td><td>Ello</td><td>(it) Neutro</td></tr>
                        <tr><td><strong>Wir</strong></td><td>Nosotros</td><td></td></tr>
                        <tr><td><strong>Ihr</strong></td><td>Vosotros</td><td>Tú en plural (para grupos)</td></tr>
                        <tr><td><strong>Sie / sie</strong></td><td>Usted(es) / Ellas, Ellos</td><td>Sie (mayúscula) = formal. sie (minúscula) = plural</td></tr>
                    </table>
                    <div class="note-box">
                        <strong>💡 Ejemplos Prácticos (Presentación Nicos Weg):</strong><br>
                        <em>Ich bin einundzwanzig Jahre alt.</em> (Tengo 21 años)<br>
                        <em>Ich wohne in Metepec.</em> (Vivo en Metepec)<br>
                        <em>Ich bin ein Einzelkind.</em> (Soy hijo único - nota: "Einzelsohn" significa "único hijo varón")<br>
                        <em>Mein Lieblingsessen ist Lasagne.</em> (Mi comida favorita es la lasaña)<br>
                        <em>Ich bin Isaac.</em> (Soy Isaac)
                    </div>
                `
            },
            {
                id: "articulos-generos",
                title: "Artículos y Géneros",
                content: `
                    <p>En alemán, los objetos tienen género (masculino, femenino, neutro). Para no repetir el sustantivo (ej. "la mesa"), se usa el pronombre correspondiente al género (er, sie, es).</p>
                    <div style="overflow-x:auto;">
                        <table style="min-width: 900px; text-align: center; font-size: 0.95rem;">
                            <tr><th>Género</th><th>Definido (Nom)</th><th>Definido (Acus)</th><th>Indefinido (Nom)</th><th>Indefinido (Acus)</th><th>Negación (Nom)</th><th>Negación (Acus)</th><th>Pronombre (Nom)</th><th>Pronombre (Acus)</th></tr>
                            <tr class="gender-der"><td style="text-align:left;"><strong>Masculino</strong></td><td>der<br><small style="color:#555;">(el)</small></td><td><strong>den</strong><br><small style="color:#555;">(al / lo)</small></td><td>ein<br><small style="color:#555;">(un)</small></td><td><strong>einen</strong><br><small style="color:#555;">(a un)</small></td><td>kein<br><small style="color:#555;">(ningún)</small></td><td><strong>keinen</strong><br><small style="color:#555;">(a ningún)</small></td><td>er<br><small style="color:#555;">(él)</small></td><td><strong>ihn</strong><br><small style="color:#555;">(lo / a él)</small></td></tr>
                            <tr class="gender-die"><td style="text-align:left;"><strong>Femenino</strong></td><td>die<br><small style="color:#555;">(la)</small></td><td>die<br><small style="color:#555;">(a la / la)</small></td><td>eine<br><small style="color:#555;">(una)</small></td><td>eine<br><small style="color:#555;">(a una)</small></td><td>keine<br><small style="color:#555;">(ninguna)</small></td><td>keine<br><small style="color:#555;">(a ninguna)</small></td><td>sie<br><small style="color:#555;">(ella)</small></td><td>sie<br><small style="color:#555;">(la / a ella)</small></td></tr>
                            <tr class="gender-das"><td style="text-align:left;"><strong>Neutro</strong></td><td>das<br><small style="color:#555;">(lo / el)</small></td><td>das<br><small style="color:#555;">(a lo / lo)</small></td><td>ein<br><small style="color:#555;">(un)</small></td><td>ein<br><small style="color:#555;">(a un)</small></td><td>kein<br><small style="color:#555;">(ningún)</small></td><td>kein<br><small style="color:#555;">(a ningún)</small></td><td>es<br><small style="color:#555;">(ello)</small></td><td>es<br><small style="color:#555;">(lo / a ello)</small></td></tr>
                            <tr class="gender-plural"><td style="text-align:left;"><strong>Plural</strong></td><td>die<br><small style="color:#555;">(los / las)</small></td><td>die<br><small style="color:#555;">(a los / las)</small></td><td>-</td><td>-</td><td>keine<br><small style="color:#555;">(ningunos/as)</small></td><td>keine<br><small style="color:#555;">(a ningunos/as)</small></td><td>sie<br><small style="color:#555;">(ellos / as)</small></td><td>sie<br><small style="color:#555;">(los / las)</small></td></tr>
                        </table>
                    </div>
                    <br>
                    <strong>Reglas importantes:</strong>
                    <ol>
                        <li>El artículo definido se usa para cosas o personas específicas. El indefinido para dar información general.</li>
                        <li><strong>Palabras compuestas:</strong> El género de la palabra compuesta lo define la última palabra.</li>
                        <li><strong>Países:</strong> La mayoría no usa artículo, pero hay excepciones como <em>die Schweiz</em> (Suiza) o <em>der Iran</em>.</li>
                        <li><strong>Negación:</strong> Para negar sustantivos se usa <em>kein/keine</em>. Para negar verbos o adjetivos, se usa <em>nicht</em>.</li>
                    </ol>
                    
                    <div class="note-box">
                        <strong>💡 Ejemplos de Nominativo vs Acusativo:</strong><br>
                        Recuerda que el <em>Nominativo</em> es el sujeto (quien hace la acción), y el <em>Acusativo</em> es el objeto que recibe la acción (ej. qué compras, qué ves, qué tienes).
                        <br><br>
                        <strong>Ejemplo Masculino (der Hund / el perro): ⚠️ ¡El único que cambia!</strong>
                        <ul>
                            <li><strong>Nom (Sujeto):</strong> <em><strong>Der</strong> Hund ist süß.</em> (El perro es lindo) | <em>Das ist <strong>ein</strong> Hund.</em> (Ese es un perro)</li>
                            <li><strong>Acus (Objeto):</strong> <em>Ich sehe <strong>den</strong> Hund.</em> (Yo veo al perro) | <em>Ich habe <strong>einen</strong> Hund.</em> (Yo tengo un perro)</li>
                            <li><strong>Pronombres:</strong> <em><strong>Er</strong> ist klein.</em> (Él es pequeño) -> <em>Ich liebe <strong>ihn</strong>.</em> (Yo lo amo)</li>
                        </ul>
                        <strong>Ejemplo Femenino y Neutro (die Lampe / das Buch): 🟢 ¡Se quedan igual!</strong>
                        <ul>
                            <li><strong>Femenino:</strong> <em><strong>Die</strong> Lampe ist schön.</em> (Nom) -> <em>Ich kaufe <strong>die</strong> Lampe.</em> (Acus)</li>
                            <li><strong>Neutro:</strong> <em>Das ist <strong>ein</strong> Buch.</em> (Nom) -> <em>Ich lese <strong>ein</strong> Buch.</em> (Acus)</li>
                        </ul>
                    </div>
                `
            },
            {
                id: "verbos-fundamentales",
                title: "Verbos Fundamentales y Cambio Vocálico",
                content: `
                    <h4>Verbo Sein (Ser o Estar)</h4>
                    <p>ich bin, du bist, er/sie/es ist, wir sind, ihr seid, Sie/sie sind</p>
                    <h4>Verbo Haben (Tener)</h4>
                    <p>ich habe, du hast, er/sie/es hat, wir haben, ihr habt, Sie/sie haben</p>
                    <h4>Verbos con Cambio Vocálico (Ej. Sprechen / Essen)</h4>
                    <p>Algunos verbos irregulares cambian su vocal principal en las personas du y er/sie/es.</p>
                    <div class="grid-list">
                        <div class="grid-item">ich spreche / esse</div>
                        <div class="grid-item">du <strong>sprichst / isst</strong></div>
                        <div class="grid-item">er/sie/es <strong>spricht / isst</strong></div>
                        <div class="grid-item">wir sprechen / essen</div>
                        <div class="grid-item">ihr sprecht / esst</div>
                        <div class="grid-item">Sie/sie sprechen / essen</div>
                    </div>
                    <h4>Verbos Regulares (Terminaciones)</h4>
                    <p>El verbo siempre va en la <strong>segunda posición</strong> de la oración.</p>
                    <div class="grid-list">
                        <div class="grid-item">ich <strong>-e</strong> (komme)</div>
                        <div class="grid-item">du <strong>-st</strong> (kommst)</div>
                        <div class="grid-item">er/sie/es <strong>-t</strong> (kommt)</div>
                        <div class="grid-item">wir <strong>-en</strong> (kommen)</div>
                        <div class="grid-item">ihr <strong>-t</strong> (kommt)</div>
                        <div class="grid-item">Sie/sie <strong>-en</strong> (kommen)</div>
                    </div>
                `
            },
            {
                id: "terminaciones-sustantivos",
                title: "Terminaciones de Sustantivos y Formación del Plural",
                content: `
                    <p><strong>Terminaciones del Plural:</strong> -n / -en, -e, -r / -er, -s</p>
                    <h4>Sustantivos Masculinos:</h4>
                    <ul>
                        <li><strong>Grupo 1</strong> (Toman la terminación de plural -n / -en): -e, -ent, -and, -ant, -ist, -or</li>
                        <li><strong>Grupo 2:</strong> -eur, -ich, -ier, -ig, -ling, -ör</li>
                    </ul>
                    <h4>Sustantivos Femeninos:</h4>
                    <ul>
                        <li>Terminaciones comunes: -e, -in, -ion, -ik, -heit, -keit, -schaft, -tät, -ung</li>
                    </ul>
                `
            },
            {
                id: "pronombres-posesivos",
                title: "Pronombres Posesivos",
                content: `
                    <p>La terminación del posesivo depende del género de la palabra que posee. Si lo poseído es femenino o plural, se le agrega una "-e" al final.</p>
                    <table>
                        <tr><th>Persona</th><th class="gender-der">Masculino / Neutro (der, das)</th><th class="gender-die">Femenino / Plural (die)</th></tr>
                        <tr><td><strong>ich</strong></td><td>mein (mi)</td><td>meine (mis / mi)</td></tr>
                        <tr><td><strong>du</strong></td><td>dein (tu)</td><td>deine (tus / tu)</td></tr>
                        <tr><td><strong>er / es</strong></td><td>sein (su)</td><td>seine (sus / su)</td></tr>
                        <tr><td><strong>sie</strong> (ella)</td><td>ihr (su de ella)</td><td>ihre (sus de ella)</td></tr>
                        <tr><td><strong>wir</strong></td><td>unser (nuestro)</td><td>unsere (nuestra/os)</td></tr>
                        <tr><td><strong>ihr</strong></td><td>euer (vuestro)</td><td>eure (vuestra/os)</td></tr>
                        <tr><td><strong>Sie / sie</strong></td><td>ihr / Ihr</td><td>ihre / Ihre</td></tr>
                    </table>
                `
            }
        ]
    },
    {
        category: "3. Verbos Comunes y sus Conjugaciones",
        id: "cat-verbos-comunes",
        items: [
            {
                id: "tabla-verbos",
                title: "Tabla de Verbos Comunes",
                content: `
                    <p>En esta tabla se encuentran los verbos fundamentales y más comunes del curso, indicando si son regulares o irregulares, y su conjugación completa.</p>
                    <div style="overflow-x:auto;">
                        <table style="width:100%;" class="verbs-table">
                            <tr><th>Verbo (Inf.)</th><th>Significado</th><th>Tipo</th><th>ich</th><th>du</th><th>er/sie/es</th><th>wir/Sie/sie</th><th>ihr</th></tr>
                            <tr><td><strong>sein</strong></td><td>ser / estar</td><td><span class="verb-irreg">Irregular</span></td><td>bin</td><td>bist</td><td>ist</td><td>sind</td><td>seid</td></tr>
                            <tr><td><strong>haben</strong></td><td>tener</td><td><span class="verb-irreg">Irregular</span></td><td>habe</td><td>hast</td><td>hat</td><td>haben</td><td>habt</td></tr>
                            <tr><td><strong>arbeiten</strong></td><td>trabajar</td><td><span class="verb-reg">Regular (+e)*</span></td><td>arbeite</td><td>arbeitest</td><td>arbeitet</td><td>arbeiten</td><td>arbeitet</td></tr>
                            <tr><td><strong>besuchen</strong></td><td>visitar</td><td><span class="verb-reg">Regular</span></td><td>besuche</td><td>besuchst</td><td>besucht</td><td>besuchen</td><td>besucht</td></tr>
                            <tr><td><strong>brauchen</strong></td><td>necesitar</td><td><span class="verb-reg">Regular</span></td><td>brauche</td><td>brauchst</td><td>braucht</td><td>brauchen</td><td>braucht</td></tr>
                            <tr><td><strong>buchstabieren</strong></td><td>deletrear</td><td><span class="verb-reg">Regular</span></td><td>buchstabiere</td><td>buchstabierst</td><td>buchstabiert</td><td>buchstabieren</td><td>buchstabiert</td></tr>
                            <tr><td><strong>essen</strong></td><td>comer</td><td><span class="verb-irreg">Irregular (e-&gt;i)</span></td><td>esse</td><td><span class="vowel-change">i</span>sst</td><td><span class="vowel-change">i</span>sst</td><td>essen</td><td>esst</td></tr>
                            <tr><td><strong>fahren</strong></td><td>ir / conducir</td><td><span class="verb-irreg">Irregular (a-&gt;ä)</span></td><td>fahre</td><td>f<span class="vowel-change">ä</span>hrst</td><td>f<span class="vowel-change">ä</span>hrt</td><td>fahren</td><td>fahrt</td></tr>
                            <tr><td><strong>finden</strong></td><td>encontrar</td><td><span class="verb-reg">Regular (+e)*</span></td><td>finde</td><td>findest</td><td>findet</td><td>finden</td><td>findet</td></tr>
                            <tr><td><strong>fliegen</strong></td><td>volar</td><td><span class="verb-reg">Regular</span></td><td>fliege</td><td>fliegst</td><td>fliegt</td><td>fliegen</td><td>fliegt</td></tr>
                            <tr><td><strong>gehen</strong></td><td>ir / caminar</td><td><span class="verb-reg">Regular</span></td><td>gehe</td><td>gehst</td><td>geht</td><td>gehen</td><td>geht</td></tr>
                            <tr><td><strong>gewinnen</strong></td><td>ganar</td><td><span class="verb-reg">Regular</span></td><td>gewinne</td><td>gewinnst</td><td>gewinnt</td><td>gewinnen</td><td>gewinnt</td></tr>
                            <tr><td><strong>glauben</strong></td><td>creer</td><td><span class="verb-reg">Regular</span></td><td>glaube</td><td>glaubst</td><td>glaubt</td><td>glauben</td><td>glaubt</td></tr>
                            <tr><td><strong>heißen</strong></td><td>llamarse</td><td><span class="verb-reg">Regular (-ß)**</span></td><td>heiße</td><td>heißt</td><td>heißt</td><td>heißen</td><td>heißt</td></tr>
                            <tr><td><strong>kaufen</strong></td><td>comprar</td><td><span class="verb-reg">Regular</span></td><td>kaufe</td><td>kaufst</td><td>kauft</td><td>kaufen</td><td>kauft</td></tr>
                            <tr><td><strong>kommen</strong></td><td>venir</td><td><span class="verb-reg">Regular</span></td><td>komme</td><td>kommst</td><td>kommt</td><td>kommen</td><td>kommt</td></tr>
                            <tr><td><strong>kosten</strong></td><td>costar</td><td><span class="verb-reg">Regular (+e)*</span></td><td>koste</td><td>kostest</td><td>kostet</td><td>kosten</td><td>kostet</td></tr>
                            <tr><td><strong>leben</strong></td><td>vivir</td><td><span class="verb-reg">Regular</span></td><td>lebe</td><td>lebst</td><td>lebt</td><td>leben</td><td>lebt</td></tr>
                            <tr><td><strong>lernen</strong></td><td>aprender</td><td><span class="verb-reg">Regular</span></td><td>lerne</td><td>lernst</td><td>lernt</td><td>lernen</td><td>lernt</td></tr>
                            <tr><td><strong>machen</strong></td><td>hacer</td><td><span class="verb-reg">Regular</span></td><td>mache</td><td>machst</td><td>macht</td><td>machen</td><td>macht</td></tr>
                            <tr><td><strong>mieten</strong></td><td>rentar</td><td><span class="verb-reg">Regular (+e)*</span></td><td>miete</td><td>mietest</td><td>mietet</td><td>mieten</td><td>mietet</td></tr>
                            <tr><td><strong>möchten</strong></td><td>querer (condic.)</td><td><span class="verb-irreg">Modal/Irreg.</span></td><td>möchte</td><td>möchtest</td><td>möchte</td><td>möchten</td><td>möchtet</td></tr>
                            <tr><td><strong>sagen</strong></td><td>decir</td><td><span class="verb-reg">Regular</span></td><td>sage</td><td>sagst</td><td>sagt</td><td>sagen</td><td>sagt</td></tr>
                            <tr><td><strong>schreiben</strong></td><td>escribir</td><td><span class="verb-reg">Regular</span></td><td>schreibe</td><td>schreibst</td><td>schreibt</td><td>schreiben</td><td>schreibt</td></tr>
                            <tr><td><strong>spielen</strong></td><td>jugar / tocar</td><td><span class="verb-reg">Regular</span></td><td>spiele</td><td>spielst</td><td>spielt</td><td>spielen</td><td>spielt</td></tr>
                            <tr><td><strong>sprechen</strong></td><td>hablar</td><td><span class="verb-irreg">Irregular (e-&gt;i)</span></td><td>spreche</td><td>spr<span class="vowel-change">i</span>chst</td><td>spr<span class="vowel-change">i</span>cht</td><td>sprechen</td><td>sprecht</td></tr>
                            <tr><td><strong>trinken</strong></td><td>beber</td><td><span class="verb-reg">Regular</span></td><td>trinke</td><td>trinkst</td><td>trinkt</td><td>trinken</td><td>trinkt</td></tr>
                            <tr><td><strong>wohnen</strong></td><td>habitar</td><td><span class="verb-reg">Regular</span></td><td>wohne</td><td>wohnst</td><td>wohnt</td><td>wohnen</td><td>wohnt</td></tr>
                        </table>
                    </div>
                    <div class="note-box">
                        <strong>*(+e)*:</strong> Los verbos cuya raíz termina en -d o -t (como arbei<strong>t</strong>en o fin<strong>d</strong>en) agregan una 'e' extra antes de las terminaciones -st y -t por facilidad de pronunciación.<br>
                        <strong>*(-ß)**:</strong> Los verbos que terminan en -ß o -s (como hei<strong>ß</strong>en) solo toman una '-t' en lugar de '-st' para la persona 'du'.<br>
                        <hr>
                        <strong>💡 es gibt</strong> = hay (proviene del verbo *geben* pero solo se usa en esta forma invariable).<br>
                        <strong>💡 möchten</strong> = querer o desear. Implica una condición o cortesía (ej. "Me gustaría..."), por lo que es la forma ideal para pedir cosas educadamente.
                    </div>
                `
            }
        ]
    },
    {
        category: "4. Vocabulario Esencial",
        id: "cat-vocab",
        items: [
            {
                id: "saludos-despedidas",
                title: "Saludos, Despedidas y Expresiones de Cortesía",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>Hallo</strong> = Hola</div>
                        <div class="grid-item"><strong>Guten Morgen</strong> = Buenos días</div>
                        <div class="grid-item"><strong>Guten Tag</strong> = Buenos días / tardes</div>
                        <div class="grid-item"><strong>Guten Abend</strong> = Buenas tardes / noches</div>
                        <div class="grid-item"><strong>Gute Nacht</strong> = Buenas noches (dormir)</div>
                        <div class="grid-item"><strong>Tschüs(s)</strong> = Adiós / Bye</div>
                        <div class="grid-item"><strong>Auf Wiedersehen</strong> = Hasta luego</div>
                        <div class="grid-item"><strong>Auf Wiederhören</strong> = A volvernos a escuchar</div>
                        <div class="grid-item"><strong>Bis morgen</strong> = Hasta mañana</div>
                        <div class="grid-item"><strong>Bis später</strong> = Más tarde</div>
                        <div class="grid-item"><strong>Gleich</strong> = En un rato</div>
                        <div class="grid-item"><strong>Servus / Grüß dich</strong> = Saludos (Sur)</div>
                        <div class="grid-item"><strong>Hoi / Sali / Grüezi</strong> = Saludos (Suiza)</div>
                        <div class="grid-item"><strong>Adieu / Baba</strong> = Adiós (variantes)</div>
                        <div class="grid-item"><strong>Schöne Grüße</strong> = Bonitos saludos</div>
                        <div class="grid-item"><strong>Herzlichen Glückwunsch</strong> = Felicidades</div>
                        <div class="grid-item"><strong>Viel Erfolg</strong> = Mucho éxito</div>
                        <div class="grid-item"><strong>Gerne</strong> = Con gusto</div>
                        <div class="grid-item"><strong>Machs gut</strong> = Que estés bien</div>
                        <div class="grid-item"><strong>Toll / Prima / Super</strong> = Genial</div>
                        <div class="grid-item"><strong>Echt?</strong> = ¿Enserio?</div>
                    </div>
                `
            },
            {
                id: "preguntas",
                title: "Preguntas e Interrogativos (W-Fragen)",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>Wie?</strong> = ¿Cómo?</div>
                        <div class="grid-item"><strong>Wer?</strong> = ¿Quién?</div>
                        <div class="grid-item"><strong>Was?</strong> = ¿Qué?</div>
                        <div class="grid-item"><strong>Wo?</strong> = ¿Dónde?</div>
                        <div class="grid-item"><strong>Woher?</strong> = ¿De dónde?</div>
                        <div class="grid-item"><strong>Wann?</strong> = ¿Cuándo?</div>
                        <div class="grid-item"><strong>Warum?</strong> = ¿Por qué?</div>
                        <div class="grid-item"><strong>Welche?</strong> = ¿Cuál?</div>
                        <div class="grid-item"><strong>Wie viele?</strong> = ¿Cuántos?</div>
                        <div class="grid-item"><strong>Wie heißt du?</strong> = ¿Cómo te llamas?</div>
                        <div class="grid-item"><strong>Wie alt bist du?</strong> = ¿Qué edad tienes?</div>
                        <div class="grid-item"><strong>Wo liegt das?</strong> = ¿Dónde está eso?</div>
                    </div>
                    <h4>Preguntar por el estado de ánimo:</h4>
                    <div class="grid-list">
                        <div class="grid-item"><strong>Wie geht's Ihnen?</strong> = ¿Cómo le va a usted?</div>
                        <div class="grid-item"><strong>Wie geht's dir?</strong> = ¿Cómo te va a ti?</div>
                        <div class="grid-item"><strong>Mir geht's gut</strong> = Me va bien.</div>
                        <div class="grid-item"><strong>Es geht</strong> = Maso (más o menos).</div>
                        <div class="grid-item"><strong>Schlecht</strong> = Mal.</div>
                        <div class="grid-item"><strong>Warum nicht so gut?</strong> = ¿Por qué no muy bien?</div>
                    </div>
                `
            },
            {
                id: "info-personal",
                title: "Información Personal, Familia y Relaciones",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>die Frau, -en</strong> = Señora / Mujer</div>
                        <div class="grid-item"><strong>der Herr, -en</strong> = Señor / Hombre</div>
                        <div class="grid-item"><strong>der Name, -n</strong> = Nombre</div>
                        <div class="grid-item"><strong>der Vorname, -n</strong> = Nombre de pila</div>
                        <div class="grid-item"><strong>der Familienname, -n</strong> = Apellido</div>
                        <div class="grid-item"><strong>das Alter</strong> = Edad</div>
                        <div class="grid-item"><strong>der Familienstand</strong> = Estado civil</div>
                        <div class="grid-item"><strong>das Geburtsdatum</strong> = Fecha de nacimiento</div>
                        <div class="grid-item"><strong>die Adresse</strong> = Dirección</div>
                        <div class="grid-item"><strong>der Ausweis</strong> = Identificación</div>
                        <div class="grid-item"><strong>die Familie, -n</strong> = Familia</div>
                        <div class="grid-item"><strong>die Eltern (Pl.)</strong> = Padres</div>
                        <div class="grid-item"><strong>der Vater, ¨-</strong> = Papá</div>
                        <div class="grid-item"><strong>die Mutter, ¨-</strong> = Mamá</div>
                        <div class="grid-item"><strong>das Kind, -er</strong> = Niño / Hijo(a)</div>
                        <div class="grid-item"><strong>der Sohn, ¨-e</strong> = Hijo</div>
                        <div class="grid-item"><strong>die Tochter, ¨-</strong> = Hija</div>
                        <div class="grid-item"><strong>die Großeltern (Pl.)</strong> = Abuelos</div>
                        <div class="grid-item"><strong>der Großvater, ¨-</strong> = Abuelo</div>
                        <div class="grid-item"><strong>die Großmutter, ¨-</strong> = Abuela</div>
                        <div class="grid-item"><strong>der Enkel, -</strong> = Nieto</div>
                        <div class="grid-item"><strong>die Geschwister (Pl.)</strong> = Hermanos</div>
                        <div class="grid-item"><strong>der Bruder, ¨-</strong> = Hermano</div>
                        <div class="grid-item"><strong>die Schwester, -n</strong> = Hermana</div>
                        <div class="grid-item"><strong>der (Ehe)Mann, ¨-er</strong> = Esposo</div>
                        <div class="grid-item"><strong>die (Ehe)Frau, -en</strong> = Esposa</div>
                        <div class="grid-item"><strong>der Partner, -</strong> = Socio / Pareja</div>
                        <div class="grid-item"><strong>der Freund, -e</strong> = Amigo / Novio(a)</div>
                        <div class="grid-item"><strong>der Bekannte, -n</strong> = Conocido</div>
                        <div class="grid-item"><strong>die Tante, -n</strong> = Tía</div>
                        <div class="grid-item"><strong>ledig / verheiratet / geschieden</strong> = Soltero/Casado/Divorciado</div>
                    </div>
                    <div class="note-box">
                        <strong>💡 Ejemplo (Wer bin ich?):</strong><br>
                        <em>Ich habe einen Job als Lehrer in der Schweiz. Ich studiere Philosophie. Ich habe viele Bücher geschrieben. Ich komme aus Deutschland. Ich bin ein Mann. Ich bin tot. (Friedrich Nietzsche)</em>
                    </div>
                `
            },
            {
                id: "profesiones",
                title: "Profesiones, Trabajo y Educación",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>der Beruf, -e</strong> = Profesión</div>
                        <div class="grid-item"><strong>die Arbeit</strong> = El trabajo</div>
                        <div class="grid-item"><strong>der Arbeitsplatz, ¨-e</strong> = Lugar de trabajo</div>
                        <div class="grid-item"><strong>der Arbeitgeber, -</strong> = Empleador</div>
                        <div class="grid-item"><strong>die Ausbildung, -en</strong> = Formación</div>
                        <div class="grid-item"><strong>die Schule, -n</strong> = Escuela</div>
                        <div class="grid-item"><strong>die Universität, -en</strong> = Universidad</div>
                        <div class="grid-item"><strong>das Praktikum</strong> = Práctica</div>
                        <div class="grid-item"><strong>der Job, -s</strong> = Empleo</div>
                        <div class="grid-item"><strong>arbeiten als...</strong> = Trabajar como...</div>
                        <div class="grid-item"><strong>arbeitslos</strong> = Desempleado</div>
                        <div class="grid-item"><strong>der Architekt, -en</strong> = Arquitecto</div>
                        <div class="grid-item"><strong>der Arzt, ¨-e</strong> = Médico</div>
                        <div class="grid-item"><strong>der Friseur, -e</strong> = Estilista</div>
                        <div class="grid-item"><strong>der Ingenieur, -e</strong> = Ingeniero</div>
                        <div class="grid-item"><strong>der Journalist, -en</strong> = Periodista</div>
                        <div class="grid-item"><strong>der Kellner, -</strong> = Mesero</div>
                        <div class="grid-item"><strong>die Krankenschwester, -n</strong> = Enfermera</div>
                        <div class="grid-item"><strong>der Lehrer, -</strong> = Profesor</div>
                        <div class="grid-item"><strong>der Mechatroniker, -</strong> = Mecatrónico</div>
                        <div class="grid-item"><strong>der Student, -en</strong> = Estudiante (uni)</div>
                        <div class="grid-item"><strong>der Schüler, -</strong> = Alumno (colegio)</div>
                        <div class="grid-item"><strong>der Schauspieler, -</strong> = Actor</div>
                        <div class="grid-item"><strong>der Sekretär, -e</strong> = Secretario</div>
                        <div class="grid-item"><strong>der Verkäufer, -</strong> = Vendedor</div>
                    </div>
                `
            },
            {
                id: "casa-muebles",
                title: "La Casa, La Ciudad y Muebles",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>die Stadt, ¨-e</strong> = Ciudad</div>
                        <div class="grid-item"><strong>das Zentrum</strong> = Centro</div>
                        <div class="grid-item"><strong>die Straße, -n</strong> = Calle</div>
                        <div class="grid-item"><strong>die Hausnummer, -n</strong> = Número de casa</div>
                        <div class="grid-item"><strong>der Ort, -e</strong> = Lugar / ciudad</div>
                        <div class="grid-item"><strong>die PLZ</strong> = Código postal</div>
                        <div class="grid-item"><strong>der Hauptbahnhof</strong> = Estación principal</div>
                        <div class="grid-item"><strong>das Fundbüro</strong> = Objetos perdidos</div>
                        <div class="grid-item"><strong>das Zimmer, -</strong> = Habitación</div>
                        <div class="grid-item"><strong>die Küche</strong> = Cocina</div>
                        <div class="grid-item"><strong>das Badezimmer</strong> = Baño</div>
                        <div class="grid-item"><strong>das Wohnzimmer</strong> = Sala</div>
                        <div class="grid-item"><strong>das Esszimmer</strong> = Comedor</div>
                        <div class="grid-item"><strong>die Tür</strong> = Puerta</div>
                        <div class="grid-item"><strong>die Ecke</strong> = Esquina</div>
                        <div class="grid-item"><strong>die Möbel (Pl.)</strong> = Muebles</div>
                        <div class="grid-item"><strong>das Bett, -en</strong> = Cama</div>
                        <div class="grid-item"><strong>das Bild, -er</strong> = Cuadro</div>
                        <div class="grid-item"><strong>die Lampe, -n</strong> = Lámpara</div>
                        <div class="grid-item"><strong>der Schrank, ¨-e</strong> = Armario</div>
                        <div class="grid-item"><strong>der Sessel, -</strong> = Sillón</div>
                        <div class="grid-item"><strong>das Sofa, -s</strong> = Sofá</div>
                        <div class="grid-item"><strong>der Stuhl, ¨-e</strong> = Silla</div>
                        <div class="grid-item"><strong>der Tisch, -e</strong> = Mesa</div>
                        <div class="grid-item"><strong>der Teppich, -e</strong> = Tapete</div>
                        <div class="grid-item"><strong>das Kissen</strong> = Cojín</div>
                    </div>
                    <div class="note-box">
                        <strong>💡 Ejemplo (Itinerario Hannover - Total 44 €):</strong><br>
                        <strong>Erster Tag:</strong> Den Roten Faden entlanggehen (0€) und die Aegidienkirche und das Rathaus besuchen. Der Besuch des Bogenaufzugs kostet 5 Euro. Bootsfahrt auf dem Maschsee (20€).<br>
                        <strong>Zweiter Tag:</strong> Der Besuch der Herrenhäuser Gärten kostet 5 Euro und der Eintritt ins Sprengel Museum kostet 14 Euro.<br>
                        <strong>Dritter Tag:</strong> Den Eilenriedewald (0€) und den Tiergarten (0€) besuchen. Die Stadt Linden besuchen (0€).
                    </div>
                `
            },
            {
                id: "colores",
                title: "Colores (Farben) y Materiales (Materialien)",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>Blau</strong> = Azul</div>
                        <div class="grid-item"><strong>Braun</strong> = Café</div>
                        <div class="grid-item"><strong>Gelb</strong> = Amarillo</div>
                        <div class="grid-item"><strong>Grün</strong> = Verde</div>
                        <div class="grid-item"><strong>Orange</strong> = Naranja</div>
                        <div class="grid-item"><strong>Rot</strong> = Rojo</div>
                        <div class="grid-item"><strong>Weiß</strong> = Blanco</div>
                        <div class="grid-item"><strong>Schwarz</strong> = Negro</div>
                        <div class="grid-item"><strong>Grau</strong> = Gris</div>
                    </div>
                    <h4>Materiales:</h4>
                    <div class="grid-list">
                        <div class="grid-item"><strong>aus Glas</strong> = de vidrio</div>
                        <div class="grid-item"><strong>aus Holz</strong> = de madera</div>
                        <div class="grid-item"><strong>aus Metall</strong> = de metal</div>
                        <div class="grid-item"><strong>aus Papier</strong> = de papel</div>
                        <div class="grid-item"><strong>aus Plastik</strong> = de plástico</div>
                    </div>
                `
            },
            {
                id: "adjetivos",
                title: "Formas, Adjetivos y Descripciones",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>groß / klein</strong> = Grande / Pequeño</div>
                        <div class="grid-item"><strong>schön / hässlich</strong> = Bonito / Feo</div>
                        <div class="grid-item"><strong>hübsch</strong> = Guapo/a</div>
                        <div class="grid-item"><strong>kurz / lang</strong> = Corto / Largo</div>
                        <div class="grid-item"><strong>leicht / schwer</strong> = Ligero / Pesado</div>
                        <div class="grid-item"><strong>modern</strong> = Moderno</div>
                        <div class="grid-item"><strong>praktisch</strong> = Práctico</div>
                        <div class="grid-item"><strong>gut / schlecht</strong> = Bien / Mal</div>
                        <div class="grid-item"><strong>neu / alt</strong> = Nuevo / Viejo</div>
                        <div class="grid-item"><strong>richtig / falsch</strong> = Correcto / Falso</div>
                        <div class="grid-item"><strong>teuer / billig</strong> = Caro / Barato</div>
                        <div class="grid-item"><strong>hell / dunkel</strong> = Iluminado / Oscuro</div>
                        <div class="grid-item"><strong>ruhig</strong> = Tranquilo</div>
                        <div class="grid-item"><strong>krank</strong> = Enfermo</div>
                        <div class="grid-item"><strong>kaputt</strong> = Descompuesto / Roto</div>
                        <div class="grid-item"><strong>fertig</strong> = Listo</div>
                        <div class="grid-item"><strong>eckig</strong> = Cuadrangular</div>
                        <div class="grid-item"><strong>rund</strong> = Redondo</div>
                    </div>
                `
            },
            {
                id: "alimentos",
                title: "Alimentos y Bebidas (Essen & Trinken)",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>das Brot / Brötchen</strong> = pan / panecillo</div>
                        <div class="grid-item"><strong>der Käse</strong> = queso</div>
                        <div class="grid-item"><strong>die Marmelade</strong> = mermelada</div>
                        <div class="grid-item"><strong>der Saft</strong> = jugo</div>
                        <div class="grid-item"><strong>das Müsli</strong> = muesli</div>
                        <div class="grid-item"><strong>das Obst</strong> = fruta</div>
                        <div class="grid-item"><strong>die Erdbeeren</strong> = fresas</div>
                        <div class="grid-item"><strong>die Ananas</strong> = piña</div>
                        <div class="grid-item"><strong>der Schinken</strong> = jamón</div>
                        <div class="grid-item"><strong>der Thunfisch</strong> = atún</div>
                        <div class="grid-item"><strong>das Gemüse</strong> = verduras</div>
                        <div class="grid-item"><strong>der Teller</strong> = plato</div>
                        <div class="grid-item"><strong>das Glas</strong> = vaso</div>
                        <div class="grid-item"><strong>die Gabel</strong> = tenedor</div>
                        <div class="grid-item"><strong>der Löffel</strong> = cuchara</div>
                        <div class="grid-item"><strong>das Messer</strong> = cuchillo</div>
                        <div class="grid-item"><strong>die Flasche</strong> = botella</div>
                    </div>
                `
            },
            {
                id: "objetos",
                title: "Objetos Cotidianos",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>die Brille, -n</strong> = Lentes / Gafas</div>
                        <div class="grid-item"><strong>das (Wörter)Buch, ¨-er</strong> = (Diccionario) Libro</div>
                        <div class="grid-item"><strong>das Feuerzeug, -e</strong> = Encendedor</div>
                        <div class="grid-item"><strong>das Streichholz, ¨-er</strong> = Cerillo</div>
                        <div class="grid-item"><strong>der Fotoapparat, -e</strong> = Cámara de fotos</div>
                        <div class="grid-item"><strong>die Kette, -n</strong> = Cadena</div>
                        <div class="grid-item"><strong>der Ring, -e</strong> = Anillo</div>
                        <div class="grid-item"><strong>der Regenschirm, -e</strong> = Sombrilla</div>
                        <div class="grid-item"><strong>der Schlüssel, -</strong> = Llave</div>
                        <div class="grid-item"><strong>die Seife, -n</strong> = Jabón</div>
                        <div class="grid-item"><strong>die Tasche, -n</strong> = Bolsa / Portafolio</div>
                        <div class="grid-item"><strong>die Uhr, -en</strong> = Reloj</div>
                    </div>
                `
            },
            {
                id: "oficina",
                title: "La Oficina y Comunicación (Im Büro)",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>das Büro, -s</strong> = Oficina</div>
                        <div class="grid-item"><strong>der Kollege, -n</strong> = Colega</div>
                        <div class="grid-item"><strong>die Firma, Firmen</strong> = Empresa</div>
                        <div class="grid-item"><strong>der Computer / Laptop</strong> = Computadora</div>
                        <div class="grid-item"><strong>der Bildschirm, -e</strong> = Pantalla</div>
                        <div class="grid-item"><strong>die Maus, ¨-e</strong> = Ratón (Mouse)</div>
                        <div class="grid-item"><strong>der Drucker, -</strong> = Impresora</div>
                        <div class="grid-item"><strong>das Handy, -s</strong> = Celular</div>
                        <div class="grid-item"><strong>das Telefon, -e</strong> = Teléfono</div>
                        <div class="grid-item"><strong>die E-Mail, -s</strong> = Email</div>
                        <div class="grid-item"><strong>der Kalender, -</strong> = Calendario</div>
                        <div class="grid-item"><strong>das Notizbuch, ¨-er</strong> = Libreta</div>
                        <div class="grid-item"><strong>das Formular, -e</strong> = Formulario</div>
                        <div class="grid-item"><strong>die Rechnung, -en</strong> = Cuenta / Factura</div>
                        <div class="grid-item"><strong>die Briefmarke, -n</strong> = Timbre postal</div>
                        <div class="grid-item"><strong>der Kugelschreiber, -</strong> = Bolígrafo</div>
                        <div class="grid-item"><strong>der Bleistift, -e</strong> = Lápiz</div>
                        <div class="grid-item"><strong>der Termin, -e</strong> = Cita</div>
                    </div>
                `
            },
            {
                id: "dinero",
                title: "Dinero y Compras (Geld & Einkaufen)",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>das Geld</strong> = Dinero</div>
                        <div class="grid-item"><strong>die Geldbörse, -n</strong> = Monedero</div>
                        <div class="grid-item"><strong>der Euro / Cent</strong> = Euro / Centavo</div>
                        <div class="grid-item"><strong>der Preis, -e</strong> = Precio</div>
                        <div class="grid-item"><strong>das Angebot, -e</strong> = Oferta</div>
                        <div class="grid-item"><strong>das Sonderangebot</strong> = Oferta especial</div>
                        <div class="grid-item"><strong>das macht...</strong> = Eso hace... (al cobrar)</div>
                    </div>
                `
            },
            {
                id: "conectores",
                title: "Conectores, Preposiciones y Expresiones",
                content: `
                    <div class="grid-list">
                        <div class="grid-item"><strong>ja / nein</strong> = Sí / No</div>
                        <div class="grid-item"><strong>doch</strong> = ¡Claro que sí!</div>
                        <div class="grid-item"><strong>bitte / danke</strong> = Por favor / Gracias</div>
                        <div class="grid-item"><strong>Entschuldigung</strong> = Disculpa</div>
                        <div class="grid-item"><strong>Achtung!</strong> = ¡Cuidado!</div>
                        <div class="grid-item"><strong>die Hilfe, -n</strong> = Ayuda</div>
                        <div class="grid-item"><strong>das Problem</strong> = Problema</div>
                        <div class="grid-item"><strong>die Lösung</strong> = Solución</div>
                        <div class="grid-item"><strong>ein bisschen</strong> = Un poco</div>
                        <div class="grid-item"><strong>genau</strong> = Exactamente</div>
                        <div class="grid-item"><strong>nur</strong> = Solamente</div>
                        <div class="grid-item"><strong>wirklich</strong> = Verdaderamente</div>
                        <div class="grid-item"><strong>auch</strong> = También</div>
                        <div class="grid-item"><strong>sehr</strong> = Muy</div>
                        <div class="grid-item"><strong>und / oder / aber</strong> = Y / O / Pero</div>
                        <div class="grid-item"><strong>hier / heute / jetzt</strong> = Aquí / Hoy / Ahora</div>
                        <div class="grid-item"><strong>mit / ohne</strong> = Con / Sin</div>
                        <div class="grid-item"><strong>noch einmal</strong> = Otra vez</div>
                        <div class="grid-item"><strong>bei</strong> = para alguien / en</div>
                        <div class="grid-item"><strong>als</strong> = como (ej. als Lehrer)</div>
                        <div class="grid-item"><strong>aus</strong> = de (origen)</div>
                        <div class="grid-item"><strong>von</strong> = de (posesión)</div>
                        <div class="grid-item"><strong>bis</strong> = hasta</div>
                        <div class="grid-item"><strong>statt</strong> = en lugar de</div>
                        <div class="grid-item"><strong>zu</strong> = demasiado</div>
                        <div class="grid-item"><strong>ganz</strong> = bastante</div>
                        <div class="grid-item"><strong>gar nicht</strong> = para nada</div>
                        <div class="grid-item"><strong>schon</strong> = ya</div>
                        <div class="grid-item"><strong>noch nicht</strong> = aún no</div>
                        <div class="grid-item"><strong>fast</strong> = casi</div>
                        <div class="grid-item"><strong>manchmal</strong> = a veces</div>
                    </div>
                    <h4>Puntos Cardinales:</h4>
                    <div class="grid-list">
                        <div class="grid-item"><strong>Osten</strong> = Este</div>
                        <div class="grid-item"><strong>Westen</strong> = Oeste</div>
                        <div class="grid-item"><strong>Süden</strong> = Sur</div>
                        <div class="grid-item"><strong>Norden</strong> = Norte</div>
                    </div>
                `
            }
        ]
    },
    {
        category: "5. Números y Días",
        id: "cat-numeros",
        items: [
            {
                id: "numeros-dias",
                title: "Números y Días de la Semana",
                content: `
                    <h4>Números (0 al 29)</h4>
                    <table style="width:100%; text-align:left; margin-bottom: 20px;">
                        <tr><th>0 - 9</th><th>10 - 19</th><th>20 - 29</th></tr>
                        <tr><td><strong>0</strong> null</td><td><strong>10</strong> zehn</td><td><strong>20</strong> zwanzig</td></tr>
                        <tr><td><strong>1</strong> eins</td><td><strong>11</strong> elf</td><td><strong>21</strong> einundzwanzig</td></tr>
                        <tr><td><strong>2</strong> zwei</td><td><strong>12</strong> zwölf</td><td><strong>22</strong> zweiundzwanzig</td></tr>
                        <tr><td><strong>3</strong> drei</td><td><strong>13</strong> dreizehn</td><td><strong>23</strong> dreiundzwanzig</td></tr>
                        <tr><td><strong>4</strong> vier</td><td><strong>14</strong> vierzehn</td><td><strong>24</strong> vierundzwanzig</td></tr>
                        <tr><td><strong>5</strong> fünf</td><td><strong>15</strong> fünfzehn</td><td><strong>25</strong> fünfundzwanzig</td></tr>
                        <tr><td><strong>6</strong> sechs</td><td><strong>16</strong> sechzehn</td><td><strong>26</strong> sechsundzwanzig</td></tr>
                        <tr><td><strong>7</strong> sieben</td><td><strong>17</strong> siebzehn</td><td><strong>27</strong> siebenundzwanzig</td></tr>
                        <tr><td><strong>8</strong> acht</td><td><strong>18</strong> achtzehn</td><td><strong>28</strong> achtundzwanzig</td></tr>
                        <tr><td><strong>9</strong> neun</td><td><strong>19</strong> neunzehn</td><td><strong>29</strong> neunundzwanzig</td></tr>
                    </table>

                    <h4>Números (30 al 59)</h4>
                    <table style="width:100%; text-align:left; margin-bottom: 20px;">
                        <tr><th>30 - 39</th><th>40 - 49</th><th>50 - 59</th></tr>
                        <tr><td><strong>30</strong> dreißig</td><td><strong>40</strong> vierzig</td><td><strong>50</strong> fünfzig</td></tr>
                        <tr><td><strong>31</strong> einunddreißig</td><td><strong>41</strong> einundvierzig</td><td><strong>51</strong> einundfünfzig</td></tr>
                        <tr><td><strong>32</strong> zweiunddreißig</td><td><strong>42</strong> zweiundvierzig</td><td><strong>52</strong> zweiundfünfzig</td></tr>
                        <tr><td><strong>33</strong> dreiunddreißig</td><td><strong>43</strong> dreiundvierzig</td><td><strong>53</strong> dreiundfünfzig</td></tr>
                        <tr><td><strong>34</strong> vierunddreißig</td><td><strong>44</strong> vierundvierzig</td><td><strong>54</strong> vierundfünfzig</td></tr>
                        <tr><td><strong>35</strong> fünfunddreißig</td><td><strong>45</strong> fünfundvierzig</td><td><strong>55</strong> fünfundfünfzig</td></tr>
                        <tr><td><strong>36</strong> sechsunddreißig</td><td><strong>46</strong> sechsundvierzig</td><td><strong>56</strong> sechsundfünfzig</td></tr>
                        <tr><td><strong>37</strong> siebenunddreißig</td><td><strong>47</strong> siebenundvierzig</td><td><strong>57</strong> siebenundfünfzig</td></tr>
                        <tr><td><strong>38</strong> achtunddreißig</td><td><strong>48</strong> achtundvierzig</td><td><strong>58</strong> achtundfünfzig</td></tr>
                        <tr><td><strong>39</strong> neununddreißig</td><td><strong>49</strong> neunundvierzig</td><td><strong>59</strong> neunundfünfzig</td></tr>
                    </table>

                    <h4>Números (60 al 89)</h4>
                    <table style="width:100%; text-align:left; margin-bottom: 20px;">
                        <tr><th>60 - 69</th><th>70 - 79</th><th>80 - 89</th></tr>
                        <tr><td><strong>60</strong> sechzig</td><td><strong>70</strong> siebzig</td><td><strong>80</strong> achtzig</td></tr>
                        <tr><td><strong>61</strong> einundsechzig</td><td><strong>71</strong> einundsiebzig</td><td><strong>81</strong> einundachtzig</td></tr>
                        <tr><td><strong>62</strong> zweiundsechzig</td><td><strong>72</strong> zweiundsiebzig</td><td><strong>82</strong> zweiundachtzig</td></tr>
                        <tr><td><strong>63</strong> dreiundsechzig</td><td><strong>73</strong> dreiundsiebzig</td><td><strong>83</strong> dreiundachtzig</td></tr>
                        <tr><td><strong>64</strong> vierundsechzig</td><td><strong>74</strong> vierundsiebzig</td><td><strong>84</strong> vierundachtzig</td></tr>
                        <tr><td><strong>65</strong> fünfundsechzig</td><td><strong>75</strong> fünfundsiebzig</td><td><strong>85</strong> fünfundachtzig</td></tr>
                        <tr><td><strong>66</strong> sechsundsechzig</td><td><strong>76</strong> sechsundsiebzig</td><td><strong>86</strong> sechsundachtzig</td></tr>
                        <tr><td><strong>67</strong> siebenundsechzig</td><td><strong>77</strong> siebenundsiebzig</td><td><strong>87</strong> siebenundachtzig</td></tr>
                        <tr><td><strong>68</strong> achtundsechzig</td><td><strong>78</strong> achtundsiebzig</td><td><strong>88</strong> achtundachtzig</td></tr>
                        <tr><td><strong>69</strong> neunundsechzig</td><td><strong>79</strong> neunundsiebzig</td><td><strong>89</strong> neunundachtzig</td></tr>
                    </table>

                    <h4>90 al 1 000 000</h4>
                    <table style="width:100%; text-align:left; margin-bottom: 20px;">
                        <tr><th>90 - 99</th><th>Números grandes (100+)</th></tr>
                        <tr><td><strong>90</strong> neunzig</td><td><strong>100</strong> einhundert</td></tr>
                        <tr><td><strong>91</strong> einundneunzig</td><td><strong>200</strong> zweihundert</td></tr>
                        <tr><td><strong>92</strong> zweiundneunzig</td><td><strong>357</strong> dreihundertsiebenundfünfzig</td></tr>
                        <tr><td><strong>93</strong> dreiundneunzig</td><td><strong>1000</strong> eintausend</td></tr>
                        <tr><td><strong>94</strong> vierundneunzig</td><td><strong>2000</strong> zweitausend</td></tr>
                        <tr><td><strong>95</strong> fünfundneunzig</td><td><strong>3764</strong> dreitausendsiebenhundertvierundsechzig</td></tr>
                        <tr><td><strong>96</strong> sechsundneunzig</td><td><strong>1 000 000</strong> eine Million</td></tr>
                        <tr><td><strong>97</strong> siebenundneunzig</td><td></td></tr>
                        <tr><td><strong>98</strong> achtundneunzig</td><td></td></tr>
                        <tr><td><strong>99</strong> neunundneunzig</td><td></td></tr>
                    </table>

                    <div class="note-box">
                        <strong>💡 Regla de oro para formar números:</strong><br>
                        A partir del 21 y hasta el 99, los números se leen "al revés" que en español. Primero las unidades y luego las decenas, unidos por la palabra <strong>"und"</strong> (y).<br>
                        <em>Ejemplo:</em> 21 = <strong>ein</strong> + <strong>und</strong> + <strong>zwanzig</strong> (uno y veinte).<br><br>
                        Para números grandes, las centenas/millares van en orden normal, pero el final sigue la regla invertida.<br>
                        <em>Ejemplo:</em> 357 = <strong>dreihundert</strong> + <strong>sieben</strong> + <strong>und</strong> + <strong>fünfzig</strong> -> dreihundertsiebenundfünfzig.
                    </div>
                    <h4>Días de la semana</h4>
                    <div class="grid-list">
                        <div class="grid-item"><strong>Montag</strong> = Lunes</div>
                        <div class="grid-item"><strong>Dienstag</strong> = Martes</div>
                        <div class="grid-item"><strong>Mittwoch</strong> = Miércoles</div>
                        <div class="grid-item"><strong>Donnerstag</strong> = Jueves</div>
                        <div class="grid-item"><strong>Freitag</strong> = Viernes</div>
                        <div class="grid-item"><strong>Samstag</strong> = Sábado</div>
                        <div class="grid-item"><strong>Sonntag</strong> = Domingo</div>
                        <div class="grid-item"><strong>der Tag</strong> = Día</div>
                        <div class="grid-item"><strong>Heute</strong> = Hoy</div>
                    </div>
                `
            }
        ]
    },
    {
        category: "Lecturas y Textos",
        icon: "📖",
        items: [
            {
                id: "lectura-1",
                title: "1. Lukas aus München",
                content: `
                    <div class="note-box" style="margin-bottom: 20px; font-size: 1.1rem; line-height: 1.6;">
                        <strong>Hallo, ich bin Lukas.</strong> Ich bin 28 Jahre alt und ich wohne in München. Ich arbeite als Architekt. Meine Hobbys sind Fußball spielen und Musik hören. Ich habe eine kleine Schwester, sie heißt Anna und studiert in Berlin. Am Wochenende besuche ich oft meine Großeltern.
                    </div>
                    <h4>Preguntas de Comprensión:</h4>
                    <ul style="list-style: none; padding: 0; font-size: 1.05rem; line-height: 1.8;">
                        <li>✅ Lukas trabaja como arquitecto.</li>
                        <li>✅ La hermana de Lukas se llama Anna.</li>
                        <li>✅ Lukas visita a sus abuelos los fines de semana.</li>
                        <li>❌ Lukas vive en Berlín.</li>
                    </ul>
                `
            },
            {
                id: "lectura-2",
                title: "2. El fin de semana",
                content: `
                    <div class="note-box" style="margin-bottom: 20px; font-size: 1.1rem; line-height: 1.6;">
                        <strong>Heute ist Samstag.</strong> Am Morgen gehe ich in den Supermarkt, denn ich brauche Äpfel, Brot und Milch. Um 14 Uhr treffe ich meinen Freund Thomas im Café am Hauptbahnhof. Danach gehen wir ins Kino. Der Film beginnt um 16:30 Uhr.
                    </div>
                    <h4>Preguntas de Comprensión:</h4>
                    <ul style="list-style: none; padding: 0; font-size: 1.05rem; line-height: 1.8;">
                        <li>✅ La persona necesita comprar manzanas, pan y leche.</li>
                        <li>✅ El largometraje comienza a las cuatro y media.</li>
                        <li>❌ Se encontrará con su amigo Thomas en el aeropuerto.</li>
                        <li>❌ Hoy es domingo.</li>
                    </ul>
                `
            }
        ]
    }
];
