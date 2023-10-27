function guessingGame() {
  let number = Math.floor(Math.random() * 100);
  let isOver = true;
  return {
    guessNumber(inputNumber) {
      if (isOver) {
        console.log("game over");
      } else {
        if (inputNumber === number) {
          console.log("You won");
        } else if (inputNumber < number) {
          console.log(`$(number) is too low`);
        } else {
          console.log(`$(number) is too hight`);
        }
      }
    },
  };
}

module.exports = { guessingGame };
