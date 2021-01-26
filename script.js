//count date up to dec 31 2024
var countdownDate = new Date("Dec 31, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
    
  // Find the time between count down and now 
  var remainingTime = countdownDate - now;
    
  // Now lets calculate the time in days, hours....
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (remainingTime < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
