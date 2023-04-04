
var main = document.getElementById('container');
function updateClock() {

  // Get the current time, day , month and year
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDay();
  var date = now.getDate();
  var month = now.getMonth();
  var year = now.getFullYear();

  // store day and month name in an array
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // format date and time
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;

    // display date and time
    var period = hours < 12 ? 'AM' : 'PM';
    document.getElementById("s").innerHTML = hours ;
    document.getElementById("m").innerHTML =  minutes;
    document.getElementById("h").innerHTML = seconds;
    // dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
}

updateClock();
setInterval(updateClock, 1000);

//**************************************************************************** */
//wallpaper 

// var on = document.getElementById("fs");
// on.addEventListener("input", change);
// on.addEventListener("input", storage);
// document.getElementById("imgA").addEventListener("click", function(){
//   main.style.backgroundImage = "url('tajA.jpg')";
//   // document.body.style.backgroundPosition = "top";

//   vass = String("custom");
//   localStorage.mode = vass;
// });
// function change(){
//   main.style.backgroundImage = "";
//   main.classList.toggle("dark");
// }

// function storage(){
//   if(on.checked){
//     ver = String("dark");
    
//     localStorage.mode = ver;
//   }else{
//     varr = String("light");

//     localStorage.mode = varr; 
//   }
// }
// document.addEventListener("DOMContentLoaded" , check)
// function check(){
//   if (localStorage.mode =="dark") {
//     on.checked = "true";
//     main.className += " dark"
//     console.log("dark mode");
//   }if (localStorage.mode =="custom") {
//     main.style.backgroundImage = "url('tajA.jpg')";
//     // main.style.backgroundPosition = "top";
//   } else {
//     console.log("light mode");
//   }
// }

document.getElementById("refresh_joke").addEventListener('click',joke);
function joke(){
  var jokeElement = document.getElementById("jokep");
  fetch("https://icanhazdadjoke.com/slack")
  .then(data => data.json())
  .then(jokedata => {
      var joketext = jokedata.attachments[0].text;

      console.log(joketext);
      console.log("jokefun");
      // alert("new")
  
      jokeElement.innerHTML = joketext;});
  
}
function openNav() {
  document.getElementById("mySidenav").classList.toggle("sidenavv");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById('newww').addEventListener("click",openNav);
document.getElementById('closeNav').addEventListener("click",openNav);
