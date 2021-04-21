'use strict';
// let a = 2;
// let b = 2.2;

// // console.log(typeof a);
// // console.log(typeof b);

// a = 'not a number!!';

// // console.log(typeof a);

// const pi = 3.14;

// let str = 'abhi';
// let str2 = "abhi";
// let str3 = `${str} is fast!! ${a + b} ' '' " """ 😂 ॐ ₹ ©`;

// console.log(str, str2, str3);
const avg_function = function (std_mark1, std_mark2, std_mark3) {
    return Number(std_mark1) + Number(std_mark2) + Number(std_mark3);
}

// for (let i = 1; i < 2; i++) {
//     const std_nm = prompt('enter name of the student : ');
//     const std_mark1 = prompt(`enter marks1 of ${std_nm} :`);
//     const std_mark2 = prompt(`enter marks2 of ${std_nm} :`);
//     const std_mark3 = prompt(`enter marks3 of ${std_nm} :`);
//     // const avg = ;
//     const student = [std_nm, avg_function(std_mark1, std_mark2, std_mark3)];
//     console.log(student);
// }

const abhishek = ['Abhishek Sandeep Jadhav', 24, 'Bsc-IT', 'Data Engineer', 0.4, 300000];

console.log(abhishek);

const DOB = 1997;

const abhiObj = {
    fullName: 'Abhishek Sandeep Jadhav',
    age: 2021 - DOB,
    education: 'Bsc-IT',
    job: 'Data Engineer',
    Experience: 0.4,
    salaary: 300000,
    langKnown: ['JAVA', 'Python', 'JavaScript', 'SQL'],
    vehicle: {
        name: 'scody',
        company: 'TATA',
        model: 'Ambasetor',
        gears: 5,
        max_speed: 150.45
    }
}

console.log(abhiObj);