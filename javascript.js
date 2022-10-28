const audio = document.querySelector('.player__audio');
const player = document.querySelector('.player');
const playBtn = document.querySelector('.player__btn');
const progressContent = document.querySelector('.progress__content');
const progressLine = document.querySelector('.progress__line');
const progressItem = document.querySelector('.progress__item');
const playerTime = document.querySelector('.player__time');

let playBtnChange = 1;
function playSong() {
    player.classList.add('play');
    audio.play();
};

function pauseSong() {
    player.classList.remove('play');
    audio.pause();
};

function changePlayBtn() {
    if (playBtnChange === 1) {
        playBtnChange = 2;
        playBtn.src = `img/btn${playBtnChange}.png`
    } else if (playBtnChange === 2) {
        playBtnChange = 1;
        playBtn.src = `img/btn${playBtnChange}.png`
    }
};

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
    changePlayBtn();
    if (isPlaying) pauseSong()
    else playSong()

});

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressLine.style.width = `${progressPercent}%`;
    progressItem.style.left = `${progressPercent}%`;
};
audio.addEventListener('timeupdate', updateProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
};
progressContent.addEventListener('click', setProgress);

