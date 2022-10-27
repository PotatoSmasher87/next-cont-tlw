
import {useTasks} from '../context/taskContext'
import {useContext} from 'react'
import Layout from '../components/Layout'

const Home = () => {

  const {tasks} = useTasks()  

  console.log(tasks)

  return (
    <Layout>
      <>
        <div className='my-5'>
          <p className='font-semibold'>Últimas operaciones</p>
        <hr/>
        </div>

        <div className='bg-white w-full my-2 rounded-md border-1 drop-shadow-2xl flex-col items-center'>
          <div>

          <p className='text-sm text-left px-3 pb-2 pt-5 text-gray-400 font-semibold'>CARNET PLUS</p>
          </div>
          
          <div className='text-black text-base px-3 w-full font-semibold flex justify-between items-center pb-6'>
          <p className='text-left'>ALFREDO ANDRES RUSSO</p>
          <p className='text-right'>$24,500</p>
        </div>

        </div>
        

      </>
    </Layout>
    
  )
}

export default Home
