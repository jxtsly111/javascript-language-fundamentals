// console.log(123);
// console.log("hello world");
// console.log("hi world");
// var greetings = 'hello'
// console.log(greetings);
// console.log('true')
// console.table({a:1,b:1});
// console.log({a:1,b:2});
// console.time(greetings)
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
// console.timeEnd(greetings)
// console.error("there is a mistake outline in the following content")

// var greetings;
// greetings = "hello world";
// console.log(greetings);

// var number = 1234;
// console.log(number);
// console.log(1234);

// let word = "Good morning";
// console.log(word);

// let words;
// words = "food";
// console.log(words);

// const treasure =["gold","silver"];
// treasure.push("bronze");
// console.log(treasure);

// // primitive data type
// var strings;
// strings = "world"
// strings="123"
// console.log(strings)

// var numbers;
// numbers = 123;
// numbers= 123.45
// console.log(numbers);

// var boolean;
// boolean = true;
// boolean = false;
// console.log(boolean);

// var nul;
// nul = null
// console.log(nul)

// var unidentified;
// console.log(unidentified)

// // reference data type
// var array;
// array =['world',123];
// console.log(array);

// var object;
// object = {
//     a:1,
//     b:2,
//     c:3
// }
// console.log(object)

// numbers
// const num1 = 100;
// const num2 = 50;
// let val;
// simple maths calculation
// val = num1 + num2;
// val = num1 * num2
// val = num1 / num2
// val = num1 - num2
// // maths object
// val = Math.PI
// val = Math.pow(8,2)
// val = Math.round(2.5)
// val = Math.ceil(6.7)
// val = Math.floor(6.2)
// val = Math.floor(Math.random()*20)


// const firstName="laryeah"
// const secondName = "Faridah"
// const Age = 34
// const str = "hello world l am abdullah"
// let val;
// // concatination
// val = firstName +" "+ secondName
// // Append
// val = "Mustapha "
// val += "nassar"
// // slice
// val=firstName.slice(-7)
// val= firstName[0]
// // escaping
// val = "that's awesome i cant wait";
// val = secondName.toLowerCase();
// val = secondName.toUpperCase()
// val = str.split(" ")
// val = firstName.length
// val = "i am "  + firstName + " " +secondName +" "+"and am "+Age+" years old"
// console.log(val);
// 
// 

// template literals
// const Name = "yaw manu";
// const age = 29;
// const job = "software developer";
// const food = "banku";
// let html;

// html = `
// <ul>
// <li>name:${Name}</li>
// <li>age:${age}</li>
// <li>job:${job}</li>
// <li>food:${food}</li>
// </ul>
// `
// document.body.innerHTML = html

// arrays
// const number =[50,70,80,90,100];
// const numbers = [30,40,50,70]
// let val;
// val = number;
// val = number.push(7);
// val = number.unshift(2);
// val = Array.isArray(number);
// val = number[1] = 40;
// number[3] = 150;
// number.pop();
// number.shift();
// // number.splice(0,3)
// number.reverse()
// val = number.concat(numbers)
// val = number.sort()
// val = number.sort(function(x,y){
//     return y - x
// })
// console.log(number)
// console.log(val);


// Object literal
// const person = {
//     Name:"Amanda",
//     age:19,
//     country:"Ghana",
//     city:"Houston,texas",
//     address : {
//         gbawe:"sluther.st412",
//         mallam:"kokoko8775"
//     },
//     getbirthyear:function() {
//         return 2021 - person.age
//     },


// };
// let val;
// val = person.Name 
// val = person.getbirthyear()
// val = person.age
// val = person["age"]
// console.log(person)
// console.log(val)

// date and time
// const today = new Date()
// let val;
// val = today;
// val = today.getDate();
// val = today.getDay();
// val = today.getMonth();
// val = today.getFullYear();
// val = today.setFullYear(1985)
// val = today.setHours(12)
// console.log(val)
// const id = 100;
// if (id == 100) {
//     console.log("correct");
// }else{
//     console.log("incorrect")
// }

