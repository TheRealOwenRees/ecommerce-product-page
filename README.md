# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./src/assets/screenshot.png)

### Links

- [Source Code](https://github.com/TheRealOwenRees/ecommerce-product-page)
- [Live Demo](https://your-live-site-url.com)

## My process

### Built with

- SCSS
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

For this project I did not have access to the Figma files, so my solution is an approximation of the supplied design images.
I tried not to rely on 3rd party libraries for this project, aiming to code everything myself as an exercise in doing so.

My process was as follows:
- Add the colour scheme to SCSS variables
- Create a grid layout for mobile
- Replicate the design
- Add functionality and logic to the buttons / components
- Expand upon the initial mobile design by adding grid rows for larger screens, and rearranging the layout

### What I learned

- An increased understanding of CSS positioning - relative / absolute etc.
- Understanding that replicating a website design without the correct design files is rather difficult!
- Utilising array functions in a real world application:
```js
  const imageThumbnails = () => {
    return imageData.map((image, i) => {
      return (
              <img
                      className="thumbnail"
                      src={image.thumbnail}
                      onClick={() => setImageNumber(i)}
              />
      );
    });
};
```
