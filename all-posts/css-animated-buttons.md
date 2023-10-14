---
title: Improving Website Performance with Lazy Loading Images
excerpt: One effective way to optimize your website is by implementing lazy loading for images.
date: October 13, 2023
tags: 
- CSS
- Performance
coverImage: 'test.gif'
---

In today's fast-paced digital world, website performance is crucial. One effective way to optimize your website is by implementing lazy loading for images. Lazy loading ensures that images are only loaded when they are visible to the user, reducing initial page load times and saving bandwidth. In this post, we'll explore how to implement lazy loading in your web project.

## What is Lazy Loading?

Lazy loading is a technique that defers the loading of non-critical resources, such as images, until they are needed. Instead of loading all images when the page loads, images are loaded as the user scrolls down the page. This can significantly improve the initial load time and user experience.

## Implementing Lazy Loading

To implement lazy loading, follow these steps:

### Step 1: Add the HTML Markup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lazy Loading Images</title>
</head>
<body>
  <h1>Welcome to Our Website</h1>
  <img data-src="image.jpg" alt="Lazy Loaded Image">
  <!-- Add more images with data-src attribute -->
  
  <script src="lazyload.js"></script>
</body>
</html>
```


```javascript
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = document.querySelectorAll("img[data-src]");

  lazyImages.forEach(function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function() {
      img.removeAttribute("data-src");
    };
  });
});
