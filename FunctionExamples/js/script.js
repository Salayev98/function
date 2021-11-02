// Task 1

console.log(checkFactors([2,3,4,8],12));
function checkFactors(a,b) {
    for (let item of a) {
        if (b%item!=0) {
            return false;
        }
    }
    return true;
}

//  Task 2

console.log(getSequence(1,5));
function getSequence(min,max) {
    let index=0
    let array=[]
    for (let i = min; i <= max; i++) {
     
        array[index]=i
        index++;
    }
    return array
}
//  Task 3

let cities ={
   name:"Paris",
   population:"23,3434",
   continent: "Europe",
}
console.log(cityfunction(cities));
function cityfunction(cities){
    return `${cities.name} has a population ${cities.population} and is situated ${cities.continent} `
}
//   Task 4

let stu1 ={
    name : "Steve",
}
let stu2 ={
    name : "Mike",
}
let stu3 ={
    name : "John",
}
let students = [];
students.push(stu1)
students.push(stu2)
students.push(stu3)
console.log(letstudents(students));
function letstudents(studnets) {
    let stunames=[]
    for (let item of students) {
        stunames.push(item.name)
    }
    return stunames
}
//  Task5


let arr=[32,25,85,89,45,76,7,41,2,12]

for (let item of arr) {

    console.log(item);

}

console.log(Math.max.apply(null, arr))

arr.push(15);

arr.splice(0,1)
console.log(arr.sort()[arr.sort().length-1]);
arr.splice(3, 0, 43);
let overindex3 = arr.filter(overindex);
console.log(overindex3);
function overindex(value,index,array) {
    if (index > 3) {
        return value 
    }
}
arr.forEach(function(item) {
    console.log(item)
})
for (let item of arr) {
     let over40 = arr.filter(over);
     console.log(over40);
     function over(value) {
       return value > 40;
     }
     break;
}




