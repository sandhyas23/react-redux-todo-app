import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodos, markAllCompleted } from '../redux/actions';

function FilterButton() {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    const handleFilter = (filter) => {
        dispatch(filterTodos(filter))
    }

  return (
    <div className='flex items-center m-2'>
        <select 
           value={currentFilter}
           onChange={(e) => handleFilter(e.target.value)}
           className=' flex rounded-md  border p-2 border-gray-300 focus:outline-none' >
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
            
        </select>

        <button onClick={() => dispatch(markAllCompleted())} className='flex ml-2 px-1 py-2 text-sm bg-purple-400 rounded-md'>
            Mark All Completed</button>
    </div>
  )
}

export default FilterButton