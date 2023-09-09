import React from 'react'

const ResultTable = (props) => {
    console.log(props)
    return (  
                <tr>
                    <th scope="row">{props.no}</th>
                    <td  className='w-100 ps-4'> {props.value}</td>
                </tr>
    )
}

export default ResultTable