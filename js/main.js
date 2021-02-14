'use strict';
let score=0;
let userName = prompt('what\'s your name');

alert ('Hello '+userName+' and welcome to my website');
let game =prompt('are you ready for a guessing game about me / yes or no ?');

while(game !== 'yes' && game !== 'no' && game!=='y'&& game!=='n'){
  game=prompt('please answer yes or no');
}
if(game ==='yes' || game==='y') {
  alert('Your welcome again nice to meet you 😍');

} else
{
  alert('why not? you should do it pro 😡');
}
let serious=prompt('Do you think I am serious?');
while(serious!=='yes' && serious!=='y'&& serious!=='n' && serious!=='no'){
  serious=prompt('Do you think I am serious? yes or no ');
}
if (serious.toLowerCase()==='yes' || serious.toLowerCase()==='y' ){
  alert ('we understand each other '+userName);
  score++;
} else
{
  alert ('Guess you are wronge 😜 ');
}
let nationaltiy=prompt('Am I Jordanain?');
while(nationaltiy!=='yes' && nationaltiy!=='y'&& nationaltiy!=='n' && nationaltiy!=='no'){
  nationaltiy=prompt('please answer yes or no');
}
if(nationaltiy.toLocaleLowerCase()==='yes' || nationaltiy.toLowerCase()==='y'){
  alert ('I am a proud of it');
  score++;
}else{
  alert(' wrong answer');
}
let job=prompt('am I Engineer?');
while (job!=='yes' && job!=='y'&& job!=='n' && job!=='no'){
  job=prompt('could you answer yes or no please?');
}
if (job.toLocaleLowerCase()==='yes'|| job.toLowerCase()==='y'){
  alert('that is right 📐');
}else{
  alert('wrong answer  😜');
  score++;
}
let pet=prompt('Do you think I love pet like  🐈 or 🐩?');
while(pet!=='yes' && pet!=='y'&& pet!=='n' && pet!=='no'){
  pet=prompt('answer yes or no please');
}
if (pet.toLowerCase()==='yes' || pet.toLowerCase()==='y'){
  alert('I will never love pet');
}
else{
  alert(' that is right '+userName);
  score++;
}
alert('thanks alot for anwser '+userName+' and welcome again');

console.log('serious '+'nationaltiy'+'  job'+' pet' );

function gussNumber() {
  let attempts=3;
  let userInput=prompt('Guess even Number between 1 to 20');
  console.log(userInput);
  let correct=false;
  while(attempts && !correct){
    for (let i=0 ; i < attempts ; i++){
      if ((userInput)==='10'){
        alert('correct answer!');
        correct=true;
        score++;
        break;
      }
      else if (15>=userInput && userInput>5){
        alert('too high');
      }
      else if( userInput<=(5)||userInput>15 ){
        alert('too low');
      }
      attempts-=1;
      userInput=prompt('please try again you have : '+attempts+' remaining!');
      console.log(userInput);
    }
    if (!attempts && (userInput)==='10'){
      alert('correct answer!');
      correct=true;
    }
    else if(!attempts){
      alert('the number is 10');
      break;
    }
  }
}
gussNumber();
function gussSubject() {
  let attempts=6;
  let easistSubject=['calculus','softwares','physics','arabic','English','chemistry'];
  console.log(easistSubject.length);
  console.log(easistSubject);


  let userInput=prompt('what is the easiest subject? '+ easistSubject);
  while(attempts){
    for (let i= 0;i<easistSubject.length;i++){
      if (userInput===easistSubject[0]){
        alert('correct answer😍');
        correct=true;
        score++;
        break;
      }
      attempts-=1;
      userInput=prompt('please try again you have : '+attempts+' remaining! 😔');
    }
    if (!attempts){
      alert('it is calculus');
      break;
    }

  }
}
gussSubject();
alert ('your score is '+score +'/7');


