// start by constructing a variable that is an array of objects, this is our data.
let people = [{
    "id": 1,
    "firstName": "Frank",
    "lastName": "Herbert",
    "fullName": "Frank Herbert",
    "job": "Lead Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS", "SCRUM Master"],
    "Salary": 120196 // $120,196
},
{
    "id": 2,
    "firstName": "Joan",
    "lastName": "Armorett",
    "fullName": "Joan Armorett",
    "job": "Jr Software Developer",
    "Skills": ["JavaScript", "HTML", "CSS"],
    "Salary": 70000 // $70,000
},
{
    "id": 3,
    "firstName": "John",
    "lastName": "Mosses",
    "fullName": "John Mosses",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS"],
    "Salary": 101234 // $101,234
},
{
    "id": 4,
    "firstName": "Janet",
    "lastName": "Lee",
    "fullName": "Janet Lee",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS", "Technical Writer"],
    "Salary": 86000 // $86,000
},
{
    "id": 5,
    "firstName": "Garry",
    "lastName": "Funny",
    "fullName": "Garry Funny",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "QA", "C#"],
    "Salary": 89100 // $89,100
},
{
    "id": 6,
    "firstName": "Karen",
    "lastName": "Enoch",
    "fullName": "Karen Enoch",
    "job": "Jr Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS"],
    "Salary": 70000 // $70,000
},
{
    "id": 7,
    "firstName": "Jason",
    "lastName": "Keel",
    "fullName": "Jason Keel",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "SQL"],
    "Salary": 98000 // $98,000
}
];

function exercise1() {
    // Return an array of the full names of people making over $100,000.
    let filterAnswer = people.filter((person) => {
        return person.Salary > 100000
    });

    let mapAnswer = filterAnswer.map((person) => {
        return person.fullName;
    });

    document.getElementById("1").innerText = `Answer: ${JSON.stringify(mapAnswer)}`; 
    

    // // Return an array of the full names of people making over $100,000.
    // let filterAnswer = people.filter((person) => {
    //     return person.Salary > 100000
    // });

    // let mapAnswer1 = filterAnswer.map((person) => {
    //     return person.firstName;
    // });

    // let mapAnswer2 = filterAnswer.map((person) => {
    //     return person.lastName;
    // });

    // let names = mapAnswer1.concat(mapAnswer2);

    // document.getElementById("1").innerText = `Answer: ${JSON.stringify(names)}`; 
    
}


function exercise2() {
    // Return a total cost of the team by adding up salaries
    // let answer = ["Not Implemented"];
    let allSalaries = people.reduce( (accumulator, person) => {
        return accumulator + person.Salary;
    }, 0 );

    document.getElementById("2").innerText = `Answer: ${JSON.stringify(allSalaries)}`;
}

function exercise3() {
    // Return an array of the full names of people with "SQL" skills
    let answer = ["Not Implemented"];
    // if you do a filter on person.Skills you can test for a specific skill.
    document.getElementById("3").innerText = `Answer: ${JSON.stringify(answer)}`;
}

function exercise4() {
    // Return an array of people with "Software Engineer" in their job title.  Each object in the array your return should have 2 properties, fullName, and job.
    let answer = ["Not Implemented"];
    // you can use the method of .includes(substring) on a string to find if a string is found inside a string.
    document.getElementById("4").innerText = `Answer: ${JSON.stringify(answer)}`;
}