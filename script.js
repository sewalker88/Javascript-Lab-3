"use strict";
//Declare a variable named submissions that is initialized to an array with the following objects
let submissions = [
  { name: "Jane", score: 95, date: "2020 - 01-24", passed: true },
  { name: "Joe", score: 77, date: "2018 -05-14", passed: true },

  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];
//Declare a function named addSubmission

const addSubmission = (array, newName, newScore, newDate) => {
  let submission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(submission);
};
addSubmission(submissions, "Tom", 20, "2020-07-29");
console.log(submissions);
//Declare a function named deleteSubmissionByIndex
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
//Declare a function named deleteSubmissionByName
const deleteSubmissionByName = (array, name) => {
  let foundIndex = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(foundIndex, 1);
};
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);
//Declare a function named editSubmission
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
console.log(submissions);
//Declare a function named findSubmissionByName
const findSubmissionByName = (array, name) => {
  let foundStudent = array.find((student) => {
    return student.name === name;
  });
  return foundStudent;
};
console.log(findSubmissionByName(submissions, "Jill"));

const findLowestScore = (array) => {
  let currentLowest = array[0];
  array.forEach((currentScore) => {
    if (currentScore.score < currentLowest.score) {
      currentLowest = currentScore;
    }
  });
  return currentLowest;
};

//Find average score

const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));
//Declare a function named filterPassing

const filterPassing = (array) => {
  let newArray = array.filter((item) => {
    return item.score >= 60;
  });
  return newArray;
};
console.log(filterPassing(submissions));

//Declare a function named filter90AndAbove
const filter90AndAbove = (array) => {
  let newArray = array.filter((score) => {
    return score.score >= 90;
  });
  return newArray;
};
console.log(filter90AndAbove(submissions));
