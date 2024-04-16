import React from 'react'

const Filters = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-100 w-full px-4 py-2 mt-4 whitespace-nowrap gap-4 overflow-auto">
        <div className='cursor-pointer text-md text-gray-500'>Roofing</div>
        <div className='cursor-pointer text-md text-gray-500'>Sliding</div>
        <div className='cursor-pointer text-md text-gray-500'>Soffits</div>
        <div className='cursor-pointer text-md text-gray-500'>Screws</div>
        <div className='cursor-pointer text-md text-gray-500'>Accessoiries</div>
        <div className='cursor-pointer text-md text-gray-500'>Flat Sheets &amp; Rolls</div>
        <div className='cursor-pointer text-md text-gray-500'>Sliding Doors</div>
        <div className='cursor-pointer text-md text-gray-500'>Steel Decking</div>
    </div>
  )
}

export default Filters
