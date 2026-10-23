import React from 'react'
import { useId } from 'react'

function TaskBox({taskName="", onTaskNameChange}){
    
    const taskId = useId()

    return(
        <div className="w-full flex flex-wrap justify-start">
            <input 
                id={taskId}
                type="text" 
                placeholder='Enter a task'
                value={taskName}
                className='w-full border border-gray-600 rounded-xs px-3 py-2 focus:outline-1 focus:outline-neutral-600'
                onChange={(e) => onTaskNameChange && onTaskNameChange(e.target.value) }
            />
            
        </div>
    )
}

export default TaskBox