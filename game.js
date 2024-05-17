document.addEventListener("DOMContentLoaded", function () {
  var GamePlay = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    // 0[0] 0[1] 0[2]
    // 1[0] 1[1] 1[2]
    // 2[0] 2[1] 2[2]
  ];
  function colorBtn(button) {
    button.disabled = true;
    button.classList.add("coloredBlack");
  }
  var gameIsGoing = true;
  function compTurn() {
    disableButtons(); // Disable buttons before the computer's turn
    setTimeout(function () {
      let comGuess;
      do {
        comGuess = Math.floor(Math.random() * 9);
      } while (GamePlay[Math.floor(comGuess / 3)][comGuess % 3] !== ""); // Keep guessing if the cell is not empty
      switch (comGuess) {
        case 0:
          GamePlay[0][0] = "O";
          document.getElementById("btn1").innerText = "O";
          colorBtn(document.getElementById("btn1"));
          break;
        case 1:
          GamePlay[0][1] = "O";
          document.getElementById("btn2").innerText = "O";
          colorBtn(document.getElementById("btn2"));
          break;
        case 2:
          GamePlay[0][2] = "O";
          document.getElementById("btn3").innerText = "O";
          colorBtn(document.getElementById("btn3"));
          break;
        case 3:
          GamePlay[1][0] = "O";
          document.getElementById("btn4").innerText = "O";
          colorBtn(document.getElementById("btn4"));
          break;
        case 4:
          GamePlay[1][1] = "O";
          document.getElementById("btn5").innerText = "O";
          colorBtn(document.getElementById("btn5"));
          break;
        case 5:
          GamePlay[1][2] = "O";
          document.getElementById("btn6").innerText = "O";
          colorBtn(document.getElementById("btn6"));
          break;
        case 6:
          GamePlay[2][0] = "O";
          document.getElementById("btn7").innerText = "O";
          colorBtn(document.getElementById("btn7"));
          break;
        case 7:
          GamePlay[2][1] = "O";
          document.getElementById("btn8").innerText = "O";
          colorBtn(document.getElementById("btn8"));
          break;
        case 8:
          GamePlay[2][2] = "O";
          document.getElementById("btn9").innerText = "O";
          colorBtn(document.getElementById("btn9"));
          break;
      }
      enableButtons(); // Re-enable buttons after the computer's turn
      checkComp(); // Check if the computer won
      checkDraw(); // Check if it's a draw
    }, 300);
  }

  function disableButtons() {
    document.querySelectorAll(".overlay-button").forEach(function (button) {
      button.disabled = true;
    });
  }

  function enableButtons() {
    document.querySelectorAll(".overlay-button").forEach(function (button) {
      button.disabled = false;
    });
  }

  function checkComp() {
    switch (true) {
      case GamePlay[0][0] == "O" &&
        GamePlay[1][1] == "O" &&
        GamePlay[2][2] == "O":
        document.getElementById("btn1").classList.add("red");
        document.getElementById("btn5").classList.add("red");
        document.getElementById("btn9").classList.add("red");
        gameIsGoing = false;
        document.getElementById("resultMessage").innerText = "Computer won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        break;
      case GamePlay[0][2] == "O" &&
        GamePlay[1][1] == "O" &&
        GamePlay[2][0] == "O":
        document.getElementById("btn3").classList.add("red");
        document.getElementById("btn5").classList.add("red");
        document.getElementById("btn7").classList.add("red");
        gameIsGoing = false;
        document.getElementById("resultMessage").innerText = "Computer won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        break;
      case GamePlay[0][0] == "O" &&
        GamePlay[0][1] == "O" &&
        GamePlay[0][2] == "O":
        document.getElementById("btn1").classList.add("red");
        document.getElementById("btn2").classList.add("red");
        document.getElementById("btn3").classList.add("red");
        document.getElementById("resultMessage").innerText = "Computer won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        gameIsGoing = false;
        break;

      case GamePlay[1][0] == "O" &&
        GamePlay[1][1] == "O" &&
        GamePlay[1][2] == "O":
        document.getElementById("btn4").classList.add("red");
        document.getElementById("btn5").classList.add("red");
        document.getElementById("btn6").classList.add("red");
        document.getElementById("resultMessage").innerText = "Computer won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        gameIsGoing = false;

        break;

      case GamePlay[2][0] == "O" &&
        GamePlay[2][1] == "O" &&
        GamePlay[2][2] == "O":
        document.getElementById("btn7").classList.add("red");
        document.getElementById("btn8").classList.add("red");
        document.getElementById("btn9").classList.add("red");
        document.getElementById("resultMessage").innerText = "Computer won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        gameIsGoing = false;

        break;

      ///////

      case GamePlay[0][0] == "O" &&
        GamePlay[1][0] == "O" &&
        GamePlay[2][0] == "O":
        document.getElementById("btn1").classList.add("red");
        document.getElementById("btn4").classList.add("red");
        document.getElementById("btn7").classList.add("red");
        gameIsGoing = false;
        document.getElementById("resultMessage").innerText = "Computer won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        break;

      case GamePlay[0][1] == "O" &&
        GamePlay[1][1] == "O" &&
        GamePlay[2][1] == "O":
        document.getElementById("btn2").classList.add("red");
        document.getElementById("btn5").classList.add("red");
        document.getElementById("btn8").classList.add("red");
        document.getElementById("resultMessage").innerText = "Computer won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        gameIsGoing = false;

        break;

      case GamePlay[0][2] == "O" &&
        GamePlay[1][2] == "O" &&
        GamePlay[2][2] == "O":
        document.getElementById("btn3").classList.add("red");
        document.getElementById("btn6").classList.add("red");
        document.getElementById("btn9").classList.add("red");
        document.getElementById("resultMessage").innerText = "Computer won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        gameIsGoing = false;

        break;

      default:
        // No winning combination for the comp
        // Check if the game is a draw
        checkDraw();
        break;
    }
  }

  function checkUser() {
    switch (true) {
      case GamePlay[0][0] == "X" &&
        GamePlay[1][1] == "X" &&
        GamePlay[2][2] == "X":
        document.getElementById("btn1").classList.add("red");
        document.getElementById("btn5").classList.add("red");
        document.getElementById("btn9").classList.add("red");
        gameIsGoing = false;
        document.getElementById("resultMessage").innerText = "You won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        break;
      case GamePlay[0][2] == "X" &&
        GamePlay[1][1] == "X" &&
        GamePlay[2][0] == "X":
        document.getElementById("btn3").classList.add("red");
        document.getElementById("btn5").classList.add("red");
        document.getElementById("btn7").classList.add("red");
        gameIsGoing = false;
        document.getElementById("resultMessage").innerText = "You won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves
        break;
      case GamePlay[0][0] == "X" &&
        GamePlay[0][1] == "X" &&
        GamePlay[0][2] == "X":
        document.getElementById("btn1").classList.add("red");
        document.getElementById("btn2").classList.add("red");
        document.getElementById("btn3").classList.add("red");
        gameIsGoing = false;
        document.getElementById("resultMessage").innerText = "You won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves

        break;

      case GamePlay[1][0] == "X" &&
        GamePlay[1][1] == "X" &&
        GamePlay[1][2] == "X":
        document.getElementById("btn4").classList.add("red");
        document.getElementById("btn5").classList.add("red");
        document.getElementById("btn6").classList.add("red");
        document.getElementById("resultMessage").innerText = "You won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves

        gameIsGoing = false;

        break;

      case GamePlay[2][0] == "X" &&
        GamePlay[2][1] == "X" &&
        GamePlay[2][2] == "X":
        document.getElementById("btn7").classList.add("red");
        document.getElementById("btn8").classList.add("red");
        document.getElementById("btn9").classList.add("red");
        document.getElementById("resultMessage").innerText = "You won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves

        gameIsGoing = false;

        break;

      //////

      case GamePlay[0][0] == "X" &&
        GamePlay[1][0] == "X" &&
        GamePlay[2][0] == "X":
        document.getElementById("btn1").classList.add("red");
        document.getElementById("btn4").classList.add("red");
        document.getElementById("btn7").classList.add("red");
        document.getElementById("resultMessage").innerText = "You won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves

        gameIsGoing = false;

        break;

      case GamePlay[0][1] == "X" &&
        GamePlay[1][1] == "X" &&
        GamePlay[2][1] == "X":
        document.getElementById("btn2").classList.add("red");
        document.getElementById("btn5").classList.add("red");
        document.getElementById("btn8").classList.add("red");
        document.getElementById("resultMessage").innerText = "You won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves

        gameIsGoing = false;

        break;

      case GamePlay[0][2] == "X" &&
        GamePlay[1][2] == "X" &&
        GamePlay[2][2] == "X":
        document.getElementById("btn3").classList.add("red");
        document.getElementById("btn6").classList.add("red");
        document.getElementById("btn9").classList.add("red");
        document.getElementById("resultMessage").innerText = "You won !"; // Display the winner message
        disableButtons(); // Disable all buttons to prevent further moves

        gameIsGoing = false;

        break;

      default:
        // No winning combination for the user
        // Check if the game is a draw
        checkDraw();
        break;
    }
  }

  function checkDraw() {
    let fullBoard = true; // Assume the board is full
    let winnerFound = false; // Assume no winner is found
    // Check if any cell is empty
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (GamePlay[i][j] == "") {
          fullBoard = false; // If any cell is empty, the board is not full
          break;
        }
      }
    }

    // Check if there's a winner
    if (
      GamePlay[0][0] == "X" &&
      GamePlay[1][1] == "X" &&
      GamePlay[2][2] == "X"
    ) {
      winnerFound = true;
    } else if (
      GamePlay[0][2] == "X" &&
      GamePlay[1][1] == "X" &&
      GamePlay[2][0] == "X"
    ) {
      winnerFound = true;
    } else if (
      GamePlay[0][0] == "X" &&
      GamePlay[0][1] == "X" &&
      GamePlay[0][2] == "X"
    ) {
      winnerFound = true;
    } else if (
      GamePlay[1][0] == "X" &&
      GamePlay[1][1] == "X" &&
      GamePlay[1][2] == "X"
    ) {
      winnerFound = true;
    } else if (
      GamePlay[2][0] == "X" &&
      GamePlay[2][1] == "X" &&
      GamePlay[2][2] == "X"
    ) {
      winnerFound = true;
    } else if (
      GamePlay[0][0] == "X" &&
      GamePlay[1][0] == "X" &&
      GamePlay[2][0] == "X"
    ) {
      winnerFound = true;
    } else if (
      GamePlay[0][1] == "X" &&
      GamePlay[1][1] == "X" &&
      GamePlay[2][1] == "X"
    ) {
      winnerFound = true;
    } else if (
      GamePlay[0][2] == "X" &&
      GamePlay[1][2] == "X" &&
      GamePlay[2][2] == "X"
    ) {
      winnerFound = true;
    }

    // If the board is full and no winner is found, it's a draw
    if (fullBoard && !winnerFound) {
      gameIsGoing = false; // Stop the game
      document.getElementById("resultMessage").innerText = "It's a draw !"; // Display the draw message
      disableButtons(); // Disable all buttons to prevent further moves
    }
  }

  function resetGame() {
    // Clear the result message
    document.getElementById("resultMessage").innerText = "";

    // Reset the game board
    GamePlay = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    // Reset button text and styling
    document.querySelectorAll(".overlay-button").forEach(function (button) {
      button.innerText = "";
      button.disabled = false;
      button.classList.remove("coloredBlack", "red");
    });

    // Reset game state
    gameIsGoing = true;
  }

  document.getElementById("btn1").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[0][0] == "") {
      GamePlay[0][0] = "X";
      document.getElementById("btn1").innerText = "X";
      colorBtn(document.getElementById("btn1"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document.getElementById("btn2").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[0][1] == "") {
      GamePlay[0][1] = "X";
      document.getElementById("btn2").innerText = "X";
      colorBtn(document.getElementById("btn2"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document.getElementById("btn3").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[0][2] == "") {
      GamePlay[0][2] = "X";
      document.getElementById("btn3").innerText = "X";
      colorBtn(document.getElementById("btn3"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document.getElementById("btn4").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[1][0] == "") {
      GamePlay[1][0] = "X";
      document.getElementById("btn4").innerText = "X";
      colorBtn(document.getElementById("btn4"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document.getElementById("btn5").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[1][1] == "") {
      GamePlay[1][1] = "X";
      document.getElementById("btn5").innerText = "X";
      colorBtn(document.getElementById("btn5"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document.getElementById("btn6").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[1][2] == "") {
      GamePlay[1][2] = "X";
      document.getElementById("btn6").innerText = "X";
      colorBtn(document.getElementById("btn6"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document.getElementById("btn7").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[2][0] == "") {
      GamePlay[2][0] = "X";
      document.getElementById("btn7").innerText = "X";
      colorBtn(document.getElementById("btn7"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document.getElementById("btn8").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[2][1] == "") {
      GamePlay[2][1] = "X";
      document.getElementById("btn8").innerText = "X";
      colorBtn(document.getElementById("btn8"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document.getElementById("btn9").addEventListener("click", function () {
    if (gameIsGoing && GamePlay[2][2] == "") {
      GamePlay[2][2] = "X";
      document.getElementById("btn9").innerText = "X";
      colorBtn(document.getElementById("btn9"));
      checkUser(); // Check if the user won
      checkDraw(); // Check if it's a draw
      if (gameIsGoing) {
        compTurn(); // Proceed with computer's turn only if the game is still going
      }
    }
  });

  document
    .getElementById("play-again-button")
    .addEventListener("click", function () {
      // Reset the game state
      resetGame();
    });
  document
    .getElementById("play-again-button")
    .addEventListener("click", function () {
      resetGame();
    });
});
