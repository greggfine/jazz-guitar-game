"use strict";

// window.onload = () => {
    const score = document.getElementById('score');
    const lives = document.getElementById('lives');
    const startGameBtn = document.getElementById('start-game-btn');
    const questionAndAnswerDisplay = document.getElementById('question-answer-display');
    const scoreWrapper = document.getElementById('score-wrapper');
    const livesWrapper = document.getElementById('lives-wrapper');
    const volumeControl = document.getElementById('volume-control');
    const questionCount = document.getElementById('question-count');
    const whoIsThis = document.getElementById('who-is-this');
    const playGame = document.getElementById('play-game');
    const btnGroup = playGame.querySelector('.btn-group');
    const gameOverDisplay = document.getElementById('game-over');
    const audio = document.createElement('audio');
    const successSFX = document.createElement('audio');
    const failureSFX = document.createElement('audio');
    const img = document.createElement('img');
    const container = document.querySelector('.container');

    let scoreCount = 0;
    let questionCountCounter = 1;
    let livesCount = 3;
    let currentTrack;
    
    score.textContent = scoreCount;
    questionCount.textContent = `${questionCountCounter}/10`;
    lives.textContent = livesCount;
    successSFX.src = './audio/sfx/success.wav';
    failureSFX.src = './audio/sfx/failure.wav';
    
    volumeControl.addEventListener('click', function () {
        audio.muted? audio.muted = false : audio.muted = true
        successSFX.muted? successSFX.muted = false : successSFX.muted = true
        failureSFX.muted? failureSFX.muted = false : failureSFX.muted = true
        const iconElement = this.querySelector('i');
        iconElement.classList.toggle('fa-volume-up');
        iconElement.classList.toggle('fa-volume-off');
    })

    const guitaristNames = tracks.map(track => track.name);
    const setupButtons = () => randomBtnAppend(createCorrectButton(currentTrack), createWrongButton());
    const getRandomTrack = () => tracks[Math.floor(Math.random() * tracks.length)];
    const getRandomName = (arr) => arr[Math.floor(Math.random() * guitaristNames.length)];

    function init() {
        startGameBtn.style.display = 'none';
        whoIsThis.style.display = playGame.style.display = container.style.display = 'block';
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
        removeNameText();
    }

    function removeButtons(){
        removeClassNames();
        Array.from(btnGroup.children).forEach(child => {
            child.tagName === 'BUTTON' ? btnGroup.removeChild(child) : null            
        })
    }

    function disableButtons() {
        Array.from(btnGroup.children).forEach(child => {
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

    function displayName(){
        const h3 = document.createElement('h3');
        h3.textContent = currentTrack.name;
        questionAndAnswerDisplay.appendChild(h3);
    }
    
    function removeClassNames(){
        scoreWrapper.className = '';
        livesWrapper.className = '';
    }

    function revealCorrectAnswer(){
        audio.pause();
        displayImage();
        displayName();
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
                removeNameText();
                setRandomTrack();
                removeButtons();
                setupButtons();
            }}, 2000)
    }

    function removeNameText(){
        Array.from(questionAndAnswerDisplay.children).forEach((child) => {
            child.tagName === 'H3'? questionAndAnswerDisplay.removeChild(child) : null
        })
    }

    function setGameOver(){
        revealCorrectAnswer();
        setTimeout(() => {
            img.style.display = playGame.style.display = 'none';
            gameOverDisplay.textContent = `Game Over. Final Score: ${scoreCount}`;
            createPlayAgainButton();
        }, 2000)
    }

    function startGame(){
        img.style.display = playGame.style.display = container.style.display = 'none';
        startGameBtn.addEventListener('click', () =>  init());
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
            img.src = '';
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
        shuffledBtns.forEach(btn => btnGroup.appendChild(btn));
    }

    startGame()
 
// }