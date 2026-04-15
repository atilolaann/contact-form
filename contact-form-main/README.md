# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript


### What I learned

This challenge pushed me across all areas — CSS styling, form validation logic, and handling radio button and checkbox behaviour.

One of the key things I learned was how to use Array.from() with .some() to check if at least one radio button had been selected:
const isRadioChecked = Array.from(radioButtons).some(button => button.checked);

I also learned the difference between .some() and .forEach() — using .some() when I need a yes/no answer, and .forEach() when I need to perform an action on each element.

Another important lesson was understanding that the "submit" event belongs to the form, not the button — and why e.preventDefault() is necessary to stop the page from reloading on submission.

### Continued development

- Get more comfortable with advanced CSS custom styling for form elements like radio buttons and checkboxes
- Practice more complex form validation patterns
- Improve accessibility so forms work well for keyboard and screen reader users


## Author

- Frontend Mentor - [@atilolaann](https://www.frontendmentor.io/profile/atilolaann)
- GitHub - [@atilolaann](https://github.com/atilolaann)