  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */
//callback function
//it is a function we pass a parameter to the method
// Using a for loop
let nums = [1,2,3,4,5];
let results=[];
for(let num of nums){
  results.push(num*2);
}
console.group(results)

// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResult =nums.map(multByTwo)
console.log(mapResults)

// Simplified w/ map()

const Simplfied= nums.map(function(num){return num*2});

// Simplfied w/ map() + arrow function
const multByTwo=nums.map(num=>num*2) 

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


const studentWithIds=students.map(student=>(student.id, student.name))
console.log(studentWithIds)