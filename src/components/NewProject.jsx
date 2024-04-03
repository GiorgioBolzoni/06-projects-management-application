import { useRef } from 'react';
import Modal from './Modal';
import Input from './Input';

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef(); // Aggiungi un ref per la modale

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            // Mostra la modale di avviso se uno dei campi è vuoto
            modal.current.open(); // Apri la modale utilizzando il ref
            return;
        } 

        onAdd(
            {
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
            
        });
    }
    
    return (
        <>
            <Modal ref={modal} buttonCaption="Close" message="Please fill in all fields.">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className='text-stone-600 mb-4'>You have to fill every input data</p>
            </Modal>
            <div className="w-[40rem] mt-16">
            
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950 font-semibold">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 font-semibold">Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label='Title' />
                    <Input ref={description} label='Description' textarea />
                    <Input type="date" ref={dueDate} label='Due Date' /> 
                </div> 
            </div>
        </>
    );
}
