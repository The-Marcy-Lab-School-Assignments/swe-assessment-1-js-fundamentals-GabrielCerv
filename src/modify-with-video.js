/*
  DEBUGGING ACTIVITY: Score Tracker

  You've been hired by a small game company to help debug their score-tracking system.

  The code SHOULD:
  1. Keep track of several players and their scores
  2. Increase or decrease a player's score
  3. Reset all scores to zero
  4. Return the name of the current top scorer

  However, some functionality isn't working correctly.

  YOUR TASKS:
  1. Run this file and observe what happens
  2. Identify 3 bugs in the code
  3. Fix all 3 bugs
  4. Record a 2-4 minute video explaining:
  - What you expected to happen
  - The bugs you found (what's wrong and why)
  - The fixes you implemented

  ADD YOUR LOOM LINK HERE: https://www.loom.com/share/7d0e7942d3af407b95c2da4765e3d5f9?sid=f7d87c68-f13c-404d-9052-3c66ce228ebe
*/

const players = [
  { name: 'Taylor', score: 0 },
  { name: 'Jordan', score: 0 },
  { name: 'Alex', score: 0 },
  { name: 'Morgan', score: 0 },
];

const increaseScore = (name) => {
  for (let i = 0; i <= players.length; i++) { // The bug here is that they use the Smaller than operator when its supposed to be the Smaller than or equal too (<=)
    if (players[i].name === name) {// using the assignment (=) operator while they were supposed to use the "strict equality operator" (===) operator to it doesnt 
      players[i].score += 1;
    }
  }
}

const decreaseScore = (name) => {
  for (let i = 0; i < players.length; i++) {
    if (players[i].name === name) {
      players[i].score -= 1;
    }
  }
}

const resetAllScores = () => {
  for (let i = 0; i < players.length; i++) {
    let player = players[i];
    resetSingleScore(player);
  }
}

const resetSingleScore = (player) => {
  players.score = 0;// The problem is that score is not a defined variable in this code, the solution would be to write the correct variable which is player.score which would then cause the scores to reset using the resetSingleScore function.
}

const getTopScorer = () => {
  let maxScore = -Infinity;
  let topPlayer;

  for (let i = 0; i < players.length; i++) {
    if (players[i].score > maxScore) {
      maxScore = players[i].score;
      topPlayer = players[i].name;
    }
  }

  return topPlayer;
}

// ============================================
// Testing the functions
// ============================================

increaseScore('Alex');
increaseScore('Alex');
decreaseScore('Jordan');
console.log(players);
console.log(getTopScorer());

resetAllScores();
console.log(players);
console.log(getTopScorer());

// ============================================
// Exports
// ============================================

module.exports = {
  players,
  increaseScore,
  decreaseScore,
  resetAllScores,
  getTopScorer,
};
