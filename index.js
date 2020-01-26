let counter = 60;

$("#start-quiz").click(function() {
  $("#start-quiz-page").hide();
  $("#q-1").removeClass("d-none");

  let answers = {
    1: "93-Billion",
    2: "Saturn",
    3: "Oort-Cloud",
    4: "4",
    5: "Gas-Giant"
  };

  let qNum = 1;

  let timer = setInterval(function() {
    counter--;
    $("#counter").text(counter);
    if (counter <= 0) {
      clearInterval(timer);
      alert("Game Over");
    }
  }, 1000);

  function incorrect() {
    $("#correct").addClass("d-none");
    $("#incorrect").removeClass("d-none");
    counter -= 10;
  }

  function correct() {
    $("#correct").removeClass("d-none");
    $("#incorrect").addClass("d-none");
  }

  function changeQuestion() {
    let str = `#q-${qNum}`;
    $(str).hide();
    let nextQuestionStr = `#q-${qNum + 1}`;
    $(nextQuestionStr).removeClass("d-none");
    $("#placeholder").hide();
  }

  $(".answers").click(e => {
    if (
      e.target.name.toLocaleLowerCase() == answers[qNum].toLocaleLowerCase()
    ) {
      correct();
    } else {
      incorrect();
    }

    if (qNum == 5) {
      $("#q-5").hide();
      $("#submit-score-div").removeClass("d-none");
      $("#score-end").text(counter);
      clearInterval(timer);
      $("#counter").text(counter);
    } else {
      changeQuestion();
    }

    qNum++;
  });
});

// Display Highscores DIV
$("#highscore").click(function() {
  $("#score-end").text(counter);
  $("#highscoreDiv").removeClass("d-none");
});

$("#highscores").click(function() {
  let finalClass = $("#final-scores").hasClass("d-none");

  if (finalClass) {
    $("#final-scores").removeClass("d-none");
  } else {
    $("#final-scores").addClass("d-none");
  }
});

$("#submit-score-hs").click(function() {
  let initials = $("#initials").val();
  let initialsLi = $("<li>");
  let scoreLi = $("<li>");

  $("#display-initials").append(initialsLi);
  initialsLi.text(initials);
  $("#display-score").append(scoreLi);
  scoreLi.text(counter);

  $("#submit-score-div").hide();
  $("#final-scores").removeClass("d-none");
});
