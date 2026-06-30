let currentQuestionIndex = 0;
let selectedAnswer = null;
let filteredQuizData = [];

const globalDictionary = {};

function addToDictionary(de, es) {
    let cleanDe = de.replace(/^(der|die|das)\s+/i, '').replace(/,.*/, '').trim().toLowerCase();
    const words = cleanDe.split(/\s*\/\s*/);
    words.forEach(w => {
        if (w.length > 2) {
            globalDictionary[w] = es;
            // Also add individual words of a phrase (e.g. "aus papier" -> "papier")
            if (w.includes(' ')) {
                w.split(' ').forEach(subWord => {
                    if (subWord.length > 2) globalDictionary[subWord] = es;
                });
            }
        }
    });
}

function injectHints(text) {
    if (!text) return text;
    // Replace standalone words with hint-words, ignoring words inside HTML tags
    // Since text here is mostly plain text, simple word boundary works nicely.
    return text.replace(/\b([a-zA-ZßäöüÄÖÜ]+)\b/g, (match, word) => {
        const lower = word.toLowerCase();
        if (globalDictionary[lower]) {
            return `<span class="hint-word" data-hint="${globalDictionary[lower]}">${word}</span>`;
        }
        return word;
    });
}

let selectedTopic = 'all';
let selectedMode = 'all';

const gameContainer = document.getElementById('game-container');
const checkBtn = document.getElementById('check-btn');
const progressBar = document.getElementById('progress-bar');
const exitBtn = document.getElementById('exit-btn');

// Nav elements
const navGames = document.getElementById('nav-games');
const navWiki = document.getElementById('nav-wiki');
const gameView = document.getElementById('game-view');
const wikiView = document.getElementById('wiki-view');

navGames.addEventListener('click', () => {
    navGames.classList.add('active');
    navWiki.classList.remove('active');
    gameView.classList.remove('hidden');
    wikiView.classList.add('hidden');
});

navWiki.addEventListener('click', () => {
    navWiki.classList.add('active');
    navGames.classList.remove('active');
    wikiView.classList.remove('hidden');
    gameView.classList.add('hidden');
});

if (exitBtn) {
    exitBtn.addEventListener('click', () => {
        renderGameMenu();
    });
}

