import { convertTime } from './utils'
import { INITIAL_CITY } from './constant'
let lastCity = INITIAL_CITY

const locationTitle = document.querySelector('.location-title')
const locationDate = document.querySelector('.location-date')
const locationTime = document.querySelector('.location-time')

const locationTemperature = document.querySelector('.location-temperature')
const feelLikeElement = document.querySelector('.feel_like')
const windSpeed = document.querySelector('.wind_speed')
const moreHumidity = document.querySelector('.more_humidity')

const colWeekDayContainer = document.querySelector('.col-week-day-container')

function updateMainTempUI(
  name,
  country,
  timestamp,
  temp,
  feelLike,
  speed,
  humidity
) {
  lastCity = `${name}`
  locationTitle.textContent = `${name} ${country.length ? ',' : ''} ${country}`
  locationDate.textContent = `${convertTime(timestamp).date}`
  locationTime.textContent = `${convertTime(timestamp).time}`
  locationTemperature.textContent = `${temp} ℃`
  feelLikeElement.textContent = `${feelLike} ℃`
  windSpeed.textContent = `${speed} km/h`
  moreHumidity.textContent = `${humidity} %`
}

function updateDaysContainer(days = []) {
  colWeekDayContainer.innerHTML = ``
  colWeekDayContainer.innerHTML = days.map((day, index) => {
    // feels_like.day, temp.day
    // console.log(day)
    const { dt, feels_like, humidity, temp, wind_speed } = day
    return `
      <div class="
      col-day-card 
      flex 
      items-center 
      border-2 
      border-white 
      bg-white 
      bg-opacity-10 
      text-white
      px-5
      py-2
      rounded-md
      max-w-xs
      mx-auto
    "
  >
    <p class="flex-1 font-medium uppercase">${convertTime(dt).date}</p>
    <div class="mx-8 flex flex-col items-end">
      <p>${temp.day} ℃</p>
      <p class="font-thin">Feels: ${feels_like.day} ℃</p>
    </div>
    <span>🌤</span>
  </div>
    `
  })
}

export { updateMainTempUI, updateDaysContainer }
