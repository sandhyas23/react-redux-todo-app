import React, { useState } from 'react'
import {BsPlus} from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/actions';
import FilterButton from './FilterButton';

function Todo() {
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddTodo = () =>{
        if(newTodoText.trim() !== ""){
            dispatch(addTodo(newTodoText.trim()));
        }
        setNewTodoText("");
       
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value))

    }

  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded '>
        <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>
            personal todo app
        </h2>

        {/* Add todo and button */}

        <div className='flex'>
            <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder='Add Todo'
            className=' p-2 border-b-2 border-gray-300   rounded w-full focus:outline-none focus:border-green-500 ' />
            <button className=' bg-blue-500 ml-4 p-2 rounded text-white hover:bg-blue-600'
                 onClick={handleAddTodo}>
              <BsPlus/>
            </button>
        </div>
        
        {/* filter and search */}
        <div className='flex m-2'>
            <FilterButton/>
            <div className='flex flex-1 w-full justify-end items-end '>
                <input type="text" placeholder="Search" className='p-2 rounded focus:outline-none border focus:border-blue-300 '
                  value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)}/>
                  <button type='submit' hidden />
            </div>
        </div>
    </div>
  )
}

export default Todo