# Notes by topic:
## Git
* To add a change to Git: stage -> commit -> push
* To update my local files: pull
* Ways to access:
  * GitHub
  * Git Bash
  * Visual Studio Code
## AWS
* Command to ssh into my website: `ssh -i \Users\User\Keys/"Remember Jesus Christ.pem" ubuntu@ec2-35-174-69-205.compute-1.amazonaws.com`
* Command to deploy files to my website: `./deployFiles.sh -k ~/Keys/Remember\ Jesus\ Christ.pem -h covenantcompanion.click -s simon` (This one works from gitBash)

## HTTP


## html
### Syntax Reference:
![alt text](https://github.com/ReppinJesusChrist/my-images/blob/main/html_ref_1.jpg "HTML reference page 1")
![alt text](https://github.com/ReppinJesusChrist/my-images/blob/main/html_ref_2.jpg "HTML reference page 1")
### DOM (Document object model)
![alt text](https://github.com/ReppinJesusChrist/my-images/blob/main/html_DOM_slide.png "HTML DOM example")
### Including JS in html
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

## CSS
### Reference Sheets:
#### General
![css genref](https://github.com/ReppinJesusChrist/my-images/blob/main/css-ref_1.jpg)
#### Tags
![css tagref 1](https://github.com/ReppinJesusChrist/my-images/blob/main/css_tag-ref_1.jpg)
![css tagref 2](https://github.com/ReppinJesusChrist/my-images/blob/main/css_tag-ref_2.jpg)
## JavaScript
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
  * Can be the same as in C++: `if(true){ doSomething(); } else { doSomethingElse(); }`
  * Can also use ternary operator `a === 1 ? console.log(1) : console.log('not 1');`
* while & do while
  * Same as in C++: `while(true){ doStuff(); break; }`
* for
  * Basic loops are the same, but i is defined with 'let' instead of a type: `for(let i = 0; i < MAX_VALUE; ++i){}`
  * for in `for(const name in obj)` iterates over an object (eg array)
  * for of `for (const val of arr)` iterates over property values (**I don't understand this yet**)
* break and continue
  * Same as in C++
* switch
  * same as C++:
    ``` javascript
    switch(expression){
      case x:
        doX();
        break;
      case y:
        doY();
        break;
      default:
        doYourDuty();
    }
    ```
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
#### Differences from c++
 * Return type doesn't need to be declared along with function (or ever actually because types don't exist in JS
 * Functions can be an r-value!! (`const add = function (a,b) { return a + b ) };` is valid syntax!)
 * Functions can be passed as parameters to other functions
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
### JSON documents
* Example
```
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
 * Encoded with UTF-8 for global data
 * JSON.parse(json) converts a JSON file into a Javascript object
 * JSON.stringify(obj) converts js into a JSON file
### Regular Expressions (More Study & Practice Needed)
* Used to locate text in a string
  * Can use to identify
  * Can also use to perform operations on the located text
    * replace()
    * split()
* Format examples
```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
```
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```
### Rest and Spread
#### Rest
* Turns the last parameter of a function into a flexible parameter that accepts any number of values and combines them into an array
* Format: `function testFunction(param1, ...restParam) { return returnVal; }`
#### Spread
* Does the opposite of rest - takes a compound object, expands it into individual parts, and assigns the parts to each of a function's parameters
* Example:
  ``` javascript
  function person(firstName, lastName) {
  return { first: firstName, last: lastName };
  }

  const p = person(...['Ryan', 'Dahl']);
  console.log(p);
  // OUTPUT: {first: 'Ryan', last: 'Dahl'}
  ```
### Exceptions (Study and practice this more)
* Should **ONLY** be used when something truly exceptional occurs. This makes my code easier to debug and makes my logs more meaningful and useful.
* Basic format `try { // normal code } catch (err) { // exception handling code } finally { // always called code }`
* Format for throwing errors: `throw new Error('connection error');`

### Destructuring
* Used to selectively pull elements out of a larger object
* Two Examples:
  ```javascript
  const a = [1, 2, 4, 5];

  // destructure the first two items from a, into the new variables b and c
  const [b, c] = a;

  console.log(b, c);
  // OUTPUT: 1, 2
  ```
  ```javascript
  const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

  const { a, c } = o;

  console.log(a, c);
  // OUTPUT 1, ['fish', 'cats']
  ```
* This can be combined with rest syntax to destructure some items in an object and leave the rest grouped in an array:
  ```javascript
  const [b, c, ...others] = a;

  console.log(b, c, others);
  // OUTPUT: 1, 2, [4,5]
  ```
### Scope and this
#### Scope
1. **Global** - Visible to all code
1. **Module** - Visible to all code running in a module
1. **Function** - Visible within a function
1. **Block** - Visible within a block of code delimited by curly braces

#### This
1. **Global** - When `this` is referenced outside a function or object it refers to the `globalThis` object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
1. **Function** - When `this` is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
1. **Object** - When `this` is referenced in a object it refers to the object.
