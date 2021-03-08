const photoSwitcher = document.getElementById('photo-switcher')
const buttonPrev = document.getElementById('prev-button')
const buttonNext = document.getElementById('next-button')
const informationSwitcher = document.getElementById('information-switcher')
const nameSwitcher = document.getElementById('name-switcher')
const jobSwitcher = document.getElementById('job-switcher')

const next = () => {
  photoSwitcher.classList.add('photo--next')
  informationSwitcher.classList.add('information--next')
  nameSwitcher.classList.add('name--next')
  jobSwitcher.classList.add('job--next')
}

const prev = () => {
  photoSwitcher.classList.remove('photo--next')
  informationSwitcher.classList.remove('information--next')
  nameSwitcher.classList.remove('name--next')
  jobSwitcher.classList.remove('job--next')
}

buttonPrev.addEventListener('click', e => {
  e.preventDefault();
  prev()
})

buttonNext.addEventListener('click', e => {
  e.preventDefault();
  next()
})

window.addEventListener('keyup', e => {
  switch (e.key){
    case "ArrowLeft": 
      prev();
      break;
    case "ArrowRight": 
      next();
      break;
  }
})