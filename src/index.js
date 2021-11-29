import './styles/index.css'
import { APIID } from './constant'

import { updateMainTempUI, updateDaysContainer } from './ui'
const mainLoadingSpinner = document.querySelector('.main-loading-spinner')
const mainContainer = document.querySelector('.main-container')
const searchForm = document.querySelector('.search-form')
const colWeekDayContainer = document.querySelector('.col-week-day-container')
// const searchFormInput = document.querySelector('.search-form-input')
// const searchFormSubmit = document.querySelector('.search-form-submit')

// const changeTemperature = document.querySelector('.change-temperature')

// const moreInfoContainer = document.querySelector('.more-info-container')
// const cardMoreInfo = document.querySelector('.card-more-info')
// const colDayCard = document.querySelector('.col-day-card')

function geoSuccess(position) {
  const { latitude, longitude } = position.coords
  let lat = latitude
  let lon = longitude

  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minute&units=metric&appid=${APIID}`
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)

      const {
        timezone,
        current: { feels_like, humidity, wind_speed, temp, dt },
      } = data

      updateMainTempUI(timezone, '', dt, temp, feels_like, wind_speed, humidity)
      updateDaysContainer(data.daily)

      mainLoadingSpinner.classList.add('hidden')
      mainContainer.classList.remove('hidden')
    })
    .catch((err) => {
      // console.log(err)
    })
}

function geoError() {
  mainLoadingSpinner.classList.add('hidden')
  mainContainer.classList.remove('hidden')
  colWeekDayContainer.innerHTML = ``
  alert('Sorry, no position available.')
}

function submitSearchForm(e) {
  e.preventDefault()
  const location = searchForm.querySelector('[name=location]').value

  if (!location) {
    window.alert('Please enter a location')
    return
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIID}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === '404') {
        alert(data.message)
        return
      }
      // console.log(data)
      const {
        main: { temp, feels_like, humidity },
        dt,
        wind: { speed },
        sys: { country },
        name,
        coord: { lat, lon },
      } = data

      updateMainTempUI(name, country, dt, temp, feels_like, speed, humidity)

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minute&units=metric&appid=${APIID}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          updateDaysContainer(data.daily)
        })
        .catch((err) => {
          // console.log(err)
        })
    })
    .catch((error) => {
      // console.log(error)
    })

  searchForm.reset()
}

searchForm.addEventListener('submit', submitSearchForm)

// changeTemperature.addEventListener('click', (e) => {
//   alert('Change F')
// })

navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
