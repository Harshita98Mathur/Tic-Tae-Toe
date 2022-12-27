console.log("Welcome To TIC TAC TOE")
let sound = new Audio("music.mp3")
let turnAudio = new Audio("ting.mp3")
let gameover = new Audio("gameOver.mp3")
let turn = "X"
let finish = false;

const turnChange = ()=>{
    return turn === "X"? "0": "X"
} 

const winner = ()=>{
    let texts = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2],[3, 4, 5],
        [6, 7, 8],[0, 3, 6],
        [1, 4, 7],[2, 5, 8],
        [0, 4, 8],[2, 4, 6],
    ]
    wins.forEach( e => {
        if((texts[e[0]].innerText === texts[e[1]].innerText) && (texts[e[2]].innerText === texts[e[1]].innerText) && (texts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = texts[e[0]].innerText + "  : Congratulation You Won  "
            finish = true
            document.querySelector('.photo').getElementsByTagName('img')[0].style.width = "240px"
        }
    })
}
//sound.play()
let boxes = document.getElementsByClassName("boxes");
Array.from(boxes).forEach(element =>{
    let text = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(text.innerText === ''){
            text.innerText = turn;
            turn = turnChange();
            turnAudio.play();
            winner();
            if(!finish){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
            
        }
    })
})

reset.addEventListener('click', () => {
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach(element=>{
        element.innerText = " "
    });
    turn = "X";
    finish = false
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.photo').getElementsByTagName('img')[0].style.width = "0px"
})