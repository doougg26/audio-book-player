let isPlaying = 0
let currentChapter = 1
const capitulos = 10
const btnPlayPause = document.getElementById('play-pause')
const audio = document.getElementById('audio-capitulo')
const btnProx = document.getElementById('proximo')
const titulo = document.getElementById('capitulo')
const btnAnt = document.getElementById('anterior')


btnPlayPause.addEventListener('click', playPause)
btnProx.addEventListener('click', prox)
btnAnt.addEventListener('click', ant)
audio.addEventListener('ended', prox)


function pauseAudio(){
    audio.pause()
    btnPlayPause.classList.add('bi-play-fill')
    btnPlayPause.classList.remove("bi-pause-fill")
}

function playAudio(){
    audio.play()
    btnPlayPause.classList.add("bi-pause-fill")
    btnPlayPause.classList.remove('bi-play-fill') 
}

function playPause(){
    isPlaying+=1
    if(isPlaying===1){
        playAudio()
    } else if(isPlaying>1){
        pauseAudio()
        isPlaying = 0
    }
}

function prox(){
if(currentChapter === capitulos){
    currentChapter = 1
} else{
    currentChapter +=1
}
audio.src = `./books/dom-casmurro/${currentChapter}.mp3`
titulo.innerText=`Capítulo ${currentChapter}`
playAudio()
}

function ant(){
    if(currentChapter === 1){
        currentChapter = capitulos
    } else{
        currentChapter -=1
    }
    audio.src = `./books/dom-casmurro/${currentChapter}.mp3`
    titulo.innerText=`Capítulo ${currentChapter}`
    playAudio()
}