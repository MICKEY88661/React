import React from 'react'
import { GrAdd } from 'react-icons/gr';

function NewTodoForm() {
    return (
        <form className='grid grid-cols-9 gap-4 place-content-center' action="">
            <div className="col-start-3 flex ">
                <h2 className="floating">Title:</h2>
            </div>
            <input className='col-span-4 floating' type="text" />
            <div className="col-start-3 flex ">
                <h2 className="floating">Content:</h2>
            </div>
            <input className='col-span-4 floating' type="text" />
            <div className="col-start-5 flex justify-center">
                <button className="border-x-4 border-black floating"><GrAdd /></button>
            </div>
        </form>
    )
}

export default NewTodoForm