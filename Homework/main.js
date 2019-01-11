// start by constructing a variable that is an array of objects, this is our data.
let people = [{
    "id": 1,
    "firstName": "Frank",
    "lastName": "Herbert",
    "job": "Lead Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS", "SCRUM Master"],
    "Salary": 120196
},
{
    "id": 2,
    "firstName": "Joan",
    "lastName": "Armorett",
    "job": "Jr Software Developer",
    "Skills": ["JavaScript", "HTML", "CSS"],
    "Salary": 70000
},
{
    "id": 3,
    "firstName": "John",
    "lastName": "Mosses",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS"],
    "Salary": 101234
},
{
    "id": 4,
    "firstName": "Janet",
    "lastName": "Lee",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS", "Technical Writer"],
    "Salary": 86000
},
{
    "id": 5,
    "firstName": "Garry",
    "lastName": "Funny",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "QA", "C#"],
    "Salary": 89100
},
{
    "id": 6,
    "firstName": "Karen",
    "lastName": "Enoch",
    "job": "Jr Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS"],
    "Salary": 70000
},
{
    "id": 7,
    "firstName": "Jason",
    "lastName": "Keel",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "SQL"],
    "Salary": 98000
}
];

function exercise1() {
    // Return an array of the full names of people making over $100,000.
    let answer = people.filter((person) => {
        return person.Salary > 100000
    });
    // This code is missing a map call to return only an array of firstName and lastName
    document.getElementById("1").innerText = `Answer: ${JSON.stringify(answer)}`;
}

function exercise2() {
    // Return a total cost of the team by adding up salaries
    let answer = ["Not Implemented"];
    document.getElementById("2").innerText = `Answer: ${JSON.stringify(answer)}`;
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