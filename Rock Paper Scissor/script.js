const player= document.getElementById('player');
const computer= document.getElementById('computer');
const resultEl= document.getElementById('result');
const rock= document.getElementById('btn-rock');
const paper= document.getElementById('btn-paper');
const scissor= document.getElementById('btn-scissor');
inputPlayer= document.getElementById('inputPlayer');
inputComputer= document.getElementById('inputComputer');
const arr=['Rock', 'Scissor', 'Paper'];

 function compute(element){
    player.value= element.value;
    console.log(player.value);
    // console.log(inputPlayer);
    inputPlayer.value= player.value;
    computerCompute();

 }

//  computing the computer's pass'

function computerCompute(){
    const random= Math.floor(Math.random()*3);
    console.log(arr[random]);
    inputComputer.value= arr[random];
    if(inputPlayer.value==inputComputer.value){
        resultEl.value= 'Draw it is!!';

    } else if((inputPlayer.value=='Rock' && inputComputer.value=='Scissor')|| (inputPlayer.value=='Paper' && inputComputer.value=='Rock')|| (inputPlayer.value=='Scissor' && inputComputer.value=='Paper')){
        resultEl.value= 'Its a Win! Hurrah!';
    } else if((inputPlayer.value=='Rock' && inputComputer.value=='Paper')|| (inputPlayer.value=='Paper' && inputComputer.value=='Scissor')|| (inputPlayer.value=='Scissor' && inputComputer.value=='Rock')){
        resultEl.value= 'You lost!! Next time';
    }

}


// adding listener to rock 
rock.addEventListener('click',function(){
    compute(rock);
});
paper.addEventListener('click',function(){
    compute(paper);
});
scissor.addEventListener('click',function(){
    compute(scissor);
});
