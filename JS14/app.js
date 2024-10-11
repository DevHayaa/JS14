// 1. Suppose You have an array of object


var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];


    let totalPriceAllItems = 0;

itemsArray.forEach(item => {
  const totalPricePerItem = item.price * item.quantity;
  console.log(`Total price of ${item.name}: ${totalPricePerItem}`);
  totalPriceAllItems += totalPricePerItem;
});

console.log(`Total price of all items: ${totalPriceAllItems}`);


// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.

var user = {
    name: "Hani Irfan",
    email: "hani@example.com",
    password: "123567",
    age: 25,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan"
  };

  console.log('age' in user); 
  console.log('country' in user); 

  console.log('firstName' in user); 
  console.log('lastName' in user); 


// 3:Create a constructor function with some properties. Now
// create multiple records using the constructor.

function Person(name, age, job) {
  this.name = name;  
  this.age = age;     
  this.job = job;   

  this.displayInfo = function() {
      console.log("Name: " + this.name + ", Age: " + this.age + ", Job: " + this.job);
  };
}

let person1 = new Person("Alice", 28, "Engineer");
let person2 = new Person("Bob", 35, "Designer");
let person3 = new Person("Charlie", 22, "Developer");


person1.displayInfo(); 
person2.displayInfo();  
person3.displayInfo(); 


//4: Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.

function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}


function getRecords() {
  let records = localStorage.getItem('populationRecords');
  return records ? JSON.parse(records) : [];
}

function saveRecords(records) {
  localStorage.setItem('populationRecords', JSON.stringify(records));
}

function displayRecords() {
  let records = getRecords();
  let recordList = document.getElementById('recordList');
  recordList.innerHTML = ''; 

  records.forEach(record => {
      let li = document.createElement('li');
      li.textContent = `Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
      recordList.appendChild(li);
  });
}

document.getElementById('populationForm').addEventListener('submit', function(event) {
  event.preventDefault();


  let name = document.getElementById('name').value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let address = document.getElementById('address').value;
  let education = document.getElementById('education').value;
  let profession = document.getElementById('profession').value;

  let newPerson = new Person(name, gender, address, education, profession);

  let records = getRecords();
  records.push(newPerson);
  saveRecords(records);

  this.reset();
  displayRecords();
});

displayRecords();