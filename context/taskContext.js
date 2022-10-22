import {createContext,useContext,useState} from 'react'

export const TaskContext = createContext({});

export const useTasks = () => useContext(TaskContext)

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState([
        {id: '1',title: 'first task',description:'some task' }
    ]);

    const createTask = (title,description) => {
        // setTasks([...tasks,{title,description,id:'2'}])
        setTasks([...tasks,{title,description,id:(!tasks.length)?'1':tasks.length+1}])
    }


    return (
        <TaskContext.Provider value={{tasks, createTask}}>
            {children}
        </TaskContext.Provider>
    )
}