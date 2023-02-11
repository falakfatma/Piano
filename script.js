document.addEventListener('keydown', (e) => {
  console.log(e.keyCode + ":" + e.key)
  soundPlay(e)
})
function soundPlay(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  let keys = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if(!audio)return;
  audio.play()
  keys.classList.add("playing")
  // console.log(keys)
}
document.addEventListener('keyup', (e) => {
  let keys = document.querySelector(`div[data-key="${e.keyCode}"]`)
  keys.classList.remove("playing")
})