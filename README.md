# Pre-work - *memoRISE!*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Vladyslav Petrenko**

Time spent: **5** hours spent in total

Link to project: https://husky-righteous-burrito.glitch.me 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) have been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn


## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src="memoRISE.gif" width=250><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 


* https://stackoverflow.com/questions/33451683/pen-highlighter-effect-in-css (pen highlighter effect in CSS)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 


* One challenge I have faced was related to the additional buttons for the game and the decision of the random pattern size as a result of 
those changes. It was difficult for me to find the most suitable threshold so that an average player is still capable of winning the game. 
The problem was solved by the method of trial and error. Given that the average person can remember approximately 7 digits with a deviation
of 2-3 digits, I decided that the pattern of size 10 will be ideal for the game. Moreover, this is the length of our phone numbers 
(excluding the country code), so the game might be directly used as a tool to practice phone number memorization. Suppose the random 
assignment mechanism produces a uniform distribution of digits for each round. Given this assumption, 5 buttons representing different 
colors will be sufficient because each color has a chance of appearing twice in a digit sequence. I think this is enough to keep a 
player interested in trying the game out. There is a low probability of someone losing interest because the game is too easy or too hard. 
Moreover, this suggestion works for the decreasing clueHoldTime variable, which does not affect the user perception of color and sound 
because, in the worst-case scenario (during the last turn), it speeds up only by 0.1 seconds.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 


* One question that came to my mind in the final stage of the project development was related to finding ways to check
if the game operates appropriately given different conditions. For instance, I was wondering what kind of procedures
are used to test the game performance. In the context of this task, the players did not have choices to make. Does 
it mean that the game's satisfactory performance on one device is sufficient to claim that everything is running as
expected? I also had a few questions about UI and UX. In case there are constraints (e.g., time) present during the 
development process, should there be a tradeoff between UI quality and performance? Does the answer depend on specific 
factors (if so, which ones)? How can we ensure that UI enhances UX?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 


* There are multiple ways to improve the existing project. For instance, we can define a "pause" button that can pause the game at any moment without players losing their progress. This might be helpful for 
specific market segments (e.g., kids that need to write down the colors in the correct order of appearance on the screen). The feature might also help users who would like to improve their spaced practice
skills. They can do so by looking at the sequence of colors and then returning to the game in 5-10 minutes and checking if they still remember the sequence. 

* Playing chords from famous songs (e.g., chorus part) is another suggestion on how to improve the product. This will keep the players engaged with the game even if they have already won it once. In this case, 
the main challenge is to create a database of songs on the backend, randomly choose a song before the game start and play some part of it (e.g., 5 seconds) for every pressed button. As a result, the users 
should hear 50 seconds of the song if they reach the final round of the game, given that there are 10 elements in the pattern. 

* Representing attempts visually is one more way to improve the game UI. For instance, we can define each attempt as a cross in the upper right corner of the webpage. If a user makes a mistake, one cross should
disappear. Additionally, we can add a specific error sound to the algorithm so that users hear it when they have chosen the wrong button. 




## License

    Copyright [Vladyslav Petrenko]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
