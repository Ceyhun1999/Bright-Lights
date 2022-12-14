const audio = document.querySelector('.player__audio'),
    player = document.querySelector('.player'),
    playBtn = document.querySelector('.player__btn'),
    progressContent = document.querySelector('.progress__content'),
    progressLine = document.querySelector('.progress__line'),
    progressItem = document.querySelector('.progress__item'),
    playerTime = document.querySelector('.player__time'),
    musicCurrentTime = document.querySelector('.musicCurrentTime'),
    musicDuration = document.querySelector('.musicDuration');

const musicPlayer = {
    btnImgData: 1,
    musicDuracitonShow() {
        let totalMin = Math.floor(audio.duration / 60);
        let totalSec = Math.floor(audio.duration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;
        musicDuration.innerHTML = `${totalMin}:${totalSec}`
    },
    musicCurrentTime() {
        let currentMin = Math.floor(audio.currentTime / 60);
        let currentSec = Math.floor(audio.currentTime % 60);
        if (currentSec < 10) currentSec = `0${currentSec}`;
        musicCurrentTime.innerHTML = `0${currentMin}:${currentSec}`
    },
    playSong() {
        player.classList.add('play');
        audio.play();
        this.changeBtn();
    },
    pauseSong() {
        player.classList.remove('play');
        audio.pause();
        this.changeBtn();
    },
    changeBtn() {
        if (this.btnImgData === 1) {
            this.btnImgData = 2;
            playBtn.src = `img/btn${this.btnImgData}.png`;
        } else if (this.btnImgData === 2) {
            this.btnImgData = 1;
            playBtn.src = `img/btn${this.btnImgData}.png`;
        }
    },
    updateProgress(e) {
        const {duration, currentTime} = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progressLine.style.width = `${progressPercent}%`;
        progressItem.style.left = `${progressPercent}%`;
        this.musicCurrentTime();
    },
    end() {
        this.btnImgData = 1;
        playBtn.src = `img/btn${this.btnImgData}.png`;
        player.classList.remove('play');
        progressLine.style.width = `0%`;
        progressItem.style.left = `0%`;
    },
    setProgress(e) {
        const width = progressContent.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
        console.log(e);
    }
};

setInterval(()=> musicPlayer.musicDuracitonShow(),0.1)
audio.addEventListener('ended', (e) => musicPlayer.end(e));
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
    (isPlaying) ? musicPlayer.pauseSong() : musicPlayer.playSong();
});
audio.addEventListener('timeupdate', (e) => musicPlayer.updateProgress(e));
progressContent.addEventListener('click', (e) => musicPlayer.setProgress(e));


const contFirst  = document.querySelector('.blog-first').querySelector('.blog__content');
const contSecond  = document.querySelector('.blog-second').querySelector('.blog__content');
const contThird = document.querySelector('.blog-third').querySelector('.blog__content');

window.addEventListener('resize',()=> {
    let a = contFirst.offsetHeight;
    let b = contSecond.offsetHeight;
    let c = contThird.offsetHeight;
    let maxValue = Math.max.apply(null, [a,b,c]);
    contFirst.style.height = maxValue + 'px';
    contSecond.style.height = maxValue + 'px';
    contThird.style.height = maxValue + 'px';
},true)

new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    }, 
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        998: {
            slidesPerView: 3,
        },
    }
  });