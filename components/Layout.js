import {AiOutlinePlus} from 'react-icons/ai'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTasks} from '../context/taskContext'

const Layout = ({children}) => {

    const router = useRouter()
    const {tasks} = useTasks()

  return (
   // <div className='h-screen bg-gradient-to-b from-red-600 text-white'>
    <div className='h-screen bg-gradient-to-b from-red-600 via-red-400 to-white text-white'>
        <header className='flex items-center bg-gray-800 px-28 py-5'>
        <Link href="/">
        <a>
        <h1 className='font-black text-lg'>Task App</h1>
        </a>
        </Link>

        <span className='ml-2 text-gray-400 font-bold'>
          {tasks.length} Tasks
        </span>

        <div className='flex-grow text-right'>
            <button className='bg-green-500 hover:bg-green-400 px-2 py-3 font-bold rounded-sm inline-flex items-center' onClick={() => router.push('/new')}>
                <AiOutlinePlus className='mr-2'/>
                add task
            </button>
        </div>
        </header>
        <hr/>

        <main className='m-6'>
        {children}
        </main>
        
    </div>
  )
}

export default Layout