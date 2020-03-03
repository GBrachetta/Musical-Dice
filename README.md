
# [**THE MUSICAL DICE**](https://gbrachetta.github.io/Musical-Dice/)

![Original Edition](assets/images/readme/mozart-game-small.png)

# TABLE OF CONTENTS

1. [The Idea](#idea)
   - [The Original Idea](#idea)
   - [My Idea](#my-idea)

2. [UX](#UX)

   - [User Stories](#user-stories)
   - [Design](#design)
     - [Framework](#framework)
     - [Colour Palette](#colour-palette)
     - [Fonts](#fonts)
     - [Responsivity](#responsivity)
   - [Wireframes](#wireframes)

3. [Features](#features)
   - [Features in use](#features)
   - [To be implemented](#to-be-implemented)

4. [Technologies used](#technologies-used)
   - [Front-End Technologies](#front-end-technologies)
   - [Other Technologies Used](#other-technologies-used)

5. [Testing](#testing)
   - [Validators](#validators)
   - [Compatibility](#compatibility)
   - [Known Issues](#known-issues)

6. [Deployment](#deployment)
   - [Local Deployment](#local-deployment)
   - [Remote Deployment](#remote-deployment)

7. [Credits](#credits)
   - [Content](#content)
   - [Media](#media)
   - [Code](#code)
   - [Acknowledgements](#acknowledgements)

***

# **THE MUSICAL DICE**

<a name="idea"></a>

# The Original Idea

## Historical Background

A *Musikalisches Würfelspiel* (German for "musical dice game") was a system for using dice to randomly 'generate' music from precomposed options. These 'games' were quite popular throughout Western Europe in the 18th century. Several different games were devised, some that did not require dice, but merely 'choosing a random number.'

The way these games work may be understood in analogy to sentence construction.

| n   | A         | B      | C       | D          |
| --- | --------- | ------ | ------- | ---------- |
| 1   | The cow   | ran    | past    | the field. |
| 2   | The pig   | walked | through | the yard.  |
| 3   | The sheep | ran    | into    | the marsh. |

One rolls one die for each word and selects the word from the appropriate column according to the number. Thus if one rolls 2 3 1 3 one is given, "*The pig ran past the marsh.*" Each progression is essentially the same, there may be more or less choices for different slots, and the choices offered for each slot are slight variations rather than being entirely different.

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
- read clear instructions on how play the game.
- have clear and quick feedback from the app on clicks by mouse, trackpad and tapps.
- have a clear visual understanding on how the randomisation works and what sound is currently playing.
- be able to fully interact with all the buttons without having to go to a different button to stop a sound.
- enjoy the sound of music while combined with mathematical functions.
- be surprised and amused by unexpected musical turn of random music generation.

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
It purposedly has a modern approach in order to stress the difference with the aesthetics of the 18th century and thus emphasise the novel approach for the app.

![Color](assets/images/readme/palette.png)

<a name="fonts"></a>

### Fonts

I chose Montserrat as the only font for its excellent legibility in small sizes, due to the fact that a lot of text had to be contained in a limited space, specially in the music grid.
I also didn't want that the choice of a more ornamental font, or multiple fonts, could as a result deviate the attention from the more important elements of the app.

<a name="responsivity"></a>

### Responsivity

This website is fully responsive in all sizes and devices, and making the main music grid reactive and legible in small devices was a challenge which was sorted thanks to a combination of factors: Bootstrap's elasticity, clarity of the font family, clear styling highlighting events and discrete use of colors.

<a name="wireframes"></a>

## Wireframes

![Index.html](wireframes/index.png)


***
<a name="features"></a>

# FEATURES

## Features in Use

### Music Player

- The app alows to play music in different ways, by listening to complete music files, small fragments and (most importantly) random arrays composed from those small fragments.

### Wide selection of options

- From listening to defined MP3 files to letting the user choose which pieces to include or exclude from the game.

### Visual feedback

- The app always gives clear feedback about what is being played and how to interact with it.

<a name="to-be-implemented"></a>

## To be implemented

- The possibility to let the user download the resulting randomised piece of music.
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
- ![test](https://img.shields.io/static/v1?label=Howler.js&message=AudioLibrary&color=green&logo=emailjs) email.js: to send emails through my contact form.

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

- CSS
  - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
  - [CSS Lint](http://csslint.net/)

- JavaScript
  - [JSHint](https://jshint.com/)

<a name="compatibility"></a>

## Compatibility

<a name="known-issues"></a>

## Known Issues

<a name="deployment"></a>

***

# DEPLOYMENT

<a name="local-deployment"></a>

## Local

<a name="remote-deployment"></a>

## Remote

<a name="credits"></a>

***

# CREDITS

<a name="content"></a>

## Content

<a name="media"></a>

## Media

<a name="code"></a>

## Code

<a name="acknowledgements"></a>

## Acknowledgements

***

#### Back to [top](#top)