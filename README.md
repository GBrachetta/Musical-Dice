
# [**THE MUSICAL DICE**](https://gbrachetta.github.io/Musical-Dice/)

![Original Edition](assets/images/readme/mozart-game-small.png)

# TABLE OF CONTENTS

1. [**The Idea**](#idea)
   - [**The Original Idea**](#idea)
   - [**My Idea**](#my-idea)

2. [**UX**](#UX)

   - [**User Stories**](#user-stories)
   - [**Design**](#design)
     - [**Framework**](#framework)
     - [**Colour Palette**](#colour-palette)
     - [**Fonts**](#fonts)
     - [**Responsivity**](#responsivity)
   - [**Wireframes**](#wireframes)

3. [**Features**](#features)
   - [**Features in use**](#features)
   - [**To be implemented**](#to-be-implemented)

4. [**Technologies used**](#technologies-used)
   - [**Front-End Technologies**](#front-end-technologies)
   - [**Other Technologies Used**](#other-technologies-used)

5. [**Testing**](#testing)
   - [**Validators**](#validators)
   - [**Manual Tests**](#manual-tests)
   - [**Compatibility**](#compatibility)
   - [**Known Issues**](#known-issues)

6. [**Deployment**](#deployment)
   - [**Local Deployment**](#local-deployment)
   - [**Remote Deployment**](#remote-deployment)

7. [**Credits**](#credits)
   - [**Content**](#content)
   - [**Media**](#media)
   - [**Code**](#code)
   - [**Acknowledgements**](#acknowledgements)

***

# **THE MUSICAL DICE**

<a name="idea"></a>

# The Original Idea

## Historical Background

A *Musikalisches Würfelspiel* (German for "musical dice game") was a system that used dice to randomly 'generate' music from precomposed options. These 'games' were quite popular throughout Western Europe in the 18th century. Several different games were devised, some that did not require dice, but merely 'choosing a random number.'

The way these games work may be understood in analogy to sentence construction.

| n   | A         | B      | C       | D          |
| --- | --------- | ------ | ------- | ---------- |
| 1   | The cow   | ran    | past    | the field. |
| 2   | The pig   | walked | through | the yard.  |
| 3   | The sheep | ran    | into    | the marsh. |

A die is rolled for every column and the result of each roll determines which word in that column is used. For example, rolling 2,3,1,3 would give the expression "*The pig ran past the marsh*". Each progression is essentially the same, there may be more or less choices for different slots, and the choices offered for each slot are slight variations rather than being entirely different.

<a name="my-idea"></a>

## My Idea

- Fragments are 2 bars long rather than 1.
- All the music was composed by me.

![table](./assets/images/readme/table.png)

(Selected in blue an example of a possible outcome)

Any end of any of the columns works musically well with the beginning of the following column, so each throw of the dice will create a different piece of music every time (albeit harmonically similar).

<a name="UX"></a>

***

# UX

This project recreates the old game known in German as *Musikalisches Würfelspiel* in a modern and minimalistic way.

<a name="user-stories"></a>

## User Stories

"As a user, I would like to ____________ "

- have historical information about the origins of the game.
- read clear instructions on how to play the game.
- have clear and quick feedback from the app on clicks by mouse, trackpad and taps.
- have a clear visual understanding of how the randomisation works and what sound is currently playing.
- be able to fully interact with all the buttons without having to go to a different button to stop a sound.
- enjoy the sound of music combined with mathematical functions.
- be surprised and amused by the unexpected musical turns of random music generation.

<a name="design"></a>

## Design

Due to the large quantity of buttons needed to recreate the game, bootstrap has been used to guarantee responsiveness. 
Relative units were used throughout CSS rules to ensure the app would fit all scenarios while staying clearly legible.

<a name="framework"></a>

### Framework

Bootstrap was my framework of choice due to its felixibility in responsiveness.

<a name="colour-palette"></a>

### Color Palette

The Color Palette was chosen with complementary hues in mind for contrast and positive visual impact.
It has purposefully been given a modern design to contrast with the aesthetics of the 18th century as this emphasizes the novel approach for the app.

![Color](assets/images/readme/palette.png)

<a name="fonts"></a>

### Fonts

I chose Montserrat to be the only font in this project because of its excellent legibility in smaller font sizes. This was important where there space limitations for the text such as in the music grid.
I also didn't want that the choice of a more ornamental font, or multiple fonts, could as a result deviate the attention from the more important elements of the app.

<a name="responsivity"></a>

### Responsivity

This website is fully responsive to all sizes and devices. Making the main music grid reactive and legible in small devices was a challenge which was sorted thanks to a combination of factors: Bootstrap's elasticity, clarity of the font family, clear styling highlighting events and discrete use of colors.

<a name="wireframes"></a>

## Wireframes

![Index.html](wireframes/index.png)


***
<a name="features"></a>

# FEATURES

## Features in Use

### Music Player

- The app allows the user to sample the music in different ways, by listening to complete music files, small fragments and (most importantly) random arrays composed from those small fragments.

### Wide selection of options

- From listening to defined MP3 files to letting the user choose which pieces to include or exclude from the game.

### Visual feedback

- The app always gives clear feedback about what is being played and how to interact with it.

<a name="to-be-implemented"></a>

## To be implemented

- The possibility for the user to download the resulting randomised piece of music.
***
<a name="technologies-used"></a>

# TECHNOLOGIES USED

<a name="front-end-technologies"></a>

## Front-end Technologies

- ![test](https://img.shields.io/static/v1?label=HTML&message=5&color=red&logo=html5)  HTML5: Used for markup.
- ![test](https://img.shields.io/static/v1?label=CSS&message=3&color=blue&logo=css3) CSS3: Used in addition to Bootstrap to style the elements of the app.
- ![test](https://img.shields.io/static/v1?label=Bootstrap&message=4.4&color=blueviolet&logo=bootstrap) Bootstrap: to make use of its grid system and responsiveness.
- ![test](https://img.shields.io/static/v1?label=JavaScript&message=ES6&color=yellow&logo=javascript) JavaScript: Used for the functionality of the app.
- ![test](https://img.shields.io/static/v1?label=Howler.js&message=AudioLibrary&color=8b7355&logo=howler.js) Howler.js: used to access and deal with all audio elements in an efficient way, ensuring portability on all platforms.
- ![test](https://img.shields.io/static/v1?label=Emailjs&message=2.3.2&color=green&logo=emailjs) email.js: to send emails through my contact form.

<a name="other-technologies-used"></a>

## Other Technologies

- ![test](https://img.shields.io/static/v1?label=VSCode&message=1.42.1&color=informational&logo=visual-studio) Visual Studio Code: my IDE of choice for all my projects.
- ![test](https://img.shields.io/static/v1?label=GitHub&message=GBrachetta&color=black&logo=github)  GitHub: My remote storage for this project.
- ![test](https://img.shields.io/static/v1?label=Balsamiq&message=3.5.17&color=ff2800&logo=balsamiq) Balsamiq: to create the wireframes of this project.
- ![test](https://img.shields.io/static/v1?label=Audacity&message=2.3.3&color=0000ee&logo=audacity) Audacity: to trim, edit and manipulate all music files.


***
<a name="testing"></a>

# TESTING

<a name="validators"></a>

## Validators

- HTML
  - [W3C HTML Validator](https://validator.w3.org/)
    - No warnings or errors reported.

- CSS
  - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    - No errors found.
  - [CSS Lint](http://csslint.net/)
    - No errors found.

- JavaScript
  - [JSHint](https://jshint.com/)
    - No errors found.

<a name="manual-tests"></a>

## Manual Tests

Several manual tests were performed to ensure the best possible user experience.
This app is fully compatible with all browsers tested except the ones mentioned in the **Compatibility** section, in both desktop and mobile environments.
The following browsers were tested:

- Desktop
  - Chrome (v. 80.0.3987.132)
  - Firefox (v. 73.0.1)
  - Safari (v. 13.0.5)
  - Opera (v. 67.0.3575.53)
- Mobile
  - Safari
  - Chrome
  - Firefox

These were the manual tests performed:

- Navigating the page shouldn't reload the page
- There's never the necessity of pressing the back-button
- All external links open in a new tab
- Navigation works as expected, without reloading the page
- Pressing any of the music buttons has a purpose, and doing so stops any other or the current sound, except the buttons of the grid, which hace a length of 2 seconds and for which that's unnecessary.
- Scrolling is smooth accross all browsers.
- Modals open and close as expected.
- The floating button works correctly.
- The contact form has required fields and works correctly.
- Menu (when collapsed) after opening, it closes correctly on all browsers when clicking on a link or outside of it.
- Randomisation works smoothly.
- There are no console errors.
- There's no overflow.
- Meny spy works as expected.
- Navigation never breaks.
- Clicking on the logo brings to the top without reloading the page.
  
<a name="compatibility"></a>

## Compatibility

Internet Explorer is not compatible with the JavaScript used in this app. The problem has been handled by warning Internet Explorer users to choose another browser to ensure compatibility.
<a name="known-issues"></a>

## Known Issues

Besides not performing on Internet Explorer (see above), there are no known issues.

***
<a name="deployment"></a>

# DEPLOYMENT

<a name="local-deployment"></a>

## Local

This project can be ran locally by going to this [Repository link](https://github.com/GBrachetta/Musical-Dice) and clicking on the Clone or Download button and copying the link provided.

![image](assets/images/readme/cloning.png)

In your IDE, open a Terminal window and change to the directory where you want to clone this project and type Git clone "your copied link".

After pressing Enter the project will be created and cloned locally.

Alternatively you can download the zipped file, decompress it and use your IDE of choice to access it.

<a name="remote-deployment"></a>

## Remote

The live version of this website is hosted on GitHub Pages and will update as new commits occur.

The method used to deploy this website was as follows:

1. In GitHub, navigated to my repository.
2. Under my repository, clicked "Settings".
3. Under the "GitHub Pages" section, used the Source drop-down menu and selected a publishing source, in this case Master Branch .
4. The website was immediately published and a green tab appeared with a link to the live website.
5. The link obtained is the one displaying at the top of this document.


***
<a name="credits"></a>

# CREDITS

<a name="content"></a>

## Content

- [Mozart Dice Game](https://mozart.vician.cz/) served as trigger and inspiration to build a more dynamic and modern version of the game.

<a name="media"></a>

## Media

- All the music for this app was composed and edited by me.
- Logo designed after a die by me on Adobe Illustrator.

<a name="code"></a>

## Code

This app wouldn't have seen the light without the help of, amongst others:

- [Stack Overflow](https://stackoverflow.com/) #1 place to find answers of all kinds.
- [W3Schools](https://www.w3schools.com/) Another extremelly complete source of information.

All code that helped and was adapted to serve the purposes of this website has been properly marked as such in the comments.

<a name="acknowledgements"></a>

## Acknowledgements

- [Simen Dehlin](https://github.com/Eventyret), mentor and patient counselor.
- [Roko Buljan](https://github.com/rokobuljan), for his invaluable help and sympathy.
- [Tim Nelson](https://github.com/TravelTimN), for great help in several moments of the process.
- [Fran](https://github.com/fdeboo), for proofreading and being there making it all more enjoyable.

***

#### Back to [top](#top)