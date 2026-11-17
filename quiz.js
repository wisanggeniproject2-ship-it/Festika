document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "Apa yang dimaksud dengan public speaking?",
            options: [
                "Berbicara dengan suara keras",
                "Seni berbicara di depan umum untuk menyampaikan pesan",
                "Berbicara melalui media sosial",
                "Berbicara dengan teman dekat"
            ],
            correct: 1
        },
        {
            question: "Apa manfaat utama dari menguasai public speaking?",
            options: [
                "Mendapatkan banyak teman",
                "Meningkatkan kepercayaan diri dan kemampuan komunikasi",
                "Menjadi terkenal di media sosial",
                "Mendapatkan pekerjaan dengan gaji tinggi"
            ],
            correct: 1
        },
        {
            question: "Teknik apa yang dapat membantu mengurangi kecemasan saat berbicara di depan umum?",
            options: [
                "Menghindari kontak mata dengan audiens",
                "Berbicara secepat mungkin",
                "Persiapan yang matang dan latihan pernapasan",
                "Membaca seluruh naskah tanpa melihat audiens"
            ],
            correct: 2
        },
        {
            question: "Apa fungsi dari kontak mata dalam public speaking?",
            options: [
                "Membuat pembicara terlihat lebih menarik",
                "Membangun koneksi dengan audiens dan menunjukkan kepercayaan diri",
                "Mengintimidasi audiens",
                "Menghindari lupa materi"
            ],
            correct: 1
        },
        {
            question: "Bagaimana struktur presentasi yang efektif?",
            options: [
                "Langsung ke inti tanpa pendahuluan",
                "Pendahuluan, isi, dan penutup yang jelas",
                "Hanya berisi data dan fakta",
                "Mengulang-ulang poin yang sama"
            ],
            correct: 1
        }
    ];

    const startScreen = document.getElementById('startScreen');
    const quizScreen = document.getElementById('quizScreen');
    const resultScreen = document.getElementById('resultScreen');
    const startQuizBtn = document.getElementById('startQuiz');
    const nextBtn = document.getElementById('nextBtn');
    const restartQuizBtn = document.getElementById('restartQuiz');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const scoreValue = document.getElementById('scoreValue');
    const resultMessage = document.getElementById('resultMessage');

    let currentQuestion = 0;
    let userAnswers = new Array(quizData.length).fill(null);

    function startQuiz() {
        startScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        showQuestion(currentQuestion);
    }

    function showQuestion(index) {
        const question = quizData[index];
        questionText.textContent = question.question;
        
        const progress = ((index + 1) / quizData.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Pertanyaan ${index + 1} dari ${quizData.length}`;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            if (userAnswers[index] === i) {
                optionElement.classList.add('selected');
            }
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(i));
            optionsContainer.appendChild(optionElement);
        });
        
        nextBtn.textContent = index === quizData.length - 1 ? 'Selesai' : 'Selanjutnya';
    }

    function selectOption(optionIndex) {
        userAnswers[currentQuestion] = optionIndex;
        showQuestion(currentQuestion);
    }

    function nextQuestion() {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            finishQuiz();
        }
    }

    function finishQuiz() {
        let score = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === quizData[index].correct) {
                score++;
            }
        });
        
        const percentage = Math.round((score / quizData.length) * 100);
        
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        
        scoreValue.textContent = percentage;
        
        if (percentage >= 80) {
            resultMessage.textContent = "Luar biasa! Anda memiliki pemahaman yang sangat baik tentang public speaking.";
        } else if (percentage >= 60) {
            resultMessage.textContent = "Bagus! Anda memiliki pemahaman yang baik tentang public speaking.";
        } else {
            resultMessage.textContent = "Perlu belajar lebih banyak tentang public speaking.";
        }
    }

    function restartQuiz() {
        currentQuestion = 0;
        userAnswers = new Array(quizData.length).fill(null);
        resultScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    }

    startQuizBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartQuizBtn.addEventListener('click', restartQuiz);
});