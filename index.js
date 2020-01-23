let counter = 60;

$("#start-quiz").click(function() {
  $("#start-quiz-page").hide();
  $("#q-1").removeClass("d-none");

  let interval = setInterval(function() {
    counter--;
    $("#counter").text(counter);
    if (counter == 0) {
      clearInterval(interval);
      alert("Game Over");
    }
  }, 1000);
});
