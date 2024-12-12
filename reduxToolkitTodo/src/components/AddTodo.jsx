import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleSubmission = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <div className="mb-6">
    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo</label>
    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={input} onChange={(e) => setInput(e.target.value)} />
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Todo</button>
</div>
      </form>
    </div>
  )
}

export default AddTodo
