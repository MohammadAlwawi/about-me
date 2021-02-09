'use strict';
let userName = prompt('what\'s your name');

alert ('Hello '+userName+' and welcome to my website');
let game =prompt('are you ready for a guessing game about me / yes or no ?');

while(game !== 'yes' && game !== 'no'){
  game=prompt('please answer yes or no');
}
if(game ==='yes') {
  alert('Your welcome again nice to meet you 😍');
} else
{
  alert('why not? you should do it pro 😡');
}
let serious=prompt('Do you think I am serious?');
while(serious!=='yes' && serious!=='no'){
  serious=prompt('Do you think I am serious? yes or no ');
}
if (serious.toLowerCase()==='yes'){
  alert ('we understand each other '+userName);
} else
{
  alert ('Guess you are wronge 😜 ');
}
let nationaltiy=prompt('Am I Jordanain?');
while(nationaltiy!=='yes'&& nationaltiy!=='no'){
  nationaltiy=prompt('please answer yes or no');
}
if(nationaltiy.toLocaleLowerCase()==='yes'){
  alert ('I am a proud of it');
}else{
  alert(' wrong answer');
}
let job=prompt('am I Engineer?');
while (job!=='yes'&&job!=='no'){
  job=prompt('could you answer yes or no please?');
}
if (job.toLocaleLowerCase()==='yes'){
  alert('that is right 📐');
}else{
  alert('wrong answer  😜');
}
let pet=prompt('Do you think I love pet like  🐈 or 🐩?');
while(pet!=='yes'&& pet!=='no'){
  pet=prompt('answer yes or no please');
}
if (pet.toLowerCase()==='yes'){
  alert('I will never love pet');
}else{
  alert(' that is right '+userName);
}
alert('thanks alot for anwser '+userName+' and welcome again');

console.log('seriou '+'nationaltiy'+'  job'+' pet' );
