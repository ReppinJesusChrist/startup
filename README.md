# Covenant Tracker
## Description Deliverable
### Elevator Pitch
Have you ever felt overwhelmed by all of the talk by general authorities in recent years about covenants? Have you ever found yourself wondering: "How am I supposed to respect and honor or even keep my covenants when I don't even really know what they are"? Let me introduce Covenant Companion, a website that allows you to learn about your covenants through conveniently compiled references, track your effort and progress in keeping them over time, and connect with others who are trying to do the same thing by sharing ideas and keeping each other accountable for setting and accomplishing goals.


### Design
A concept sketch of the "Info" tab
![Not Loading?](https://github.com/ReppinJesusChrist/startup/blob/main/CC_Sketch_1.png "Sketch #1")

A concept sketch of the "Login" tab
![Not Loading?](https://github.com/ReppinJesusChrist/startup/blob/main/CC_Sketch_2.png "Sketch #2")


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
For this deliverable I made (most of) the skeleton of my website

* HTML pages - Five HTML pages (3 fleshed out, 2 placeholders) that represent the home page, a login page, the page for setting goals, the page for accountability and tracking (unfinished), and the page for social interaction (unfinished)
* Links - Each page links to every other page. There are also external links from the info page to other websites
* Text - Info page contains a lot of description, all other pages have guidance and informational text
* Images - I actually do know how to do images but I waited until way too late to start this so I haven't added any yet. There will eventually be a picture by each of the covenant descriptions on the info page
* Login - Text input boxes for username and password with buttons for "login" and "register"
* Database - The goals in the "personal goals" section will be pulled from the database, as will the completion status and date
* WebSocket - I didn't include this yet. It will occur under the accountability tab as a real-time indication of whether your partner has completed their goals, as well as encouraging messages sent from your team. It will also occur on the social page as a blog-style list of advice and testimonials from other users that show up in real-time as they are written and posted 

## CSS deliverable
For this deliverable I finished the HTML skeleton for the last two pages on my site (because I didn't get to those for the last one). I also converted all of the previous HTML to use bootstrap and added basic CSS styling to all of it which made it look a lot better!

* **Header, footer, and main content body** - I actually tried to manually style these with CSS but decided that I liked the default bootstrap look much more than what I was able to come up with. I'll probably adjust this again before the end but I wanted to clarify that not manually styling the header and footer was a conscious choice
* **Navigation elements** - I dropped the underlines and changed the color for anchor elements.
* **Responsive to window resizing** - My app looks great on all window sizes and devices. This was accomplished with a combination of bootstrap and manually implementing flex using CSS
* **Application elements** - I used good contrast and seperated most elements. I still want to do a little more polishing on this, but it's definitely passable right now
* **Application text content** - I imported a font and used it consistently throughout the website
* **Application images** - I added an image (because I also missed that in my last deliverable) and used basic bootstrap styling to make it adjust with the window

## JavaScript deliverable
For this deliverable I used js to add basic functionality to the site, as well as laying the framework for storing and accessing data in the future. I also did a lot of cleaning up and expanding of the previous deliverables to make the site look nicer.

* **Mocked Database Input** - This is not done yet. It will be implemented on the goals page, on which new goals that are set will be stored in the database based on the information filled out in the field when the "set goal" button is pushed
*  **Username Display** - The username is read in from the login page, stored in local memory, and displayed at the top of each page. It is unique for each user of the site
*  **Mocked Database DOM** - This is not done yet. It will be completed by collecting the input data from the goals out of localmemory and inserting it one <tr> at a time into the table at the bottom of the page. It will also show up on the social page, on which previous comments and advice from other users over the long-term will be visible
*  **LocalStorage** - I use localstorage in several places throughout the code and intend to add it a couple more places. I also use sessionstorage for one variable.
*  **Realtime Data** - This isn't done yet. It will be implemented by using exactly the same visuals that are already on the "Social" page, with the slight change that they will be set to a timer.

[Link to notes file](notes.md)
