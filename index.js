function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun("play football"));

function mondayWork(argument = "go to the office") {
  return `This Monday, I will ${argument}.`;
}
console.log(mondayWork());

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
console.log(wrapAdjective("%")("a dedicated programmer"));
