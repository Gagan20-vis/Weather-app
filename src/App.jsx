import { useState } from 'react'

function App() {
  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  const [searchInput, setSearchInput] = useState('');
  const [weather, setWeather] = useState({});
  const api = {
    key: "1d12fcd35b24f013889a17a27ab2616c",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const search = async event => {
    if (event.key === "Enter") {
      console.log("Enter pressed!")
      const response = await fetch(`${api.base}weather?q=${searchInput}&units=metric&APPID=${api.key}`);
      const parsedData = await response.json();
      setWeather(parsedData);
      setSearchInput('');
    }
  }
  return (
    <div className={typeof weather.main != "undefined" ? ((weather.main.temp>16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className='search-bar'
            placeholder='Search...'
            value={searchInput}
            onChange={(e) => { setSearchInput(e.target.value) }}
            onKeyUp={search} />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather.main}</div>
            </div>
          </div>
        ) : (
          <div className="weather-box">
            <div className="weather" style={{ fontSize: "30px" }}>Search Your City</div>
          </div>
        )}

      </main>
    </div>
  )
}

export default App
