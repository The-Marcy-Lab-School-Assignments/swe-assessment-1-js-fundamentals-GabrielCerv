/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  // Your code here
  if (petBreed === undefined || petName === undefined) {
    console.log('Missing information. Please provide a valid pet.')
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else {
    console.log('What an...interesting pet.')
  }
};
// console.log(petBreed, petName)
// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
  for (let i = firstNum; i <= secondNum - 1; i++) {
    console.log(i);
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].toUpperCase() + '!');
  }
  // console.log(`${str[''].slice('').toUpperCase()}`);
};
// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
}
// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
  // const gnomes = { lowercase, 0: uppercase, 0: neither, 0};

  // for (let i = 0; i < gnomes.length; i++)
  //   const count = gnomes[i];


};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
