# Uncondensed Notes / To-dos
## Things to research more:
* **Review Markup again**
* cache control
* cross-site request forgery
* RPC (Remote procedure call)
* REST (Representational state transfer)
* GraphQL
* When are URNs used?
## Raw Notes by Date and Topic
### 11/2/23
#### SOP (Same Origin Policy) & CORS (Cross Origin Resource Sharing)
* SOP only allows JS to make requests to a domain if it's the same domain that the user is currently viewing
* CORS allows websites to specify other domains which should be allowed to make requests
  * If no list is set for this permission, SOP remains unaltered and only the same domain can make requests (CORS will block all others)
  * So if I want to use a service in my website, I need to make sure that its `access-control-allow-origin:` returns `*` (meaning it allows requests from all sites), or `https://covenantcompanion.click` (my site's calling origin). If they don't, I won't be able to use them because CORS will block the traffic
* Apparently CORS is easy to bypass with a proxy. I don't know how that works, but it does mean that it isn't sufficient security on its own
#### CORS
### 11/1/23
#### 5.1: Fetch, URL, ports, HTTP
##### **URL**
* General Format = `<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>`
  * Scheme: The protocol requred to ask for the resource
  * Domain Name: The domain name that owns the resource
  * Port: The network port used to connect to the domain server
  * Path: The path within the domain to reach the resource
  * Parameters (AKA Query String): Additional qualifiers on the resource
  * Anchor: A sub-location within the resource (e.g. scrolling to a certain point in browsers)
* Example: https://byu.edu:443/api/city?q=pro#3
  * **https://** = Scheme
  * **byu.edu** = Domain
  * **:443** = Port
  * **/api/city** = Path
  * **?q=pre** = Parameters
  * **#3** = Anchor
###### Ports
* They can either be exposed externally or used only internally within a device
* Web services listen on specific ports
  * Caddy (the one I'm using for startup) listens on port 80 and 443
    * Port 80 requests are automatically redirected to 443
  * Internally on my website I can use as many ports as I want
    * The example Simon service uses port 3000 so I can't use that one, but any other high numbers are up for grabs. Port 4000 is recommended for base use. (I think I'll learn more about this as I implement startup service)
* Port Numbers
  * Port numbers allow a single device to support multiple protocols (as well as different types of services?)
  * Lower numbers (0-1024) are reserved by IANA (the internet governing body) for common internet protocols
  * Higher numbers can be used for any purpose
    * Technically 1024-49151 have been assigned to requesting entities, and 49152-65535 are considered dynamic
    * In practice, service defined ports often use lower ports (e.g. 3000) for internal services
  * Examples
    * 443 = HTTPS (HTTP Secure) for secure web requests
    * 194 = IRC (Internet Relay Chat) for chatting
    * 161 = SNMP (Simple Network Management Protocol) for managing network devices such as routers or printers
    * 123 = NTP (Network Time Protocol) for managing time
    * 110 = POP3 (Post Office Protocol) for retrieving email
    * 80 = HTTP (Hypertext Transfer Protocol) for web requests
    * 53 = DNS (Domain Name System) for IP Address lookup
    * 25 = SMTP (Simple Mail Transfer Protocol) for email (outdated?)
    * 22 = SSH (Secure Shell)
    * 20 = FTP (File Transfer Protocol)
##### HTTP
* HTTP is how the web talks
  * It's the language used by web clients (i.e browsers) when they make a request to a server and by servers when they respond
* Request
  * First Line
    * `<Method> <Path> <Version>`
    * E.G. `POST /api/city?q=provo HTTP/1.1`
      * List of accepted methods
        * GET: get an existing resource or a resource representing a list of resources
        * POST: create a new resource, the body of the request contains the resource
        * PUT: update an existing resource, the body contains the updated resource
        * DELETE: delete a resource
        * OPTIONS: get info ~ a resource. Usually only HTTP headers are returned
  * Headers
    * Key:Value pairs
    * Examples:
      * Host: info.cern.ch
      * Accept: text/html
        * Type/Subtype
        * Must be a MIME type [as defined by IANA](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  * Body (e.g. `{"user":"tim"}`)

      | Header                      | Example                              | Meaning                                                                                                                                                                        |
      | --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
      | Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
      | Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                                                                                            |
      | Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
      | Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
      | Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
      | Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
      | Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
      | Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
      | Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
      | User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |
  
* Response
  * First Line
    * [Version] [Status code] [Status message]
    * `HTTP/1.1 200 OK`
  * Headers
  * Body
* Status Codes
  * 1xx - Informational
    * 100 = Continue (the service is working on the request)
  * 2xx - Success
    * 200 = Success
    * 201	= Created	(request was successful and a new resource was created)
    * 204 = No content (The request was successful but no resource is returned)
  * 3xx - Redirect (or the previously cached resource is still valid?)
    * 304 = Not modified
    * 307	= Permanent redirect	(The resource is no longer at the requested location. The new location is specified in the response location header)
    * 308 =	Temporary redirect	(The resource is temporarily located at a different location. The temporary location is specified in the response location header)
  * 4xx - Client errors. Invalid request
    * 400 = Bad request (The request was malformed or invalid)
    * 401	= Unauthorized	(The request did not provide a valid authentication token)
    * 403 = Forbidden (The provided authentication token is not authorized for the resource)
    * 404 = Not found
    * 408	= Request timeout	The request takes too long
    * 429 = Too many requests
  * 5xx - Server errors. Request can't be granted because of a server error
    * 500 = Internal Server error
    * 503 = Service not available
* curl is a console tool that can be used to make HTTP requests
* Cookies
  * HTTP is stateless, so to save info between sessions cookies are necessary (Why can't sites just local-storage?)
  * Example
    ```
      HTTP/2 200
      Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
    ```
#### 5.2 CORS, service design
![](https://github.com/ReppinJesusChrist/my-images/blob/main/Service_Example.png "Service example image")
* Endpoints (APIs) are the functions provided by a web service
* They are accessed using the fetch function (in js)
* We'll be buiding our web service using Node.js
# Condensed Notes by topic:
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

## Linux Command Line
### Reference Sheet
![Linux_ref](https://github.com/ReppinJesusChrist/my-images/blob/main/Linux_CLref.jpg)

## Misc Midterm Stuff

### DNS Records
* A record (Maps a domain to the physical IP address of the computer hosting the domain)
* CNAME record (Causes one domain name to automatically redirect to another one)


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
### Changing with js
Get element and change the `.style.[attribute]` (See "tags" ref-sheet for options of attribute tags)
### Reference Sheets:
#### General
![css genref](https://github.com/ReppinJesusChrist/my-images/blob/main/css-ref_1.jpg)
#### Tags
![css tagref 1](https://github.com/ReppinJesusChrist/my-images/blob/main/css_tag-ref_1.jpg)
![css tagref 2](https://github.com/ReppinJesusChrist/my-images/blob/main/css_tag-ref_2.jpg)
#### Flexbox Detail
![flexbox ref](https://github.com/ReppinJesusChrist/my-images/blob/main/LearnPine_Flexbox_CheatSheet.png)
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

### Reference Sheets
#### Async
![async ref](https://github.com/ReppinJesusChrist/my-images/blob/main/async-cheatsheet.png)
#### DOM
![DOM ref](https://github.com/ReppinJesusChrist/my-images/blob/main/js-DOM-ref.png)