function loadQuestion() {
    if (currentQuestionIndex >= filteredQuizData.length) {
        gameContainer.innerHTML = `<h2>¡Lección completada!</h2><p>Has practicado muy bien.</p><br><button id="back-to-menu" class="btn btn-primary" style="margin-top:20px;">Volver al Menú</button>`;
        checkBtn.style.display = 'none';
        document.getElementById('back-to-menu').addEventListener('click', renderGameMenu);
        return;
    }

    const q = filteredQuizData[currentQuestionIndex];
    selectedAnswer = null;
    checkBtn.disabled = true;
    checkBtn.style.display = 'inline-block';
    checkBtn.style.backgroundColor = '';
    checkBtn.textContent = 'Comprobar';
    checkBtn.className = 'btn btn-primary';

    // Update progress
    progressBar.style.width = `${(currentQuestionIndex / filteredQuizData.length) * 100}%`;
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1} / ${filteredQuizData.length}`;

    if (q.type === 'multiple_choice') {
        renderMultipleChoice(q);
    } else if (q.type === 'fill_in_blank') {
        renderFillInBlank(q);
    } else if (q.type === 'match_pairs') {
        renderMatchPairs(q);
    } else if (q.type === 'word_search') {
        renderWordSearch(q);
    } else if (q.type === 'reading') {
        renderReading(q);
    } else if (q.type === 'true_false') {
        renderTrueFalse(q);
    } else if (q.type === 'gender') {
        renderGender(q);
    } else if (q.type === 'sentence_builder') {
        renderSentenceBuilder(q);
    }
}

function renderMultipleChoice(q) {
    let html = `<h2 class="question-title">${q.question}</h2>`;
    html += `<div class="options-grid">`;
    q.options.forEach((opt, index) => {
        html += `<button class="option-btn" data-index="${index}">${injectHints(opt)}</button>`;
    });
    html += `</div>`;
    gameContainer.innerHTML = html;

    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedAnswer = q.options[btn.dataset.index];
            checkBtn.disabled = false;
        });
    });
}

function renderFillInBlank(q) {
    // text will have ___ for blank
    const parts = q.text.split('___');
    let html = `<h2 class="question-title">${q.question}</h2>`;
    html += `<p style="font-size:0.9rem; color:var(--gray-dark); margin-bottom:20px;">
                <em>💡 Nota: El sistema reconoce diéresis (ä, ö, ü) y ß. Si no tienes el teclado, puedes usar ae, oe, ue, ss, o simplemente a, o, u. (ej. 12: zwölf -> zwoelf -> zwolf)</em>
             </p>`;
    html += `<div class="fill-blank-container">`;
    html += `${injectHints(parts[0])} <input type="text" class="blank-input" id="blank-input" autocomplete="off"> ${injectHints(parts[1] || '')}`;
    html += `</div>`;
    gameContainer.innerHTML = html;

    const input = document.getElementById('blank-input');
    input.addEventListener('input', (e) => {
        selectedAnswer = e.target.value.trim();
        checkBtn.disabled = selectedAnswer.length === 0;
    });
    // Add enter key listener
    input.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' && !checkBtn.disabled) {
            checkBtn.click();
        }
    });
    input.focus();
}

function renderTrueFalse(q) {
    let html = `<h2 class="question-title">${q.question}</h2>`;
    html += `<div style="text-align:center; font-size:1.4rem; padding: 25px; border-radius:12px; background:var(--gray-light); margin-bottom:30px; border: 2px solid #e5e5e5;">
                ${q.text}
             </div>`;
    html += `<div style="display:flex; gap:15px; max-width: 400px; margin: 0 auto;">
                <button class="option-btn tf-btn" style="flex:1; text-align: center; font-size: 1.2rem;" data-val="Verdadero">Verdadero</button>
                <button class="option-btn tf-btn" style="flex:1; text-align: center; font-size: 1.2rem;" data-val="Falso">Falso</button>
             </div>`;
    gameContainer.innerHTML = html;
    
    const btns = document.querySelectorAll('.tf-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedAnswer = btn.dataset.val;
            checkBtn.disabled = false;
        });
    });
}

function renderGender(q) {
    let html = `<h2 class="question-title">${q.question}</h2>`;
    html += `<div style="text-align:center; font-size:2.5rem; padding: 40px; border-radius:12px; background:white; margin-bottom:30px; font-weight:900; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                ${q.text}
                <div style="font-size:1.2rem; color:var(--gray-dark); font-weight:normal; margin-top:10px;">(${q.es})</div>
             </div>`;
    html += `<div style="display:flex; gap:15px; max-width: 500px; margin: 0 auto;">
                <button class="option-btn gender-btn" style="flex:1; text-align:center; font-size: 1.5rem; border-color: #2196F3; color: #2196F3;" data-val="der">DER</button>
                <button class="option-btn gender-btn" style="flex:1; text-align:center; font-size: 1.5rem; border-color: #E91E63; color: #E91E63;" data-val="die">DIE</button>
                <button class="option-btn gender-btn" style="flex:1; text-align:center; font-size: 1.5rem; border-color: #4CAF50; color: #4CAF50;" data-val="das">DAS</button>
             </div>`;
    gameContainer.innerHTML = html;
    
    const btns = document.querySelectorAll('.gender-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => { 
                b.classList.remove('selected'); 
                b.style.backgroundColor = 'transparent'; 
                b.style.color = b.style.borderColor; // Restore original color
            });
            btn.classList.add('selected');
            
            // Colores especiales de seleccion
            if(btn.dataset.val === 'der') { btn.style.backgroundColor = '#E3F2FD'; btn.style.color = '#1565C0'; }
            if(btn.dataset.val === 'die') { btn.style.backgroundColor = '#FCE4EC'; btn.style.color = '#C2185B'; }
            if(btn.dataset.val === 'das') { btn.style.backgroundColor = '#E8F5E9'; btn.style.color = '#2E7D32'; }
            
            selectedAnswer = btn.dataset.val;
            checkBtn.disabled = false;
        });
    });
}

function renderSentenceBuilder(q) {
    let html = `<h2 class="question-title">${q.question}</h2>`;
    html += `<div class="sb-answer-box" style="min-height: 60px; border-bottom: 2px solid var(--gray-dark); margin-bottom: 30px; display: flex; flex-wrap: wrap; gap: 10px; align-items: flex-end; padding-bottom: 10px;"></div>`;
    html += `<div class="sb-words-box" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"></div>`;
    gameContainer.innerHTML = html;
    
    const words = q.text.split(' ');
    const shuffled = shuffleArray([...words]);
    
    const wordsBox = document.querySelector('.sb-words-box');
    const ansBox = document.querySelector('.sb-answer-box');
    
    shuffled.forEach((w) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn sb-word-btn';
        btn.style.cssText = 'padding: 10px 15px; font-size: 1.2rem; border-color: var(--gray-light); margin: 0;';
        btn.innerHTML = injectHints(w);
        btn.dataset.word = w;
        
        btn.addEventListener('click', function() {
            if (this.parentElement === wordsBox) {
                ansBox.appendChild(this);
            } else {
                wordsBox.appendChild(this);
            }
            
            selectedAnswer = Array.from(ansBox.children).map(b => b.dataset.word).join(' ');
            checkBtn.disabled = (ansBox.children.length !== words.length);
        });
        
        wordsBox.appendChild(btn);
    });
}

