// Système de stockage local pour la progression
const progress = {
    score: 0,
    currentLesson: 0,
};

function saveProgress() {
    localStorage.setItem('tradingProgress', JSON.stringify(progress));
}

function loadProgress() {
    const savedData = localStorage.getItem('tradingProgress');
    if (savedData) {
        Object.assign(progress, JSON.parse(savedData));
    }
}

window.onload = loadProgress;
