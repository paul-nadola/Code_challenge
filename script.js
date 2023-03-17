let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
function gradeCalculator(inputGrade){
    //Declaring a function calculating different grades
    if (inputGrade > 79 && inputGrade <= 100){
     finalOutput = 'A';
    }// using if statements to create differen ranges with different grades

    else if(inputGrade >= 60 && inputGrade <= 79){
        finalOutput = 'B';
    }
    else if(inputGrade >= 50 && inputGrade <= 59){
        finalOutput = 'C';
    }
    else if(inputGrade >= 40 && inputGrade <= 49){
        finalOutput = 'D'
    }
    else if(inputGrade >= 0 && inputGrade <40 ){
        finalOutput = 'E'
    }
    else{
        //setting the range of accepteable values to be grade
        finalOutput = 'Entry not within the test score range';
    }
return finalOutput;
}
//Assigning the gradeCalculator function to our finalOutput
finalOutput= gradeCalculator(inputGrade);
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
function pointsDemeritor(inputSpeed){
   //Declaring a function that deducts speed as per different speed levels and ultimately revoking the license
   let speedLimit = 70;
   let kmperpoint = 5;
   let points = (inputSpeed - speedLimit)/kmperpoint;

    if(points <= 0){
        finalOutput = 'Ok';
    }
    else if (points > 12){
        finalOutput = 'LICENSE SUSPENDED'
    }
    else{
        finalOutput = points;
    }
    return finalOutput;
    
}

//Assigning our function to our final outout
finalOutput= pointsDemeritor(inputSpeed);
    document.getElementById('speed-id').append(finalOutput)

})


salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput;
// write Code For the Code challenge
function calculateNetSalary(inputSalary){
    //variables
    const basicSalary = inputSalary*0.4//Just incase you need to view the basicSalary
    const benefits = inputSalary*0.6;//Just incase you need to view total benefits
    const grossSalary = basicSalary + benefits;//Basically gross salary = inputSalary
    let taxRate, taxAmount; //calculating taxRates in different income brackets
    if (grossSalary <= 24000){
        taxRate = 0.1;
    }
    else if (grossSalary <= 50000 && grossSalary >= 24000){
        taxRate = 0.2;
    }
    else {
        taxRate = 0.3;
    }
    taxAmount = grossSalary*taxRate;

    let NHIF; //insurance deduction
    if (grossSalary <= 24000){
        NHIF = 500;
    }
    else if (grossSalary <= 50000 && grossSalary >= 24000){
        NHIF = 1000;
    }
    else {
        NHIF = 1500;
    }
    let NSSF;//pension deduction
    if (grossSalary <= 24000){
        NSSF = 200;
    }
    else if(grossSalary <= 50000 && grossSalary >= 24000){
        NSSF = 500;
    }
    else{
        NSSF = 1000;
    }
    const deductions = taxAmount + NHIF + NSSF;//total deductions
    const netSalary = grossSalary - deductions;
return netSalary;
}



finalOutput = calculateNetSalary(inputSalary)
document.getElementById('salary-id').append(finalOutput)
        
})