function shuffleArray(array) {
    let copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

let pairsState = {
    selectedLeft: null,
    selectedRight: null,
    matchedCount: 0,
    totalPairs: 0
};

function renderMatchPairs(q) {
    pairsState.matchedCount = 0;
    pairsState.totalPairs = q.pairs.length;
    
    let html = `<h2 class="question-title">${q.question}</h2>`;
    html += `<div class="match-pairs-container">`;
    
    let leftColumn = [];
    let rightColumn = [];
    
    q.pairs.forEach((p, i) => {
        leftColumn.push({ text: p.de, id: `pair-${i}`, col: 'left' });
        rightColumn.push({ text: p.es, id: `pair-${i}`, col: 'right' });
    });
    
    leftColumn = shuffleArray(leftColumn);
    rightColumn = shuffleArray(rightColumn);
    
    html += `<div class="pairs-col left-col">`;
    leftColumn.forEach(item => {
        html += `<button class="pair-btn" data-id="${item.id}" data-col="${item.col}">${item.text}</button>`;
    });
    html += `</div>`;
    
    html += `<div class="pairs-col right-col">`;
    rightColumn.forEach(item => {
        html += `<button class="pair-btn" data-id="${item.id}" data-col="${item.col}">${item.text}</button>`;
    });
    html += `</div>`;
    html += `</div>`;
    
    gameContainer.innerHTML = html;
    checkBtn.style.display = 'none'; // hide until complete

    const buttons = document.querySelectorAll('.pair-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('matched')) return;
            
            const col = btn.dataset.col;
            
            if (col === 'left') {
                document.querySelectorAll('.left-col .pair-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                pairsState.selectedLeft = btn;
            } else {
                document.querySelectorAll('.right-col .pair-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                pairsState.selectedRight = btn;
            }
            
            if (pairsState.selectedLeft && pairsState.selectedRight) {
                const idLeft = pairsState.selectedLeft.dataset.id;
                const idRight = pairsState.selectedRight.dataset.id;
                
                if (idLeft === idRight) {
                    // Match!
                    pairsState.selectedLeft.classList.add('matched');
                    pairsState.selectedLeft.classList.remove('selected');
                    pairsState.selectedRight.classList.add('matched');
                    pairsState.selectedRight.classList.remove('selected');
                    
                    pairsState.matchedCount++;
                    pairsState.selectedLeft = null;
                    pairsState.selectedRight = null;
                    
                    if (pairsState.matchedCount === pairsState.totalPairs) {
                        checkBtn.style.display = 'inline-block';
                        checkBtn.textContent = 'Continuar';
                        checkBtn.disabled = false;
                        checkBtn.style.backgroundColor = '#58cc02';
                    }
                } else {
                    // Error
                    const l = pairsState.selectedLeft;
                    const r = pairsState.selectedRight;
                    l.classList.add('shake', 'error-state');
                    r.classList.add('shake', 'error-state');
                    
                    setTimeout(() => {
                        l.classList.remove('shake', 'error-state', 'selected');
                        r.classList.remove('shake', 'error-state', 'selected');
                    }, 500);
                    
                    pairsState.selectedLeft = null;
                    pairsState.selectedRight = null;
                }
            }
        });
    });
}

// WORD SEARCH LOGIC
let wordSearchState = {
    wordsToFind: [],
    wordsFound: [],
    grid: [],
    selectedCells: []
};

function generateWordSearch(words, size) {
    const grid = Array(size).fill(null).map(() => Array(size).fill(''));
    const directions = [ [0, 1], [1, 0], [1, 1], [-1, 1], [1, -1] ];
    
    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        while (!placed && attempts < 100) {
            attempts++;
            const dir = directions[Math.floor(Math.random() * directions.length)];
            const r = Math.floor(Math.random() * size);
            const c = Math.floor(Math.random() * size);
            
            let canPlace = true;
            for (let i = 0; i < word.length; i++) {
                const nr = r + i * dir[0];
                const nc = c + i * dir[1];
                if (nr < 0 || nr >= size || nc < 0 || nc >= size) {
                    canPlace = false; break;
                }
                if (grid[nr][nc] !== '' && grid[nr][nc] !== word[i]) {
                    canPlace = false; break;
                }
            }
            if (canPlace) {
                for (let i = 0; i < word.length; i++) {
                    grid[r + i * dir[0]][c + i * dir[1]] = word[i];
                }
                placed = true;
            }
        }
    });
    
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }
    return grid;
}

function renderWordSearch(q) {
    const size = 12;
    wordSearchState.wordsToFind = [...q.words];
    wordSearchState.wordsFound = [];
    wordSearchState.grid = generateWordSearch(q.words, size);
    wordSearchState.selectedCells = [];
    
    let html = `<h2 class="question-title">${injectHints(q.question)}</h2>`;
    html += `<div class="ws-words-left"><strong>Por encontrar:</strong> <span id="ws-words-list">${q.words.join(', ')}</span></div>`;
    html += `<p style="font-size:0.9rem; color:var(--gray-dark);">Haz clic en las letras una por una para formar las palabras.</p>`;
    html += `<div class="ws-grid">`;
    
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            html += `<div class="ws-cell" data-r="${r}" data-c="${c}">${wordSearchState.grid[r][c]}</div>`;
        }
    }
    
    html += `</div>`;
    gameContainer.innerHTML = html;
    checkBtn.style.display = 'none';
    
    const cells = document.querySelectorAll('.ws-cell');
    
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.classList.contains('found')) return;
            
            if (cell.classList.contains('selected')) {
                cell.classList.remove('selected');
                wordSearchState.selectedCells = wordSearchState.selectedCells.filter(c => c !== cell);
            } else {
                cell.classList.add('selected');
                wordSearchState.selectedCells.push(cell);
            }
            
            const selectedWord = wordSearchState.selectedCells.map(c => c.textContent).join('');
            const reversedWord = selectedWord.split('').reverse().join('');
            
            let foundWord = null;
            if (wordSearchState.wordsToFind.includes(selectedWord)) foundWord = selectedWord;
            else if (wordSearchState.wordsToFind.includes(reversedWord)) foundWord = reversedWord;
            
            if (foundWord) {
                // Word found!
                wordSearchState.selectedCells.forEach(c => {
                    c.classList.remove('selected');
                    c.classList.add('found');
                });
                wordSearchState.wordsFound.push(foundWord);
                wordSearchState.wordsToFind = wordSearchState.wordsToFind.filter(w => w !== foundWord);
                wordSearchState.selectedCells = []; // reset selection
                
                document.getElementById('ws-words-list').textContent = wordSearchState.wordsToFind.join(', ');
                
                if (wordSearchState.wordsToFind.length === 0) {
                    checkBtn.style.display = 'inline-block';
                    checkBtn.textContent = 'Continuar';
                    checkBtn.disabled = false;
                    checkBtn.style.backgroundColor = '#58cc02';
                }
            }
        });
    });
}

