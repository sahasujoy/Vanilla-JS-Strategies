const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i=0; i<6; i++)
    {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor; 
});

function getRandomNumber()
{
    return Math.floor(Math.random()*hex.length);
}

let timerOn = true;

function timer(remaining) {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;

  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  document.getElementById('timer').innerHTML = m + ':' + s;
  remaining -= 1;

  if(remaining >= 0 && timerOn) {
    setTimeout(function() {
        timer(remaining);
    }, 1000);
    return;
  }

  if(!timerOn) {
    // Do validate stuff here
    return;
  }

  if (remaining < 0) {
    document.getElementById("btn").click();
    timer(5);
}

}
timer(5);



