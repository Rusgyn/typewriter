// Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone.

const typeWriter = function(sentence) {
  
  let time = 0;

  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time += 100);
  }

};

typeWriter("Animated sentence using setTimeOut method");