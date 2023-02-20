console.log("welcome");

// initialiase the variables
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let audioElement = new Audio('images/songs/1.mp3');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Warriyo - Mortals [NCS Release]", filePath:"images/songs/1.mp3", coverPath:"images/covers/1.jpg"},
    {songName:"Cielo - Huma-Huma", filePath:"images/songs/2.mp3", coverPath:"images/covers/2.jpg"},
    {songName:"DEAF KEV -  [NCS Release]-320k", filePath:"images/songs/3.mp3", coverPath:"images/covers/3.jpg"},
    {songName:"Different Heaven & EH!DE", filePath:"images/songs/4.mp3", coverPath:"images/covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-", filePath:"images/songs/5.mp3", coverPath:"images/covers/5.jpg"},
    {songName:"Salam-e-Ishq", filePath:"images/songs/6.mp3", coverPath:"images/covers/6.jpg"},
    {songName:"Salam-e-Ishq", filePath:"images/songs/7.mp3", coverPath:"images/covers/7.jpg"}
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});
// handle the play pause 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        gif.style.opacity=0;
    }
})


// listen to events 
audioElement.addEventListener('timeupdate',()=>{
   

    // update seek bar 
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();


        // harry code 

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `images/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        //  harry code ended here 
    })
})

// next and previous button work code

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `images/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `images/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
