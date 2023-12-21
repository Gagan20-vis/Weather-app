# React Weather App

This is a simple weather application built with React that allows users to check the weather forecast for different locations using the OpenWeather API.

## Features

- **Current Weather**: Displays the current weather conditions for a specific location, including temperature, humidity, wind speed, and description.
- **5-Day Forecast**: Shows a 5-day forecast with details like temperature highs/lows and weather descriptions.
- **Search Functionality**: Users can search for weather information by city name.

## Technologies Used

- React: The frontend framework used to build the application.
- OpenWeather API: Used to fetch weather data for different locations.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create an account on [OpenWeather](https://openweathermap.org/api) to obtain an API key.

5. Create a `.env` file in the root directory and add your API key:

   ```bash
   REACT_APP_API_KEY=your_openweather_api_key
   ```

6. Start the application:

   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:5173`.

## Usage

- Enter the name of a city in the search bar to get the current weather and the 5-day forecast for that location.
- Explore different cities to check their weather conditions.

## Acknowledgements

- OpenWeather API for providing weather data.
- React community for the framework and its extensive resources.
