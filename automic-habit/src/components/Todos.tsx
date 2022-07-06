import React from 'react'
import { useNavigate } from 'react-router-dom'

function Todos() {
    let navigate = useNavigate();
    const todos = [1, 2, 3];
    return (
        <ul>
            {
                todos.map(
                    (index) => {
                        return (
                            <li key={"todo" + index} className='card mx-24 my-2'>
                                Todo{index}
                                <button onClick={() => { navigate("/detail/id"); }}>
                                    go
                                </button>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default Todos
