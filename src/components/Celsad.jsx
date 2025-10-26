import React from 'react'

const Celsad = ({celsius, handleCelsiusChange}) => {
  return (
    <div className='mb-4'>
      <label className='block font-semibold'>Celsius:</label>
      <input value={celsius} onChange={(e) => handleCelsiusChange(e.target.value)} type="number" name="cel" id="cel" placeholder='0° c' className='hover:border-b-amber-600 border rounded p-2 w-full'/>
    </div>
  )
}

export default Celsad