"use strict";

window.onload = () => {
    const score = document.getElementById('score');
    const lives = document.getElementById('lives');
    const startGameBtn = document.getElementById('start-game-btn');
    const questionAndAnswerDisplay = document.getElementById('question-answer');
    const scoreWrapper = document.getElementById('score-wrapper');
    const livesWrapper = document.getElementById('lives-wrapper');
    const volumeControl = document.getElementById('volume-control');
    const questionCount = document.getElementById('question-count');
    const whoIsThis = document.getElementById('who-is-this');
    const playGame = document.getElementById('play-game');
    const gameOverDisplay = document.getElementById('game-over');
    const audio = document.createElement('audio');
    const successSFX = document.createElement('audio');
    const failureSFX = document.createElement('audio');
    const img = document.createElement('img');

    let scoreCount = 0;
    let questionCountCounter = 1;
    let livesCount = 3;
    let currentTrack;
    
    score.textContent = scoreCount;
    questionCount.textContent = `${questionCountCounter}/10`;
    lives.textContent = livesCount;
    successSFX.src = './audio/sfx/success.wav';
    failureSFX.src = './audio/sfx/failure.wav';
    
    const guitaristNames = tracks.map(track => track.name);
    const setupButtons = () => randomBtnAppend(createCorrectButton(currentTrack), createWrongButton());
    const getRandomTrack = () => tracks[Math.floor(Math.random() * tracks.length)];
    const getRandomName = (arr) => arr[Math.floor(Math.random() * guitaristNames.length)];

    function init() {
        whoIsThis.style.display = playGame.style.display = 'block';
        gameOverDisplay.textContent = '';
        scoreCount = 0;
        livesCount = 3;
        lives.textContent = livesCount;
        score.textContent = scoreCount;
        questionCountCounter = 1;
        questionCount.textContent = `${questionCountCounter}/10`;
        removeButtons();
        removeClassNames();
        setRandomTrack();
        setupButtons();
        setInterval(() => {
            audio.volume = successSFX.volume = failureSFX.volume = volumeControl.value;
        }, 0.5)
    }

    function removeButtons(){
        removeClassNames();
        Array.from(questionAndAnswerDisplay.children).forEach(child => {
            child.tagName === 'BUTTON' ? questionAndAnswerDisplay.removeChild(child) : null            
        })
    }

    function disableButtons() {
        Array.from(questionAndAnswerDisplay.children).forEach(child => {
            child.tagName === 'BUTTON' ? child.style.display = 'none' : null
        })
    }

    function setRandomTrack(){
        currentTrack = getRandomTrack();
        audio.src = `./audio/cuts/${currentTrack.fileName}`;
        audio.play();
        audio.loop = true;
    }

    function displayImage(){
        img.style.display = 'block';
        img.src = `./images/${currentTrack.image}`;
        questionAndAnswerDisplay.appendChild(img);
    }
    
    function removeClassNames(){
        scoreWrapper.className = '';
        livesWrapper.className = '';
    }

    function revealCorrectAnswer(){
        audio.pause();
        displayImage();
    }

    function setupNextQuestion(){
        revealCorrectAnswer();
        setTimeout(() => {
            if(questionCountCounter === 10) {
                setGameOver();
            } else{
                questionCount.textContent = `${questionCountCounter += 1}/10`;
                whoIsThis.style.display = 'block';
                img.style.display = 'none';
                setRandomTrack();
                removeButtons();
                setupButtons();
            }}, 2000)
    }

    function setGameOver(){
        revealCorrectAnswer();
        setTimeout(() => {
            img.style.display = playGame.style.display = 'none';
            gameOverDisplay.textContent = `Game Over. Final Score: ${scoreCount}`;
            createPlayAgainButton();
        }, 2000)
    }

    function createPlayAgainButton(){
        const button = document.createElement('button');
        button.textContent = "Play Again?";
        gameOverDisplay.appendChild(button);
        button.addEventListener('click', () => init());
    }

    function createCorrectButton(currentTrack){
        const button =  document.createElement('button');
        button.textContent = `${currentTrack.name}`;
        button.addEventListener('click', () => {
            disableButtons();
            successSFX.play();
            img.src = '';
            whoIsThis.style.display = 'none';
            scoreWrapper.classList.add('success');
            score.textContent = scoreCount += 100;;
            setupNextQuestion();
        }, { once: true })
        return button;
    }

    function createWrongButton() {
        const button = document.createElement('button');
        while (!button.textContent) {
            let randomName = getRandomName(guitaristNames);
            if (randomName !== currentTrack.name) {
                button.textContent = randomName;
            }
        }
        button.addEventListener('click', () => {
            disableButtons();
            failureSFX.play();
            whoIsThis.style.display = 'none';
            livesWrapper.classList.add('failure');
            livesCount -= 1;
            if(livesCount === 0){
                lives.textContent = 0;
                setGameOver();
            } else{
                lives.textContent = livesCount;
                setupNextQuestion();
            }
        }, {once: true})
        return button;
    }

    function randomBtnAppend(...buttons) {
        const shuffledBtns = _.shuffle([...buttons]);
        shuffledBtns.forEach(btn => questionAndAnswerDisplay.appendChild(btn));
    }

    startGameBtn.addEventListener('click', () =>  init());
}