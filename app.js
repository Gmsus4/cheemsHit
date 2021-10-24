const img = document.querySelector('img');
const hitSpan = document.querySelector('span');
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
    pause();
    bonk.play();
    img.src = 'img/cheemsbd.png';
    setTimeout(url, 100);
    hitScore++;
    hitSpan.innerText = hitScore;

/*     if(hit === true){
        pause();
        bonk.play();
        img.src = 'img/cheemsbd.png';
        hit = false;
        hitScore++;
        hitSpan.innerText = hitScore;
    } else{
        img.src = 'img/cheemsbu.png';
        hit = true;
    } */
});

document.addEventListener('keydown',(e)=>{
    console.log(e.code);
    switch (e.code){
        case 'ArrowDown':
            pause();
            bonk.play();
            img.src = 'img/cheemsbd.png';
            setTimeout(url, 100);
            hitScore++;
            hitSpan.innerText = hitScore;
        break;
        case 'Enter':
            pause();
            bonk.play();
            img.src = 'img/cheemsbd.png';
            setTimeout(url, 100);
            hitScore++;
            hitSpan.innerText = hitScore;
        break;
        case 'Space':
            pause();
            bonk.play();
            img.src = 'img/cheemsbd.png';
            setTimeout(url, 100);
            hitScore++;
            hitSpan.innerText = hitScore;
        break;
    }
});