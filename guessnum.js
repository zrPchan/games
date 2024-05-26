const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0; // プレイヤーが間違えた回数

guessNumber();

//課題　
function guessNumber() {
  rl.question('1から100までの数字を入力してください。', handleAnswer);
}


function handleAnswer(answer) {
  guesses++;
    if (answer == secretNumber) {
        console.log(`正解です！${guesses}回目で正解しました！`);
        rl.question('再プレイしますか？y or n ', (yn) => {
          if(yn == "y") {
            guesses = 0;
            guessNumber();
          } else {
            rl.close();
          }
        } );
        
        
      } else if (answer < secretNumber) {
        console.log('もっと大きな数字です。');
        guessNumber();
      } else {
        console.log('もっと小さな数字です。');
        guessNumber();
      }
}