// READING COMPREHENSION LOGIC
let readingAnswers = [];
function renderReading(q) {
    let html = `<h2 class="question-title">${q.question}</h2>`;
    html += `<div class="reading-box" style="background:#f7f7f7; padding:20px; border-radius:12px; margin-bottom:25px; font-size:1.15rem; line-height:1.6; border: 2px solid var(--gray-light);">
                ${injectHints(q.text)}
             </div>`;
    
    html += `<div class="reading-questions">`;
    q.questions.forEach((sq, i) => {
        html += `<div class="reading-q-item" style="margin-bottom:20px;">
                    <p style="margin: 0 0 10px 0; font-weight:bold; font-size: 1.1rem;">${i+1}. ${sq.q}</p>
                    <div style="display:flex; gap:10px;">
                        <button class="btn btn-outline tf-btn" style="flex:1;" data-index="${i}" data-val="Verdadero">Verdadero</button>
                        <button class="btn btn-outline tf-btn" style="flex:1;" data-index="${i}" data-val="Falso">Falso</button>
                    </div>
                 </div>`;
    });
    html += `</div>`;
    
    gameContainer.innerHTML = html;
    
    readingAnswers = new Array(q.questions.length).fill(null);
    checkBtn.style.display = 'inline-block';
    checkBtn.disabled = true;
    
    const btns = document.querySelectorAll('.tf-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.dataset.index;
            const val = btn.dataset.val;
            
            btn.parentElement.querySelectorAll('.tf-btn').forEach(b => {
                b.classList.remove('selected');
                b.style.backgroundColor = 'transparent';
                b.style.color = 'var(--text)';
                b.style.borderColor = 'var(--gray-light)';
            });
            
            btn.classList.add('selected');
            btn.style.borderColor = 'var(--primary)';
            btn.style.backgroundColor = '#ddf4ff';
            btn.style.color = '#1cb0f6';
            
            readingAnswers[index] = val;
            
            if (!readingAnswers.includes(null)) {
                checkBtn.disabled = false;
            }
        });
    });
}

checkBtn.addEventListener('click', () => {
    if (checkBtn.textContent === 'Continuar') {
        currentQuestionIndex++;
        loadQuestion();
        return;
    }

    const q = filteredQuizData[currentQuestionIndex];
    let isCorrect = false;

    if (q.type === 'multiple_choice') {
        isCorrect = selectedAnswer === q.correctAnswer;
    } else if (q.type === 'fill_in_blank') {
        let cleanUser = selectedAnswer.toLowerCase().trim();
        // Remove plural suffixes like ", -en" or ", ¨-" by splitting at comma
        let cleanCorrect = q.correctAnswer.toLowerCase().split(',')[0].trim();
        
        let articlelessUser = cleanUser.replace(/^(der|die|das)\s+/g, '');
        let articlelessCorrect = cleanCorrect.replace(/^(der|die|das)\s+/g, '');
        
        // 1. Exact match (allows with or without article)
        if (cleanUser === cleanCorrect || articlelessUser === articlelessCorrect) {
            isCorrect = true;
        } else {
            // 2. Standard German replacement (ae, oe, ue, ss)
            let alt1 = articlelessCorrect.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
            // 3. Simple stripped replacement (a, o, u, ss) for maximum leniency
            let alt2 = articlelessCorrect.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
            
            isCorrect = (articlelessUser === alt1 || articlelessUser === alt2);
        }
    } else if (q.type === 'match_pairs') {
        isCorrect = true; // Handled internally
    } else if (q.type === 'word_search') {
        isCorrect = (wordSearchState.wordsToFind.length === 0);
    } else if (q.type === 'reading') {
        isCorrect = true;
        q.questions.forEach((sq, i) => {
            const itemDiv = document.querySelectorAll('.reading-q-item')[i];
            if (readingAnswers[i] !== sq.ans) {
                isCorrect = false;
                itemDiv.style.color = 'var(--danger)';
                const btn = itemDiv.querySelector(`.tf-btn.selected`);
                if(btn) {
                    btn.style.backgroundColor = '#ffdfe0';
                    btn.style.borderColor = 'var(--danger)';
                    btn.style.color = 'var(--danger)';
                }
            } else {
                itemDiv.style.color = 'var(--primary)';
            }
        });
    } else if (q.type === 'true_false') {
        isCorrect = selectedAnswer === q.correctAnswer;
    } else if (q.type === 'gender') {
        isCorrect = selectedAnswer === q.correctAnswer;
    } else if (q.type === 'sentence_builder') {
        isCorrect = selectedAnswer === q.correctAnswer;
    }

    if (isCorrect) {
        checkBtn.textContent = 'Continuar';
        checkBtn.style.backgroundColor = '#58cc02';
        // Add some correct styling to UI
        if(['multiple_choice', 'true_false', 'gender'].includes(q.type)) {
            document.querySelector('.option-btn.selected')?.classList.add('correct-state');
        } else if (q.type === 'sentence_builder') {
            document.querySelector('.sb-answer-box').style.borderColor = '#58cc02';
            document.querySelectorAll('.sb-answer-box .sb-word-btn').forEach(b => b.classList.add('correct-state'));
        }
    } else {
        gameContainer.classList.add('shake');
        setTimeout(() => gameContainer.classList.remove('shake'), 500);
        
        q.failures = (q.failures || 0) + 1;
        
        if (q.failures >= 3 && q.type === 'multiple_choice') {
            const titleEl = document.querySelector('.question-title');
            if (titleEl && !titleEl.querySelector('.hint-word')) {
                const match = titleEl.innerHTML.match(/'([^']+)'/);
                if (match) {
                    const spanishWord = match[1];
                    titleEl.innerHTML = titleEl.innerHTML.replace(
                        `'${spanishWord}'`, 
                        `'<span class="hint-word" data-hint="${q.correctAnswer}">${spanishWord}</span>'`
                    );
                }
            }
        }
        
        if (q.type === 'multiple_choice' || q.type === 'fill_in_blank') {
            alert(`Incorrecto. La respuesta correcta es: ${q.correctAnswer}`);
        } else if (q.type === 'reading') {
            alert(`Hay respuestas incorrectas, revisa cuáles se marcaron en rojo.`);
        }
        
        // Disable advancing so the user is forced to correct their answer
        if (q.type === 'fill_in_blank') {
            const input = document.getElementById('blank-input');
            if (input) {
                input.value = '';
                input.focus();
                checkBtn.disabled = true;
            }
        }
    }
});

