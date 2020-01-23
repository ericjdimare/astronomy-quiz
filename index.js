let counter = 60;

$("#start-quiz").click(function() {
  $("#start-quiz-page").hide();
  $("#q-1").removeClass("d-none");
  setInterval(timer);
});

let timer = setInterval(function() {
  counter--;
  $("#counter").text(counter);
  if (counter == 0) {
    clearInterval(timer);
    alert("Game Over");
  }
}, 1000);

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

// Question 3
$("#oort-cloud").click(function() {
  $("#correct").removeClass("d-none");
  $("#incorrect").addClass("d-none");
  $("#q-3").hide();
  $("#q-4").removeClass("d-none");
});

$("#asteroid-belt").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-3").hide();
  $("#q-4").removeClass("d-none");
});
$("#kuiper-belt").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-3").hide();
  $("#q-4").removeClass("d-none");
});
$("#proxima-centauri").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-3").hide();
  $("#q-4").removeClass("d-none");
});

//Question 4

$("#2").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-4").hide();
  $("#q-5").removeClass("d-none");
});
$("#4").click(function() {
  $("#correct").removeClass("d-none");
  $("#incorrect").addClass("d-none");
  $("#q-4").hide();
  $("#q-5").removeClass("d-none");
});
$("#6").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-4").hide();
  $("#q-5").removeClass("d-none");
});
$("#8").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-4").hide();
  $("#q-5").removeClass("d-none");
});

// Question 5

$("#gas-giant").click(function() {
  $("#correct").removeClass("d-none");
  $("#incorrect").addClass("d-none");
  $("#q-5").hide();
  $("#end-game").removeClass("d-none");
  $("#score").text(counter);
  clearInterval(timer);
});
$("#terrestrial").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-5").hide();
  $("#end-game").removeClass("d-none");
  $("#score").text(counter);
  clearInterval(timer);
});
$("#closer").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-5").hide();
  $("#end-game").removeClass("d-none");
  $("#score").text(counter);
  clearInterval(timer);
});
$("#further").click(function() {
  counter -= 10;
  $("#incorrect").removeClass("d-none");
  $("#correct").addClass("d-none");
  $("#q-5").hide();
  $("#end-game").removeClass("d-none");
  $("#score").text(counter);
  clearInterval(timer);
});
