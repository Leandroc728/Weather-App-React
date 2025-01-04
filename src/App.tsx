
import WeatherMain from './Components/WeatherMain'

// App component, responsible for putting together the application

function App() {

  return (
    <div className='w-screen sm:h-screen sm:py-1 sm:px-2 lg:h-screen lg:flex lg:items-center lg:justify-center lg:py-6'>
      <WeatherMain  />
    </div>
  )
}

export default App
