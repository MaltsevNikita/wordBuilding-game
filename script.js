document.addEventListener('DOMContentLoaded', () => {
    const correctWordsCountElement = document.getElementById('correct-words-count');
    const targetWordElement = document.getElementById('target-word');
    const syllablesContainer = document.getElementById('syllables-container');
    const wordContainer = document.getElementById('word-container');
    const checkButton = document.getElementById('check-button');
    const leftDropZone = document.createElement('div');
    const rightDropZone = document.createElement('div');

    leftDropZone.className = 'drop-zone';
    leftDropZone.id = 'left-drop-zone';
    rightDropZone.className = 'drop-zone';
    rightDropZone.id = 'right-drop-zone';

    wordContainer.appendChild(leftDropZone);
    wordContainer.appendChild(rightDropZone);

    const words = [
        "ма-ма", "ко-т", "со-ба-ка", "до-м", "ле-с",
        "ре-ка", "не-бо", "со-лн-це", "де-ре-во", "цве-ток",
        "яб-ло-ко", "гру-ша", "ма-ши-на", "са-мо-лет", "ко-ра-бль",
        "ры-ба", "пти-ца", "мышь", "за-яц", "ли-са",
        "мед-ве-дь", "во-лк", "бе-лка", "е-жик", "у-тка",
        "гу-сь", "ку-ри-ца", "пе-тух", "ко-ро-ва", "бык",
        "ко-за", "о-ве-н", "сви-нья", "ко-шка", "ло-шадь",
        "о-сел", "вер-блюд", "тигр", "лев", "слон",
        "жи-раф", "но-со-рог", "бе-ге-мот", "кро-ко-дил", "зме-я",
        "я-ще-ри-ца", "че-ре-па-ха", "ля-гуш-ка", "жа-ба", "у-ж",
        "и-груш-ка", "ви-шня", "сли-ва", "гру-ша", "а-пель-син",
        "а-бри-кос", "пер-сик", "ман-да-рин", "ли-мон", "а-на-нас",
        "ба-нан", "ки-ви", "ман-го", "па-па-я", "ар-буз",
        "ды-ня", "ви-но-град", "клуб-ни-ка", "ма-ли-на", "чер-ни-ка",
        "смо-ро-ди-на", "мор-ковь", "ка-пу-ста", "о-гу-рец", "по-ми-дор",
        "ба-кла-жан", "ка-ба-чок", "тык-ва", "ре-дис", "ре-дька",
        "лук", "чес-нок", "се-ль-де-рей", "у-кроп", "пет-руш-ка",
        "шпи-нат", "брок-ко-ли", "ка-ба-чок", "бол-гар-ский пе-рец", "ба-зи-лик",
        "роз-ма-рин", "ти-мь-ян", "ла-ван-да", "мя-та", "кин-за",
        "ко-ри-ца", "им-бирь", "фен-хель", "а-нис", "тмин",
        "кар-да-мон", "му-скат-ный о-рех", "гвоз-ди-ка", "ко-ри-ан-дер", "шаф-ран",
        "ку-мин", "па-при-ка", "ва-ниль", "ко-кос", "мин-даль",
        "ла-кри-ца", "ре-вень", "эв-ка-липт", "ка-лен-ду-ла", "ме-лис-са",
        "ро-маш-ка", "чи-сто-тел", "зверо-бой", "ду-ши-ца", "ва-ле-ри-а-на",
        "пи-он", "ла-ван-да", "шал-фей", "ро-за", "ли-лия",
        "тюль-пан", "на-рцис-с", "ги-а-цинт", "и-рис", "ор-хи-де-я",
        "гер-бе-ра", "фи-ал-ка", "мар-га-рит-ка", "хри-зан-те-ма", "а-ст-ра",
        "ге-ор-гин", "гла-ди-о-лус", "бе-го-ния", "фре-зи-я", "ма-гно-ли-я",
        "ка-ме-лия", "а-за-ли-я", "ро-до-ден-дрон", "фо-рси-ти-я", "ка-ли-на",
        "де-льфи-ни-ум", "а-не-мон", "ци-кла-мен", "пе-ту-ни-я", "вер-бе-на",
        "а-ка-ция", "бу-ген-вил-ле-я", "ка-та-ран-тус", "а-ло-э", "фи-кус",
        "дра-це-на", "па-льма", "бам-бук", "эв-ка-липт", "со-сна",
        "ель", "пих-та", "ке-др", "ли-ствен-ни-ца", "дуб",
        "бере-за", "о-си-на", "клен", "я-сень", "ли-па",
        "то-поль", "и-ва", "о-рех", "ка-штан", "бук",
        "граб", "вяз", "о-льха", "о-ме-ла", "сам-шит",
        "ту-я", "мо-жже-ве-ль-ник", "ки-па-рис", "ро-до-ден-дрон", "ма-гно-ли-я",
        "а-ка-ция", "бу-ген-вил-ле-я", "ка-та-ран-тус", "а-ло-э", "фи-кус",
        "дра-це-на", "па-льма", "бам-бук", "эв-ка-липт", "со-сна",
        "ель", "пих-та", "ке-др", "ли-ствен-ни-ца", "дуб",
        "бере-за", "о-си-на", "клен", "я-сень", "ли-па",
        "то-поль", "и-ва", "о-рех", "ка-штан", "бук",
        "граб", "вяз", "о-льха", "о-ме-ла", "сам-шит",
        "ту-я", "мо-жже-ве-ль-ник", "ки-па-рис", "ро-до-ден-дрон", "ма-гно-ли-я",
        "а-ка-ция", "бу-ген-вил-ле-я", "ка-та-ран-тус", "а-ло-э", "фи-кус",
        "дра-це-на", "па-льма", "бам-бук", "эв-ка-липт", "со-сна",
        "ель", "пих-та", "ке-др", "ли-ствен-ни-ца", "дуб",
        "бере-за", "о-си-на", "клен", "я-сень", "ли-па",
        "то-поль", "и-ва", "о-рех", "ка-штан", "бук",
        "граб", "вяз", "о-льха", "о-ме-ла", "сам-шит",
        "ту-я", "мо-жже-ве-ль-ник", "ки-па-рис", "ро-до-ден-дрон", "ма-гно-ли-я",
        "а-ка-ция", "бу-ген-вил-ле-я", "ка-та-ран-тус", "а-ло-э", "фи-кус",
        "дра-це-на", "па-льма", "бам-бук", "эв-ка-липт", "со-сна",
        "ель", "пих-та", "ке-др", "ли-ствен-ни-ца", "дуб",
        "бере-за", "о-си-на", "клен", "я-сень", "ли-па",
        "то-поль", "и-ва", "о-рех", "ка-штан", "бук",
        "граб", "вяз", "о-льха", "о-ме-ла", "сам-шит",
        "ту-я", "мо-жже-ве-ль-ник", "ки-па-рис", "ро-до-ден-дрон", "ма-гно-ли-я",
        "а-ка-ция", "бу-ген-вил-ле-я", "ка-та-ран-тус", "а-ло-э", "фи-кус",
        "дра-це-на", "па-льма", "бам-бук", "эв-ка-липт", "со-сна",
        "ель", "пих-та", "ке-др", "ли-ствен-ни-ца", "дуб",
        "бере-за", "о-си-на", "клен", "я-сень", "ли-па",
        "то-поль", "и-ва", "о-рех", "ка-штан", "бук",
        "граб", "вяз", "о-льха", "о-ме-ла", "сам-шит",
        "ту-я", "мо-жже-ве-ль-ник", "ки-па-рис", "ро-до-ден-дрон", "ма-гно-ли-я",
        "а-ка-ция", "бу-ген-вил-ле-я", "ка-та-ран-тус", "а-ло-э", "фи-кус",
        "дра-це-на", "па-льма", "бам-бук", "эв-ка-липт", "со-сна",
        "ель", "пих-та", "ке-др", "ли-ствен-ни-ца", "дуб",
        "бере-за", "о-си-на", "клен", "я-сень", "ли-па",
        "то-поль", "и-ва", "о-рех", "ка-штан", "бук",
        "граб", "вяз", "о-льха", "о-ме-ла", "сам-шит",
        "ту-я", "мо-жже-ве-ль-ник", "ки-па-рис", "ро-до-ден-дрон", "ма-гно-ли-я"
    ];

    let currentWord = "";
    let correctWordsCount = 0;

    function loadNewWord() {
        // Очищаем контейнеры
        syllablesContainer.innerHTML = '';
        wordContainer.innerHTML = '';
        wordContainer.appendChild(leftDropZone);
        wordContainer.appendChild(rightDropZone);

        // Выбираем новое случайное слово
        currentWord = words[Math.floor(Math.random() * words.length)];
        const syllables = currentWord.split('-');

        // Перемешиваем слоги
        for (let i = syllables.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [syllables[i], syllables[j]] = [syllables[j], syllables[i]];
        }

        // Отображаем слово, которое нужно собрать
        targetWordElement.textContent = currentWord.replace(/-/g, '');

        syllables.forEach(syllable => {
            const syllableElement = document.createElement('div');
            syllableElement.className = 'syllable';
            syllableElement.textContent = syllable;
            syllableElement.draggable = true;

            syllableElement.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', syllable);
            });

            syllablesContainer.appendChild(syllableElement);
        });
    }

    function addSyllable(syllable, position) {
        const syllableElement = document.createElement('div');
        syllableElement.className = 'syllable';
        syllableElement.textContent = syllable;

        if (position === 'left') {
            wordContainer.insertBefore(syllableElement, wordContainer.firstChild);
        } else {
            wordContainer.appendChild(syllableElement);
        }

        // Удаляем слог из контейнера слогов
        const syllableToRemove = Array.from(syllablesContainer.children).find(child => child.textContent === syllable);
        if (syllableToRemove) {
            syllablesContainer.removeChild(syllableToRemove);
        }
    }

    leftDropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    leftDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const syllable = e.dataTransfer.getData('text/plain');
        addSyllable(syllable, 'left');
    });

    rightDropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    rightDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const syllable = e.dataTransfer.getData('text/plain');
        addSyllable(syllable, 'right');
    });

    checkButton.addEventListener('click', () => {
        const composedWord = Array.from(wordContainer.children).filter(child => child.className === 'syllable').map(child => child.textContent).join('');
        if (composedWord === currentWord.replace(/-/g, '')) {
            alert('Правильно!');
            correctWordsCount++;
            correctWordsCountElement.textContent = `Правильно собрано слов: ${correctWordsCount}`;
        } else {
            alert(`Неправильно! Правильное слово: ${currentWord}`);
        }
        loadNewWord();
    });

    // Загружаем первое слово при запуске
    loadNewWord();
});