// if(id!=100){
//     console.log("correct")
// }else{
//     console.log("incorrect")
// }

// if (id===100) {
//     console.log("correct");
// }else{
//     console.log("incorrect");
// }

// 

// const name = "ama";
// const age = 20
// if (age > 0 && age < 15) {
//     console.log(`${name} is a kid`)   
// }else if(age > 14 && age < 30){
//     console.log(`${name} is a tenageer`)
// }else{
//     console.log(`${name} is jon`)
// }

// function name(firstname = "kofi") {
//     return "my name is " + firstname
// }
// console.log(name())

// const name = function(firstname){
//     return "my name is " + firstname
// }
// console.log(name("kofi"))

// for (let index = 0; index < array.length; index++) {
    // const element = array[index];

// for(let i = 0;i < 10;i++){
//     if (i == 4) {
//         console.log("number 4 is my favourite");
//         continue;
//     }
//     if (i==6) {
//         break;
//     }
//     console.log("number " +i);
// }

// let i = 0;
// while (i<10) {
//     console.log("number "+ i);
//     i++;
// }

// const cars = ["sonata","benz","toyota","ford"];
// for(let x = 0;x < cars.length;x++){
//     if(cars[x] == "benz"){
//         console.log("benz is the best car in history");
//         continue;
//     }
//      console.log(cars[x]);
//  }
// alert
// alert("hello world");
// prompt
// alert(prompt());
// confirm
// if (confirm("are you sure")) {
//     console.log("yes")
// }else{
//     console.log("no")
// }

// let val;
// val = window.outerHeight
// val = window.outerWidth
// val = window.innerHeight
// val = window.innerWidth
// val = window.location
// val = window.location.hostname
// val = window.location.href
//  window.history.go(-1)
//  val = window.history.length
// val = window.navigator
// val = window.navigator.appName
// window.location.href = "http://http://127.0.0.1:5500";

// console.log(val);

// function sevenboom(arr) {
//     for(x=0;x < arr.length;x++){
//         if(arr[x] == 7){
//             return "boom!"
//         }else{
//             return "there is no seven in the array"
//         }
//     }
// }
// console.log(sevenboom([5,9]))
// const inp = document.querySelector(".input");
// const button = document.querySelector(".btn");
// const cardi = document.querySelector('.card');
// const collection = document.querySelector(".collection")

// button.addEventListener("submit", butt);
// function butt(e) {
//     if (card.value === "") {
//         alert("no input yet");
//     }
// }
// const li = document.createElement("li");
// // adding a classname
// li.className = "collection - item";
// // creating text node and appending it to li
// li.appendChild(document.createTextNode(TASK.value));
// // create new link element
// const link = document.createElement("a");
// // adding classname
// link.className = "delete-item secondary-content";
// // adding an icon html
// link.innerHTML = '<i class = "fa fa-remove"></i>';
// li.appendChild(link);
// // append li to ul
// COLLECTION.appendChild(li);
// TASK.value = ""

// constructions and this keyword
// function person(name,dob) {
//     this.name = name
//    this.birthday = new Date(dob)
//    this.calculateAge = function () {
//     const diff = Date.now()-this.birthday.getTime();
//     const agedate = new Date(diff);
//     return Math.abs(agedate.getUTCFullYear()-1970);
//    }
    
// }
// const cissie = new person("yakuba",10-12-1999)
// const jay = new person('jay',3-11-2005)
// console.log(jay)

// string
// const name1 = 'jay';
// const name2 = new String('jay')
// // name2.come = 'bar'
// // console.log( typeof name2)
// if (name2 === "jay") {
//     console.log('yes')
// }else{
//     console.log('no')
// }
function getmean(num) {
    num = Number(num)
    if (num != Number(num)) {
        return "please enter a valid number"
    }

    return num+num
}
console.log(getmean())
