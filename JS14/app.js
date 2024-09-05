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