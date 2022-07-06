import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr';

function NewTodoForm() {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");

    function enterTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    };

    function enterContent(e: React.ChangeEvent<HTMLInputElement>) {
        setContent(e.target.value);
    };

    function newTodo() {
        alert(title + content);
    };

    return (
        <form className='flex flex-col' action="">
            <div className="flex py-1 px-2 sm:px-8 md:px-36 lg:px-64">
                <h2 className="floating">Title:</h2>
                <div className='grow'></div>
                <input className='floating' type="text" name='todoTitle' onChange={enterTitle} />
            </div>
            <div className="flex py-1 px-2 sm:px-8 md:px-36 lg:px-64">
                <h2 className="floating">Content:</h2>
                <div className='grow'></div>
                <input className='floating' type="text" name='todoContent' onChange={enterContent} />
            </div>
            <div className="flex py-1 justify-center">
                <button className="border-x-4 border-black floating" onClick={newTodo}>
                    <GrAdd />
                </button>
            </div>
        </form>
    )
}

export default NewTodoForm