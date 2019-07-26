# Weather App
### trello board
https://trello.com/b/625C4IAO/weather-app
### deployment URL
 Placeholder
### Wireframe
https://balsamiq.cloud/stofa4k/p531wha

## Models
-------------
### User
  ```
    {
      id: ID!,
      username: String!,
      password: String!,
      cityList: [cityData],
      defaultRange: [int]
    }
  ```
### cityData
  ```
    {
      id: ID!,
      userId: ID!,
      range: [int]
    }
  ```
## tools
-------------
* Frontend
  * UI Library
    * React w/ hooks
      * Comfortable with using it
      * Great compatibility with Redux
      * Easy to get an application going
      
  * State management
    * Redux
      * Works well with React
      * Extracts logic from the component
      
  * Styling
    * Styled Components
      * Styling is simple and reusable
      * allows props to be passed
      * works with React Native if needed
      
  * data fetching 
     * axios
       * simple headers for user
        
* Backend
   * language
     * node
       * comfortable with using it
       * Easy to deploy
       * easy to set environment variables
      
  * Server
    * Express 
      * quick to get server running
      * Simple to use
      * easy to use middleware
      
  * Query Builder
    * Knex
      * Works well with PostgresQL
      * creates tables easily
      * can create seed data
      * Simple queries
      * production and development databases
      
      
* Database
  * PostgresQL
    * manage database directly in Heroku GUI
    * works well with Heroku
    

* Deployment
  * Frontend
    * Netlify
        * simple to deploy
        * free
        
  * Backend
    * Heroku
      * simple to deploy
      * free
      * works really well with node and env variables


## UI decisions
-------------
* Color Scheme
  * Darker Orange (#FF9F1C)
  * Lighter Orange (#FFBF69)
  * Lighter Blue (#CBF3F0)
  * Darker Blue (#0055AA)
  * White (#FFFFFF)

## Competitors 
 * [weather.com](https://weather.com/)
 * [accuWeather.com](https://www.accuweather.com/)
 * [weather.gov](https://www.weather.gov/)
## Functionality
-------------
### MVP

- [ ] A user can enter a city name, and a corresponding minimum and maximum desired
temperature.
- [ ] A user can enter as many cities and temperature ranges as they want.

- [ ] A user can see a list of their cities and the current temperature in each city.

- [ ] A user sees the cities where the current temperature is within their desired range automatically
appear at the the top of the list with a clear visual indicator (larger font, different color, or other
eye-catching appearance).

- [ ] A user can remove a city from the list or edit the temperature range of a city at any time.

### Stretch

- [ ] User can specify various weather properties (e.g. temperature range, precipitation, etc.)
to search for cities that match the weather they are looking for.

- [ ] User can see a list of notifications timestamped with the exact time the temperature in
one of their cities came within their desired range.

- [ ] Users get a login and password so they can log in and save their own city list
independently from other users.

- [ ] User can see a chart with each of their cities along the vertical axis and temperature
along the horizontal axis. For each city, it charts a horizontal bar showing the user's
desired temperature range and a dot showing the current temperature in that city.

- [ ] User can see a list of suggested cities and temperature range that they can click to add
to their list.

- [ ] Mobile App.

## day 1 goals:
  * setup boilerplate
  * Complete MVP functionality
  * Complete styling
## day 2 goals:
  * complete any unmet day 1 goals
  * build out backend 
  * create signup and login page
  * refactor app to fit in auth
  * implement graph 
## if way ahead:
  * create mobile app

