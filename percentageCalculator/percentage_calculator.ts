import inquirer from "inquirer";
const answer = await inquirer.prompt([{
    message: "Enter Science marks: ",
    type: "number",
    name: "science_marks"},

    {message: "Enter Maths marks: ",
    type: "number",
    name: "maths_marks"},

    {message: "Enter Urdu marks: " ,
    type: "number",
    name : "urdu_marks",},

    {message: "Enter English marks: " ,
    type: "number",
    name : "english_marks",},
    
    {message: "Enter Social Studies marks: " ,
    type: "number",
    name : "Sst_marks",},
    
    {message: "Enter Sindhi marks: " ,
    type: "number",
    name : "sindhi_marks",},
    
    {message: "Enter computer marks: " ,
    type: "number",
    name : "computer_marks",},
    
    {message: "Enter Islamiat marks: " ,
    type: "number",
    name : "islamiat_marks",},
])
let percentage = ((answer.science_marks + answer.maths_marks + answer.urdu_marks + answer.english_marks +answer.Sst_marks + answer.sindhi_marks + answer.computer_marks + answer.islamiat_marks)/800)*100
console.log(`Your percentage: ${percentage}`)
if (percentage >= 80 && percentage <=100 ){
    console.log(`Congratulations you have paseed with an A+ Grade`);
}
else if (percentage >= 70 && percentage <= 79){
    console.log(`Congratulations you have paseed with an A Grade`);
}
else if (percentage >= 60 && percentage <= 69){
    console.log(`Congratulations you have paseed with an B Grade`);
}
else if (percentage >= 50 && percentage <= 59){
    console.log(`You have paseed with an C Grade`);
}
else if (percentage >= 40 && percentage <= 49){
    console.log(`You have paseed with an D Grade`);
}
else{
    console.log(`You have failed`);
}

