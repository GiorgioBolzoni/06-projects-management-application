import Task from "./Task";
export default function Project({project, onDeleteProject, onAddTask, onDeleteTask, tasks}) {

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
                        <button onClick={onDeleteProject} className="text-stone-600 font-semibold hover:text-red-600">Delete</button>
                    </div>
                
                
                    <p className="text-stone-400 mb-4">
                    {formattedDate}
                    </p>
                    <p className="text-stone-600 whitespace-pre-wrap">
                        {project.description}
                    </p>
                </header>

                <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
            </div>
    )
}