// Render Wiki
const wikiContentContainer = document.getElementById('wiki-content');

function renderWiki() {
    wikiContentContainer.innerHTML = '';
    const tocList = document.getElementById('toc-list');
    if (tocList) tocList.innerHTML = '';

    wikiData.forEach(category => {
        // Create category title
        const catTitle = document.createElement('h2');
        catTitle.className = 'category-title';
        catTitle.id = category.id;
        catTitle.textContent = category.category;
        wikiContentContainer.appendChild(catTitle);

        // Add to TOC
        if (tocList) {
            const tocCat = document.createElement('div');
            tocCat.className = 'toc-item';
            tocCat.dataset.target = category.id;
            tocCat.textContent = category.category;
            tocCat.addEventListener('click', () => {
                document.getElementById(category.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            tocList.appendChild(tocCat);
        }

        // Render items inside category
        category.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'wiki-card';
            card.id = item.id;
            card.innerHTML = `<h3>${item.title}</h3>${item.content}`;
            wikiContentContainer.appendChild(card);
        });
    });

    // Setup Scroll Spy
    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.toc-item').forEach(item => {
                        item.classList.remove('active');
                        if (item.dataset.target === entry.target.id) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-10% 0px -70% 0px' });

        document.querySelectorAll('.category-title').forEach(sec => observer.observe(sec));
    }, 100);
}

