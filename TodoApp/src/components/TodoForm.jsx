import React from 'react'
import TaskBox from './TaskBox';


function TodoForm({taskName = "", onTaskNameChange, error="", addTask}) {
    return (
        <form
            className="task-form flex gap-2 items-start pb-5"
            onSubmit={(e) => {
                e.preventDefault();
                addTask();
            }}
        >
            <div className="w-full text-left">
                <TaskBox
                    taskName={taskName}
                    onTaskNameChange={onTaskNameChange}
                />
                {error && (
                    <p className="error-msg mt-1 text-sm text-red-500">{error}</p>
                )}
            </div>
            <button
                type="submit"
                className="h-10.5 px-4 py-2 rounded-xs bg-white text-black text-sm hover:bg-white/80 cursor-pointer"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm