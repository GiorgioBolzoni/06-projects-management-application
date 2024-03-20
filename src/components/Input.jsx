export default function Input (){
    return(
        <div className="my-8 flex gap-4">
            <input type="text" className="bg-stone-200 rounded border-black border-2 px-2 py-1 w-2/6" />
            <button htmlFor="Task" className="hover:text-red-500">Add Task</button>
        </div>
    )
}
