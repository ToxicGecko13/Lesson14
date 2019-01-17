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


// version1 using "fullName" array
function exercise1() {
    // Return an array of the full names of people making over $100,000.

    let filterAnswer = people.filter((person) => person.Salary > 100000);

    let mapAnswer = filterAnswer.map((person) => person.fullName);

    document.getElementById("1").innerText = `Answer: ${JSON.stringify(mapAnswer)}`; 
    
}

// // version using .concat and sort()
// function exercise1() {
//     // Return an array of the full names of people making over $100,000.

//     let filterAnswer = people.filter((person) => person.Salary > 100000);

//     let mapAnswer1 = filterAnswer.map((person) => person.firstName);

//     let mapAnswer2 = filterAnswer.map((person) => person.lastName);

//     let names = mapAnswer1.concat(mapAnswer2).sort();

//     document.getElementById("1").innerText = `Answer: ${JSON.stringify(names)}`; 
    
// }


function exercise2() {
    // Return a total cost of the team by adding up salaries

    let finalAnswer = people.reduce( (accumulator, person) => accumulator + person.Salary, 0 );

    document.getElementById("2").innerText = `Answer: ${JSON.stringify(finalAnswer)}`;

}


// version1 using "fullName" array
function exercise3() {
    // Return an array of the full names of people with "SQL" skills
    // if you do a filter on person.Skills you can test for a specific skill.

    let filterAnswer = people.filter((person) => { 
        let filterAn = person.Skills.filter(skill => skill === "SQL" ).length > 0;
        return filterAn;
    });

    let finalAnswer = filterAnswer.map((person) => person.fullName);

    document.getElementById("3").innerText = `Answer: ${JSON.stringify(finalAnswer)}`;

}

// // version using .concat and sort()
// function exercise3() {
//     // Return an array of the full names of people with "SQL" skills
//     // if you do a filter on person.Skills you can test for a specific skill.

//     let filterAnswer = people.filter((person) => { 
//         let filterAn = person.Skills.filter(skill => skill === "SQL" ).length > 0;
//         return filterAn;
//     });

//     let fNames = filterAnswer.map((person) => person.firstName);

//     let lNames = filterAnswer.map((person) => person.lastName);

//     let finalAnswer = fNames.concat(lNames).sort();

//     document.getElementById("3").innerText = `Answer: ${JSON.stringify(finalAnswer)}`;

// }


// version1 using "fullName" array
function exercise4() {
    // Return an array of people with "Software Engineer" in their job title.  Each object in the array you return should have 2 properties, fullName, and job.
    // you can use the method of .includes(substring) on a string to find if a string is found inside a string.

    let softwareEngineers = people.filter((person) => person.job.includes("Software Engineer"));

    let peoplesNames = softwareEngineers.map((person) => person.fullName);

    let peoplesJobs = softwareEngineers.map((person) => person.job);

    let finalAnswer = peoplesNames.concat(peoplesJobs);
    // let finalAnswer = peoplesNames.concat(peoplesJobs).sort();

    document.getElementById("4").innerText = `Answer: ${JSON.stringify(finalAnswer)}`;

}

// // version using .concat and sort()
// function exercise4() {
//     // Return an array of people with "Software Engineer" in their job title.  Each object in the array you return should have 2 properties, fullName, and job.
//     // you can use the method of .includes(substring) on a string to find if a string is found inside a string.

//     let softwareEngineers = people.filter((person) => person.job.includes("Software Engineer"));

//     let peoplesFNames = softwareEngineers.map((person) => person.firstName);

//     let peoplesLNames = softwareEngineers.map((person) => person.lastName);

//     let peoplesJobs = softwareEngineers.map((person) => person.job);

//     let finalAnswer = peoplesFNames.concat(peoplesLNames).concat(peoplesJobs).sort();

//     document.getElementById("4").innerText = `Answer: ${JSON.stringify(finalAnswer)}`;

// }