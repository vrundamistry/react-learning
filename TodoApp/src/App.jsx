import { useState } from 'react'
import {TaskBox, TodoForm, TodoList} from './components/'

function App() {

  const [taskName, setTaskName] = useState("")
  const [taskList, setTaskList] = useState([])
  const [error, setError] = useState("")

  const remainingCount = taskList.filter((task) => !task.completed).length


  // add task to array of object
  const addTask = () => {

    if (!taskName.trim()) { 
      setError("Please Enter Task"); 
      return;    
    }

    // clear error
    setError("")

    // calculate the new ID (1 if list is empty, otherwise last item's ID + 1)
    const taskId = (taskList.length > 0) ? taskList[taskList.length - 1].id + 1 : 1;

    const newTask = {
      id: taskId,
      name: taskName,
      completed: false
    }

    setTaskList((prev) => [...prev, newTask]);
    setTaskName(""); // Clear the input box after adding

    console.log("task: ",[...taskList, newTask])

  }

  // on check of task-item from task-list mark it completed
  const handletoggleComplete = (taskId) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    )   
  }

  // delete task from list
  function handleDeleteList(taskId){
    setTaskList(taskList.filter((task) => task.id != taskId ))
  }

  // edit task
  function handleEditTask(taskId, taskNewName){
    setTaskList((prev) =>
      prev.map((task) => 
        task.id === taskId
          ? { ...task, name: taskNewName }
          : task
      )
    )
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center text-white">
        <div className="w-full max-w-7xl mx-auto px-4 ">
          <h1 className="text-2xl my-8 text-center">My Todo App</h1>
          <div className="w-full max-w-xl mx-auto p-4 border border-gray-800 rounded backdrop-blur-sm">

            {/* <form 
              className='task-form flex gap-2 items-start pb-5' 
              onSubmit={(e) => {
                e.preventDefault();
                addTask()
              }}
            >
              <div className="w-full text-left">
                <TaskBox 
                  taskName={taskName}
                  onTaskNameChange={(taskName) => setTaskName(taskName)}
                  error={error} 
                />
                {error && <p className="error-msg mt-1 text-sm text-red-500">{error}</p>}
              </div>
              <button type="submit" className='h-[46px] px-4 py-2 rounded-xs bg-white text-black text-sm hover:bg-white/80 cursor-pointer'>Add</button>
            </form> */}

            <TodoForm
              taskName={taskName}
              onTaskNameChange={setTaskName}
              error={error}
              addTask={addTask}
            />

            <hr className="border-gray-800" />

            <div className="w-full pt-2.5">
              <TodoList 
                taskList={taskList}
                onCheckboxChange={handletoggleComplete}
                handleDelete={handleDeleteList}
                remainingCount={remainingCount}
                onEditTask={handleEditTask}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
