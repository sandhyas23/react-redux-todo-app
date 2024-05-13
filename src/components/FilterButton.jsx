import React from 'react'

function FilterButton() {
  return (
    <div className='flex items-centerm-2'>
        <select className=' flex rounded-md  border p-2 border-gray-300 focus:outline-none' >
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
            
        </select>

        <button className='flex ml-2 p-2 text-sm bg-purple-400 rounded-md'>
            Mark All Completed</button>
    </div>
  )
}

export default FilterButton