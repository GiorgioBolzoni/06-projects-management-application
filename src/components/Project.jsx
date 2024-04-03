// import Input from "./Input"
export default function Project({project, onDeleteProject}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });


    return(
            <div className="w-[35rem] mt-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex justify-between items-center">
                        <h1 className="text-stone-800 mb-4 text-5xl font-bold uppercase">{project.title}</h1>
                        <button onClick={onDeleteProject} className="text-stone-600 hover:text-red-600">Delete</button>
                    </div>
                
                
                    <p className="text-stone-400 mb-4">
                    {formattedDate}
                    </p>
                    <p className="text-stone-600 whitespace-pre-wrap">
                        {project.description}
                    </p>
                </header>

                <div className="w-dvw pb-10 mb-10">
                    <h3 className="text-4xl font-bold text-stone-600">
                        Tasks
                    </h3>
                    {/* <div className="my-8 flex gap-4">
                        <input type="text" className="bg-stone-200 rounded border-black border-2 px-2 py-1 w-2/6" />
                        <button htmlFor="Task" className="hover:text-red-500">Add Task</button>
                    </div>
                    <div className="my-8 flex">
                        <textarea name="textarea" id="textarea" cols="30" rows="4" className="bg-stone-200 rounded-s border-black border-r-0 border-2 px-2 py-1 w-3/6"></textarea>
                        <button htmlFor="Task" className="bg-stone-200 rounded border-black border-l-0 border-2 rounded-r px-2 hover:bg-stone-300">Clear</button>
                    </div> */}
                </div>
            </div>
    )
}