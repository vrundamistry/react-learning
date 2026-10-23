import React, { useState } from "react";

function TodoList({ taskList, onCheckboxChange, handleDelete, remainingCount, onEditTask }) {

    const [editTaskId, setEditTaskId] = useState(null)
    const [editName, setEditName] = useState("")

    // call on click of edit task button click
    const handleEdit = (task) => {
        setEditTaskId(task.id)
        setEditName(task.name)
    }

    // save edited task
    const handleSave = (taskId) => {
        //alert(!editName.trim())
        if(!editName.trim()){
            return;
        }

        onEditTask(taskId, editName.trim())
        setEditName("")
        setEditTaskId(null)
    }

    // cancel edit
    const handleCancel = () => {
        setEditName("")
        setEditTaskId(null)
    }

    return (

        <>
            {taskList.length === 0 ? (
                <p className="no-found text-sm">No task yet.</p>
            ) : (
                <>
                    <div className="list-wrap pb-4">
                        {taskList.map((task) => (
                            <div className="w-full flex justify-between gap-2 mb-2" key={task.id}>

                                {editTaskId == task.id ? (
                                    <>
                                        <div className="w-full flex flex-wrap justify-start">
                                            <input                                                 
                                                type="text" 
                                                placeholder='Update a task'
                                                value={editName}
                                                className='w-full border border-gray-600 rounded-xs px-3 py-2 focus:outline-1 focus:outline-neutral-600'
                                                onChange={(e) => setEditName(e.target.value) }
                                            />                                            
                                        </div>
                                        <div className="flex gap-1">
                                            <button
                                                type="button"
                                                className="cursor-pointer text-sm bg-gray-500 px-3 py-0 rounded-sm"
                                                onClick={() => handleSave(task.id)}>
                                                    Save
                                            </button>
                                            <button
                                                type="button"
                                                className="cursor-pointer text-sm bg-gray-500 px-3 py-0 rounded-sm"
                                                onClick={() => handleCancel()}>
                                                    Cancel
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <label className="w-auto flex items-baseline gap-1.5 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="w-3.5"
                                                checked={task.completed}
                                                onChange={(e) => onCheckboxChange(task.id)}
                                            />
                                            <span className={`${task.completed ? 'line-through text-gray-500':task}`}>{task.name}</span>
                                        </label>
                                        <div className="flex gap-1 h-fit">
                                            <button
                                                type="button"
                                                className="cursor-pointer text-sm bg-gray-500 px-3 py-0 rounded-sm"
                                                onClick={() => handleEdit(task)}>
                                                    Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="cursor-pointer bg-gray-500 px-3 py-0 rounded-sm"
                                                onClick={() => handleDelete(task.id)}>
                                                    x
                                            </button>
                                        </div>
                                    </>
                                )}

                            </div>
                        ))}
                    </div>
                    <div className="task-note">
                        <p className="text-sm text-gray-400">{remainingCount} tasks remaining</p>
                    </div>
                </>

            )}

        </>
    )
}

export default TodoList;
