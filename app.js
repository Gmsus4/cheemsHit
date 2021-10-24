const img = document.querySelector('img');
const hitSpan = document.querySelector('span');
const bonk = document.querySelector(".audio");
let hit = true;
let hitScore = 0;

function url() {
    img.src = 'img/cheemsbu.png';
}

function pause(){
    bonk.pause();
    bonk.currentTime = 0;
}

img.addEventListener('click',()=>{
    if(hit === true){
        img.src = 'img/cheemsbd.png';
        hit = false;
        hitScore++;
        hitSpan.innerText = hitScore;
        bonk.play();
    } else{
        img.src = 'img/cheemsbu.png';
        hit = true;
    }
});

document.addEventListener('keydown',(e)=>{
    console.log(e.code);
    switch (e.code){
        case 'ArrowDown':
            img.src = 'img/cheemsbd.png';
            setTimeout(url, 100);
            hitScore++;
            hitSpan.innerText = hitScore;
            pause();
            bonk.play();
        break;
        case 'Enter':
            img.src = 'img/cheemsbd.png';
            setTimeout(url, 100);
            hitScore++;
            hitSpan.innerText = hitScore;
            pause();
            bonk.play();
        break;
        case 'Space':
            img.src = 'img/cheemsbd.png';
            setTimeout(url, 100);
            hitScore++;
            hitSpan.innerText = hitScore;
            pause();
            bonk.play();
        break;
    }
});