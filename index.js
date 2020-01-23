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

// Question 1
$("#93-billion").click(function() {
  $("#correct").removeClass("d-none");
  $("#q-1").hide();
  $("#q-2").removeClass("d-none");
});

$("#46-billion").click(function() {
  counter -= 10;
  $("#correct").addClass("d-none");
  $("#incorrect").removeClass("d-none");
  $("#q-1").hide();
  $("#q-2").removeClass("d-none");
});
$("#13-billion").click(function() {
  counter -= 10;
  $("#correct").addClass("d-none");
  $("#incorrect").removeClass("d-none");
  $("#q-1").hide();
  $("#q-2").removeClass("d-none");
});
$("#4-billion").click(function() {
  counter -= 10;
  $("#correct").addClass("d-none");
  $("#incorrect").removeClass("d-none");
  $("#q-1").hide();
  $("#q-2").removeClass("d-none");
});

//Question 2
$("#mercury").click(function() {
  counter -= 10;
  $("#correct").addClass("d-none");
  $("#incorrect").removeClass("d-none");
  $("#q-2").hide();
  $("#q-3").removeClass("d-none");
});
$("#venus").click(function() {
  counter -= 10;
  $("#correct").addClass("d-none");
  $("#incorrect").removeClass("d-none");
  $("#q-2").hide();
  $("#q-3").removeClass("d-none");
});
$("#saturn").click(function() {
  $("#correct").removeClass("d-none");
  $("#incorrect").addClass("d-none");
  $("#q-2").hide();
  $("#q-3").removeClass("d-none");
});
$("#neptune").click(function() {
  counter -= 10;
  $("#correct").addClass("d-none");
  $("#incorrect").removeClass("d-none");
  $("#q-2").hide();
  $("#q-3").removeClass("d-none");
});
