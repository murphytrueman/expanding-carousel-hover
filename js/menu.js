const toggleTag = document.querySelector("a.toggle")
const mainTag = document.querySelector("main")

toggleTag.addEventListener("click", function() {
  mainTag.classList.toggle("open")
  if(mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="images/close.svg">close`
  } else {
    toggleTag.innerHTML = `<img src="images/menu.svg">menu`
  }
}) 