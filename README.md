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


[Link to notes file](notes.md)
