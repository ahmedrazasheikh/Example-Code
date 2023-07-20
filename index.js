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

const arrayforJoin = ['Hello', 'World', 'Ahmed', 'Saad'];
const joinedString = arrayforJoin.join(' ');
console.log(joinedString); // Output: "Hello World"
const nmber = [1, 23, 44, 55, 66]
const nmberModification = nmber.push(3, "RTM Teach")
console.log(nmberModification);
console.log(nmber);



const arraytjoer = [1, 2, 3, 4, 5];
const removedElements = arraytjoer.splice(2, 2, 'a', 'b');
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



// Asynchronous function with a callback
function performCalculation(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result); // Passes the result back to the callback
  }, 2000); // Simulating a delay of 2 seconds
}

// Callback function to handle the result
function handleResult(result) {
  console.log('The result is:', result);
}

// Call the performCalculation function and pass the callback
performCalculation(5, 3, handleResult);










const obj = {
  name: "Ahmed Raza Jafri ",
  FatherName: "Muhammad Nadeem",
  Brother: "3",
  Mother: "Saima Nadeem"
}
const { name, FatherName, Brother, Mother } = obj
console.log(name);

for (const key in obj) {
  console.log(obj[key])
}

// Here use obj key value and all the Value 






// CallBack

const simplify = ((number, callback) => {

  const result = callback(number)
  console.log(result)
})
const multiplication = ((number) => {
  return number * 3

})

simplify(3, multiplication)






function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data from an API";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData);







function createCounter() {
  let count = 0; // This variable is in the closure scope.

  function increment() {
    count++; // Accesses and modifies the count variable from the outer scope.
    console.log(count);
  }

  return increment;
}

const counter1 = createCounter();
const counter2 = createCounter();

// counter1(); // Output: 1
// counter1(); // Output: 2
// counter2(); // Output: 1
// counter1(); // Output: 3
// counter2(); // Output: 2




const outerFunction = (firstName) => {
  const innerFunction = (lastName) => {
    console.log(firstName + " " + lastName);
  };

  return innerFunction;
};

const completeName = outerFunction('Ahmed');
completeName('Raza');



const nmer = "333"
console.log(parseInt(nmer));
const octalString = "52"; // Octal string
console.log(parseInt(octalString, 8));




const initialValue = 34
const finalValue = 100

if (initialValue && finalValue === 34) {
  console.log('The value is 34')
}

else if (initialValue || finalValue === 100) {
  console.log('One Value is Equal to 100')

}



// Auto Invoked Function 
(function () {

  console.log('Automatic Invoked Function ww')

})();




const numArray = []


numArray.push(66, 777, 888)
console.log(numArray);





const dimpleFunction = {
  name: "Ahmed Raza",
  data: function () {
    return 2 * 2;
  },
  get CompleteNameWithP() {
    return this.name + " Muhammad Nadeem";
  }
};

const { CompleteNameWithP } = dimpleFunction;

console.log(CompleteNameWithP); // Output: "Ahmed Raza Muhammad Nadeem"

var scope = "global scope";
function check() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  console.log(f());
  return f;
}
// console.log(check());



var cloths = ["Shirt", "Pant", "TShirt"];
cloths.pop();
console.log(cloths);




function reverseWords(sentence) {
  // Split the sentence into words using a space as the delimiter
  const words = sentence.split(' ');
  // console.log(words);
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words back into a new sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;


}

// Test the function
const inputSentence = "For example Welcome to this Javascript Guide!";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "roF elpmaxe emocleW ot siht tpircsavaJ !ediuG"



// let obj4 = [1, 2, 3];
// // obj4.length = 0 
// // obj4 = []
// obj4.splice(0);
// console.log(obj4)

// console.log(Array.isArray(obj4))



// const num1 = 42;
// const num2 = 3.14;

// console.log(Number.isInteger(num1));
// console.log(Number.isInteger(num2));


const checkInteger = (number) => {
  return number % 1 === 0
}

console.log(checkInteger(42));   // Output: true
console.log(checkInteger(3.14)); // Output: false



