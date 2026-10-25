function getRandomWord(words: string[]): string {
  //minIndex of 0 implied
  const maxIndex = words.length - 1;
  const randomIndex = Math.random() * maxIndex;
  return words[randomIndex];
}

function getRandomWrongWord(words: string[], correctWord: string): string {
  //while loop version - less resource intensive
  let currentWord;
  do {
    currentWord = getRandomWord(words);
  } while (currentWord === correctWord);
  return currentWord;

  // removing some elements of randomisation version

  let newArray = words.filter((word) => {
    return word !== correctWord;
  });
  return getRandomWord(newArray);
}
