"use strict";

window.onload = () => {
    const score = document.getElementById('score');
    const lives = document.getElementById('lives');
    const questionAndAnswer = document.getElementById('question-answer');
    const scoreWrapper = document.getElementById('score-wrapper');
    const livesWrapper = document.getElementById('lives-wrapper');
    const volumeControl = document.getElementById('volume-control');
    const questionCount = document.getElementById('question-count');
    const whoIsThis = document.getElementById('who-is-this');
    const playGame = document.getElementById('play-game');
    const gameOver = document.getElementById('game-over');
    const audio = document.createElement('audio');
    const success = document.createElement('audio');
    const failure = document.createElement('audio');
    const img = document.createElement('img');
    success.src = './audio/sfx/success.wav';
    failure.src = './audio/sfx/failure.wav';

    let scoreCount = 0;
    let questionCountCounter = 1;
    let livesCount = 3;
    let currentTrack;
    let buttonWasClicked = false;

    const names = tracks.map(track => track.name);

    score.textContent = scoreCount;
    questionCount.textContent = `${questionCountCounter}/10`;
    lives.textContent = livesCount;

    function init() {
        whoIsThis.style.display = 'block';
        scoreCount = 0;
        livesCount = 3;
        questionCountCounter = 1;
        gameOver.textContent = '';
        lives.textContent = livesCount;
        score.textContent = scoreCount;
        questionCount.textContent = `${questionCountCounter}/10`;
        removeButtons();
        removeClassNames();
        playGame.style.display = 'block';
        setRandomTrack();
        setupButtons();
        setInterval(() => {
            audio.volume = volumeControl.value;
            success.volume = volumeControl.value;
            failure.volume = volumeControl.value;
        }, 0.5)
    }

    init();

    function removeButtons(){
        for (let child of Array.from(questionAndAnswer.children)) {
            if (child.tagName === 'BUTTON') {
                questionAndAnswer.removeChild(child)
            }
        }
    }

    function disableButtons() {
        for (let child of Array.from(questionAndAnswer.children)) {
            if (child.tagName === 'BUTTON') {
                child.style.display = 'none'
            }
        }
    }

    function setRandomTrack(){
        currentTrack = getRandomTrack();
        audio.src = `./audio/cuts/${currentTrack.fileName}`;
        audio.play();
        audio.loop = true;
    }

    function setupButtons(){
        const btn1 = createCorrectButton(currentTrack);
        const btn2 = createWrongButton();
        randomBtnAppend(btn1, btn2);
    }

    function getRandomTrack(){
        return tracks[Math.floor(Math.random() * tracks.length)]
    }

    function getRandomName(arr) {
        return arr[Math.floor(Math.random() * names.length)]
    }

    function displayImage(){
        img.style.display = 'block';
        img.src = `./images/${currentTrack.image}`;
        questionAndAnswer.appendChild(img);
    }

    function hideImage(){
        img.src = '';
    }

    function setupNextQuestion(){
        audio.pause();
        displayImage();
        setTimeout(() => {
            whoIsThis.style.display = 'block';
            img.style.display = 'none';
            hideImage();
            setRandomTrack();
            if(questionCountCounter === 10){
                setGameOver();
            }
            questionCountCounter += 1;
            questionCount.textContent = `${questionCountCounter}/10`;
            removeClassNames();
            removeButtons();
            setupButtons();
        }, 2000)
    }

    function removeClassNames(){
        scoreWrapper.className = '';
        livesWrapper.className = '';
    }

    function setGameOver(){
        playGame.style.display = 'none';
        audio.pause();
        gameOver.textContent = `Game Over. Final Score: ${scoreCount}`;
        const button = document.createElement('button');
        button.textContent = "Play Again?"
        gameOver.appendChild(button);
        button.addEventListener('click', () => {
            init();
        })
    }

    function createCorrectButton(currentTrack){
        const button =  document.createElement('button');
        button.textContent = `${currentTrack.name}`;
        button.addEventListener('click', () => {
            whoIsThis.style.display = 'none';
            disableButtons();
            success.play();
            scoreWrapper.classList.add('success');
            scoreCount += 100;
            score.textContent = scoreCount;
            setupNextQuestion();
        }, { once: true })
        return button;
    }

    function createWrongButton() {
        let notFound = true;
        const button = document.createElement('button');
        while(notFound){
            let randomName = getRandomName(names);
            if (randomName !== currentTrack.name){
                button.textContent = randomName;
                notFound = false;
            } 
        }
        button.addEventListener('click', () => {
            whoIsThis.style.display = 'none';
            disableButtons();
            failure.play();
            livesWrapper.classList.add('failure');
            livesCount -= 1;
            if(livesCount === 0){
                setGameOver();
            } else{
                lives.textContent = livesCount;
                setupNextQuestion();
            }
        }, {once: true})
        return button;
    }

    function randomBtnAppend(btn1, btn2){
        const btnNums = _.shuffle([btn1, btn2]);
        for(let button of btnNums){
            questionAndAnswer.appendChild(button)
        }
    }
}

