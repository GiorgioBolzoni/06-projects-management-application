export default function NewTask(){

    return (
        <>
            <div className="flex items-center gap-4">
                <input type="text" className="w-64 bg-stone-200 rounded border-black border-2 px-2 py-1" />
                <button htmlFor="Task" className="text-stone-700 font-semibold hover:text-green-600">Add Task</button>
            </div>
            <p className="text-stone-800 my-4">This projects does not have any tasks yet</p>

        </>
    )
}