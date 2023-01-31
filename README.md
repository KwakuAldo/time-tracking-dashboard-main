# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building real projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](/Screenshots/Screenshot2023-01-20.png)
![](/Screenshots/screenshot-mobile.jpeg).

### Links

- Solution URL: [(https://www.frontendmentor.io/solutions/time-tracking-app-made-with-tailwindcss-and-javascript-mWIKoN_UAo)]
- Live Site URL: [(https://scintillating-swan-b3293f.netlify.app/)]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- tailwindcss
- Flexbox
- CSS Grid
- Desktop-first workflow
- JavaScript
- JSON

### What I learned

I am using CSS grid for the main layout, and then a little bit of flex for the smaller sections. The first challenge I faced was how to make the elements overlap each other like in the design, I achieved that with z-index and flex-column-reverse. then I had to make sure I got the height and width of the elements all right since I don't have access to the Figma/sketch design files. Next, I had to figure out how to place the icons to the right side and cut them off at the top and the bottom, I was able to do that by positioning them relatively and giving them top and left values, and setting the overflow to hidden in the parent element. It took some trial and error to get a uniform look for the icons as the sizes of the SVG images are different.
Mostly the layout for this was not hard to code. The only thing I regret is not going with a mobile-first approach, I struggled to build the mobile layout from the desktop design, and I think I will be going with a mobile-first approach on my next project.
My next challenge is how to get the data for the relevant time frames from the JSON file and then parse them into the respective element in the HTML.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
