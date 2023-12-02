# Covenant Tracker
## Description Deliverable
### Elevator Pitch
Have you ever felt overwhelmed by all of the talk by general authorities in recent years about covenants? Have you ever found yourself wondering: "How am I supposed to respect and honor or even keep my covenants when I don't even really know what they are"? Let me introduce Covenant Companion, a website that allows you to learn about your covenants through conveniently compiled references, track your effort and progress in keeping them over time, and connect with others who are trying to do the same thing by sharing ideas and keeping each other accountable for setting and accomplishing goals.


### Design
A concept sketch of the "Info" tab
![Not Loading?](https://github.com/ReppinJesusChrist/startup/blob/main/CC_Sketch_1.png "Sketch #1")

A concept sketch of the "Login" tab
![Not Loading?](https://github.com/ReppinJesusChrist/startup/blob/main/CC_Sketch_2.png "Sketch #2")

[TODO: find/redraw these concept sketches] (I accidentally deleted the files on my computer so the links don't work anymore)

### Key Features
* An info page with links to resources both from scripture and the words of modern prophets to provide information about the nature and details of each of the core covenants offered in the Church of Jesus Christ of Latter-Day Saints
* Ability to set personalized goals based on effort
* Parter system which allows each user to see the goals of other at least one other user and provide encouragement
* A point/currency system to reward users for the completion of goals
* A "Social" section in which users can publicly share specific ideas about manageable ways to keep specific covenants or share personal experiences with keeping covenants and seeing the blessings of doing so
* (_Maybe_) A leaderboard to see how your efforts compare to those of others (Might encourage a kind of competition I don't want)
* (_Maybe_) A store to buy things with the points/currency earned from completing goals (Could be too work intensive to be practical, we'll see as the semester goes on)

   
### Technologies
* **HTML** - At least 5 different html pages: Login, Info, Goals/Tracking, Accountability, Social. Maybe a couple more. Also allows for links to external resources in the "Info" section     
* **CSS** - Bright appealing color design, proper formatting on different screen sizes
* **JavaScript** - Used for login, input and interaction for choosing settings and setting specs for goals, and backend calls 
* **Service** - Backend service with endpoints for:
  * Login
  * Submitting goals
  * Marking goals as complete
  * Retrieving and displaying the goals of other users
  * Retrieving and displaying advice and experiences from other users 
* **DB** - Store users, goals, current point/currency balances, and submitted ideas/experiences in database 
* **Login** - Rgister and login users. Credetioals securely stored in database. Can't engage with other users at all (accountability, making goals public, sharing advice/experiences) unless authenticated
* **WebSocket** - Setting and completion of goals are broadcast to accountability partner/group, advice and experiences are broadcast to all users. Currency might also be broadcast if I decide to do a leaderboard
* **React** - Application will be ported to use the React framework

## HTML Deliverable
### Overview
For this deliverable I made (most of) the skeleton of my website
### Rubric
* **HTML pages** - Five HTML pages (3 fleshed out, 2 placeholders) that represent the home page, a login page, the page for setting goals, the page for accountability and tracking (unfinished), and the page for social interaction (unfinished)
* **Links** - Each page links to every other page. There are also external links from the info page to other websites
* **Text** - Info page contains a lot of description, all other pages have guidance and informational text
* **Images** - I actually do know how to do images but I waited until way too late to start this so I haven't added any yet. There will eventually be a picture by each of the covenant descriptions on the info page
* **Login** - Text input boxes for username and password with buttons for "login" and "register"
* **Database** - The goals in the "personal goals" section will be pulled from the database, as will the completion status and date
* **WebSocket** - I didn't include this yet. It will occur under the accountability tab as a real-time indication of whether your partner has completed their goals, as well as encouraging messages sent from your team. It will also occur on the social page as a blog-style list of advice and testimonials from other users that show up in real-time as they are written and posted 

## CSS deliverable
### Overview
For this deliverable I finished the HTML skeleton for the last two pages on my site (because I didn't get to those for the last one). I also converted all of the previous HTML to use bootstrap and added basic CSS styling to all of it which made it look a lot better!
### Rubric
* **Header, footer, and main content body** - I actually tried to manually style these with CSS but decided that I liked the default bootstrap look much more than what I was able to come up with. I'll probably adjust this again before the end but I wanted to clarify that not manually styling the header and footer was a conscious choice
* **Navigation elements** - I dropped the underlines and changed the color for anchor elements.
* **Responsive to window resizing** - My app looks great on all window sizes and devices. This was accomplished with a combination of bootstrap and manually implementing flex using CSS
* **Application elements** - I used good contrast and seperated most elements. I still want to do a little more polishing on this, but it's definitely passable right now
* **Application text content** - I imported a font and used it consistently throughout the website
* **Application images** - I added an image (because I also missed that in my last deliverable) and used basic bootstrap styling to make it adjust with the window

## JavaScript deliverable
### Overview
For this deliverable I used js to add basic functionality to the site, as well as laying the framework for storing and accessing data in the future. I also did a lot of cleaning up and expanding of the previous deliverables to make the site look nicer.
### Rubric
* **Mocked Database Input** - This is not done yet. It will be implemented on the goals page, on which new goals that are set will be stored in the database based on the information filled out in the field when the "set goal" button is pushed
*  **Username Display** - The username is read in from the login page, stored in local memory, and displayed at the top of each page. It is unique for each user of the site
*  **Mocked Database DOM** - This is not done yet. It will be completed by collecting the input data from the goals out of localmemory and inserting it one <tr> at a time into the table at the bottom of the page. It will also show up on the social page, on which previous comments and advice from other users over the long-term will be visible
*  **LocalStorage** - I use localstorage in several places throughout the code and intend to add it a couple more places. I also use sessionstorage for one variable.
*  **Realtime Data** - This isn't done yet. It will be implemented by using exactly the same visuals that are already on the "Social" page, with the slight change that they will be set to a timer.
*  **Login Security** - This wasn't actually on the list, but I spent a lot of time on it and I'm happy with how it turned out so I'm including it here. There is fronted security based on the login form. All pages besides "info", and "login" will be greyed out and unclickable in the main menu until the user logs in. It seems like a small thing and it will probably become obsolete soon enough but I learned a lot about JS by implementing it and put a lot of work into it.


## Service Deliverable
### Overview
For this deliverable I used Node.js and Express to create a basic HTTP service for my website. This uses middleware to serve up my frontend files on a local network port, and uses endpoints to store, fetch, and modify the goals set by the user
### Rubric
* **Frontend served up using express static middleware** - Done! The provided code from the Simon example was a huge help with this.
* **Your frontend calls third party service endpoints** - I implemented this by calling the same image api used by Simon. I still don't fully understand how the formatting works for imported images and I realized that my knowledge of CSS and formatting isn't as solid as I thought it was so the formatting looks really bad. Nevertheless, I do actually call a third party API and the image loads successfully (ugly though it looks)
* **Your backend provides service endpoints** I added three endpoints, all for /api/goals:
   1. A POST to add a new goal to the stored list
   2. A GET to fetch and return the list of goals as a JSON array
   3. A PUT to update a goal in the stored list. Right now this is only used to mark a goal as complete, but I figured out how to add addtiional items to the request body, so it wouldn't be hard to add additional functionality to this endpoint based on additional parameters if that would be useful in the future.
* **Your frontend calls your service endpoints** All of my endpoint calls are implemented using the fetch function. The endpoints are used on the goals page to implement the goal-setting, goal completion, and goal displaying (in a table) functionality of that page
* **Multiple Git commits with meaningful comments** - I did a much better job on this deliverable than ever before. I'm actually starting to understand and apreciate the functionality of Git now, which makes it much easier to commit more frequently and at more natural breakpoints because it seems less arbitrary to me now
### Other notes
I did a lot of retroactive work and fixing for past deliverables (html, css, and js). The details of those fixes are included in the comments for my Git Commits along the way


## DataBase Deliverable
### Overview
For this deliverable I created an account on MongoDB Atlas, linked it to my startup project, and created endpoints to store, retrieve and modify goals persistently using the database instead of just using localStorage
### Rubric
* **MongoDB Atlas database created** - Done! I think techically I actually have 3 databases: One called "rental" for the example, one called "simon" for the simon-db submission, and the one for my own startup. They're just all in my same cluster.
* **Provides backend endpoints for manipulating application data** - As mentioned above, I have modified three backend endpoints to access my database. These are:
   1. Modified POST to add a new goal to the DB
   2. Modified GET to return a given number of goals from the DB. (I'm trying to figure out how to use the endpoint URL to dynamically select how many to return, but for now I just use a constant that's shared between files)
   3. Modified PUT to find and modify a goal in the DB by ID to mark it as complete when the checkbox is selected in the table. I'm actually really proud of this feature. It was tricky to get working and it ties together basically every unit in the class except CSS in one way or another which is really cool.
* **Stores application data in MongoDB** - It feels like this overlaps a lot with the previous rubric item. All of the endpoints mentioned above work as intended and there are currently test goals stored in the Database which I created and marked as complete using the UI on my website so I think that fulfills this requirement. 
* **Multiple Git commits with meaningful comments** - It's only been 2-3 days since the last deliverable so there haven't been that many commits just because this deliverable didn't take that much work. I think there were at least a couple though, and I tried to make the comments meaningful.
### Other Notes
Like I said above, this one didn't take that long so there wasn't much time for retroactive work. I think I did some cleanup of previous code in goals.js as I came across inefficient or deprecated functions, and test code that I'd forgotten to remove from before but that's about it


## Login Deliverable
### Overview
For this deliverable I expanded on my earlier implementation of security from the JavaScript deliverable. This involved polishing and debugging the frontend functions I already had, as well as linking these to new backend service calls and introducing backend security using secureApiRouter
### Rubric
* **Supports new user registration** - There is a check box on the login page which allows a user to indicate that they are registering a new account. This functionality works as intended.
* **Supports existing user authentication** - If that box is not checked, the same form submit button uses the provided email and password to make a login request instead of a registration request. This also works as intended.
* **Stores and retrieves credentials in MongoDB** - The registration function stores the user email as a new database entry unless the email matches one that's already associated with an existing user, in which case it rejects the request. Attempts to login are also verified using encrypted passwords and auth tokens, both of which are stored in the database.
* **Restricts application functionality based upon authentication** - This is done on both the frontend and the backend:
   * **Frontend** - In the dropdown menu, all pages which shouldn't be accessible without logging in are greyed out and unclickable. As soon as the user logs in successfully these links become operable. The links also remain unlocked if the page is closed and reopened, as long as the user remains signed-in
   * **Backend** - All pages that aren't supposed to be accessible without logging in have a function that runs automatically when the page is loaded which verifies that the current user in in the database and is properly authenticated. If this isn't true it alerts the user that they aren't allowed to be on that site, tells them to login, and automatically redirects them to the login page. Additionally, I implemented the same backend security used in the simon example, which uses a secureApiRouter to block any endpoint requests coming from unauthorized users. 
* **Multiple Git commits with meaningful comments** - I noticed that more official git repositories use special syntax (add(), modify(), etc.) to label their commits. I haven't figured out how that works exactly yet, but I've started trying to use a similar format in some of my commit comments recently. Maybe I'll look that up before the next deliverable. We'll see.

### Other Notes
The only feature that's relevant to this deliverable that I didn't implement is storing goals as an array associated with the user that created them. It isn't included on the rubric which is why I'm submitting now instead of waiting until I finish adding it, but it does seem like a very important part of the functionality of my website so I'll try hard to add it soon. (Who knows, maybe if I have time it'll be added by the time you grade this. Only time will tell)  


## Websocket Deliverable
### Overview
For this deliverable I added support for realtime communication between users on the backend of my website and used it on the frontend to create a chat feature in the Social tab to allow users to interact with each other in real time.
### Rubric
* Backend listens for WebSocket connection: Done!
* Frontend makes WebSocket connection: This is done (and announced to the user) when they open the social tab
* Data sent over WebSocket connection: This is done through the messages sent by users in the chat window
* WebSocket data displayed in the application interface: This is done in the chat window on the Social Page by displaying the messages of other users
### Other Notes
There are at least two features that I know I want to add relative to this deliverable but haven't:
1. Real-time notifications to other users when someone logs in, logs out, or completes a goal
2. A chat log to store the past ~20 messages and display them to anyone who joins the chat so there's some persistant log of activity and people can communicate somewhat without having to be logged-on while the other person is chatting

There is also a bug that I know of, where the site says that users are logged in between sessions but doesn't actually allow them access much of the site unless they log out and then back in again.

[Link to notes file](notes.md)
