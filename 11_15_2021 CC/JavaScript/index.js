/* 1. Write two functions:
 - One to retrieve all unique substrings that start and end with a vowel.
 - One to retrieve all unique substrings that start and end with a consonant.
 - The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).
*/

function getVowelSubstrings(input) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let answer = [];
  let indexes = [];
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      indexes.push(i);
    }
  }
  for (let i = 0; i < indexes.length; i++) {
    if (!(answer.includes(input[indexes[i]]))) {
      answer.push(input[indexes[i]]);
    }
    for (let j = i + 1; j < indexes.length; j++) {
      if (!(answer.includes(input.substring(indexes[i], indexes[j] + 1)))) {
        answer.push(input.substring(indexes[i], indexes[j] + 1));
      }
    }
  }
  answer.sort();
  console.log(JSON.stringify(answer));
}

function getConsonantSubstrings(input) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let answer = [];
  let indexes = [];
  for (let i = 0; i < input.length; i++) {
    if (!vowels.includes(input[i])) {
      indexes.push(i);
    }
  }
  for (let i = 0; i < indexes.length; i++) {
    if (!(answer.includes(input[indexes[i]]))) {
      answer.push(input[indexes[i]]);
    }
    for (let j = i + 1; j < indexes.length; j++) {
      if (!(answer.includes(input.substring(indexes[i], indexes[j] + 1)))) {
        answer.push(input.substring(indexes[i], indexes[j] + 1));
      }
    }
  }
  answer.sort();
  console.log(JSON.stringify(answer));
}

/* 2. Write a function redundant that takes in a string 'str' and returns a function that returns 'str'. */

function redundant(str) {
  return (() => str);
}

getVowelSubstrings("apple");
getVowelSubstrings("hmm");
getConsonantSubstrings("aviation");
getConsonantSubstrings("motor")

const f1 = redundant("animal");
const f2 = redundant("pear");
const f3 = redundant("");

console.log(f1());
console.log(f2());
console.log(f3());