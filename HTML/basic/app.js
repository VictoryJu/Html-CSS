let heading = document.querySelector("h1")
let audio = new Audio("./assets/audios/kimbug.mp3")
heading.addEventListener("click", function(event) {
  audio.play()
  if (this.active) {
    this.style.color = "#000"
  } else {
    this.style.color = "#fff"
  }
  this.active = !this.active
})

heading.active = true