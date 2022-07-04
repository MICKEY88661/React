import React, { useEffect, useState } from 'react'

function Clock() {
    const [currentTime, setfirst] = useState<Date>(new Date());

    useEffect(() => {
        setInterval(() => setfirst(new Date()), 1000);
    }, [])

    return (
        <div className='flex justify-center'>
            <p className='floating'>{currentTime.toLocaleString()}</p>
        </div>
    )
}

export default Clock