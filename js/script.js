var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

// Update the count down every 1 second
var dt = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id
  document.getElementById("contdown-display").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  //wish when countdown is finished
  if (distance < 0) {
    clearInterval(dt);
    document.getElementById("contdown-display").innerHTML = "🎉 Happy New Year! 🎊";
  }
}, 1000);
