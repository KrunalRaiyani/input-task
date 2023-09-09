import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context'
import Input from './Input'
import Table from './Table'

const InputContainer = () => {

    const context = useContext(AppContext)
    let { itemArr } = context

    const [flag, setFlag] = useState(false)

    return (
        <div className='d-flex flex-column align-items-center gap-4'>
            {
                itemArr.map((e) => {
                    return <Input key={e.id} id={e.id} />
                })
            }
    <button className='btn btn-success w-25 p-2' onClick={() => setFlag(true) }>Submit</button>
            {flag&&<Table/>}
        </div>
    )
}

export default InputContainer