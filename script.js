const word=document.getElementById('word');
const text=document.getElementById('text');
const scoreEL=document.getElementById('score');
const timeEl=document.getElementById('time');
const endgameEl=document.getElementById('end-game-container');
const settingsBtn=document.getElementById('settings-btn');
const settings=document.getElementById('settings');
const settingsForm=document.getElementById('settings-form');
const diffi=document.getElementById('difficulty');

const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];
text.focus();
let randomWord;
let score=0;
let time=10;
const timeInterval=setInterval(updateTime,1000);
function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)];
}  
function addwordToDom(){
    randomWord=getRandomWord();
    word.innerHTML=randomWord;
}
function updateScore(){
    score++;
    scoreEL.innerHTML=score;
}
function updateTime(){
    time--;
    timeEl.innerHTML=time+'s';
    if(time==0){
        clearInterval(timeInterval);
        gameOver();
    }
}
function gameOver() {
    endgameEl.innerHTML = `
      <h1>Time ran out</h1>
      <p>Your final score is ${score}</p>
      <button onclick="location.reload()">Reload</button>
    `;
    endgameEl.style.display = 'flex';
   
  }
  
addwordToDom();
text.addEventListener('input',e=>{
    const insertedText=e.target.value;
    if(insertedText===randomWord){
        addwordToDom();
        updateScore();
    
    e.target.value='';
    }
    if(difficulty==='hard'){
        time+=2;
    }else if(difficulty==='medium'){
        time+=3;
    }else{
        time+=5;
    }
    updateTime();
});
settingsBtn.addEventListener('click',()=>settings.classList.toggle('hide'));
settingsForm.addEventListener('change',e=>{
    difficult=e.target.value;
    localStorage.setItem('difficulty',difficulty)
});

