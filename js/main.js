var game = {

    player1: {
  
      type: '',
      turn: false,
      choices: []
  
    },
  
    player2: {
  
      type: '',
      turn: false,
      choices: []
  
  
    },
    checkDraw: function () {
  
  
    }
  }
  
  
  var choosePlayer = prompt("Hey gamer! Please choose either x or o");
  
  
  determinePlayer(choosePlayer);
  
  function determinePlayer(cp) {
  
  
    while (choosePlayer != 'o' || choosePlayer != 'O' || choosePlayer != 'X' || choosePlayer != 'x') {
  
      if (choosePlayer == 'o' || choosePlayer == 'O' || choosePlayer == 'x' || choosePlayer == 'X') {
        alert("Good choice!");
        return setPlayers(choosePlayer);
      } else {
  
  
        alert("Incorrect selection!");
  
        choosePlayer = prompt("Hey gamer! Please choose either X or O again!");
      }
  
  
    }
  
    function setPlayers(forceChoise) {
      if (forceChoise == 'o' || forceChoise == 'O') {
  
  
        game.player1.type = 'o';
        game.player1.turn = true;
        game.player2.type = 'x';
  
      } else if (forceChoise == 'x' || forceChoise == 'X') {
        game.player1.type = 'x';
        game.player1.turn = true;
        game.player2.type = 'o';
  
      }
  
  
    }
  
  
  }
  
  
  var player1Input;
  var player2Input;
  
  function checkButtonClicked(idCheck) {
  
    if ($('#' + idCheck).text() != "") {
  
      return false;
    } else {
  
      return true;
    }
  
  
  }
  
  var drawCounter = 0;
  var thereIsWinner = 0;
  
  function checkButtons(idBtn) {
  
    drawCounter++;
  
  
    if (checkButtonClicked(idBtn) && game.player1.turn) {
  
      var buttonValue = idBtn;
  
  
      player1Input = idBtn;
      game.checkDraw();
  
      activate(player1Input);
  
      player1Turn(player1Input);
  
      if (game.player1.choices.length >= 3) {
  
  
        checkWin(game.player1.choices, "player1");
      }
      game.player1.turn = false;
      game.player2.turn = true;
  
  
    } else if (game.player2.turn && checkButtonClicked(idBtn)) {
  
  
      player2Input = idBtn;
      game.checkDraw();
  
      activate(player2Input);
  
      player2Turn(player2Input);
  
  
      if (game.player2.choices.length >= 3) {
  
  
        checkWin(game.player2.choices, "player2");
  
  
      }
  
      game.player2.turn = false;
      game.player1.turn = true;
  
    } else {
      alert("Select another button!");
    }
  
    if (drawCounter >= 9 && thereIsWinner == 0) {
  
      swal({
        title: 'No one won, game will restart in 10 seconds',
        width: 500,
        padding: '2em',
        imageUrl: 'https://media.giphy.com/media/3ohzdMk3uz9WSpdTvW/giphy.gif',
        imageWidth: 600,
        imageHeight: 600,
        imageAlt: 'Custom image',
  
  
      })
  
      setTimeout(function () {
  
  
        location.reload();
  
      }, 10000);
  
  
    }
  }
  
  
  function player1Turn(input1) {
  
  
    game.player1.choices.push(player1Input);
  
  
  }
  
  
  function activate(answerO) {
  
  
    var insertAnswerO = document.getElementById(answerO);
  
  
    if (game.player1.turn) {
  
  
      $(insertAnswerO).text(game.player1.type);
  
  
    } else {
      $(insertAnswerO).text(game.player2.type);
  
  
    }
  
  
  }
  
  
  function player2Turn() {
  
  
    game.player2.choices.push(player2Input);
  
  
  }
  
  
  function checkWin(combCheck, winner) {
  
    var compareArray;
  
  
    var winCombine = [
      ["1", "2", "3"],
      ["1", "4", "7"],
      ["3", "6", "9"],
      ["1", "5", "9"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["2", "5", "8"]
    ]
  
    var array1 = combCheck;
  
  
    for (var i = 0; i < 6; i++) {
  
      if (array1.indexOf(winCombine[i][0]) != -1 && array1.indexOf(winCombine[i][1]) != -1 && array1.indexOf(winCombine[i][2]) != -1 && winner == "player1") {
  
  
        alert("Player1 wins!!! 💪🏻 ");
  
        document.getElementById("winner").innerHTML = "Player1 won!";
  
        swal({
          title: 'Game will restart in 5 seconds ',
          width: 600,
          padding: '3em',
          buttons: false,
          timer: 5000,
          imageUrl: 'https://media.giphy.com/media/xThtama8b8ZGtnMeuQ/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          
        })
  
  
        setTimeout(function () {
  
          location.reload();
  
        }, 5000);
  
  
        thereIsWinner = 1;
  
  
      } else if (array1.indexOf(winCombine[i][0]) != -1 && array1.indexOf(winCombine[i][1]) != -1 && array1.indexOf(winCombine[i][2]) != -1 && winner == "player2") {
  
  
        alert("Player2 wins!!! 💪🏻 ");
  
        document.getElementById("winner").innerHTML = "Player2 won!";
  
        swal({
          title: 'Game will restart in 5 seconds ',
          width: 600,
          padding: '3em',
          timer: 5000,
          imageUrl: 'https://media.giphy.com/media/xThtama8b8ZGtnMeuQ/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
  
  
        })
  
  
        setTimeout(function (time) {
  
          location.reload();
  
        }, 5000);
  
      }
  
  
    }
  
  }