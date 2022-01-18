const musics = [
    'ehsan-daryadel-koochamoon.mp3',
    'ehsan-daryadel-lalaei.mp3',
    'Enrasta_Dzhovanna.mp3',
    'F.o.o.l - Criminals.mp3',
    'Mehrnoosh - Cheshmat OFFICIAL VIDEO _ مهرنوش - چشمات (320 kbps).mp3',
    'Serhat Durmus - La Clin (Dabro Remix).mp3'
];
let posOfMusic = 0;
const music = new Audio();

//music.play();
//music.pause();

const listOfMusics = document.getElementById('musics');
const player = document.getElementById('player');
const prev = document.getElementById('prev');
const isPlay = document.getElementById('pause');
const next = document.getElementById('next');



for(i = 0; i<=musics.length-1; i++){
    const elem= document.createElement('p');
    elem.textContent = musics[i];
    listOfMusics.appendChild(elem);
}



let musicIsPlaying = false;

isPlay.onclick = () =>{
    if(!musicIsPlaying) {
        isPlay.textContent = 'Pause';
        music.src = `musics/${musics[posOfMusic]}`;
        music.play();
        musicIsPlaying = true;
        player.textContent = `${musics[posOfMusic]}`;
    }else{
        isPlay.textContent = 'Play';
        musicIsPlaying = false;
        music.src = `musics/${musics[posOfMusic]}`;
        music.pause();
    }
}

next.onclick = () =>{
    if(posOfMusic >=musics.length-1){
        posOfMusic = 0;
    }
    ++posOfMusic;
    music.src = `musics/${musics[posOfMusic]}`;
    music.play();
    musicIsPlaying = true;
    isPlay.textContent = 'Pause';
    player.textContent = `${musics[posOfMusic]}`;
}
prev.onclick = () =>{
    --posOfMusic;
    if(posOfMusic <0) {
        posOfMusic = musics.length-1;
    }
    music.src = `musics/${musics[posOfMusic]}`;
    music.play();
    musicIsPlaying = true;
    isPlay.textContent = 'Pause';
    player.textContent = `${musics[posOfMusic]}`;
}
