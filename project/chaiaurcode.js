
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const head = document.querySelector(".head ")
const cls = document.querySelector(".head1 ")

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor  = e.target.id;
      head.style.color = "white";
      cls.style.color = "green";
      
      }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      head.style.color = "black";
      cls.style.color = "grey";
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      head.style.color = "white";
      cls.style.color = "pink";
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      head.style.color = "white";
      
      cls.style.color = "green";
    }
    
  });
});
