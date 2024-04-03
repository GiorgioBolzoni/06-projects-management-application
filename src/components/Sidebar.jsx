import Button from "./Button";
export default function Sidebar({onStartAddProject, projects}){

    return(
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
                <Button onClick={onStartAddProject}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Project
                </Button>
                <ul className="mt-8">
                    
                        {projects.map(project => <li key={project.id}><button  className=" w-full text-left border-2 rounded px-4 font-semibold cursor-pointer py-2 border-stone-400 text-stone-400 hover:bg-stone-700 hover:text-stone-200 hover:border-transparent my-1">{project.title}</button></li>)}
                    
                </ul>
            </aside>
        </>
    )
}