let states = ["Kerala", "Uttar Pradesh", "Assam", "Bihar", "Odisha", "Rajasthan"];
let filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(filteredStates); // ["Kerala", "Bihar", "Rajasthan"]