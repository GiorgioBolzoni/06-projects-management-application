import { useState } from "react";

export default function NewTask({onAdd}){
    const [enteredTask, setEnteredTask ] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if (enteredTask.trim() === '') {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <>
            <div className="flex items-center gap-4">
                <input 
                type="text" 
                className="w-64 bg-stone-200 rounded border-black border-2 px-2 py-1"
                onChange={handleChange}
                value={enteredTask}
                />
                <button htmlFor="Task" onClick={handleClick} className="text-stone-700 font-semibold hover:text-green-600">Add Task</button>
            </div>

            {/* <div className="my-8 flex">
                <textarea name="textarea" id="textarea" cols="30" rows="4" className="bg-stone-200 rounded-s border-black border-r-0 border-2 px-2 py-1 w-3/6"></textarea>
                <button htmlFor="Task" className="bg-stone-200 rounded border-black border-l-0 border-2 rounded-r px-2 hover:bg-stone-300">Clear</button>
            </div> */}
        </>
    )
}