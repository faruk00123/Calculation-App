
import { useState } from 'react'
import Celsad from './Celsad'
import Fahadf from './Fahadf'

const Tempe = () => {

    // const [celsius, setCelsius] = useState('');
    // const [fahrenheit, setFahrenheit] = useState('');

    const [temperature, setTemperature] = useState({
        celsius: '',
        fahrenheit: ''
    })

    // handle celsius change
    const handleCelsiusChange = (value) => {
        const celsiusa = parseFloat(value) || 0;
        const fahrenheita = (celsiusa * 9) / 5 + 32;
        setTemperature({
            celsiusa: value,
            fahrenheit: fahrenheita.toFixed(2)
        })
    }

    // handle fahrenheit change
    const handleFahrenheitChange = (value) =>{
          const fahrenheitb = parseFloat(value) || 0;
          const celsiusb = ((fahrenheitb - 32) * 5) / 9;
          setTemperature({
            fahrenheitb: value,
            celsius: celsiusb.toFixed(2)
          })
    }
  return (
    <div className='bg-white/6 p-4 rounded text-white/70 hover:shadow-2xl hover:shadow-emerald-300 transition-all delay-100 border-b border-b-red-500 border-r border-r-amber-500 border-t border-t-emerald-500 border-l border-l-fuchsia-500'>
        <h1 className='text-cyan-600 text-center hover:text-blue-600 font-semibold text-2xl pb-5'>Calculation App</h1>
        <Celsad celsius={temperature.celsius} handleCelsiusChange={handleCelsiusChange}/>
        <Fahadf fahrenheit={temperature.fahrenheit} handleFahrenheitChange={handleFahrenheitChange}/>
        <div>
          <h2 className='text-center text-fuchsia-400'>&copy;&isin;&empty; <span className='text-green-600'>OMAR</span></h2>
          <div>
            <ul className='flex justify-center items-center space-x-3 mt-2'>
              
              <li className='hover:scale-105 transition-all hover:shadow-lg px-1 rounded bg-black'><a href="https://www.facebook.com/share/1PGvQi47YP/?mibextid=wwXIfr" target='blank'><i class="fa-brands fa-facebook-f text-white"></i></a></li>
              <li className='hover:scale-105 transition-all hover:shadow-lg px-1 rounded bg-black'><a href="https://github.com/faruk00123"><i class="fa-brands fa-github text-white"></i></a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Tempe
