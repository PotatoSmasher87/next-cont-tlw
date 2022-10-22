
import {useTasks} from '../context/taskContext'
import {useContext} from 'react'
import Layout from '../components/Layout'

const Home = () => {

  const {tasks} = useTasks()  

  console.log(tasks)

  return (
    <Layout>
      <div>Home</div>
    </Layout>
    
  )
}

export default Home
