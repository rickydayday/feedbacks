let image = document.getElementById('image');

let images = ['https://www.bizmerlin.com/wp-content/uploads/2022/02/Toss-off-Feedback-on-the-Go.png',

              'https://www.bizmerlin.com/wp-content/uploads/2022/02/Express-Through-Emojis-and-Badges.png', 

              'https://www.bizmerlin.com/wp-content/uploads/2021/06/performance-feedback.png'];

setInterval(function() {
let random =Math.floor(Math.random()* 3);
image.src = images[random];
}, 10000)


const items = ['Karibu CreditBank Customer Experience!', 'Welcome CreditBank Customer Experience!'];
const delSpeed = 55;
const typeSpeed = 125;
const targetElm = '.type';

// Code

let index = 0; // index of array
let charIndex = 0; // index of character in string

function typing() {
  if (index === items.length) {
    index = 0;
    setTimeout(typing, typeSpeed);
  } else if (charIndex < items[index].length + 1) {
    const addChar = items[index].substr(-items[index].length, charIndex);
    document.getElementById('demo').innerHTML = `<h2>${addChar}</h2>`;
    charIndex += 1;
    setTimeout(typing, typeSpeed); 
  }
};



typing();


var branch = document.getElementById('branch');
var choosebranch = document.getElementById('choosebranch');
var choosechannel = document.getElementById('choosechannel');


var channel= document.getElementById("channels");

choosebranch.onchange = function(){
  channel.setAttribute('disabled',false);
}

choosechannel.onchange = function(){
  branch.setAttribute('disabled',false);
}


branch.onchange = function(){
  channel.setAttribute("disabled", true);

}

channel.onchange = function(){
  branch.setAttribute("disabled", true);
}