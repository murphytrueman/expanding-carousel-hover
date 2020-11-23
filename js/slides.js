const slideArea = document.querySelector(".slides")
const images = slideArea.querySelectorAll("img")

let currentSlide = 0
let layer = 1

slideArea.addEventListener("click", function() {
  currentSlide += 1
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }
  layer += 1

  // remove the animation from the style for every image
  images.forEach(image => {
    image.style.animation = ""
  });

  images[currentSlide].style.zIndex = layer
  // apply the animation to all images
  images[currentSlide].style.animation = "fade 0.5s"
})


slideArea.addEventListener("mouseover", function() {
  images.forEach(image => {
    const x = 25 * (Math.floor(Math.random() * 5)) - 60
    const y = 25 * (Math.floor(Math.random() * 5)) - 60

    image.style.transform = `translate(${x}px, ${y}px)`
  });
})

slideArea.addEventListener("mouseout", function() {
  images.forEach(image => {
    image.style.transform = ""
  });
})

