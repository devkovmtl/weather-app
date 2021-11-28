import './styles/index.css'
import { APIID, INITIAL_CITY } from './constant'
const loadingSpinnerContainer = document.querySelector(
  '.loading-spinner-container'
)
const mainContainer = document.querySelector('.main-container')
const searchForm = document.querySelector('.search-form')
// const searchFormInput = document.querySelector('.search-form-input')
// const searchFormSubmit = document.querySelector('.search-form-submit')
const locationTitle = document.querySelector('.location-title')
const locationDate = document.querySelector('.location-date')
const locationTime = document.querySelector('.location-time')
const locationTemperature = document.querySelector('.location-temperature')
const changeTemperature = document.querySelector('.change-temperature')
const feelLike = document.querySelector('.feel_like')
const windSpeed = document.querySelector('.wind_speed')
const moreHumidity = document.querySelector('.more_humidity')
const moreInfoContainer = document.querySelector('.more-info-container')
const cardMoreInfo = document.querySelector('.card-more-info')
const colWeekDayContainer = document.querySelector('.col-week-day-container')
const colDayCard = document.querySelector('.col-day-card')

let lastCity = INITIAL_CITY

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
      console.log(data)
      const {
        main: { temp, feels_like, humidity },
        wind: { speed },
        sys: { country },
        name,
        coord: { lat, lon },
      } = data
      lastCity = `${name}`
      locationTitle.textContent = `${name}, ${country}`
      locationDate.textContent = `${new Date().toLocaleString().split(',')[0]}`
      locationTime.textContent = `${new Date().toLocaleString().split(',')[1]}`
      locationTemperature.textContent = `${temp} ℃`
      feelLike.textContent = `${feels_like} ℃`
      windSpeed.textContent = `${speed} km/h`
      moreHumidity.textContent = `${humidity} %`

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minute&units=metric&appid=${APIID}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => console.log(err))
    })
    .catch((error) => {
      console.log(error)
    })

  searchForm.reset()
}

searchForm.addEventListener('submit', submitSearchForm)
