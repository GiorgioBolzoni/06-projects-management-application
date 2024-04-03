import Input from "./Input"
export default function Project({}) {
    return(
        <section>
            <div className="border-b-2 border-stone-400 pb-10 mb-10">
                <div className="flex justify-between items-center">
                    <h1 className="my-8 text-center text-5xl font-bold">TASK TITLE</h1>
                    <button className="bg-stone-900 text-stone-50 rounded px-10 h-10 hover:bg-gradient-to-r from-blue-900 to-yellow-600">Delete</button>
                </div>
                
                <p className="text-stone-400 mb-4">
                    {}
                </p>
                <p>{}</p>
                <p className="mt-8">{}</p>
            </div>
            <div className="w-dvw pb-10 mb-10">
                <h3 className="text-4xl font-bold">
                    Tasks
                </h3>
                <div className="my-8 flex gap-4">
                    <input type="text" className="bg-stone-200 rounded border-black border-2 px-2 py-1 w-2/6" />
                    <button htmlFor="Task" className="hover:text-red-500">Add Task</button>
                </div>
                <div className="my-8 flex">
                    <textarea name="textarea" id="textarea" cols="30" rows="4" className="bg-stone-200 rounded-s border-black border-r-0 border-2 px-2 py-1 w-3/6"></textarea>
                    <button htmlFor="Task" className="bg-stone-200 rounded border-black border-l-0 border-2 rounded-r px-2 hover:bg-stone-300">Clear</button>
                </div>
            </div>
            
        </section>
    )
}