import {forwardRef} from 'react';  

const Input = forwardRef (function Input ({label, textarea, ...props}, ref){
    const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'

    return(
        <div className="flex flex-col gap-1 my-4">
            <form action=""  className="mt-4 text-right">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
                {textarea ? 
                <textarea ref={ref} {...props}  className={classes}></textarea> 
                : 
                <input ref={ref} className={classes} type="text" {...props}
                />}
            </form>
        </div>
    )
});

export default Input;