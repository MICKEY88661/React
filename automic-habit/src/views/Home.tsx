import React from 'react'
import Clock from '../components/Clock'
import NewTodoForm from '../components/NewTodoForm';
import Todos from '../components/Todos';

const Home = () => {
    return (
        <div className='h-screen px-16 py-2'>
            <Clock />
            <div className='flex'>
                <h2 className="floating">Add todo:</h2>
            </div>
            <NewTodoForm />
            <div className='flex'>
                <h2 className="floating">Todo list:</h2>
            </div>
            <Todos />
        </div>
    )
}

export default Home