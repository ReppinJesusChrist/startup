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
[Back to README](README.md) 
