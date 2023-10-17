# Notes by topic:
## Git
* To add a change to Git: stage -> commit -> push
* To update my local files: pull
* Ways to access:
  * GitHub
  * Git Bash
  * Visual Studio Code
## AWS
* Command to ssh into my website: ssh -i \Users\User\Keys/"Remember Jesus Christ.pem" ubuntu@ec2-35-174-69-205.compute-1.amazonaws.com
* Command to deploy files to my website: ./deployFiles.sh -k ~/Keys/Remember\ Jesus\ Christ.pem -h covenantcompanion.click -s simon (This one works from gitBash)

## JavaScript
### Console
#### Log 
`console.log('hello');`
#### Timer
```javascript
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```
#### Count:
```javascript
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```
### Functions
#### Example Function
```javascript
function sayHello() {
  console.log('hello');
}
```
### Including JS in html
#### Example Code:
```html
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <button onclick="let i=1;i++;console.log(i)">press me</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```
### Type and Construct
#### Variables
* JS is weakly typed
 * Variables don't need to be declared as a particular type
 * Type can change very easily and often unpredictably
* Two scopes =
 * `let x = 1;` (allows for the variable to be changed later)
 * `const y = 'y';` (prevents any future changes)
* JavaScript defines several primitive types.

| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64-bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |
* JS also has objects


| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name-value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key-value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

#### Conditionals & Loops
* if/else
 * Can be the same as in C++
 * Can also use ternary operator `a === 1 ? console.log(1) : console.log('not 1');`
* while & do while
 * Same as in C++, but i is defined with 'let' instead of a type
* for
 * Basic loops are the same
 * for in `for(const name in obj)` iterates over an object (eg array)
 * for of `for (const val of arr)` iterates over property values (**I don't understand this yet**)
* break and continue
 * Same as in C++
#### Strings
| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |

### Functions
* Basic syntax `function functionname(parameters) { return returnval; }`
* Alternative basic syntax `functionname(function (parameters) { return returnval });
* Arrow syntax (saves space) `functionname((parameters) => returnval);`
 * A couple examples
  * `() => 3 // returns 3`
  * `() => { 3; }; // returns undefined`
  * `() => { return 3; }; // returns 3`
#### Comparison to C++
##### Similarities
 * Default parameters are allowed
 * void functions exist (they just aren't labled as such)
##### Differences
 * Return type doesn't need to be declared along with function (or ever actually because types don't exist in JS
 * Functions can be an r-value!! (`const add = function (a,b) { return a + b ) };` is valid syntax!)
 * Functions can be passed as parameters to other functions
 * Functions can be declared inside of other functions!?
  * This seems to me like a cheap way of avoiding the hassel of inheritance, but I'm not qualified to make that judgement yet
### Arrays
| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |
