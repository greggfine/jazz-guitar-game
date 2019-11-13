"use strict";

window.onload = () => {
    const names = tracks.map(track =>  track.name);
    const score = document.getElementById('score');
    let scoreCount = 0;
    score.textContent = scoreCount;
    const lives = document.getElementById('lives');
    let livesCount = 3;
    lives.textContent = livesCount;

    function getRandomTrack(){
        return tracks[Math.floor(Math.random() * tracks.length)]
    }

    function getRandomName(arr) {
        return arr[Math.floor(Math.random() * names.length)]
    }

    function displayImage(){
        const img = document.createElement('img');
        img.src = `./images/${currentTrack.image}`;
        questionAndAnswer.appendChild(img);
    }

    function createCorrectButton(currentTrack){
        const button =  document.createElement('button');
        button.textContent = `${currentTrack.name}`;
        button.addEventListener('click', () => {
            scoreCount += 100;
            score.textContent = scoreCount;
            displayImage();
        })
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
            livesCount -= 1;
            lives.textContent = livesCount;
            displayImage();
        })
        return button;
    }

    let currentTrack = getRandomTrack();
    let isPlaying = false;

    const questionAndAnswer = document.querySelector('.question-answer');
    const audio = document.createElement('audio');
    audio.src = `./audio/cuts/${currentTrack.fileName}`;
    // audio.play();
    audio.loop = true;

    const btn1 = createCorrectButton(currentTrack);
    const btn2 = createWrongButton();

    function randomBtnAppend(btn1, btn2){
        const btnNums = _.shuffle([btn1, btn2]);
        for(let button of btnNums){
            questionAndAnswer.appendChild(button)
        }
    }

    randomBtnAppend(btn1, btn2);
}

