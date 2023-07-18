import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const str = "Hello";
console.log(str.charAt(4));

const str1 = "Hello";
const str2 = " world!";
console.log(str1.concat(str2)); // Output: "Hello world!"


const firstName = "Ahmed";
const lastName = " Raza"
console.log(firstName.concat(lastName));
console.log(firstName.endsWith("sd"));

const brotherName = "Muhammad Saad"
console.log(brotherName.includes("Saad"));


// Repeat This 

const strs = "Hello world";
console.log(strs.lastIndexOf("o")); // Output: 7
console.log(strs.lastIndexOf("w", 2 + "R<M")); // Output: 4



const namesArray = "Ahmed  Raza Saad Hassan"
console.log(namesArray.split(" "));

const removeSpace = "   Hello world   ";
console.log(removeSpace.trim()); // Output: "Hello world"


const replaceFunction = "Hello world";
console.log(replaceFunction.replace("world", "universe")); // Output: "Hello universe"





let text = "Hello world, welcome to the universe.";
text.indexOf("e", 5);


const filterName = "Ahmehdrrd"
console.log(filterName.lastIndexOf("d", 6));


const ahmww = "Hello world";
console.log(ahmww.slice(2, 4)); // Output: "world"


const founderName = "Ahmed Raza Sheikh"
console.log(founderName.slice(0, 6));

const array = ['a', 'b', 'c'];
const iterator = array.entries();


for (const key in array) {
    console.log(key + ' ' + array[key]);
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

console.log(Object.entries(person)); // Output: [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30]]


const numbers = [10, 30, 50, 70, 90, 200]
const method = numbers.every((value) => value > 20)
console.log(method);



const numbersz = [1, 2, 3, 4, 5];
// Fill elements from index 1 to index 4 (exclusive) with the value 9
numbersz.fill(9, 1, 4);
console.log(numbersz); // Output: [1, 9, 9, 9, 5]







const threetable = [3, 4, 6, 9, 12, 77]
const dividble = threetable.filter((value => value > 2))
const dividblerr = threetable.find((value => value > 2))
console.log(dividble);
console.log(dividblerr);

const arrayforJoin = ['Hello', 'World' , 'Ahmed' , 'Saad'];
const joinedString = arrayforJoin.join(' ');
console.log(joinedString); // Output: "Hello World"
const nmber = [1,23,44,55,66]
const nmberModification  = nmber.push(3, "RTM Teach")
console.log(nmberModification);
console.log(nmber);



const arraytjoer = [1, 2, 3, 4, 5];
const removedElements = arraytjoer.splice(2, 2 ,  'a', 'b');
console.log(arraytjoer); // Output: [1, 2, 'a', 'b', 5]
console.log(removedElements); // Output: [3, 4]




// for (let index = 0; index < 1000 ; index++) {
//     console.log("You Account Has Been Hacked   \n ")
    
// }

const pe2rson = {
    name: 'John',
    age: 30,
    profession: 'Developer'
  };
  
  for (let key in pe2rson) {
    console.log(key + ': ' + pe2rson[key]);
  }
  
  const numbersddd = [1, 2, 3, 4, 5];

for (let num of numbersddd) {
  console.log(num);
}


const obj1 = { foo: 1 };
const obj2 = { bar: 2 };
const obj3 = { baz: 3 };
const mergedObj = Object.assign(obj1, obj2, obj3);
console.log(mergedObj); // Output: { foo: 1, bar: 2, baz: 3 }


const personw = {
    name: 'John',
    age: 30,
    profession: 'Developer'
  };
  
  const keys = Object.keys(personw);
  console.log(keys); // Output: ['name', 'age', 'profession']
  


  const personE = {
    name: 'John',
    age: 30,
    profession: 'Developer'
  };
  
  const entries = Object.entries(personE);
  console.log(personE.hasOwnProperty('ddd')); // Output: true
  console.log(entries);
  // Output: [['name', 'John'], ['age', 30], ['profession', 'Developer']]
  