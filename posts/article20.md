---
title: "Drawing cartoon only with CSS"
date: "2023-08-03"
author: "ozan ocak"
tags: ["CSS", "HTML"]
subtitle: "CSS mastery..."
---

I wanted to draw some images for the mobile app I developed then I thought why not to do everything with HTML and CSS.
It really took long time,however doing this cumbersome task really thought me many new stuff. Giving background nice light effect was the first thing I was glad to to.

```css
.box {
  background: radial-gradient(farthest-side at 50% 20%, #0000 70%, #000 250%);
}
```

And keep in mind that transform perspective needs a transfor origin

```css
.table {
  transform-origin: 50% 100%;
  transform: perspective(300px) rotateX(45deg);
}
.chin {
  border-radius: 50% 0 50% 50%;
}
.mouth {
  border-radius: 50%;
  box-shadow: 0 -1.5vmin 0 -1vmin;
  transform: rotate(-4deg);
}
.ear,
.nose {
  border-left: 0.6vmin solid;
  border-top: 0.5vmin solid;
}
```

Giving different border radiuses, shadow effect and including/excluding border lines create bending effect.
You can find the full cartoon in the [link](https://www.oocak.com/comicswithcss)