const duplicate = [1, 2, 3, 4, 5];
function combine(arr) {
  return arr.concat(arr)
}
console.log(combine([1, 2, 3, 4, 5]));
const sentence = "Welcome to this Javascript Guide!";
const reversedSentence2 = (value) => {
  // Split Array 
  const wordArray = value.split(" ");
  // Reverse each word
  const reverseWordArray = wordArray.map((word) => {
    return word.split('').reverse().join('');
  })
  // Join the all aray in to string 
  const reversedSenetence = reverseWordArray.join(" ")
  return reversedSenetence
}
console.log(reversedSentence);



// function mul(x) {
//   return function(y) {
//     return function(z) {
//       return x * y * z;
//     };
//   };
// }

// // Example usage:
// console.log(mul(2)(3)(4)); 
// console.log(mul(4)(3)(4)); 


function a(params1) {
  return function b(params2) {
    return function c(params3) {
      return params1 * params2 * params3
    }
  }
}




console.log(a(1)(2)(3))








// function createBase(baseNumber) {
//   return function(N) {
//     // we are referencing baseNumber here even though it was declared
//     // outside of this function. Closures allow us to do this in JavaScript
//     return baseNumber + N;
//   }
// }

// var addSix = createBase(6);
// addSix(10);
// addSix(21);


// function createBase(params) {
//   return function name(N) {
//      return N + params  
//   }
// }


// const base = createBase(6)
// console.log(     `Anonymous Function `   +  base(10));



function Anonymous(number) {
  return function innerAnonymous(params) {
    return number - params
  }
}
const Anonymousvalue =
  console.log(Anonymous(10)(6));



for (let index = 0; index <= 100; index++) {
  let f = index % 3 === 0
  let b = index % 5 === 0
  // console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : index);
  console.log(f ? (b ? "Fizzbuzz" : "fizz") : b ? 'Buzz' : index);

}






for (let index = 0; index <= 100; index++) {
  let a = index % 3 === 0
  let b = index % 5 === 0
  console.log(a ? (b ? "Fizbuzz" : "Fizz") : b ? "buzz" : index);
}


const nema22 = "Mary"
const lest = "Army"


let OrderName = (a, b) => {
  var firstName = a.toLowerCase()
  var lastName = b.toLowerCase()



  firstName = firstName.split("").sort().join("")
  console.log(firstName + "First Name ")
  lastName = lastName.split("").sort().join("")



  return firstName === lastName


}

console.log(OrderName(nema22, lest));





const addSimple = (a) => {
  return function innerSimple(b) {
    return a + b
  }


}


console.log(addSimple(2)(3));




// const originalArray = [1, 2, 3, 4, 5];
// const shallowCopy = [...originalArray];


const originalObject = { name: "John", age: 30, city: "New York" };
const shallowCopy = { ...originalObject };
console.log(shallowCopy);





// 22. How Do You Check if a Value Is in an Array in Javascript?



let myArrayee = [1, 2, 3, 4, 5,];
console.log(myArrayee.includes(1));


(function selfInvokingFun() {
  console.log(`Self  Invoking Function `);
}
  ()
)


// How Can You Remove Duplicates From a Javascript Array?


function removeDuplicates(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 3])); // [1, 2, 3]






// 62. Write the code to find the vowels
// 
function findVowels(str) {
  const vowels = 'aeiouAEIOU';
  const foundVowels = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      foundVowels.push(str[i]);
    }
  }

  return foundVowels;
}

// Example usage:
const sentencee = "Hello, how are you today?";
const vowelsInSentence = findVowels(sentencee);

console.log(vowelsInSentence); // Output: ["e", "o", "o", "a", "e", "o", "u", "o", "a"]



const findVowelFunc = (value) => {

  const vowel = 'aeiouAEIOU'

  const foundVowel = []


  for (let index = 0; index < value.length; index++) {
    if (vowel.includes(value[index])) {
      foundVowel.push(value[index])
    }

  }

  return foundVowel




}


const resultFinite = findVowelFunc(sentence)
console.log(resultFinite);



// 7. Find the nth largest element in a sorted array



const originalArray = [1, 2, 3, 4, 5];
