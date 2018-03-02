# Planning

I've decided to start planning out before making future updates to this.

## CSS Refactoring

I want to follow the outside in practice listed here:

https://webdesign.tutsplus.com/articles/outside-in-ordering-css-properties-by-importance--cms-21685

```
The order I use is as follows:
Layout Properties (position, float, clear, display)
Box Model Properties (width, height, margin, padding)
Visual Properties (color, background, border, box-shadow)
Typography Properties (font-size, font-family, text-align, text-transform)
Misc Properties (cursor, overflow, z-index)
```

## Javascript Refactoring

I have this code for hiding the different screens, even though this is only temporary til I switch to a layout where you move between these without hiding them, I still wanna fix it.

```js
function showFirst() {
  typeFirstHeading()
  first.style.display = 'block'
  second.style.display = 'none'
  third.style.display = 'none'
}
function showSecond() {
  first.style.display = 'none'
  second.style.display = 'flex'
  third.style.display = 'none'
}
function showThird() {
  first.style.display = 'none'
  second.style.display = 'none'
  third.style.display = 'flex'
}
```

My plan is to make an array `[first, second, third]` and make a function show with parameter `function show(screen)` that will display the passed in screen and hide the others.
