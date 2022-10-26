
import {useTasks} from '../context/taskContext'
import {useContext} from 'react'
import Layout from '../components/Layout'

const Home = () => {

  const {tasks} = useTasks()  

  console.log(tasks)

  return (
    <Layout>
      <>
        <div className=''>
          <p>Últimas operaciones</p>
        <hr/>
        </div>

        <div className='bg-white w-full my-6 rounded-md border-1 shadow-lg flex-col items-center'>
          <div>

          <p className='text-sm text-left text-gray-500 '>CARNET PLUS</p>
          </div>
          
          <div className='text-black text-base'>
          <p>ALFREDO ANDRES RUSSO</p>
          <p>$24,500</p>
        </div>

        </div>
        

      </>
    </Layout>
    
  )
}

export default Home
