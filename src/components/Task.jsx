import NewTask from "./NewTask"
export default function Task(){

    return (
        <section className="w-dvw pb-10 mb-10">
            <h2 className="text-2xl font-bold text-stone-600 mb-4">
                Tasks
            </h2>
            <NewTask />
            <ul>
                
            </ul>
            
        </section>
    )
}