// GAME MENU LOGIC
function renderGameMenu() {
    document.getElementById('game-header').classList.add('hidden');
    checkBtn.style.display = 'none';
    
    let html = `<h2>Configura tu sesión de estudio</h2>`;
    
    // Topics
    html += `<h3 style="margin-top:20px; color:var(--gray-dark);">1. Elige un Tema</h3>`;
    html += `<div class="grid-list" style="gap:15px; margin-bottom: 25px;" id="menu-topics">`;
    const categories = [
        { id: 'all', title: 'Todos (Mix)', icon: '🎲' },
        { id: 'Gramática', title: 'Gramática', icon: '📝' },
        { id: 'Verbos', title: 'Verbos', icon: '🏃' },
        { id: 'Familia', title: 'Familia', icon: '👨‍👩‍👧' },
        { id: 'Saludos', title: 'Saludos', icon: '👋' },
        { id: 'Números', title: 'Números', icon: '🔢' },
        { id: 'Colores', title: 'Colores y Adj.', icon: '🎨' },
        { id: 'Muebles', title: 'Casa / Muebles', icon: '🛋️' }
    ];
    categories.forEach(cat => {
        const activeClass = (cat.id === selectedTopic) ? 'active-card' : '';
        html += `<div class="grid-item game-mode-card ${activeClass}" data-type="topic" data-id="${cat.id}" style="cursor:pointer; text-align:center; padding: 15px; border-bottom: 4px solid var(--gray-light);">
                    <div style="font-size:2rem; margin-bottom:5px;">${cat.icon}</div>
                    <strong style="font-size:1rem;">${cat.title}</strong>
                 </div>`;
    });
    html += `</div>`;
    
    // Determinar los modos disponibles basados en el tema seleccionado
    let topicPool = [...quizData];
    if (selectedTopic !== 'all') {
        if (selectedTopic === 'Colores') {
            topicPool = topicPool.filter(q => q.topic === 'Colores' || q.topic === 'Adjetivos');
        } else if (selectedTopic === 'Muebles') {
            topicPool = topicPool.filter(q => q.topic === 'Muebles' || q.topic === 'Objetos');
        } else {
            topicPool = topicPool.filter(q => q.topic === selectedTopic);
        }
    }
    const validModes = new Set(topicPool.map(q => q.type));
    validModes.add('all'); // Siempre disponible
    
    // Si el modo actual no es válido para el tema recién seleccionado, regresar a 'all'
    if (selectedMode !== 'all' && !validModes.has(selectedMode)) {
        selectedMode = 'all';
    }
    
    // Modes
    html += `<h3 style="margin-top:20px; color:var(--gray-dark);">2. Elige un Modo de Juego</h3>`;
    html += `<div class="grid-list" style="gap:15px; margin-bottom: 30px;" id="menu-modes">`;
    const modes = [
        { id: 'all', title: 'Cualquiera', icon: '🔀' },
        { id: 'multiple_choice', title: 'Opción Múltiple', icon: '✅' },
        { id: 'fill_in_blank', title: 'Completar', icon: '✍️' },
        { id: 'match_pairs', title: 'Parejas', icon: '🔗' },
        { id: 'word_search', title: 'Sopa de Letras', icon: '🔍' },
        { id: 'gender', title: 'Géneros', icon: '📦' },
        { id: 'sentence_builder', title: 'Oraciones', icon: '🧩' },
        { id: 'true_false', title: 'V o F', icon: '⚖️' },
        { id: 'reading', title: 'Lecturas', icon: '📖' }
    ];
    modes.forEach(mode => {
        const isAvailable = validModes.has(mode.id);
        const activeClass = (mode.id === selectedMode) ? 'active-card' : '';
        const disabledClass = isAvailable ? '' : 'disabled-card';
        const opacity = isAvailable ? '1' : '0.4';
        const pointer = isAvailable ? 'pointer' : 'not-allowed';
        
        html += `<div class="grid-item game-mode-card ${activeClass} ${disabledClass}" data-type="mode" data-id="${mode.id}" style="cursor:${pointer}; opacity:${opacity}; text-align:center; padding: 15px; border-bottom: 4px solid var(--gray-light);">
                    <div style="font-size:2rem; margin-bottom:5px;">${mode.icon}</div>
                    <strong style="font-size:1rem;">${mode.title}</strong>
                 </div>`;
    });
    html += `</div>`;
    
    // Guía de Minijuegos
    html += `
        <div class="note-box" style="margin-bottom: 30px; background-color: #f5f5f5; border-left-color: #9e9e9e;">
            <h4 style="margin-top:0; color:#555;">📖 Guía de Minijuegos</h4>
            <ul style="font-size: 0.9rem; color: #444; margin-bottom: 0; padding-left: 20px;">
                <li style="margin-bottom: 5px;"><strong>Opción Múltiple / Completar:</strong> Traduce palabras sueltas.</li>
                <li style="margin-bottom: 5px;"><strong>Parejas / Sopa de Letras:</strong> Ideal para memorizar vocabulario rápidamente.</li>
                <li style="margin-bottom: 5px;"><strong>Géneros:</strong> Practica tu velocidad asignando <em>der, die, das</em> a tus sustantivos.</li>
                <li style="margin-bottom: 5px;"><strong>Oraciones:</strong> Ordena frases complejas y practica la estructura alemana.</li>
                <li style="margin-bottom: 5px;"><strong>Lecturas:</strong> Ejercicios de comprensión basados en los textos de tu Wiki.</li>
            </ul>
        </div>
    `;
    
    html += `<button id="start-quiz-btn" class="btn btn-primary" style="width:100%; font-size:1.4rem;">¡Empezar a Jugar!</button>`;
    
    gameContainer.innerHTML = html;
    
    // Add event listeners for selection
    document.querySelectorAll('.game-mode-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('disabled-card')) return;
            
            const type = card.dataset.type;
            const id = card.dataset.id;
            
            if (type === 'topic') selectedTopic = id;
            if (type === 'mode') selectedMode = id;
            
            renderGameMenu(); // re-render to update classes
        });
    });
    
    document.getElementById('start-quiz-btn').addEventListener('click', () => {
        startQuiz();
    });
}

