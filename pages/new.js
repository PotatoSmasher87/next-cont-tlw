import { useState } from 'react'
import Layout from '../components/Layout'
import {useTasks} from '../context/taskContext'

const TaskFormPage = () => {


  const [task, setTask] = useState({

    title: '',
    description:''
})

  const handleChange = e => {
    setTask({...task,[e.target.name]: e.target.value})
    console.log(e.target.value)
    console.log(e.target.name)
  }

  const {createTask} = useTasks()

  const handleSumit = e => {
    e.preventDefault()
    console.log(task)
    createTask(task.title,task.description)
  }


  return (

    <Layout>

      <form onSubmit={handleSumit}>
      <h1>Add a task</h1>
        <input 
        type='text'
        name='title' 
        placeholder='Write a title' 
        className='bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5'
        onChange={handleChange}
        />
        
        <textarea 
        rows='2'
        name='description' 
        placeholder='Write a description' 
        className='bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5'
        onChange={handleChange}
        ></textarea>

        <button className='bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30' disabled={!task.title}>
          Save
        </button>

      </form>

    </Layout>
    
  )
}

export default TaskFormPage