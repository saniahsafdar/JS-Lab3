//compare with script.js to see what mistakes were made.

let submissions =[
    {name:'Jane', score: 95, date: '2020-01-24', passed:true}, 
    {name:'Joe', score:77, date: '2018-05-14', passed:true},
    {name:'Jack', score:59, date: '2019-07-05', passed:false},
    {name:'Jill', score:88, date: '2020-04-22', passed:true}
];

function addSubmission(array, newName, newScore, newDate) {
    let ifPassed;
    if (newScore >= 60) {
        ifPassed = true;
    } else {
         ifPassed = false;
     }
    array.push({name: newName, score: newScore, date: newDate, passed: ifPassed});
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array,name){
    let index = array.findIndex((submission) => submission.name === name);
    array.splice(index,1) 
}


deleteSubmissionByName(submissions,"Joe")

function editSubmission(array, index, score){
    let submission = array[index];
    console.log(submission)
    submission.score = score;
    submission.passed = score >= 60 ? true:false;

}

editSubmission(submissions, 2, 54)


function findSubmissionByName(array,name){
    const subName = array.find((submission) => submission.name === name);
    return subName;
}

findSubmissionByName(submissions, 'Jill')


const findLowestScore = (array) => {
    let lowest = array[0];
    array.forEach(function(submission) {
      if (lowest.score > submission.score) {
        lowest = submission;
      }
    });
    return lowest;
  }

findLowestScore(submissions)

function findAverageScore(array){
    let total = 0;
    let average;
    for (let submissions of array){
        total += submissions.score
    } 
    average = total / array.length;
    return average;
}

console.log(findAverageScore(submissions));



function filterPassing(array){
   return array.filter(submissions => submissions.passed);
}
console.log(filterPassing(submissions));



function filter90AndAbove(array){
    return array.filter(submissions => submissions.score >+ 90);
}

console.log(filter90AndAbove(submissions));
