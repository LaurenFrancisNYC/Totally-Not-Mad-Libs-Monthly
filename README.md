# Deployment URL
monthly-mad-libs.surge.sh

# Totally-Not-Mad-Libs-Monthly

Totally Not Mad Libs Monthly (TNMLM) is a React and Airtable build that will present users with a montly mad lib style prompt, in which they can submit responses that they deem the funniest. They can see the responses of other users, and press a 'like' button on the other responses. There is also a "Hall of Fame" page where the previous prompts can be seen, along with the response that earned the most likes. 

# Wire Frames

The wireframes below depict the homepage, entry page, and hall of fame page feed for TNMLM in web and phone format. The homepage contains a header displaying the app title and three clickable icons - add submission, view subbmission for the current month, and view the Hall of Fame- that route to each respective page. 

![](https://i.ibb.co/V29sBw0/WF1.png)
![](https://i.ibb.co/F8kzVyr/WF2.png)
![](https://i.ibb.co/zVZ6VM0/WF3.png)
![](https://i.ibb.co/F75rMmW/WF4.png)
![](https://i.ibb.co/vxJ2qfg/WF5.png)

# Component Hierarchy

![](https://i.ibb.co/m6xgBny/map.png)

# API and Data Sample

Before posting to the API, the user's responses will be concatenated with the prompt and uploaded as a complete string.  

https://airtable.com/shr94SbP4LAbUtL50


![](https://i.ibb.co/G9PfhQ0/Screen-Shot-2021-02-16-at-11-03-49.png)

#MVP/PostMVP

MVP
- A prompt for each month of the year, with the app getting the current month and displaying the appropriate prompt.
- The ability for a user to createe a response to the prompt, posting to the API.
- The ability for a user to see the responses of other users to that month's prompt.
- The ability for a user to like the posts of other users. 
- The ability for a user to see the most liked response(s) for the other 11 months of the year. 

PostMVP 
- The ability to give a single special award to their top favorite post of the month, equal to 10 likes.
- Weekly, rather than monthly prompts.
- Whiping out the likes and responses after 2021.

# Project Schedule

Day	|Deliverable|	Status
------------ | ------------- | ------------- 
Feb 16	|Proposal Approval / Airtable Setup	|incomplete
Feb 17	|Component Creation / Get, Set Data	|incomplete
Feb 18	|"Hall of Fame" page / CSS Components	|incomplete
Feb 19	|CSS Components cont'd / MVP	|incomplete
Feb 20	|Advanced CSS	|incomplete
Feb 21	|Presentations	|incomplete


# Timeframes

Component | Priority | Estimated Time | Time Invested | Actual Time
------------ | ------------- | ------------- | ------------- | -------------
Proposal	|H	|3hrs	|3hrs	|3hrs
Airtable setup	|H	|	1hrs	|.5hrs	|.5hrs
Data population |H	|	3hrs|	2hrs	|2hrs
Date gathering |H	|	 3hrs|	3hrs| 3hrs
General JS writing |H|	 3hrs |7hrs |7hrs
Form creation	|H	|	3hrs	|4hrs	|4hrs
Like button creation |M|	 3hrs	|4hrs	|4hrs
Hall of Fame page creation |M|		3hrs|	6hrs	|6hrs
Links and Routes	|H	|3hrs|	1hrs	|1hrs
Buttons |H|	 2hrs| 2hrs|	2hrs
CSS general style |	H|5hrs |	5hrs	|5hrs
CSS animations|L|	 2hrs| 4hrs|	4hrs
Bug testing|L	 |2hrs |1hrs	|1hrs
Total	||		36hrs|	41.5hrs|	41.5 hrs


# SWOT Analysis
Strengths:
I have a solid idea how I'll structure my items - each API post will have a tag applied based on the month response it is attached to, along with how many likes it has recieved. I believe I can use JS's ability to to get the current date to figure out which prompt to display. This was a tough idea to parse out initially! 

Weaknesses:
React as a whole is still a bit blurry for me - I'm confident I can make this work, but planning it without getting my hands on VSCode is a bit hard to do.

Opportunities:
I hope this will give me a much better grasp on React as a whole, and the general best practices of where and how compoenents are laid out. Again, I'm not foreign to it, but it is hard to visualize not during the act.

Threats:
I don't want to bite off more than I can chew. I am a bit unsure how to get the 'like' button to work without causing full page refreshes, but I have a backup plan of a 'submit votes' button if need be. 

