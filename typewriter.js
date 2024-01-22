// goal is to animate the sentence, revealing one character at a time

const sentence = "hellos there from lighthouse labs";

let delay = 1000;
const sentenceArray = sentence.split('');
const lastIndex = sentenceArray.length - 1;

sentenceArray.forEach((char, idx) => {
  setTimeout(() => {
    if (idx === lastIndex) {
      process.stdout.write(`${char} \n`);
    } else {
      process.stdout.write(char);
    }
  }, delay);

  delay += 200;
});




// for (let char = 0; char < length; char++) {
//   setTimeout(() => {
//     if(char === length-1) {
//       process.stdout.write(sentence[lastChar] + '$')
//     } else {
//     process.stdout.write(char);
//     }
//   }, delay);
//   delay += 300;

// };
