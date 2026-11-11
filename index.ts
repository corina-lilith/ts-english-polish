type Word = {
  english: string;
  polish: string;
  category?: string;
};

const word1: Word = {
  english: "red",
  polish: "czerwony",
  category: "colours",
};

const word2: Word = {
  english: "blue",
  polish: "niebieski",
};

console.log(word1);
console.log(word1.category);
