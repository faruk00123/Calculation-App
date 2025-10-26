import React from 'react'

const Fahadf = ({fahrenheit, handleFahrenheitChange}) => {
  return (
    <div className='mb-4'>
      <label className='block font-semibold'>Fahrenheit:</label>
      <input  className='border hover:border-b-amber-600 rounded p-2 w-full' value={fahrenheit} onChange={(e) => handleFahrenheitChange(e.target.value)} type="text" name="fah" id="fah" placeholder='32° F'/>
    </div>
  )
}

export default Fahadf