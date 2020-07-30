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
  array.push(Submission);
};
addSubmission(submissions,"Tom",20,"2020-07-29");
console.log(submissions);
//Declare a function named deleteSubmissionByIndex
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
//Declare a function named deleteSubmissionByName
const deleteSubmissionByName = (array, name) => {
  let index = deleteSubmissionByName(array, name);
  array.splice(index1);
};
deleteSubmissionByName(array, "Jack");
console.log(submissions);
//Declare a function named editSubmission
const editSubmission = (array, index, score) => {
  array[index].score=score;
  array[index].passed=score>= 60;
};

//Declare a function named findSubmissionByName
const findSubmissionByName=(array,name)=>{
let foundstudent = array.find((student)=>{
    return student.name===name;
});
return foundstudent;
};
console.log(findSubmissionByName(student,Jill));
//Declare a function named findLowestScore
const findLowestScore=(array)=>{
    let lowestScore = array.score((scores)=>{
        array.forEach((score) =>{
            if(submission.score<lowestScore.score){
          return lowestScore;
    };
    });
//Declare a function named filterPassing
const filterPassing=(array)=>{
    let passing = array.filter((submissions) => {
        return filterPassing;
      });
      console.log(filterPassing(submissions));

//Declare a function named filter90AndAbove
//const filter90AndAbove = (array)=>{
    //let scores = array.filter((scores>=90) =>{
       // return filter90AndAbove===true;
//});  
    //console.log(filter90AndAbove(scores)):
//I could not figure out the last question and why this last red mark is everything looks like it has a beginning and a ending


