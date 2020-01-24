let counter = 60;

$("#start-quiz").click(function() {
  $("#start-quiz-page").hide();
  $("#q-1").removeClass("d-none");

  // Start Timer - Executes all questions/answers
  let timer = setInterval(function() {
    counter--;
    $("#counter").text(counter);
    if (counter <= 10) {
      clearInterval(timer);
      alert("Game Over");
    }
  }, 1000);

  // Helper Functions
  function incorrect() {
    $("#correct").addClass("d-none");
    $("#incorrect").removeClass("d-none");
    counter -= 10;
  }
  function correct() {
    $("#correct").removeClass("d-none");
    $("#incorrect").addClass("d-none");
  }
  function changeQuestionOne() {
    $("#q-1").hide();
    $("#q-2").removeClass("d-none");
    $("#placeholder").hide();
  }
  function changeQuestionTwo() {
    $("#q-2").hide();
    $("#q-3").removeClass("d-none");
    $("#placeholder").hide();
  }
  function changeQuestionThree() {
    $("#q-3").hide();
    $("#q-4").removeClass("d-none");
    $("#placeholder").hide();
  }
  function changeQuestionFour() {
    $("#q-4").hide();
    $("#q-5").removeClass("d-none");
    $("#placeholder").hide();
  }
  function lastQuestion() {
    $("#q-5").hide();
    $("#submit-score-div").removeClass("d-none");
    $("#score-end").text(counter);
    clearInterval(timer);
    $("#counter").text(counter);
  }

  // Question 1
  $("#93-billion").click(function() {
    correct();
    changeQuestionOne();
  });

  $("#46-billion").click(function() {
    incorrect();
    changeQuestionOne();
  });
  $("#13-billion").click(function() {
    incorrect();
    changeQuestionOne();
  });
  $("#4-billion").click(function() {
    incorrect();
    changeQuestionOne();
  });

  //Question 2

  $("#mercury").click(function() {
    incorrect();
    changeQuestionTwo();
  });
  $("#venus").click(function() {
    incorrect();
    changeQuestionTwo();
  });
  $("#saturn").click(function() {
    correct();
    changeQuestionTwo();
  });
  $("#neptune").click(function() {
    incorrect();
    changeQuestionTwo();
  });

  // Question 3

  $("#oort-cloud").click(function() {
    correct();
    changeQuestionThree();
  });

  $("#asteroid-belt").click(function() {
    incorrect();
    changeQuestionThree();
  });
  $("#kuiper-belt").click(function() {
    incorrect();
    changeQuestionThree();
  });
  $("#proxima-centauri").click(function() {
    incorrect();
    changeQuestionThree();
  });

  //Question 4

  $("#2").click(function() {
    incorrect();
    changeQuestionFour();
  });
  $("#4").click(function() {
    correct();
    changeQuestionFour();
  });
  $("#6").click(function() {
    incorrect();
    changeQuestionFour();
  });
  $("#8").click(function() {
    incorrect();
    changeQuestionFour();
  });

  // Question 5

  $("#gas-giant").click(function() {
    correct();
    lastQuestion();
  });
  $("#terrestrial").click(function() {
    incorrect();
    lastQuestion();
  });
  $("#closer").click(function() {
    incorrect();
    lastQuestion();
  });
  $("#further").click(function() {
    incorrect();
    lastQuestion();
  });
});

// Display Highscores DIV
$("#highscore").click(function() {
  $("#score-end").text(counter);
  $("#highscoreDiv").removeClass("d-none");
});

// Submit Score @ End of quiz BUTTON

// Highscore Button
$("#highscores").click(function() {
  $("#final-scores").removeClass("d-none");

  // ADD initials to highscore div from submit initials button
});

$("#submit-score-hs").click(function() {
  let initials = $("#initials").val();
  let initialsLi = $("<li>");
  let scoreLi = $("<li>");

  $("#display-initials").append(initialsLi);
  initialsLi.text(initials);
  $("#display-score").append(scoreLi);
  scoreLi.text(counter);
});
// Final Score is "" <-- BLANK

// $("#score-end")
