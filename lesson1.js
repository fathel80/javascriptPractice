const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    //do stuff
  }
}

// 2 ways to get information out of an object: dot notation and bracket notation


// dot notation
myObject.property //value

//bracket notation
myObject['obnoxious property'] // [function]

const variable = 'property'

myObject.variable // this gives us 'undefined' 

myObject[variable] //this is equivalent to myObject['property']

//grouping things in groups
//example one 
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = 'X'
const playerTwoMarker = 'O'

//example two names
const playerOne = {
  name: "tim",
  marker: "O"
}

const playerTwo = {
  name: "jenn",
  marker: "0"
}



function printName(player) {
  console.log(player.name)
}
//cant do this with first example

console.log(playerOneName)
console.log(playerTwoName)
//forced to use this option for first example

function gameOver(winningPlayer){
  console.log('congratulations!')
  console.log(winningPlayer.name + "is the winner!")
}

//use object constructor to create duplicates 
function Player(name, marker) {
  this.name = name
  this.marker = marker
}

const player = new Player('steve', 'X')
console.log(player.name) // 'steve' 

//object literal method
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}
const player1 = new Player('steve', 'X')
const player2 =new Player('also steve', 'O')
player1.sayName() // logs steve 
player2.sayName() // logs 'also steve' 

//exercise
function Hobbits(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = function() {
    console.log("not read yet")
  }
}

theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


function Student(name, grade) {
  this.name = name
  this.grade = grade
}
student.prototype.sayName = function() {
  console.log(this.name)
}