function startQuiz() {
    let pool = [...quizData];
    
    // Lógica inteligente de filtrado
    if (selectedMode !== 'all') {
        // Filtrar por modo primero
        pool = pool.filter(q => q.type === selectedMode);
        
        // Tratar de filtrar por tema si no es "Todos"
        if (selectedTopic !== 'all') {
            let topicPool = pool.filter(q => {
                if (selectedTopic === 'Colores') return q.topic === 'Colores' || q.topic === 'Adjetivos';
                if (selectedTopic === 'Muebles') return q.topic === 'Muebles' || q.topic === 'Objetos';
                return q.topic === selectedTopic;
            });
            
            // Si el tema tiene preguntas de este modo, usamos esas. 
            // Si no (ej. Oraciones en Muebles), jugamos el modo con todos los temas.
            if(topicPool.length > 0) {
                pool = topicPool;
            }
        }
    } else {
        // Si el modo es "Cualquiera", filtramos solo por tema
        if (selectedTopic !== 'all') {
            if (selectedTopic === 'Colores') {
                pool = pool.filter(q => q.topic === 'Colores' || q.topic === 'Adjetivos');
            } else if (selectedTopic === 'Muebles') {
                pool = pool.filter(q => q.topic === 'Muebles' || q.topic === 'Objetos');
            } else {
                pool = pool.filter(q => q.topic === selectedTopic);
            }
        }
    }
    
    filteredQuizData = shuffleArray(pool);
    
    if (filteredQuizData.length === 0) {
        alert("¡No hay preguntas disponibles! Generando un mix aleatorio...");
        filteredQuizData = shuffleArray([...quizData]);
    }
    
    // Definir límite de actividades por sesión
    let maxLimit = 10;
    if (['multiple_choice', 'fill_in_blank', 'match_pairs', 'true_false', 'gender', 'sentence_builder', 'all'].includes(selectedMode)) {
        maxLimit = 30;
    }
    
    // Si elige modo lecturas, limitamos a menos para no cansar
    if (selectedMode === 'reading') {
        maxLimit = 10;
    }
    
    if (filteredQuizData.length > maxLimit) {
        filteredQuizData = filteredQuizData.slice(0, maxLimit);
    }
    
    currentQuestionIndex = 0;
    document.getElementById('game-header').classList.remove('hidden');
    loadQuestion();
}

