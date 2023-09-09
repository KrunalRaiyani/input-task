import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import ResultTable from './ResultTable'

const Table = () => {

    const context = useContext(AppContext)
    let {itemArr} = context
console.log(itemArr)
  return (
            <table className="table table-hover">
                <thead className='table-primary'>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col" className='w-100 ps-4'>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemArr.map((e, i) => {
                            return <ResultTable key={e.id} value={e.value } no={i} />
                        })
                    }
                </tbody>
            </table>
  )
}

export default Table