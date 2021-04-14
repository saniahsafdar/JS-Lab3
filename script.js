let submissions =[
     {name:'Jane', score: 95, date: '2020-01-24', passed:true}, 
     {name:'Joe', score:77, date: '2018-05-14', passed:true},
     {name:'Jack', score:59, date: '2019-07-05', passed:false},
     {name:'Jill', score:88, date: '2020-04-22', passed:true}
 ];
    

 function addSubmission(array, newName,newScore, newDate){
    array.push({
        name:newName,
        score:newScore,
        date:newDate,
        passed: newScore >= 60
    });
 }

 addSubmission(submissions, 'Max', 93, '2020-08-17',78);



addSubmission(submissions, 1);
console.log(submissions);


function editSubmission(array, index, score){
     array[index].score = score;
     array[index].passed = score >= 60;
}


 function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
 }

 deleteSubmissionByIndex(submissions,1);


 function deleteSubmissionByName(array, name){
    let index = array.findIndex((array) => array.name === name)
    array.splice(index,1)
    }
    
     deleteSubmissionByName(submissions, "Joe")


 function findSubmissionByName(array, name){
    array.findIndex((array) => array.name === name)
 }
    findSubmissionByName(submissions, "Mike")


function findLowestScore(array){
    const lowest = submissions[index];
    submissions.forEach(function(submissions){
        if (submissions.score > array.score){
            lowest = submissions;
        }
    });
   findLowestScore(submissions)
    
}

function filterPassing(array){
    let array = array.filter((array) => array.score >= 60)
}
  filterPassing(submissions.score)

  function filterPassing(array){
    let array = array.filter((array) => array.score >= 90)
}
  filterPassing(submissions.score)
