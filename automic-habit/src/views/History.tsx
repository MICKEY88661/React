import React from 'react'

function History() {
    let history: string[][] = [["h1", "h2", "h3",], ["h4", "h5",], ["h6", "h7", "h7", "h7", "h7", "h7", "h7",]];

    return (
        <ol className='px-8 py-2'>
            {
                history.map(
                    (todos, index) => {
                        return (
                            <div key={"todos" + index} className='relative'>
                                <div className='sticky top-0'>
                                    <li className='flex'>
                                        <h3 className='floating'>
                                            Date: {index}
                                        </h3>
                                    </li>
                                </div>
                                {
                                    todos.map(
                                        (todo, i) => {
                                            return (
                                                <li key={"todo" + i} className='card mx-24 my-2'>
                                                    {todo}
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </div>
                        )
                    }
                )
            }
        </ol>
    )
}

export default History