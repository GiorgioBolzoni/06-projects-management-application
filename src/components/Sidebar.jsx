import Button from "./Button";
export default function Sidebar({onStartAddProject}){

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
                    <li><em>Projects added here</em></li>
                </ul>
            </aside>
        </>
    )
}