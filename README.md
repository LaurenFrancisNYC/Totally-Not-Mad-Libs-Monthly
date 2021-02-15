# Totally-Not-Mad-Libs-Monthly

Totally Not Mad Libs Monthly (TNMLM) is a React and Airtable build that will present users with a montly mad lib style prompt, in which they can submit responses that they deem the funniest. They can see the responses of other uses, and press a 'like' button on the other responses. Each month, the response(s) with the most likes are added to a "Hall of Fame" page, where each month's prompt and the most liked response can be viewed.

#Wire Frames

The wireframes below depict the homepage, entry page, and hall of fame page feed for TNMLM in web and phone format. The homepage contains a header displaying the app title and three clickable icons - add submission, view subbmission for the current month, and view the Hall of Fame- that route to each respective page. The review feeds contain an input form and submit button for review data. Below the form is a feed of all past forms, along with a delete button for each post. The screens will center as screen size decreases.

ADD WIRE FRAMES

#Component Hierarchy

ADD THIS TOO

#API and Data Sample

ALSO ADD THIS

#MVP/PostMVP

MVP
- A prompt for each month of year, with the app getting the current month and displaying the appropriate prompt.
- The ability for a user a response to the prompt, posting to the API.
- The ability for a user to see the responses of other users to that month's prompt.
- The ability for a user to like the posts of other users. 
- The ability for a user to see the most liked response(s) for the other 11 months of the year. 

PostMVP 
- The ability to give a single special award to their top favorite post of the month, equal to 10 likes.
- Weekly, rather than monthly prompts.

Project Schedule
Day	Deliverable	Status

Timeframes
Component	Priority	Estimated Time	Time Invested	Actual Time
Proposal	H	2hrs	2hrs	2hrs
Airtable setup	H	.5hrs	1hr	1hr
Clickable icons	H	1hrs	1hr	1hr
Data population pg 1	H	3hrs	3hrs	3hrs
Data population pg 2	H	3hrs	2hrs	2hrs
Data population pg 3	H	3hrs	2hrs	2hrs
Form creation pg 1	H	2hrs	2hrs	2hrs
Form creation pg 2	H	2hrs	1 hr	1 hr
Form creation pg 3	H	2hrs	1 hr	1hr
Data creation/update pg 1	H	3hrs	3hrs	3hrs
Data creation/update pg 2	H	3hrs	1hr	1hr
Data creation/update pg 3	H	3hrs	1hr	1hr
Data deletion pg 1	H	2hrs	1hr	1hr
Data deletion pg 2	H	2hrs	1hr	1hr
Data deletion pg 3	H	2hrs	1hr	1hr
Component CSS pg 1	H	3hrs	4hrs	4hrs
Component CSS pg 2	H	3hrs	4hrs	4hrs
Component CSS pg 3	H	3hrs	4hrs	4hrs
Total	H	42.5hrs	35hrs	35hrs


SWOT Analysis
Strengths:
I have a solid idea how I'll structure my items - a primary entry for each month, with arrays to keep track of responses and likes. I believe I can use JS's ability to to get the current date to figure out which prompt to display. This was a tough idea to parse out initially! 

Weaknesses:
React as a whole is still a bit blurry for me - I'm confident I can make this work, but planning it without getting my hands on VSCode is a bit hard to do.

Opportunities:
I hope this will give me a much better grasp on React as a whole, and the general best practices of where and how compoenents are laid out. Again, I'm not foreign to it, but it is hard to visualize not during the act.

Threats:
I don't want to bite off more than I can chew. I am a bit unsure how to get the 'like' button to work without causing refreshes, but I have a backup plan of a 'submit votes' button if need be. 