// --- GENERADOR AUTOMÁTICO DE PREGUNTAS ---
function autoGenerateQuestions() {
    const vocabRegex = /<strong>(.*?)<\/strong>\s*=\s*([^<]+)<\/div>/g;
    
    const topicMap = {
        "info-personal": "Familia",
        "profesiones": "Profesiones",
        "casa-muebles": "Muebles",
        "colores": "Colores",
        "adjetivos": "Adjetivos",
        "objetos": "Objetos",
        "saludos-despedidas": "Saludos",
        "numeros-dias": "Números",
        "tabla-verbos": "Verbos"
    };

    wikiData.forEach(category => {
        category.items.forEach(item => {
            if (topicMap[item.id]) {
                const topic = topicMap[item.id];
                let match;
                const vocabPairs = [];
                
                let vocabRegex = /<strong>([^<]+)<\/strong>\s*=\s*([^<]+)</g;
                vocabRegex.lastIndex = 0;
                while ((match = vocabRegex.exec(item.content)) !== null) {
                    const de = match[1].trim().replace(/<[^>]+>/g, '');
                    const es = match[2].trim();
                    vocabPairs.push({ de, es });
                }
                
                // Extraer de la tabla de verbos y sus conjugaciones
                if (item.id === "tabla-verbos") {
                    let rowRegex = /<tr>(.*?)<\/tr>/g;
                    while ((match = rowRegex.exec(item.content)) !== null) {
                        let rowContent = match[1];
                        if (rowContent.includes('<th')) continue; // skip header
                        
                        let tds = [];
                        let tdRegex = /<td[^>]*>(.*?)<\/td>/g;
                        let tdMatch;
                        while ((tdMatch = tdRegex.exec(rowContent)) !== null) {
                            tds.push(tdMatch[1].replace(/<[^>]+>/g, '').trim());
                        }
                        
                        if (tds.length >= 8) {
                            const infDe = tds[0];
                            const infEs = tds[1];
                            
                            // Infinitivo
                            vocabPairs.push({ de: infDe, es: infEs });
                            
                            // Conjugaciones
                            vocabPairs.push({ de: tds[3], es: `ich (yo) - ${infDe}`, isConjugation: true, verbPrompt: `Conjuga el verbo '<span class="hint-word" data-hint="${infEs}">${infDe}</span>' para: ich (yo)` });
                            vocabPairs.push({ de: tds[4], es: `du (tú) - ${infDe}`, isConjugation: true, verbPrompt: `Conjuga el verbo '<span class="hint-word" data-hint="${infEs}">${infDe}</span>' para: du (tú)` });
                            vocabPairs.push({ de: tds[5], es: `er/sie/es (él/ella/ello) - ${infDe}`, isConjugation: true, verbPrompt: `Conjuga el verbo '<span class="hint-word" data-hint="${infEs}">${infDe}</span>' para: er/sie/es (él/ella/ello)` });
                            vocabPairs.push({ de: tds[6], es: `wir/Sie/sie (nosotros/ustedes/ellos) - ${infDe}`, isConjugation: true, verbPrompt: `Conjuga el verbo '<span class="hint-word" data-hint="${infEs}">${infDe}</span>' para: wir/Sie/sie (nosotros/ustedes/ellos)` });
                            vocabPairs.push({ de: tds[7], es: `ihr (vosotros) - ${infDe}`, isConjugation: true, verbPrompt: `Conjuga el verbo '<span class="hint-word" data-hint="${infEs}">${infDe}</span>' para: ihr (vosotros)` });
                        }
                    }
                }
                
                // Extraer de la tabla de números
                if (item.id === "numeros-dias") {
                    let numRegex = /<td><strong>(\d+)<\/strong>\s*([a-zA-ZßäöüÄÖÜ]+)<\/td>/g;
                    while ((match = numRegex.exec(item.content)) !== null) {
                        const es = match[1].trim(); // el numero en digito sirve como ES
                        const de = match[2].trim();
                        vocabPairs.push({ de, es });
                    }
                }
                
                if (vocabPairs.length > 4) {
                    // Generate Multiple Choice and Fill in Blank
                    vocabPairs.forEach((pair, index) => {
                        addToDictionary(pair.de, pair.es);
                        
                        // Generate Multiple Choice
                        const others = shuffleArray(vocabPairs.filter(p => p.de !== pair.de)).slice(0, 3);
                        const options = shuffleArray([pair.de, ...others.map(o => o.de)]);
                        quizData.push({
                            id: `auto_mc_${topic}_${index}`,
                            type: "multiple_choice",
                            topic: topic,
                            question: pair.verbPrompt || `¿Cómo se dice '${pair.es}' en alemán?`,
                            options: options,
                            correctAnswer: pair.de
                        });
                        
                        // Generate Fill in the Blank
                        quizData.push({
                            id: `auto_fib_${topic}_${index}`,
                            type: "fill_in_blank",
                            topic: topic,
                            question: pair.verbPrompt || `Escribe en alemán la traducción de '<span class="hint-word" data-hint="${pair.de}">${pair.es}</span>':`,
                            text: "___",
                            correctAnswer: pair.de
                        });
                        
                        // Generador Verdadero o Falso
                        if (Math.random() > 0.3) {
                            const isTrue = Math.random() > 0.5;
                            let tfText = "";
                            let tfAns = "Verdadero";
                            
                            if (isTrue) {
                                tfText = pair.verbPrompt 
                                    ? `¿Es correcta esta conjugación?<br><br>${pair.verbPrompt} ➡️ <strong>${pair.de}</strong>` 
                                    : `¿La palabra <strong>${pair.de}</strong> significa <strong>${pair.es}</strong>?`;
                            } else {
                                const wrongPair = vocabPairs[Math.floor(Math.random() * vocabPairs.length)];
                                tfText = pair.verbPrompt
                                    ? `¿Es correcta esta conjugación?<br><br>${pair.verbPrompt} ➡️ <strong>${wrongPair.de}</strong>`
                                    : `¿La palabra <strong>${pair.de}</strong> significa <strong>${wrongPair.es}</strong>?`;
                                tfAns = (pair.de === wrongPair.de || pair.es === wrongPair.es) ? "Verdadero" : "Falso";
                            }
                            
                            quizData.push({
                                id: `auto_tf_${topic}_${index}`,
                                type: "true_false",
                                topic: topic,
                                question: `Responde Verdadero o Falso:`,
                                text: tfText,
                                correctAnswer: tfAns
                            });
                        }
                        
                        // Extraer de/die/das para el minijuego de géneros
                        const deLower = pair.de.toLowerCase();
                        let gender = null;
                        if (deLower.startsWith("der ")) gender = "der";
                        else if (deLower.startsWith("die ")) gender = "die";
                        else if (deLower.startsWith("das ")) gender = "das";
                        
                        if (gender && topic !== 'Números') {
                            const wordOnly = pair.de.replace(/^(der|die|das)\s+/i, '').split(',')[0].trim();
                            quizData.push({
                                id: `auto_gender_${topic}_${index}`,
                                type: "gender",
                                topic: topic,
                                question: "Clasifica el género del sustantivo:",
                                text: wordOnly,
                                es: pair.es,
                                correctAnswer: gender
                            });
                        }
                    });
                    
                    // Generate Match Pairs
                    const mpPairs = vocabPairs.filter(p => !p.isConjugation && p.es.length < 40 && p.de.length < 40);
                    for (let i = 0; i < mpPairs.length - 4; i += 4) {
                        quizData.push({
                            id: `auto_mp_${topic}_${i}`,
                            type: "match_pairs",
                            topic: topic,
                            question: `Empareja las palabras (${topic}):`,
                            pairs: mpPairs.slice(i, i+4)
                        });
                    }
                    
                    // Generate Word Searches
                    const wsPairs = vocabPairs.filter(p => !p.isConjugation);
                    for (let i = 0; i < wsPairs.length - 4; i += 4) {
                        const subPairs = wsPairs.slice(i, i+4);
                        const cleanWords = subPairs.map(p => {
                            let w = p.de.replace(/^(der|die|das)\s+/i, ''); // remove article
                            w = w.split(',')[0]; // remove plurals
                            w = w.replace(/[^a-zA-ZäöüßÄÖÜ]/g, ''); // remove spaces/symbols
                            return w.toUpperCase();
                        }).filter(w => w.length >= 3 && w.length <= 10);
                        
                        if (cleanWords.length >= 3) {
                            quizData.push({
                                id: `auto_ws_${topic}_${i}`,
                                type: "word_search",
                                topic: topic,
                                question: `Encuentra las palabras en alemán para: ${subPairs.slice(0, cleanWords.length).map(p=>p.es).join(', ')}`,
                                words: cleanWords
                            });
                        }
                    }
                }
            }
        });
    });
}

// Init
autoGenerateQuestions();
renderWiki();
renderGameMenu();
